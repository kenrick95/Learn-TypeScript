(function () {
    //Stand-alone function
    function displayResult(msg) {
        result.innerHTML = msg;
    }
    //Anonymous function/method
    var compound = function (amt, rate, years) {
        var months = years * 12;
        var yrRate = (rate / 12) / 100;
        return amt * Math.pow(1 + yrRate, months);
    };
    //Lambda function
    var $ = function (id) { return document.getElementById(id); };
    var totalButton = $('totalButton'), amount = $('amount'), rate = $('rate'), years = $('years'), result = $('result');
    //Lambda function
    totalButton.addEventListener('click', function (e) {
        var amountValue = parseFloat(amount.value), rateValue = parseFloat(rate.value), yearsValue = parseFloat(years.value);
        displayResult('$' + compound(amountValue, rateValue, yearsValue).toFixed(2));
    });
}());
//# sourceMappingURL=compounder.js.map