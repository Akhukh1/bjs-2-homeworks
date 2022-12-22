class AlarmClock {

  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;  
  }

  addClock(runTime, runFunc) {

    if (!runTime || !runFunc) {
      throw new Error('Отсутствуют обязательные аргументы');
      return;
    } 

    if (this.alarmCollection.find((item) => item.time === runTime)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    let addCall = {
        // id: this.intervalId + 1,
      time: runTime,
      canCall: true,
      callback: runFunc
    };
      
    this.alarmCollection.push(addCall);
    
  }

  removeClock(time) {
    
    let firstArr = this.alarmCollection;

    let newArr = this.alarmCollection.filter((delTime, index, array) => 
    { return delTime.time !== time });
    this.alarmCollection = newArr;

  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => this.alarmCollection.forEach(call => {
      if (call.time === this.getCurrentFormattedTime()) {
        call.canCall = false;
        call.callback();
        console.log(call.canCall);
      }
    }), 1000);

  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(call => call.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

}
