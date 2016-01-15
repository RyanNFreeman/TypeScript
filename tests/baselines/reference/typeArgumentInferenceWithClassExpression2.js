//// [typeArgumentInferenceWithClassExpression2.ts]
function foo<T>(x = class { prop: T }): T {
    return undefined;
}

// Should not infer string because it is a static property
foo(class { static prop = "hello" }).length;

//// [typeArgumentInferenceWithClassExpression2.js]
function foo(x) {
    if (x === void 0) { x = (function () {
        function class_1() {
        }
        return class_1;
    }()); }
    return undefined;
}
// Should not infer string because it is a static property
foo((function () {
    function class_2() {
    }
    class_2.prop = "hello";
    return class_2;
}())).length;
