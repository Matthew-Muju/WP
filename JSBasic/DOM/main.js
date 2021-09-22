/**
 * SELECTORS
 * 
 * getElementById()
 * getElementsByClassName()
 * getElementsByTagName()
 * 
 * querySelector()
 * querySelectorAll()
 * 
 */

// let title = document.getElementById('title');
// title.textContent = 'Manage Program Studi';
// console.log(title.innerText);

// let title = document.querySelector('#title');
// console.log(title);


// let prodis1 = document.getElementsByClassName('list-item');
// console.log(prodis1);

// let prodis = document.querySelector('.list-item');
// console.log(prodis);

// let prodis = document.querySelectorAll('.list-item');
// console.log(prodis);


// let subTitle = document.getElementsByTagName('h2');
// console.log(subTitle);

// let subTitle = document.querySelector('h2');
// console.log(subTitle);

// let subTitle = document.querySelectorAll('h2');
// console.log(subTitle);


// let submitBtn = document.querySelector('input[type="submit"]');
// console.log(submitBtn);

// let prodiName = document.querySelectorAll('input[type="text"]');
// console.log(prodiName[1]);



let firstProdi = document.querySelector('li:first-child');
firstProdi.style.color = 'red';
firstProdi.style.backgroundColor = 'rgba(255, 255, 128, .5)';
console.log(firstProdi);

// let lastProdi = document.querySelectorAll('li:last-child');
// console.log(lastProdi);

// let thirdProdi = document.querySelectorAll('li:nth-child(3)');
// console.log(thirdProdi);