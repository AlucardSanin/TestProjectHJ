const textline = document.createElement('ul');
const list = document.createElement('div');
list.classList.add('List')
const lines = document.getElementById('lines');
lines.appendChild(list);
let text = document.getElementById('input');

let type = 'p';
const input = document.getElementById('input');
input.addEventListener('keydown', (e) => {

  if (e.key != 'Backspace' && text.value.trim() == '/1') {
    text.value = '';
    type = 'h1';   
    input.placeholder = 'Heading 1';   
  }

  if (e.key === 'Backspace' && text.value == ''){
   input.placeholder = 'Type /1 and hit enter to start typing an H1 Text';
  }

  else if(e.key === 'Enter' && text.value.trim().length > 0){
    textwriter(type);
    type = 'p';
    input.placeholder = 'Type /1 and hit enter to start typing an H1 Text';
  }
})

function textwriter(type) {
  const line = document.createElement(type);
  line.textContent = text.value;
  list.appendChild(line);
  text.value = '';  
  input.placeholder = 'Type /1 and hit enter to start typing an H1 Text';
};
