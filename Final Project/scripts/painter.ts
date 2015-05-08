interface IPainter {
    name: string;
    style: string;
    nationality: string;
    birthdate: string;
    birthplace: string;
}

class Painter implements IPainter {
    name: string;
    style: string;
    nationality: string;
    birthdate: string;
    birthplace: string;
    examples: IPainting[] = [];
    constructor(painter: IPainter) {
        this.name = painter.name;
        this.style = painter.style;
        this.nationality = painter.nationality;
        this.birthdate = painter.birthdate;
        this.birthplace = painter.birthplace;
    }
    addExample(painting: IPainting) {
        this.examples.push(painting);
    }
}
class Painters {
    painters: Painter[] = [];
    addPainter(painter: Painter) {
        this.painters.push(painter);
    }
    getPainterByName(name: string): Painter {
        var ret: Painter = null;
        this.painters.forEach((painter) => {
            if (painter.name === name) {
                ret = painter;
                return false;
            }
        });
        return ret;
    }
}