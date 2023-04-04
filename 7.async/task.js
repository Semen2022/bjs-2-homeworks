'use strict'

class  AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null; 
    }

    addClock(timeStart, funcCallBack) {
        if (timeStart == undefined || funcCallBack == undefined ) {
            throw new Error("Отсутствуют обязательные аргументы");
        }

        if (timeStart === this.intervalId) {
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

    start() {
        if (this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => this.alarmCollection.forEach(timeAlarm => {
                if (timeAlarm.time === this.getCurrentFormattedTime() && timeAlarm.canCall) {
                    timeAlarm.canCall = false;
                    timeAlarm.callback();
                }
              }), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    } 

    resetAllCalls() {
        this.alarmCollection.forEach( itemCanCall => itemCanCall.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

