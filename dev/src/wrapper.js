//::LICENSE:://
(function (define) {
    define(function(){

//::PERSPECTIVE_TRANSFORM:://

        return PerspectiveTransform;
    });
}(typeof define === "function" && define.amd ? define : function (app) {
    window["PerspectiveTransform"] = app();
}));
