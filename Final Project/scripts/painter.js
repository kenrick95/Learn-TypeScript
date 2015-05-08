var Painter = (function () {
    function Painter(painter) {
        this.examples = [];
        this.name = painter.name;
        this.style = painter.style;
        this.nationality = painter.nationality;
        this.birthdate = painter.birthdate;
        this.birthplace = painter.birthplace;
    }
    Painter.prototype.addExample = function (painting) {
        this.examples.push(painting);
    };
    return Painter;
})();
var Painters = (function () {
    function Painters() {
        this.painters = [];
    }
    Painters.prototype.addPainter = function (painter) {
        this.painters.push(painter);
    };
    Painters.prototype.getPainterByName = function (name) {
        var ret = null;
        this.painters.forEach(function (painter) {
            if (painter.name === name) {
                ret = painter;
                return false;
            }
        });
        return ret;
    };
    return Painters;
})();
//# sourceMappingURL=painter.js.map