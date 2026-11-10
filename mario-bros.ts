class Mario {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: "mario" | "super mario" | "fire mario" = "mario";

    moveRight(): void{
        this.positionX = this.positionX + this.speed;
    }

    moveLeft(): void{
        this.positionX = this.positionX - this.speed;
    }

    //diserang
    takeDamage(): string {
        if (this.invincible) {
            return "Mario kebal, serangan tidak berpengaruh";
        }
        this.hp = this.hp - 1;
        this.currentForm = 'mario';
        return "Mario diserang, HP sekarang " + this.hp;
    }

    //fireflower
    shootFireball(): string {
        if (this.currentForm === 'fire mario') {
            return "Mario menembakkan bola api!";
        }
        return "Mario tidak bisa menembak, butuh Fire Flower";
    }
}

class Item {
    use(mario: Mario): string {
        return "Item dipakai";
    }
}

class SuperMushroom extends Item {
    use(mario: Mario): string {
        mario.currentForm = 'super mario';
        mario.hp = mario.hp + 1;
        return "Mario menjadi Super Mario, HP + 1";
    }
}

class FireFlower extends Item {
    use(mario: Mario): string {
        mario.currentForm = 'fire mario';
        mario.hp = mario.hp + 1;
        return "Mario menjadi Fire Mario, HP + 1";
    }
}

class SuperStar extends Item {
    use(mario: Mario): string {
        mario.invincible = true;
        return "Mario kebal serangan";
    }
}

const mario = new Mario();
console.log(mario);

mario.moveRight();
mario.moveRight();
mario.moveLeft();
console.log("Posisi X:", mario.positionX);

console.log("--- Jamur ---");
console.log(new SuperMushroom().use(mario));
console.log(mario.currentForm, mario.hp);         
 
console.log("--- Bunga ---");
console.log(new FireFlower().use(mario));
console.log(mario.shootFireball());
console.log(mario.currentForm, mario.hp);         
 
console.log("--- Diserang ---");
console.log(mario.takeDamage());                  
console.log(mario.currentForm, mario.hp);
 
console.log("--- Bintang ---");
console.log(new SuperStar().use(mario));
console.log(mario.takeDamage());                  
console.log(mario.hp);