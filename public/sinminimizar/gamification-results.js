// Constantes globales que llamaran distintas funciones
let question_data;
let student_data;

const selectStudentHandler = (event) => {
    const id = event.target.getAttribute('student-id');
    const room = event.target.getAttribute('student-room');

    selectStudent(id, room);
};

const removeStudentHandler = (event) => {
    const id = event.target.getAttribute('student-id');
    const room = event.target.getAttribute('student-room');

    removeStudent(id, room);
};

const selectQuestionHandler = (event) => {
    const number = event.target.getAttribute('question-number');
    const room = event.target.getAttribute('question-room');

    selectQuestion(number, room);
};

const removeQuestionHandler = (event) => {
    const number = event.target.getAttribute('question-number');
    const room = event.target.getAttribute('question-room');

    removeQuestion(number, room);
};

// Función que cambia el fondo de los H4 dependiendo del fondo de la página
const background_color = document.getElementById('saveChanges');
background_color.addEventListener('click', () => {changeH4BackgroundColor()})

// Leer la información de las Cuestiones del JSON
fetch('../sinminimizar/questions_data.json')
    .then(response => response.json())
    .then(data => {
    // Aquí puedes trabajar con los datos del archivo JSON
    showRooms(data)
    })
    .catch(error => console.error(error));

// Leer la información de los estudiantes del JSON
fetch('../sinminimizar/students_data.json')
    .then(response => response.json())
    .then(data => {
    // Aquí puedes trabajar con los datos del archivo JSON
    student_data = data
    })
    .catch(error => console.error(error));

// Funcion para mostrar las partidas que hay en los jsons
function showRooms(data) {
    question_data = data;

    // Creamos una lista con las partidas únicas que hay en el JSON
    const rooms = new Set();

    for (const key in question_data) {
        const [pregunta, partida] = key.split('/**/');
        rooms.add(partida);
    }

    // Finalmente añadimos las opciones al HTML
    const ul_rooms = document.getElementById('rooms-list')
    rooms.forEach(room => {
        // Creamos el elemento 'li' en HTML
        const li_room = document.createElement('li');
        // Le añadimos el texto, Id y Clase
        li_room.textContent = room;
        li_room.id = room;
        li_room.classList.add('Partida');
        // Añadimos un evento para que cuando lo pulsemos ejecute la función 'selectRoom'
        li_room.addEventListener('click', () => {selectRoom(li_room.id)});
        // Finalmente lo añadimos a la 'ul' en HTML
        ul_rooms.appendChild(li_room);
    });

    // Quitamos el atributo 'hidden' al div que contiene esta lista de Partidas
    const room_select = document.getElementById('room-select');
    // room_select.removeAttribute('hidden');
    room_select.hidden = false;
};

