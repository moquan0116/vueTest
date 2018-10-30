export default class Payment {
    constructor () {
        this.name = 'hello';
    }

    static getIt () {
        return new Payment();
    }
    add (param) {
        return this.name + param;
    }
}
