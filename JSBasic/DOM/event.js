// click
// const btn = document.querySelector('#buttonClick');
// btn.addEventListener('click', myEventHandler);

// function myEventHandler(event) {
//   console.log(event);

//   const h2 = document.querySelector('.sub-title');
//   h2.style.backgroundColor = 'blue';
  
//   console.log('Click event');
// }

// mousemove
// const kotak = document.querySelector('#kotak');
// kotak.addEventListener('mousemove', myEventHandler);

// function myEventHandler(event) {
//   // kotak.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 70)`;
//   document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 70)`;
// }


// keyup
const typing = document.querySelector('#typing');
typing.addEventListener('keyup', myEventHandler);

function myEventHandler(event) {
  let kotak = document.querySelector('#kotak');
  kotak.innerHTML = `<p>${event.target.value}</p>`;
}
