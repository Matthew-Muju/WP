//spread operator: ...
let grade = [10, 90, 80, 50, 70];

let allGrades = [5, 9, 80, ...grade, 60, 40];
console.log(allGrades)

//ternary operator
//condition ? trueValue : falseValue
let prodi = 2;

console.log(prodi ===1 ? 'Sistem Informasi' : 'Informatika');

//nullish coalescing operator
let user = 'Admin';
console.log(user ?? 'Guest');