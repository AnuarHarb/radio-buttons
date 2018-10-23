const inputs = document.querySelectorAll('input[name=pet]');

for(let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', choosePet);
}

function choosePet(event) {
  let pet = event.target.value;
  alert(pet);
}
