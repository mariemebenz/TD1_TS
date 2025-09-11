"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(model, brand, color, speed, year, started, maxSpeed) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.started = started;
        this.maxSpeed = maxSpeed;
    }
    Car.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            console.log("".concat(this.brand, " ").concat(this.model, " d\u00E9marre"));
        }
        else {
            console.log("".concat(this.brand, " ").concat(this.model, " est d\u00E9j\u00E0 d\u00E9marr\u00E9e"));
        }
    };
    Car.prototype.stop = function () {
        if (this.started) {
            this.started = false;
            console.log("".concat(this.brand, " ").concat(this.model, " est arr\u00EAt\u00E9e"));
        }
        else {
            console.log("".concat(this.brand, " ").concat(this.model, " est d\u00E9j\u00E0 arr\u00EAt\u00E9e"));
        }
    };
    Car.prototype.accelerate = function (amount) {
        if (this.started) {
            if (this.speed + amount > this.maxSpeed) {
                this.speed = this.maxSpeed;
                console.log("".concat(this.brand, " ").concat(this.model, " a atteint sa vitesse maximale (").concat(this.maxSpeed, ")"));
            }
            else {
                this.speed += amount;
                console.log("".concat(this.brand, " ").concat(this.model, " roule \u00E0 ").concat(this.speed, " km/h"));
            }
        }
        else {
            console.log("Impossible d'accélérer : la voiture n'est pas démarrée !");
        }
    };
    Car.prototype.run = function (distance) {
        if (!this.started) {
            console.log("".concat(this.brand, " ").concat(this.model, " n'est pas d\u00E9marr\u00E9e"));
            return Infinity;
        }
        if (this.maxSpeed === 0) {
            return Infinity; //pour pas diviser sur 0
        }
        return distance / this.maxSpeed;
    };
    Object.defineProperty(Car.prototype, "Model", {
        // getters
        get: function () { return this.model; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Brand", {
        get: function () { return this.brand; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Color", {
        get: function () { return this.color; },
        //  setters
        set: function (newColor) {
            this.color = newColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Year", {
        get: function () { return this.year; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Speed", {
        get: function () { return this.speed; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "MaxSpeed", {
        get: function () { return this.maxSpeed; },
        set: function (newMaxSpeed) {
            if (newMaxSpeed > 0) {
                this.maxSpeed = newMaxSpeed;
            }
            else {
                console.log("La vitesse maximale doit être positive !");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Started", {
        get: function () { return this.started; },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
exports.Car = Car;
