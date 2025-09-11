"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(distance) {
        var cars = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            cars[_i - 1] = arguments[_i];
        }
        this.distance = distance;
        this.participants = cars;
    }
    Course.prototype.startCourse = function () {
        var _this = this;
        console.log("D\u00E9but de la course sur ".concat(this.distance, " km avec ").concat(this.participants.length, " voitures !"));
        // chaque voiture démarre
        this.participants.forEach(function (car) { return car.start(); });
        // calcul du temps pour parcourir la distance
        var results = this.participants.map(function (car) { return ({
            car: car,
            time: car.run(_this.distance)
        }); });
        // tri par temps croissant (plus rapide en premier)
        results.sort(function (a, b) { return a.time - b.time; });
        // affichage du podium
        results.forEach(function (res, index) {
            console.log("".concat(index + 1, "\uFE0F\u20E3 ").concat(res.car.Brand, " ").concat(res.car.Model, " - temps: ").concat(res.time.toFixed(2), " h"));
        });
        // affichage du vainqueur
        var winner = results[0];
        console.log("Vainqueur: ".concat(winner.car.Brand, " ").concat(winner.car.Model));
    };
    return Course;
}());
exports.Course = Course;
