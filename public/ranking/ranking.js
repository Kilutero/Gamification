//Ranking

var studentPoints;
const asignedStudentListKey = "indie-asignedstudentlist";
const rankingHTML = `
    <table class="table mx-auto" style="padding: 10px;">
        <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">Usuario</th>
            <th scope="col">Puntos</th>
        </tr>
        </thead>
        <tbody id="result-table-body">
        </tbody>
    </table>
`;

function buildResultsTable() {
  // Haremos que cada row de la tabla sea un estudiante. Podemos añadir una imagen
  // para cada uno de los tres primeros ganadores. La idea de tener una columna más
  // es para meter la imagen de los ganadores.

  if (!(studentPoints = JSON.parse(sessionStorage.getItem(asignedStudentListKey)))) {
    return;
  }

  const tableId = "result-table-body";
  const positionImages = [
    '<img id="first-position" src="/images/first.png" style="max-width: 30px; height: auto;" alt="Medal first position"></img>',
    '<img id="second-position" src="/images/second.png" style="max-width: 30px; height: auto;" alt="Medal second position"></img>',
    '<img id="third-position" src="/images/third.png" style="max-width: 30px; height: auto;" alt="Medal third position"></img>',
  ];

  $(`#${tableId}`).html("");

  for (student of studentPoints) {
    let indexStudent = studentPoints.indexOf(student);
    var positionImage = indexStudent < 3 ? positionImages[indexStudent] : "";
    var rowHTML = `
                <tr>
                    <td style="width: 35px;">${positionImage}</td>
                    <td>${student.username}</td>
                    <td>${student.points}</td>
                </tr>
            `;

    $(rowHTML).appendTo(`#${tableId}`);
  }
}


$(document).ready(function() {
  $("#body").height($(document).height()),
    $("#ranking-div").html(rankingHTML),
    $("#ranking-div").css({
      "margin-top": "20px",
      "max-width": "1280px",
      "width": "90%"
    }),
    buildResultsTable()
});
