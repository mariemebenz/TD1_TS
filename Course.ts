import { Car } from "./Car";

export interface InfoRace{
    distance : number;
    participants : Car[];
    startCourse() : void;
}

export class Course implements InfoRace{
    participants : Car[];
    distance: number;

    constructor(distance: number, ...cars: Car[]){
        this.distance=distance;
        this.participants =cars;
    }


    startCourse(): void {
    console.log(`Début de la course sur ${this.distance} km avec ${this.participants.length} voitures !`);

    // chaque voiture démarre
    this.participants.forEach(car => car.start());

    // calcul du temps 
    let results = this.participants.map(car => ({
      car,
      time: car.run(this.distance)
    }));


    // tri par temps croissant
results.sort((a, b) => a.time - b.time);

// affichage du podium
results.forEach((res, index) => {
  console.log(
    `${index + 1}️ ${res.car.Brand} ${res.car.Model} - temps: ${res.time.toFixed(2)} h`
  );
});

// affichage du vainqueur
const winner = results[0];
console.log(`Vainqueur: ${winner.car.Brand} ${winner.car.Model}`);


    }
    
}