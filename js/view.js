"use strict";

window.addEventListener("load", function () {
    updateView();
});

 function updateView() {
    let popupHTML = getPopupHTML();
    document.getElementById("app").innerHTML = /*html*/`
        <div class="main-grid">
            <div class="clock">${getClockHTML() || ''}</div>
            <div class="grid-item calendar">${getCalendarHTML() || ''}</div>
            <div class="grid-item weather">${getWeatherHTML() || ''}</div>
            <div class="grid-item alarm">${getAlarmHTML() || ''}</div>
            <div class="grid-item timer">${getTimerHTML() || ''}</div>
            <div class="buttons">
                <button>Legg til oppgave</button>
            </div>
        </div>
        ${popupHTML}
    `;
}

function getPopupHTML(currentPopUp) {

    let popupHTML;

    if (currentPopUp == "taskDetails") {
        popupHTML = getPopupTaskDetailsHTML();
    }
    if (currentPopUp == "editTask") {
        popupHTML = getPopupEditTaskHTML();
    }
    if (currentPopUp == "addTask") {
        popupHTML = getPopupAddTaskHTML();
    }
    if (currentPopUp == "editAlarm") {
        popupHTML = getPopupEditAlarmHTML();
    }
    if (currentPopUp == "addAlarm") {
        popupHTML = getPopupAddAlarmHTML();
    }
    if (currentPopUp == "clockOptions") {
        popupHTML = getPopupClockOptionsHTML();
    }
    if (model.app.currentPopUp == null) {
        return '';
    }

    return /* html */ `
        <div class="popup">${popupHTML}</div>
    `;
}

