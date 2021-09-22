export const PI = Math.PI;

export function hello(name) {
    return `hello ${name}`;
}

export class student{
    constructor(nim, faculty){
        this.nim = nim;
        this.faculty = faculty;
    }
    display(){
        return `${this.nim} / ${this.faculty}`;
    }
}