const container = document.querySelector('.container');
const input = document.querySelector('.input');
const button = document.querySelector('.enter');
const ul = document.querySelector('.ul');

button.addEventListener('click', function () {
  if(input.value.length > 0) {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(input.value));
  
    // the delete button
    let axe = document.createElement('a');
    axe.appendChild(document.createTextNode('X'));
    axe.classList.add('delete');
    item.appendChild(axe);
    ul.appendChild(item);
    // an event listener for the delete button
    axe.addEventListener('click', function() {
      item.remove();
    });
    input.value = '';
  }
});

input.addEventListener('keypress', function(e) {
  if(input.value.length > 0 && e.keyCode === 13) {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(input.value));
  
    // the delete button
    let axe = document.createElement('a');
    axe.appendChild(document.createTextNode('X'));
    axe.classList.add('delete');
    item.appendChild(axe);
    ul.appendChild(item);
    // an event listener for the delete button
    axe.addEventListener('click', function() {
      item.remove();
    });
    input.value = '';
  }
})
