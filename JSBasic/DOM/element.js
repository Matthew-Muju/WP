// create the element
const p = document.createElement('p');
const text = document.createTextNode('Please fill the form below to add prodi');

p.className = 'description';

p.appendChild(text);
console.log(p);

// insert the element
const main = document.querySelector('#main');
const form = document.querySelector('form');

main.insertBefore(p, form);