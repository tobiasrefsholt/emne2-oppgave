"use strict";

function getWeatherHTML() {
    let html = ''
    for (let time of model.weather.forecastPerHour) {
        html += /* html */ `
            <div class="weather-row">
                <span class="weather-time">${time.text || ''}</span>
                <img src="${getIconPath(time.symbol)}.svg" alt="">
                <span>${time.wind.speed} m/s</span>
                <div style="display: inline-block;transform: translate(0%, 0%) rotate(${time.wind.direction}deg);">
                    <svg width="3rem" height="3rem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" version="1.1" id="Layer_1" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                        <g>
                            <path d="M50.5,19.881c-1.104,0-2,0.896-2,2V72.17L33.193,56.609c-0.781-0.781-1.922-0.781-2.703,0   c-0.781,0.78-0.719,2.047,0.062,2.828l18.883,18.857c0.375,0.375,0.899,0.586,1.43,0.586s1.047-0.211,1.422-0.586l18.857-18.857   c0.781-0.781,0.783-2.048,0.002-2.828c-0.781-0.781-2.296-0.781-3.077,0L52.5,71.933V21.881C52.5,20.776,51.604,19.881,50.5,19.881   z"/>
                        </g>
                    </svg>
                </div>
                <span>${time.temp} ℃</span>
            </div>
        `;
    }
    return /* html */`
        <h2 class="widget-header"></h2>
        ${html}
        <div style="text-align: center;">Nedbør neste 24 timer: ${model.weather.precipitationToday.toFixed(1)} mm</div>
    `;
}