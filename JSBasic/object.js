//object - literal
const student = {
    nim : 105021810012,
    regNo : 's21810058',
    prodi : 'TI',
    faculty : 'FIK',
    firstName : 'Matthew',
    lastName : 'Muju',
    gender : 'M',
    isRegist : true,
    address : {
        city : 'Tomohon',
        postal : 95447,
        province : 'Sulawesi Utara'
    },
    hobbies : ['Dengar lagu','Main game']
};

console.log(student.firstName);
console.log(student['lastName']);
console.log(student.address.city);
console.log(student.hobbies[0]);

//optional chaining : ?.

console.log(student?.address?.street);

//destructuring
console.log(student.firstName);

const {firstName,address: {city}} = student;
console.log(city);

