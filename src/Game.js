export default class Game {
    // 构造
    constructor() {
        this.source = 1;
    }

    getSource() {
        return this.source;
    }

    add(pins) {
        this.source += pins;
    }


}