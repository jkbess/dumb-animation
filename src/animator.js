import library from './lib/all.js';

export default class {
    effect = {
        name: null,
        interval: null
    };
    activeEffect = null;
    activeInterval = null;
    library = library;

    constructor (selector, speed) {
        this.el = document.querySelector(selector);
        this.speed = this.validateSpeed(speed) || 500;
    }

    animate (effectName, speed) {
        if (this.library.hasOwnProperty(effectName)) {
            this.clear();
            const effect = this.library[effectName];
            const s = this.validateSpeed(speed);
            if (s) {
                this.speed = s;
            }
            this.activeEffect = effectName;
            this.activeInterval = effect(this.el, this.speed);
        } else {
            console.error(`${effectName} is not a valid effect.`)
        }
    }

    clear () {
        if (this.activeInterval !== null) {            
            clearInterval(this.activeInterval);
        }
        this.activeEffect = null;
        this.activeInterval = null;
        this.el.style.transformOrigin = null;
        this.el.style.transform = null;
    }

    setSpeed (speed) {
        const s = this.validateSpeed(speed);
        if (s) {
            this.speed = s;
            if (this.activeEffect) {
                this.clear();
                const effect = this.library[this.activeEffect];
                effect(this.el, this.speed);
            }
        }
    }

    validateSpeed (speed) {
        const s = parseInt(speed);
        if (typeof s === 'number' && !isNaN(s)) {
            return s;
        }
        return false;
    }
}