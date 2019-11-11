
class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }

    getName(){
        console.log(this.name);
    }

    getInstance(name){
        if(!this.instance){
            this.instance = new Singleton(name);
        }

        return this.instance;
    }
}

const singleton = new Singleton();

const a = singleton.getInstance('a');
const b = singleton.getInstance('b');

console.log(a);
console.log(b);
console.log(a === b);
