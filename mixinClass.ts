// Eats Mixin
class Eats {
    isEating: boolean;
    eat() {
        this.isEating = true;
    }

}

//Codes Mixin
class Codes {
    isCoding: boolean;
    code() {
        this.isCoding = true;
    }

}

// Plays Mixin
class Plays {
    isPlaying: boolean;
    playing() {
        this.isPlaying = true;
    }
    played() {
        this.isPlaying = false;
    }
}

class SmartObject implements Eats, Plays,Codes {
    constructor() {
        setInterval(() => console.log(this.isPlaying + " : " + this.isEating), 500);
    }

    interact() {
        this.playing();
    }

    
    isEating: boolean = false;
    eat: () => void;
    isPlaying: boolean = false;
    playing: () => void;
    played: () => void;
    isCoding: boolean = false;
    code: () => void;
}
applyMixins(SmartObject, [Eats, Plays ,Codes]);

let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);


function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}