// Función que se ejecuta al elegir una sala
function selectRoom(room) {
    // Ocultamos la seleccion de Partida
    const room_select = document.getElementById('room-select');
    room_select.hidden = true;

    // Cambiamos el modo del footer para que siempre esté debajo
    const footer = document.getElementById('footerwrap');
    footer.style.position = 'relative';

    // Añadimos los datos de esa partida al div correspondiente

    /// Estudiantes
    // Filtramos los Estudiantes de esta partida
    const student_room = {}
    for (student in student_data) {
        const [student_name, student_id, partida] = student.split('/**/');
        if (partida == room) {
            student_room[student_name + '/**/' + student_id] = student_data[student]
        };
    };

    /// Cuestiones
    // Filtramos las Cuestiones de esta partida
    const question_room = {}
    for (question in question_data) {
        const [question_name, partida] = question.split('/**/');
        if (partida == room) {
            question_room[question_name] = question_data[question]
        };
    };

    // Añadimos los Estudiantes y su nota al HTML
    const students_data = document.getElementById('students-data');
    for (student in student_room) {
        const [name, id] = student.split('/**/');
        // Creamos el elemento de la lista
        const student_li = document.createElement('li');

        // Creamos un div general
        const student_div = document.createElement('div');
        student_div.classList.add('student');
        student_div.setAttribute('id', id);

        // Creamos el contenido del div
        // Primero un h4 con atributos que usaran otras funciones y el nombre del Estudiante
        const student_name = document.createElement('h4');
        student_name.setAttribute('student-id', id);
        student_name.setAttribute('student-room', room);
        student_name.textContent = name;
        // Incluimos un evento al pulsar el nombre del estudiante, este nos mostrará toda la información
        student_name.addEventListener('click', selectStudentHandler);

        // Info del estudiante en una 'ul'
        const student_info = document.createElement('ul');
        student_info.classList.add('info-ul');
        student_info.classList.add('student-ul');
        // Incluimos la nota como primer elemento de la lista
        const student_score = document.createElement('li');
        student_score.classList.add('info');
        student_score.textContent = 'Nota: ' + student_room[student].Nota * 10;

        // Incluimos los diferentes elementos del HTML
        student_info.appendChild(student_score);
        student_div.appendChild(student_name);
        student_div.appendChild(student_info);
        student_li.appendChild(student_div);
        students_data.appendChild(student_li);
    };

    // Añadimos las Cuestiones y su nota al HTML
    const questions_data = document.getElementById('questions-data');
    for (question in question_room) {
        // Creamos el elemento de la lista
        const question_li = document.createElement('li');

        // Creamos un div general
        const question_div = document.createElement('div');
        question_div.classList.add('question');
        question_div.setAttribute('id', question + '-' + room);

        // Creamos el contenido del div
        // Primero un h4 con atributos que usaran otras funciones y el número de la cuestion
        const question_name = document.createElement('h4');
        question_name.setAttribute('question-number', question);
        question_name.setAttribute('question-room', room);
        // Incluimos un evento al pulsar el nombre del estudiante, este nos mostrará toda la información
        question_name.addEventListener('click', selectQuestionHandler);

        // Ahora mismo el nombre de la pregunta es 0, 1, 2... Para cambiar el nombre de la pregunta hay que cambiar el nombre en game.html
        // en la variable name='s2r3c0e00' el nombre lo obtengo del último '0'
        question_name.textContent = 'Cuestión: ' + question; 
        // Info de la cuestion en una 'ul'
        const question_info = document.createElement('ul');
        question_info.classList.add('info-ul');
        question_info.classList.add('question-ul');
        // Incluimos el porcentaje de aciertos como primer elemento de la lista
        const question_success = document.createElement('li');
        question_success.classList.add('info');
        question_success.textContent = 'Aciertos: ' + question_room[question]['Porcentaje de aciertos'] + '%';

        // Incluimos los diferentes elementos del HTML
        question_info.appendChild(question_success);
        question_div.appendChild(question_name);
        question_div.appendChild(question_info);
        question_li.appendChild(question_div);
        questions_data.appendChild(question_li);
    };

    // Cambiamos el fondo de los H4 para que cuadre el color del fondo
    changeH4BackgroundColor();

    // Mostramos el div que contiene los estudiantes y Cuestiones de esa partida
    const room_data = document.getElementById('room-data');

    // Añadimos el boton de Volver
    const return_button = document.createElement('button');
    return_button.classList.add('return-button');
    return_button.setAttribute('id', 'room-button')
    return_button.textContent = 'Volver';
    return_button.addEventListener('click', () => {rerturnButton('room-button')});

    room_data.appendChild(return_button);
    room_data.hidden = false;
};

