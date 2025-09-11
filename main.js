"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var Course_1 = require("./Course");
// Création des voitures
var car1 = new Car_1.Car("Model S", "Tesla", "Rouge", 0, 2022, false, 250);
var car2 = new Car_1.Car("Mustang", "Ford", "Bleu", 0, 2020, false, 220);
var car3 = new Car_1.Car("Civic", "Honda", "Noir", 0, 2019, false, 200);
// Création de la course (distance 100 km)
var race = new Course_1.Course(100, car1, car2, car3);
// Démarrage de la course
race.startCourse();
