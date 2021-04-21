class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        return newState = state * 1,5;
    }
    set controlState(newState) {
        if (newState < 0) {
            this.state = 0;
        } else if (newState > 100) {
            this.state = 100;
        } else {
            this.state = newState;
        }
    }
    get seeState() {
        return this.state;
    }
}