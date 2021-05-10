class AlarmClock {
    debugger;
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id){
        if (!id) {
            throw new Error('error text');
        }
        if (this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error();
        } else {
            this.alarmCollection.push({
                time: time,
                callback: callback,
                id: id
            })
        }
    }
    removeClock(id){
        if (this.alarmCollection.some(alarm => alarm.id === id)) {
            let index = this.alarmCollection.findIndex(alarm => alarm.id === id);
            this.alarmCollection.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }
    getCurrentFormattedTime() {
        let now = new Date().toLocaleTimeString().slice(0,-3);
        return now;
    }
    start() {
        function checkClock(clock){
            if (clock.time === this.getCurrentFormattedTime()) {
                return clock.callback();
            } 
        }
        if (this.timerId === null) {
                this.timerId = setInterval(() => {
                    this.alarmCollection.forEach(alarm => checkClock(alarm));
                    }, 1000)               
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log(alarm.id, alarm.time));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
let clock = new AlarmClock();
clock.addClock("16:45", f => f, 1);