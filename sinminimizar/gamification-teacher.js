/* global io */
/* global $ */
/* global i18next */
(function () {

    const socket = io();
    const activityCode = window.location.pathname.split('/')[1];
    const studentListKey = activityCode + "-studentlist";
    const assignedStudentListKey = "indie-asignedstudentlist";
    let studentListGlobal = JSON.parse(sessionStorage.getItem(studentListKey)) || {};
    socket.emit('join-room', activityCode);

    // Devuelve lista ordenada de estudiantes por puntos (y los asigna)
    let assignPoints = function (resultList) {
        // Empty student list case
        if (Object.keys(resultList).length === 0)
            return [];

        let studentsArr = Object.keys(resultList).map((key) => resultList[key]);
        // sort by response time
        studentsArr.sort((s1, s2) => s1.time - s2.time);
        // students who got a perfect score
        let winners = studentsArr.filter((s) => s.score === 1)
        let bestTime = winners.length > 0 ? winners[0]['time'] : studentsArr[0]['time'];
        let worstTime = studentsArr[studentsArr.length - 1]['time'];

        let output = studentsArr.map((val, index, arr) => {
            let result = { ...val }
            result['points'] = 1000 * result['score'];
            // Decrease up to 20% of the score depending on the position
            let timePenalization = bestTime === worstTime ? 0 :
                (result['points'] * 0.2 * (Math.max(0, result['time'] - bestTime) / (worstTime - bestTime)));
            result['points'] = Math.round(result['points'] - timePenalization)
            return result;
        })
        output.sort((s1, s2) => s2.points - s1.points);
        return output;
    }

    let finishActivity = function () {
        let assignedList = assignPoints(studentListGlobal)
        sessionStorage.setItem(assignedStudentListKey, JSON.stringify(assignedList));
        socket.emit("game-finished", {
            student_list: assignedList,
            room: activityCode,
        });

        window.location.replace(`/ranking/?cod=${activityCode}`);
    };

    socket.on("update-user-list", (studentResponse) => {
        let id = studentResponse["id"],
            res = studentResponse["res"],
            username = studentResponse["username"],
            time = studentResponse["time"],
            score = studentResponse["score"];

        let student = { id, res, username, time, score };
        studentListGlobal[id] = student;
        sessionStorage.setItem(studentListKey, JSON.stringify(studentListGlobal));
        $("#student-count").html(Object.keys(studentListGlobal).length);
    });
    const studentListDiv = `
        <div class="gamification-participants">
            <div id="student-count" class="student-circle">0</div>
            <button type="button" id="student-list-button"
                aria-label="Display the student list"
                class="btn btn-dark rounded-0 text-white pr-3 pl-3"
                data-toggle="popover" data-trigger="focus" data-placement="left">
                <i class="fas fa-user fa-3x" aria-hidden="true"></i>
            </button>
        </div>
        <div class="gamification-close">
            <button type="button" id="bgam-${activityCode}" aria-label="Finish game"
                    class="btn btn-dark rounded-0 text-white pr-3 pl-3 pb-2 pt-2">
            <i class="fas fa-trophy fa-2x fa-fw" aria-hidden="true"></i>
            </button>
        </div>`;

    let onLanguageLoaded = function (err, i18n) {
        $("#showcodgane").append("https://game.upct.es/" + activityCode + "/");
        $("#student-count").html(Object.keys(studentListGlobal).length);
        $("#body").height($(document).height()); // ???
        $("#student-list-div").html(studentListDiv);
        $('#student-list-button').popover({
            trigger: "focus",
            html: true,
            content: function () {
                // Build student list for popover
                let $container = $('<div />')
                    .attr('id', 'student-list')
                    .addClass('list-group list-group-flush border-bottom scrollarea');

                for (let id in studentListGlobal) {
                    $container.append($('<div />')
                        .addClass('list-group-item list-group-item-action py-3 lh-tight')
                        .append($('<strong />').addClass('mb-1').html(studentListGlobal[id].username)))
                }
                return $container;
            },
        });
        $("#student-count").html(Object.keys(studentListGlobal).length);
        $(document).on("click", `#bgam-${activityCode}`, function () {
            $("#modalConfirmacion").modal('show');
        });

        $("#modal-btn-si").on("click", function () {
            finishActivity();
            $("#modalConfirmacion").modal('hide');
        });

        $("#modal-btn-no").on("click", function () {
            $("#modalConfirmacion").modal('hide');
        });
    };

    let scriptPath = document.currentScript.src
    scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
    $(document).ready(function () {
        let currLang = $('html').attr('lang');
        fetch(`${scriptPath}/../languages/${currLang}.json`)
            .then(response => response.json())
            .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
    });
})();