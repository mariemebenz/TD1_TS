import { Car } from "./Car";
import { Course } from "./Course";

// Création des voitures
const car1 = new Car("Model S", "Tesla", "Rouge", 0, 2022, false, 220);
const car2 = new Car("Classe A", "Mercedes", "Bleu", 0, 2020, false, 260);
const car3 = new Car("Panamera", "Porsche", "Noir", 0, 2019, false, 270);

//  Tests des fonctionnalités de Car 
console.log("=== Tests des fonctionnalités de Car ===");
car1.start();                // Démarrage
car1.accelerate(50);         // Accélération
car1.accelerate(200);        // Dépasse maxSpeed 
console.log(`Temps estimé pour 100 km: ${car1.run(100)} h`);

car1.Color = "Noir mat";     // Setter
console.log(`Nouvelle couleur: ${car1.Color}`);

car1.stop();                 // Arrêt
car1.stop();                 // Déjà arrêtée

// Test sur une autre voiture
car2.start();
car2.accelerate(100);
console.log(`Vitesse actuelle de ${car2.Brand}: ${car2.Speed} km/h`);

// Test de la Course
console.log("\n=== Test de la course ===");
const race = new Course(100, car1, car2, car3);
race.startCourse();
