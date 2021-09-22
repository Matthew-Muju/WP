//while
let i = 1;
while (i <= 3){
    console.log(i)
    i++;
}

//do while
//do{
//    console.log(i);
//    i++;
//}while (i <= 2);

//for
for (let x = 0; x <= 4 ; x++){
    console.log(x);
}

//for/of
const data = [12, 34, 50, 77, 90];
for(let element of data){
    console.log(element);
}

//for/in - object literal
const student = {
    nim : 105021810012,
    regNo : 's21810058',
    prodi : 'TI',
    faculty : 'FIK',
    firstName : 'Matthew',
    lastName : 'Muju',
    gender : 'M'
};
for (let props in student){
    console.log(`${props}:${student[props]}`);
}
