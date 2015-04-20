var Timer = function () {
    var _this = this;
    this.start = document.getElementById('startButton');
    this.stop = document.getElementById('stopButton');
    this.timer = document.getElementById('timer');
    this.timerId = null;
    this.value = 0;
    //With lambda (this will be correct)
    this.start.addEventListener('click', function () { return _this.updateTimer(); });
    //Without lambda (this will be button which isn't correct)
    //this.start.addEventListener('click', this.updateTimer); 
    this.stop.addEventListener('click', function () { return _this.stopTimer(); });
};
//Using standard JavaScript prototype pattern here rather than TypeScript classes 
//(they haven't been covered yet)
Timer.prototype = {
    updateTimer: function () {
        var _this = this;
        try {
            this.start.disabled = true;
            this.timerId = window.setInterval(function () { return _this.timer.innerHTML = _this.value++; }, 1000);
        }
        catch (exp) {
            alert(exp);
        }
    },
    stopTimer: function () {
        this.start.disabled = false;
        window.clearInterval(this.timerId);
        this.value = 0;
        this.timer.innerHTML = 0;
    }
};
var timer = new Timer();
//# sourceMappingURL=lambdas.js.map