'use strict'

class  AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.inervalId = null; 
    }

    addClock(timeStart, funcCallBack) {
        if (timeStart == undefined && funcCallBack == undefined ) {
            throw new Error("Отсутствуют обязательные аргументы");
        }

        if (timeStart === this.inervalId) {
            console.warn("Уже присутствует звонок на это же время");
        }

        this.alarmCollection.push({callback: funcCallBack,
                                    time: timeStart,
                                    canCall: true, });
    }

    removeClock(timeAlarmForDelete) {
        this.alarmCollection = this.alarmCollection.filter(timeDel => timeDel.time !== timeAlarmForDelete);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    }

}

