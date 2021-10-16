const TimerUtils = {
  checkTimer(str) {
    let startTime = 0;
    let stopTime = 0;

    const timer = {};

    timer.start = () => {
      startTime = new Date().getTime();
    };

    timer.stop = () => {
      stopTime = new Date().getTime();
      console.log(`${str} : ${stopTime - startTime}`);
    };

    return timer;
  },

  checkTimerFunction(callback) {
    console.time('calculatingTime');
    callback();
    console.timeEnd('calculatingTime');
  },
};

module.exports = TimerUtils;
