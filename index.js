class CountdownTimer {
    constructor({targetDate}) {
        this.timerId = null;
        this.targetDate = targetDate;

    }
    start() {
        // const targetDate = new Date(2021, 2, 30, 0);
    
    this.timerId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        const time = this.getTimeComponents(deltaTime);
        if (deltaTime < 0) {
            clearInterval(timerId);
            return;
        }
        this.updateClockFace(time);

    }, 1000)
}
    pad(value) {
        return String(value).padStart(2, '0');
}

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return {days, hours, mins, secs}
}
    updateClockFace(time) {
        const days = document.querySelector('[data-value="days"]');
        const hours = document.querySelector('[data-value="hours"]');
        const mins = document.querySelector('[data-value="mins"]');
        const secs = document.querySelector('[data-value="secs"]');
        days.textContent = time.days;
        hours.textContent = time.hours;
        mins.textContent = time.mins;
        secs.textContent = time.secs;
}

}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('March 30, 2021'),
  });

timer.start()




