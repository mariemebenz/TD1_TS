import { Car } from "./Car";
import { Course } from "./Course";

// Création des voitures
const car1 = new Car("Model S", "Tesla", "Rouge", 0, 2022, false, 250);
const car2 = new Car("Mustang", "Ford", "Bleu", 0, 2020, false, 220);
const car3 = new Car("Civic", "Honda", "Noir", 0, 2019, false, 200);

// Création de la course (distance 100 km)
const race = new Course(100, car1, car2, car3);

// Démarrage de la course
race.startCourse();
