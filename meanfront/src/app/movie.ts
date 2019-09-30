export class Movie {
    // konstruktorimetodi joka rakentaa student-olion
    constructor(
        public _id: string, // mongon lisäämä _id
        public name: string,
        public year: string,
        public genre: string,
        public length: string,
        public rating: string,
        public imgurl: string,
        public review: string) { }
}
