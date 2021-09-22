const form = document.querySelector('#prodi-form');
const search = document.querySelector('#search');
const prodi = document.querySelector('#prodi');


form.addEventListener('submit', insertProdi);
search.addEventListener('keyup', searchProdi);
prodi.addEventListener('click', removeProdi);


function insertProdi(event) {
  event.preventDefault();

  const prodiName = document.querySelector('#prodi-name');
  const prodiAbbr = document.querySelector('#prodi-abbr');

  // create element
  const li = document.createElement('li');
  li.className = 'list-item';
  li.appendChild(document.createTextNode(`${prodiName.value} / ${prodiAbbr.value} | `));

  const a = document.createElement('a');
  a.className = 'delete';
  a.setAttribute('href', '#');

  a.appendChild(document.createTextNode('Delete'));

  li.appendChild(a);

  const ul = document.querySelector('#prodi');
  ul.appendChild(li);

  prodiName.value = '';
  prodiAbbr.value = '';
}


function searchProdi(event) {
  const searchText = event.target.value.toLowerCase();

  const allProdi = [...document.querySelectorAll('li')];
  
  allProdi.forEach(prodi => {
    let prodiName = prodi.firstChild.textContent;

    if(prodiName.toLowerCase().indexOf(searchText) != -1) {
      prodi.style.display = 'block';
    } else {
      prodi.style.display = 'none';
    }
  });
}


function removeProdi(event) {
  if(event.target.classList.contains("delete")) {
    const li = event.target.parentElement;
    prodi.removeChild(li);
  }
}