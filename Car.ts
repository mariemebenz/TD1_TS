export class Car{
    model : string;
    brand : string;
    color : string;
    year : number;
    speed : number;
    started: boolean;
    // la vitesse maximale de la voiture
    maxSpeed: number;

 constructor(model : string, brand : string,color : string,speed : number,year : number,started :boolean,maxSpeed :number){
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.speed = speed;
    this.started = started;
    this.maxSpeed = maxSpeed;
 }

 start():void{
    if (!this.started){
        this.started = true;
         console.log(`${this.brand} ${this.model} démarre`);
    } else{
        console.log(`${this.brand} ${this.model} est déjà démarrée`);
    }
 }

 stop() : void{
    if(this.started){
        this.started = false;
        console.log(`${this.brand} ${this.model} est arrêtée`);
    }else{
        console.log(`${this.brand} ${this.model} est déjà arrêtée`);
    }
 }

 accelerate(amount: number): void{
    if(this.started){
       if (this.speed + amount > this.maxSpeed) {
        this.speed = this.maxSpeed;
        console.log(`${this.brand} ${this.model} a atteint sa vitesse maximale (${this.maxSpeed})`);
      } else {
        this.speed += amount;
        console.log(`${this.brand} ${this.model} roule à ${this.speed} km/h`);
      }
    } else {
      console.log("Impossible d'accélérer : la voiture n'est pas démarrée !");
    }
 }


 
  run(distance: number): number {
    if (!this.started) {
      console.log(`${this.brand} ${this.model} n'est pas démarrée`);
      return Infinity; 
    }
    if (this.maxSpeed === 0) {
      return Infinity; //pour pas diviser sur 0
    }
    return distance / this.maxSpeed;
  }

 // getters
   get Model(): string { return this.model; }
  get Brand(): string { return this.brand; }
  get Color(): string { return this.color; }
  get Year(): number { return this.year; }
  get Speed(): number { return this.speed; }
  get MaxSpeed(): number { return this.maxSpeed; }
  get Started(): boolean { return this.started; }


  //  setters
  set Color(newColor: string) {
    this.color = newColor;
  }

  set MaxSpeed(newMaxSpeed: number) {
    if (newMaxSpeed > 0) {
      this.maxSpeed = newMaxSpeed;
    } else {
      console.log("La vitesse maximale doit être positive !");
    }
  }

}