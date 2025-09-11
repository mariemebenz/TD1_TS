import { Car } from "./Car";
import { Course } from "./Course";

// Création des voitures
const car1 = new Car("Model S", "Tesla", "Rouge", 0, 2022, false, 220);
const car2 = new Car("Classe A", "Mercedes", "Bleu", 0, 2020, false, 260);
const car3 = new Car("Panamera", "Porsche", "Noir", 0, 2019, false, 270);

// Création de la course (distance 100 km)
const race = new Course(100, car1, car2, car3);

// Démarrage de la course
race.startCourse();
