class CountDown {
  constructor(expiredDate, onRender, onComplete) {
    this.setExpiredDate(expiredDate);

    this.onRender = onRender;
    this.onComplete = onComplete;
  }

  setExpiredDate(expiredDate) {
    const currentTime = new Date().getTime();

    this.timeRemainding = expiredDate.getTime() - currentTime;

    this.timeRemainding <= 0 ? this.complete() : this.start();
  }

  complete() {
    if (typeof this.complete === "function") {
      this.onComplete();
    }
  }

  getTime() {
    return {
      days: Math.floor(this.timeRemainding / 1000 / 60 / 60 / 24),
      hours: Math.floor((this.timeRemainding / 1000 / 60 / 60) % 24),
      minutes: Math.floor((this.timeRemainding / 1000 / 60) % 60),
      seconds: Math.floor(this.timeRemainding / 1000) % 60,
    };
  }

  update() {
    if (typeof this.onRender === "function") {
      this.onRender(this.getTime());
    }
  }
  start() {
    this.update();

    const intevalId = setInterval(() => {
      this.timeRemainding -= 1000;

      if (this.timeRemainding < 0) {
        this.complete();
        clearInterval(intevalId);
      } else {
        this.update();
      }
    }, 1000);
  }
}