// Funcion que muestra la información del estudiante pulsado
function selectStudent(id, room){
    // Filtramos al estudiante de esta partida que estamos buscando
    const student_room = {};
    for (student in student_data) {
        const [student_name, student_id, partida] = student.split('/**/');
        if (partida == room && student_id == id) {
            student_room[student_name + '/**/' + student_id] = student_data[student];

            // Una vez filtrado seleccionamos su 'ul'
            const student_div = document.getElementById(id);
            
            const student_info = student_div.querySelector('ul.student-ul');
            // Obtenemos toda la información que tengamos de ese estudiante y la añadimos como 'li'
            for (key in student_data[student]) {
                if (key != 'Nota') { // Obviamos el valor de 'Nota' que ya está representado
                    const student_li = document.createElement('li');
                    student_li.classList.add('info');
                    student_li.classList.add('temporal');

                    // Comprobamos si el valor viene vacío para mostrar un N/A
                    const iteration_data = String(student_data[student][key]);

                    // Diferenciamos este caso debido a que la presentación de la respuesta es único
                    if(key == 'Ha acertado la cuestión') {
                        const aciertos = student_data[student][key];
                        const respuestas = student_data[student]['Respuestas del estudiante'];

                        const new_ul = document.createElement('ul');
                        student_li.textContent = 'Respuestas del estudiante:'

                        for (let i = 0; i <= aciertos.length - 1; i++) {
                            const new_li = document.createElement('li');

                            // Guardamos la respuesta y si ha acertado en variables para evitarnos un if case
                            const respuesta = respuestas[i] ? 'Verdadero' : 'Falso';
                            const acierto = aciertos[i] ? 'acertando' : 'fallando'

                            new_li.textContent = 'Respondió ' + respuesta + ', ' + acierto + ' la respuesta de la pregunta ' + i;
                            new_ul.appendChild(new_li);
                        }
                        student_li.appendChild(new_ul);

                    // Separamos otro caso en el que modificamos el valor mostrado
                    } else if (key == 'El estudiante ha reseteado') {
                        reseteo = student_data[student][key] ? 'Si' : 'No';
                        student_li.textContent = key + ': ' + reseteo;

                    // Usamos la función split para separar y presentar de una manera elegante los arrays
                    } else if ((iteration_data != '') & (key != 'Respuestas del estudiante')) {
                        const splitter = iteration_data.split(',');
                        student_li.textContent = key + ': ' + splitter[0];
                        let first_iteration = true;
                        // Si el contenido es un array, lo separamos con comas y espacios para que se vea mejor
                        for (cut in splitter) {
                            if (first_iteration == true){
                                first_iteration = false;
                            } else {
                                student_li.textContent = student_li.textContent + ', ' + splitter[cut];
                            };
                        };
                    } else{
                        student_li.textContent = key + ': N/A';
                    };

                    // Añadimos todos los elementos a la lista del estudiante, menos sus respuestas, que ya han sido incluidas
                    if(key != 'Respuestas del estudiante') {
                        student_info.appendChild(student_li);
                    }
                }
            };

            // Eliminamos el evento 'click' al pulsar el estudiante
            const student_h4 = student_div.querySelector('h4');
            student_h4.removeEventListener('click', selectStudentHandler);

            // Añadimos una nueva funcion que elimine el texto al pulsar en el nombre
            student_h4.addEventListener('click', removeStudentHandler);

            break;
        };
    };
};

// Funcion que elimina la información del estudiante pulsado
function removeStudent(id, room) {
    // Filtramos al estudiante de esta partida que estamos buscando
    const student_room = {};
    for (student in student_data) {
        const [student_name, student_id, partida] = student.split('/**/');
        if (partida == room && student_id == id) {
            student_room[student_name + '/**/' + student_id] = student_data[student];

            // Una vez filtrado seleccionamos su 'ul'
            const student_div = document.getElementById(id);
            const student_li = student_div.querySelectorAll('ul li.temporal');

            student_li.forEach(li => {
                li.remove();
            });

            // Eliminamos el evento 'click' al pulsar el estudiante
            const student_h4 = student_div.querySelector('h4');
            student_h4.removeEventListener('click', removeStudentHandler);

            // Añadimos la antigua funcion
            student_h4.addEventListener('click', selectStudentHandler);

            break;
        };
    };
};

