const path = require("path");
const express = require("express");
const jwt = require("jsonwebtoken");
const { base64encode } = require('nodejs-base64');
const cookieParser = require("cookie-parser");
const forge = require('node-forge');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cookieParser());

// Cifra los datos
/**** Estaba comentado ****/
/*
function encrypt(caden){
  var cipher = forge.cipher.createCipher('AES-CBC', process.env.KEY);
  cipher.start({iv: process.env.IV});
  cipher.update(forge.util.createBuffer(caden));
  cipher.finish();
  return forge.util.encode64(cipher.output.data);
}

// Descifra los datos
/**** Estaba comentado ****/
/*
function decrypt(encryptedString){
  const decipher = forge.cipher.createDecipher('AES-CBC', process.env.KEY);
  const decodedB64 = forge.util.decode64(encryptedString);
  decipher.start({ iv: process.env.IV });
  decipher.update(forge.util.createBuffer(decodedB64));
  decipher.finish();
  return decipher.output.data;
};
*/

function sendCloseActivity(codgame, token){
  console.log("Partida: " + codgame);
  console.log("Token: " + token);
}

function closeActivity(originalUrl,token){
  const pattern = /\/ranking\/\?cod=(\d{6})$/;
  const match = originalUrl.match(pattern);
  if (match != null){
    const codgame = match[1];
    //sendCloseActivity(codgame, token);
    return true;
  }else{
    return false;
  } 
}

function verifyLTIToken(req){
  const tokencipher = req.cookies.access_token;
  if (tokencipher){ 
    try{
      const token = decrypt(tokencipher);
      const { profile }  = jwt.verify(token, base64encode(process.env.SECRETORPRIVATEKEY));
      if ( profile == 'Instructor' ) {
        return token;
      }
      return undefined;
    }catch(error){
      return undefined; 
    }
  }
  return undefined;
}

function verifyOpenToken(req){
  const tokencipher = req.cookies.INDIE_USER;
  if (tokencipher){
    try{
      const token = decrypt(tokencipher);
      const tokenJSON = JSON.parse(token);
      const dataToken = jwt.verify(tokenJSON.access_token, base64encode(process.env.SECRETORPRIVATEKEY));
      return tokenJSON.access_token; 
    }catch(error){
      return undefined;
    }
  }
  return undefined;
}

function verifyToken(req){
  let token;
  return ((token = verifyLTIToken(req)) !== undefined) ? token : verifyOpenToken(req);
}

app.get( /\/ranking*/, function(req, res, next) {
  next();
  /**** Estaba comentado ****/
  /*
  let token;
  if ((token=verifyToken(req)) !== undefined){
    if (closeActivity(req.originalUrl, token)){
      next();
    }else{
      return res.status(401).sendFile(path.join(__dirname, '/public/error/index.html'));
    }
  }else{
    return res.status(401).sendFile(path.join(__dirname, '/public/error/index.html'));  
  }
  */
});

app.get( /\/*\/teacher\/$/, function(req, res, next) {
  next();
  /**** Estaba comentado ****/
  /*
  let token;
  if ((token=verifyToken(req))=== undefined){
    return res.status(401).sendFile(path.join(__dirname, '/public/error/index.html'));
  }
  next();
  */
});

app.use(express.static("public"));
app.use(function(_, res, _) {
  res.sendFile(path.join(__dirname, '/public/error/index.html'))
});

const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", function(socket) {
  socket.on("join-room", (room) => {
    if (!(/[^\w.]/.test(room))) {
      socket.join(room);
    }
  });

  // Evento que la finalización de un usuario
  socket.on("question-response", (studentResponse) => {
    // Mostrar por consola el alumno y la acción que ha realizado
    console.log("Acción del usuario: " + studentResponse["username"] + 
    " -> " + studentResponse["action"]);
    
    // Actualiza al profesor la lista de alumnos que han respondido
    socket.to(studentResponse["room"]).emit("update-user-list", {
      "id": studentResponse["id"],
      "res": JSON.parse(studentResponse.notes)["res"],
      "username": studentResponse["username"],
      "time": studentResponse["time"],
      "score": JSON.parse(studentResponse.notes)["score"]
    });

    enviarRespuesta(studentResponse);
  });

  // Evento que registra la acción de un usuario
  socket.on("question-change", (studentResponse) => {
    // Mostrar por consola el alumno y la acción que ha realizado
    console.log("Acción del usuario: " + studentResponse["username"] + " -> " + studentResponse["action"]);
    
    enviarRespuesta(studentResponse);
  });

  // Evento que registra la respuesta de un usuario
  socket.on("question-reset", (studentResponse) => {
    // Mostrar por consola el alumno y la acción que ha realizado
    console.log("Acción del usuario: " + studentResponse["username"] + " -> " + studentResponse["action"]);
    
    enviarRespuesta(studentResponse);
  });

  // Evento que finaliza el juego
  socket.on("game-finished", (teacherResponse) => {
    // Mostrar por consola la información de la partida
    console.log("Se ha acabado la partida, resultados: " + JSON.stringify(teacherResponse));

    socket.to(teacherResponse["room"]).emit("redirect-game-finished",
    teacherResponse["student_list"]);

    enviarRespuesta(teacherResponse);
  });
});

http.listen(process.env.PORT || 3000, function() {
  console.log("listening on *:3000");
});

// Función para enviar la información al servidor
function enviarRespuesta(studentResponse) {
  const url = "https://backendcpcd-servicio-scgatewaydev.azuremicroservices.io/api/la/generalla";
  // Hay que generar un token en el EndPoint
  const token = "token";

  // Añadimos el campo "domain" al JSON que se envía al servidor
  studentResponse["domain"] = "gamification@upct.es";
  
  // Configuramos el envío al servidor
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(studentResponse),
    redirect: 'follow'
  };

  console.log(options);

  fetch(url, options)
    .then(response => response)
    .catch(error => console.log(error));
  return;
}