interface IPainting {
    title: string;
    year: string;
    link: string;
    image: string;
}
class Painting implements IPainting{
    title: string;
    year: string;
    link: string;
    image: string;
    constructor(painting: IPainting) {
        this.title = painting.title;
        this.year = painting.year;
        this.link = painting.link;
        this.image = painting.image;
    }
}