function selectQuestion(number, room) {
    // Filtramos la cuestion de esta partida que estamos buscando
    const question_room = {};
    for (question in question_data) {
        const [question_number, partida] = question.split('/**/');
        if (partida == room && question_number == number) {
            question_room[question] = question_data[question];

            // Una vez filtrado seleccionamos su 'ul'
            const question_div = document.getElementById(number + '-' + room);
            
            const question_info = question_div.querySelector('ul.question-ul');
            // Obtenemos toda la información que tengamos de esa cuestion y la añadimos como 'li'
            for (key in question_data[question]) {
                const question_li = document.createElement('li');
                question_li.classList.add('info');
                question_li.classList.add('temporal');

                // Caso especial en el que obtenemos un JSON en vez de un Array o un String
                if (key == 'Acción en la que responden los usuarios') {
                    const new_ul = document.createElement('ul');
                    question_li.textContent = key + ' a esta pregunta: ';
                    for (iteration in question_data[question][key]) {
                        const new_li = document.createElement('li');
                        const number_students_answered = question_data[question][key][iteration];
                        if (number_students_answered > 1) {
                            new_li.textContent = 'En la acción ' + iteration + ' han respondido ' + number_students_answered + ' estudiantes';
                        } else {
                            new_li.textContent = 'En la acción ' + iteration + ' ha respondido ' + number_students_answered + ' estudiante';
                        }
                        
                        new_ul.appendChild(new_li);
                    };
                    question_li.appendChild(new_ul);

                    // Añadimos el elemento a la lista 'ul'
                    question_info.appendChild(question_li);
                } else if (key != 'Porcentaje de aciertos') { // Obviamos el valor de 'Porcentaje de aciertos' que ya está representado
                    const iteration_data = String(question_data[question][key]);
                    // Comprobamos si el valor viene vacío para mostrar un N/A
                    if (iteration_data != null) {
                        question_li.textContent = key + ': ' + iteration_data;

                        const splitter =iteration_data.split(',');
                        question_li.textContent = key + ': ' + splitter[0];
                        let first_iteration = true;
                        // Si el contenido es un array, lo separamos con comas y espacios para que se vea mejor
                        for (cut in splitter) {
                            if (first_iteration == true){
                                first_iteration = false;
                            } else {
                                question_li.textContent = question_li.textContent + ', ' + splitter[cut];
                            };
                        };
                    } else {
                        question_li.textContent = key + ': N/A';
                    };

                    // Añadimos el elemento a la lista 'ul'
                    question_info.appendChild(question_li);
                }
            };

            // Eliminamos el evento 'click' al pulsar la cuestion
            const question_h4 = question_div.querySelector('h4');
            question_h4.removeEventListener('click', selectQuestionHandler);

            // Añadimos una nueva funcion que elimine el texto al pulsar en la cuestion
            question_h4.addEventListener('click', removeQuestionHandler);

            break;
        };
    };

    // Llamamos a la funcion select() que
};

function removeQuestion(number, room) {
    // Filtramos la cuestion de esta partida que estamos buscando
    const question_room = {};
    for (question in question_data) {
        const [question_number, partida] = question.split('/**/');
        if (partida == room && question_number == number) {
            question_room[question] = question_data[question];

            // Una vez filtrado seleccionamos su 'ul'
            const question_div = document.getElementById(number + '-' + room);
            
            const question_li = question_div.querySelectorAll('ul li.temporal');
            question_li.forEach(li => {
                li.remove();
            });

            // Eliminamos el evento 'click' al pulsar la cuestion
            const question_h4 = question_div.querySelector('h4');
            question_h4.removeEventListener('click', removeQuestionHandler);

            // Añadimos la antigua funcion
            question_h4.addEventListener('click', selectQuestionHandler);

            break;
        };
    };
};

// Funciones que se ejecutan al pulsar los botones de volver
function rerturnButton(button){
    if (button == 'room-button') {
        // Ocultamos el div actual
        const room_data = document.getElementById('room-data');
        room_data.hidden = true;

        // Cambiamos el modo del footer para que siempre esté debajo
        const footer = document.getElementById('footerwrap');
        footer.style.position = 'absolute';

        // Eliminamos el contenido del div que hemos ocultado
        const students_data = document.getElementById('students-data');
        while (students_data.firstChild) {
            students_data.removeChild(students_data.firstChild);
        };

        const questions_data = document.getElementById('questions-data');
        while (questions_data.firstChild) {
            questions_data.removeChild(questions_data.firstChild);
        };

        const return_button = document.getElementById('room-button');
        room_data.removeChild(return_button);

        // Mostramos el div anterior
        const room_select = document.getElementById('room-select');
        room_select.hidden = false;
    };
};

function changeH4BackgroundColor () {
    const seleted_color = document.getElementById('backgroundColor');
    const container = document.getElementsByClassName('container')[0];
    const h4 = document.querySelectorAll('h4');
    

    for (var i = 0, max = h4.length; i < max; i++) {
        h4[i].style.background = seleted_color.value;
    }
};
