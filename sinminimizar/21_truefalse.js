/* global $ */
/* global setObjetivoCompleto */
/* global i18next */

(function () {

    // https://stackoverflow.com/a/30106551
    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        $('.widget-truefalse').each(function () {
            let self = this;
            let id = $(self).attr('id');

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH")
                    return;

                let $checks = $(self).find('input[type=checkbox]');
                let $checkAnswerBtn = $(self).find('.boton_truefalse')
                let $selected = $checks.filter(function () { return $(this).is(':focus') }).first()
                if (!$selected.length) {
                    $selected = $checks.eq(0);
                    $selected.focus();
                }
                if (action === "START" || action === "CURRENT")
                    return;
                else if (action === "NEXT" || action === "PREVIOUS") {
                    let position = $checks.index($selected);
                    let nextPos = action === "NEXT" ? ((position + 1) % $checks.length) : ((position - 1) % $checks.length);
                    $checks.eq(nextPos).focus();
                }
                else if (action === "GOTO") {
                    $checks.eq((parseInt(entities['target-position']) - 1) % $checks.length).focus();
                }
                else if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
                    $(".modal.show").length && $('.modal.show').modal('hide');
                    $(".alert").length && $('.alert').alert('close')
                }
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else {
                    switch (action) {
                        case "SELECT": $selected.trigger('click'); break;
                        case "REPEAT": $(self).find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-truefalse'))); break;
                        case "CHECK": $checkAnswerBtn.trigger('click'); break;
                        case "NONE":
                        default:
                            $(self).find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                            break;
                    }
                }

            };
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);
        });



        $('.widget-truefalse').on('change', 'input:checkbox', function () {
            let $question = $(this).closest('.question');
            let newState = $(this).prop('checked');
            $question.find('.iconresult').attr('aria-label', '').empty();
            $question.find('.custom-control-label')
                .toggleClass('TFfalse-color', !newState)
                .toggleClass('TFtrue-color', newState)
                .html(newState ? i18n('TextTrue') : i18n('TextFalse'));
            $question.find('.positiveFeedback').addClass("hidden");
            $question.find('.negativeFeedback').addClass("hidden");
        });

        $('.widget-truefalse').on('click', '.btn-reset', function () {
            let $widget = $(this).closest('.widget-truefalse');
            $widget.find('.negativeFeedback, .positiveFeedback').addClass('hidden');
            $widget.find('.iconresult').removeAttr('aria-label').empty();
            $widget.find('.resultado_truefalse').empty();
            $widget.find('input:checkbox')
                .prop('checked', false)
                .removeAttr('aria-describedby');
            $widget.find('.custom-control-label').addClass('TFfalse-color').removeClass('TFtrue-color').html(i18n('TextFalse'));
        });

        $('.boton_truefalse').click(function () {
            var gamification = $('body').hasClass('gamification');
            let $widget = $(this).closest('.widget-truefalse');
            let id = $widget.attr('id');
            let solutions = JSON.parse(b64DecodeUnicode($widget.data('content')));
            let numCorrectAnswers = $widget.find('input:checkbox').filter(function (idx) {
                return solutions[idx] == $(this).prop('checked')
            }).length;
            $(this).trigger('gamificate', [numCorrectAnswers == solutions.length, numCorrectAnswers / solutions.length]);
            if (!gamification) {
                $widget.find('input:checkbox').each(function (idx) {
                    let $question = $(this).closest('.question');
                    if (solutions[idx] == $(this).prop('checked')) {
                        $(this).attr('aria-describedby', 'positiveFeedback-' + $(this).attr('name'))
                        $question.find('.iconresult')
                            .attr('aria-label', i18n('TextCorrectAnswer'))
                            .html('<i class="fas fa-2x fa-check"></i>');
                        let $answerpositivefeedback = $question.find('.positiveFeedback');
                        if ($answerpositivefeedback.is(':not(:empty)')) {
                            $answerpositivefeedback.removeClass("hidden");
                        }
                        $question.find('.negativeFeedback').addClass("hidden");
                    } else {
                        $(this).attr('aria-describedby', 'negativeFeedback-' + $(this).attr('name'))
                        $question.find('.iconresult')
                            .attr('aria-label', i18n('TextIncorrectAnswer'))
                            .html('<i class="fas fa-2x fa-times"></i>');
                        $question.find('.positiveFeedback').addClass("hidden");
                        let $answernegativefeedback = $question.find('.negativeFeedback');
                        if ($answernegativefeedback.is(':not(:empty)')) {
                            $answernegativefeedback.removeClass("hidden");
                        }
                    }
                })
                if (numCorrectAnswers == solutions.length)
                    setObjetivoCompleto("objetivo" + id, $widget.data('desc'), $widget.data('desc'));

                $widget.find('.resultado_truefalse').html('<div class="result-truefalse">' + numCorrectAnswers + ' ' + i18n('TextCorrectAnswers') + '</div>');
            }

        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();