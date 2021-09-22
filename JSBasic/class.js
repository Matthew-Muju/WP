//class
class student {
    constructor(nim, faculty){
        this.nim = nim;
        this.faculty = faculty;
    }
    display(){
        return `NIM: ${this.nim} ${this.faculty}`;
    }
}

//instantiation
const stul = new student('105021810012','FIK');
console.log(stul);