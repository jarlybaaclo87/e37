// create a Car objects ES5 with Prototype
class Vehicle {
    constructor(carCost, topSpeed) {
        this.carCost = carCost;
        this.topSpeed = topSpeed;
        this.kms = 0;
    }

    drive() {
        console.log("Driving");
        this.kms += 8;
    }

    reverse() {
        console.log("Reversing");
        if (this.kms >= 4) {
            this.kms -= 4;
        }
    }
    carInfo() {
        console.log(`Price: ${this.carCost} Top Speed: ${this.topSpeed} Kilometers: ${this.kms}`);
    }
}

class Car extends Vehicle {
    constructor(carCost, topSpeed) {
        super(carCost, topSpeed);
    }
}
let toyota = new Car(120000, "90 KPH");
for (let index = 0; index < 4; index++) {
    toyota.drive();
}
toyota.reverse();
toyota.carInfo();

let kia = new Car(75000, "60 KPH");
for (let index = 0; index < 2; index++) {
    kia.drive();
}
for (let index = 0; index < 4; index++) {
    kia.reverse();
}
kia.carInfo();

let honda = new Car(150000, "120 KPH");
for (let index = 0; index < 3; index++) {
    honda.reverse();
}
honda.carInfo();
