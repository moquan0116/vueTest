/* export default class Test {
    order = '2018';
    constructor () {
        this.name = 'hello';
    }

    static getIt () {
        return new Test();
    }
    add (param) {
        return this.name + param + this.order;
    }
} */
const calculator = (function () {
    // 这里形成一个单独的私有的空间
    // 私有成员的作用：
    //   1、将一个成员私有化
    //   2、抽象公共方法（其他成员中会用到的）

    // 私有的转换逻辑
    function Range (from, to) {
        this.from = from;
        this.to = to;
    }

    Range.prototype = {
        constructor: Range,
        includes: function (x) {
            return this.from <= x && x <= this.to;
        },
        foreach: function (f) {
            for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
        },
        toString: function () {
            return '(' + this.from + '...' + this.to + ')';
        }
    };
    return new Range(1, 3);
})();
export default {
    calculator
};
