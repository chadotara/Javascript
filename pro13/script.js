class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.elapsedTime = 0;
        this.timerInterval = null;
        this.isRunning = false;
        
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        this.millisecondsElement = document.getElementById('milliseconds');
        
        this.startButton = document.getElementById('start');
        this.pauseButton = document.getElementById('pause');
        this.restartButton = document.getElementById('restart');
        
        this.progressRing = document.querySelector('.progress-ring__circle');
        const radius = this.progressRing.r.baseVal.value;
        this.circumference = radius * 2 * Math.PI;
        this.progressRing.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
        this.progressRing.style.strokeDashoffset = this.circumference;
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.startButton.addEventListener('click', () => this.start());
        this.pauseButton.addEventListener('click', () => this.pause());
        this.restartButton.addEventListener('click', () => this.restart());
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.startTime = Date.now() - this.elapsedTime;
            this.timerInterval = setInterval(() => this.updateDisplay(), 10);
            this.startButton.disabled = true;
            this.pauseButton.disabled = false;
            this.animateProgress();
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            this.elapsedTime = Date.now() - this.startTime;
            clearInterval(this.timerInterval);
            this.startButton.disabled = false;
            this.pauseButton.disabled = true;
            cancelAnimationFrame(this.animationFrame);
        }
    }

    restart() {
        this.pause();
        this.elapsedTime = 0;
        this.minutesElement.textContent = '00';
        this.secondsElement.textContent = '00';
        this.millisecondsElement.textContent = '00';
        this.progressRing.style.strokeDashoffset = this.circumference;
    }

    updateDisplay() {
        const currentTime = Date.now();
        this.elapsedTime = currentTime - this.startTime;
        
        const milliseconds = Math.floor((this.elapsedTime % 1000) / 10);
        const seconds = Math.floor((this.elapsedTime / 1000) % 60);
        const minutes = Math.floor((this.elapsedTime / (1000 * 60)) % 60);

        this.minutesElement.textContent = this.padTime(minutes);
        this.secondsElement.textContent = this.padTime(seconds);
        this.millisecondsElement.textContent = this.padTime(milliseconds);
    }

    animateProgress() {
        const setProgress = (percent) => {
            const offset = this.circumference - (percent / 100 * this.circumference);
            this.progressRing.style.strokeDashoffset = offset;
        };

        const duration = 60000; // 1 minute in milliseconds
        const start = Date.now();
        
        const animate = () => {
            if (!this.isRunning) return;
            
            const now = Date.now();
            const elapsed = now - start;
            const progress = (elapsed % duration) / duration * 100;
            
            setProgress(progress);
            this.animationFrame = requestAnimationFrame(animate);
        };
        
        animate();
    }

    padTime(time) {
        return time.toString().padStart(2, '0');
    }
}

// Initialize the stopwatch
const stopwatch = new Stopwatch();