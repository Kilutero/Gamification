/* global $ */
/* global io */
/* global i18next */
(function () {

    let uuidv4 = function () {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    };

    const socket = io({ 'forceNew': true });

    // Variables para el evento que envia los datos
    const checkbox = document.querySelectorAll("input[type=checkbox]");
    const btn_reset = document.getElementsByClassName("btn-reset")[0];

    // Anotamos la acción del usuario
    let user_action = 0;

    const activityCode = window.location.pathname.split('/')[1];
    const usernameStorageKey = activityCode + "-username";
    const uuidStorageKey = activityCode + "-uuid";
    const dateStorageKey = activityCode + "-date";
    let username = JSON.parse(sessionStorage.getItem(usernameStorageKey));
    // Return to login form to set a valid username
    if (!username)
        window.location.replace("index.html");
    let uuid = JSON.parse(sessionStorage.getItem(uuidStorageKey)) || uuidv4();
    sessionStorage.setItem(uuidStorageKey, JSON.stringify(uuid));
    let startQuestionTime = sessionStorage.getItem(dateStorageKey) || Date.now();
    socket.emit('join-room', activityCode);
    let onLanguageLoaded = function (err, i18n) {

        let buildRankingTable = function (studentList, myStudent) {

            let $emptyRow = $('<tr />').append($('<td/>').addClass('empty').attr('colspan', 3).html('...'))
            let studentToRow = function (student, idx) {
                let $position = $('<td />').html(idx + 1);
                let $username = $('<td />').html(student.username);
                let $points = $('<td />').html(student.points);
                let $row = $('<tr />').toggleClass('current', student === myStudent).append($position, $username, $points);
                return $row;
            }
            // Sort student list by punctuation
            studentList.sort((s1, s2) => s2.points - s1.points);
            let filteredStudents = studentList.filter((student, idx) => idx < 3 || student === myStudent);
            let rows = filteredStudents.map(studentToRow);
            if (filteredStudents.length > 3)
                rows.splice(3, 0, $emptyRow.clone());
            rows.push($emptyRow.clone());
            let $headerFirstRow = $("<tr />").append(
                $("<th />").attr('colspan', 3).html(i18n('gamification-results')));
            let $headerSecondRow = $("<tr />").append(
                $("<th />").html(i18n('gamification-position')),
                $("<th />").html(i18n('gamification-username')),
                $("<th />").html(i18n('gamification-points')));
            let $rankingHeader = $("<thead />").append($headerFirstRow, $headerSecondRow);
            let $rankingBody = $("<tbody />").html(rows);
            return $("<table/>")
                .addClass("gamification-ranking table mx-auto")
                .append($rankingHeader, $rankingBody);
        }

        socket.on("redirect-game-finished", (studentList) => {

            sessionStorage.removeItem(usernameStorageKey);
            sessionStorage.removeItem(uuidStorageKey);
            sessionStorage.removeItem(dateStorageKey);
            let myStudent = studentList.find(student => student['id'] === uuid);
            let $modal = $('#gamification-message-modal');
            let showClassification = function ($currentModal) {
                $currentModal.find('.gamification-ranking').remove();
                let $table = buildRankingTable(studentList, myStudent);
                let src = myStudent && myStudent.res ? 'https://cdn-cpcd-upct-e2bdhub5efg7c9hk.z01.azurefd.net/$web/img/gamy-correct.png' : 'https://cdn-cpcd-upct-e2bdhub5efg7c9hk.z01.azurefd.net/$web/img/gamy-wrong.png'
                let msg = myStudent && myStudent.res ? i18n('TextCorrectAnswer') : i18n('TextIncorrectAnswer')
                let alt = myStudent && myStudent.res ? i18n('GamyCorrect') : i18n('GamyWrong')
                $currentModal.find('.modal-title').html(msg)
                $currentModal.find('.modal-logo-img')
                    .attr('src', src)
                    .attr('alt', alt)
                $currentModal.find('.modal-body').append($table);
                $table.delay(1500).show(700);
                setTimeout(function () { $currentModal.removeClass('changing'); }, 100)
            }

            // If modal is already shown, wait 500 ms until text & image fade away
            if ($modal.hasClass('show')) {
                let $clone = $modal.clone();
                $modal.css('opacity', 0);
                setTimeout(function () { $modal.remove(); }, 300)
                $clone.addClass('changing')
                showClassification($clone)
                $clone.modal({ keyboard: true, focus: true, show: true, backdrop: false })
            }
            else // Otherwise, perform the animation as usual
            {
                $modal.addClass('changing');
                showClassification($modal)
                $modal.modal({ keyboard: true, focus: true, show: true, backdrop: false })
            }
        });

        $(document).on('gamificate', '.btn-gamification', function (e, correct, score) {
            console.log("Has finalizado el juego")
            
            let $modal = $('#gamification-message-modal');
            $modal.find('.modal-title').html(i18n('AnswerSent'))
            $modal.find('.modal-logo-img')
                .attr('src', 'https://cdn-cpcd-upct-e2bdhub5efg7c9hk.z01.azurefd.net/$web/img/gamy-ok.png')
                .attr('alt', i18n('GamyGreeting'));

            $modal.modal({ keyboard: true, focus: true, show: true, backdrop: false })
            $(this).attr("disabled", true);
            socket.emit("question-response", {
                "id": uuid,
                "username": username,
                "room": activityCode,
                "time": Date.now() - startQuestionTime,
                "action_number": user_action++,
                "action": "response",
                "notes": JSON.stringify({
                    "res": correct,
                    "score": score
                })
            });
        });

        // Función que ejecuta al marcar un checkbox
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].addEventListener("click", function() {
                // Envío al servidor NodeJs
                socket.emit("question-change", {
                    "id": uuid,
                    "username": username,
                    "room": activityCode,
                    "time": Date.now() - startQuestionTime,
                    "action_number": user_action++,
                    "action": "checkbox",
                    "notes": JSON.stringify({
                        "question": checkbox[i].name.replace("s2r3c0e", ''),
                        "res": checkbox[i].checked
                    })
                });
            });
        }

        // Función que ejecuta al resetear las preguntas
        btn_reset.addEventListener("click", function() {
            // Envío al servidor NodeJs
            socket.emit("question-reset", {
                "id": uuid,
                "username": username,
                "room": activityCode,
                "time": Date.now() - startQuestionTime,
                "action_number": user_action++,
                "action": "reset",
                "notes": ""
            });

        });

    }

    let scriptPath = document.currentScript.src
    scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
    $(document).ready(function () {

        // Mark all gamification buttons with popup associated
        setTimeout(function () { $('.btn-gamification').attr('aria-haspopup', 'dialog'); }, 500)

        let currLang = $('html').attr('lang');
        fetch(`${scriptPath}/../assets/generator/content/v4-6-0/languages/${currLang}.json`) //Se ha cambiado la url para hacer pruebas /../languages/${currLang}.json
            .then(response => response.json())
            .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
    });
})()