//literal array
/*const faculties = [
    'Ekonomi',
    'Ilmu Komputer',
    'Keperawatan',
    'Pertanian',
    'Pendidikan'
];
console.log(faculties);
console.log(faculties.length);

faculties[5] = 'Filsafat';
faculties.push('ASMIK');
faculties.unshift('Kelautan');
console.log(faculties);
console.log(faculties.length);

faculties.shift();
faculties.pop();
console.log(faculties);
console.log(faculties.length);

//high order function
//for each
faculties.forEach(function(faculty){
    console.log(faculty);
});
*/

const books = [{
    isbn: '123-1994-122',
    title: 'Title One',
    author: 'May',
    isPublished : true
},
{
    isbn: '123-1234-122',
    title: 'Title Two',
    author: 'Moon',
    isPublished : false
},{
    isbn: '120-7234-122',
    title: 'Title Three',
    author: 'John',
    isPublished : true
}];
//map
const bookTitles = books.map(function(buku){
    return buku.author;
});

console.log(bookTitles);
//filter
const publishedBooks = books.filter(function(buku){
    return buku.isPublished === true;
});

console.log(publishedBooks);
//sort
const array1 = [1, 2, 7, 5, 6];

array1.sort();
console.log(array1);
//reduce
const reducer = function(accumulator, currentValue){
    return accumulator + currentValue;
}
console.log(array1.reduce(reducer,7));