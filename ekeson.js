let header = document.querySelector('header');
let spanBody = document.querySelector('.ul-span-body');
let liBody = document.querySelector('ul');

spanBody.addEventListener('click', spanClick);

function spanClick(){
  header.classList.toggle('show');
}

liBody.addEventListener('click', liClick);

function liClick(){
  header.classList.remove('show');
}