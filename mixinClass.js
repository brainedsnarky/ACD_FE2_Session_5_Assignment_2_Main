// Disposable Mixin
var Eats = (function () {
    function Eats() {
    }
    Eats.prototype.eat = function () {
        this.isEating = true;
    };
    return Eats;
}());
var Codes = (function () {
    function Codes() {
    }
    Codes.prototype.code = function () {
        this.isCoding = true;
    };
    return Codes;
}());
// Activatable Mixin
var Plays = (function () {
    function Plays() {
    }
    Plays.prototype.playing = function () {
        this.isPlaying = true;
    };
    Plays.prototype.played = function () {
        this.isPlaying = false;
    };
    return Plays;
}());
var SmartObject = (function () {
    function SmartObject() {
        var _this = this;
        this.isEating = false;
        this.isPlaying = false;
        this.isCoding = false;
        setInterval(function () { return console.log(_this.isPlaying + " : " + _this.isEating); }, 500);
    }
    SmartObject.prototype.interact = function () {
        this.playing();
    };
    return SmartObject;
}());
applyMixins(SmartObject, [Eats, Plays, Codes]);
var smartObj = new SmartObject();
setTimeout(function () { return smartObj.interact(); }, 1000);
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
