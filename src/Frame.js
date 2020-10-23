/**
 * Created by Shrimp on 16/8/28.
 */
export default class Frame {
    // 构造
    constructor() {
        this.source = 0;
    }

    getSource() {
        return this.source;
    }

    add(pins) {
        this.source += pins;
    }
}