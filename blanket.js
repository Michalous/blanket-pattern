let container = document.querySelector('.container');
let color_sq = document.querySelectorAll('.color_sq');
let color_class

// Create square elements
for (var i = 0; i < 45; i++) {
  let div = document.createElement('div');
//   div.textContent = i;
  div.classList.add('square');
  div.dataset.index = i;
  container.appendChild(div);
}

const empties = document.querySelectorAll('.square')

// color_sq.addEventListener('dragstart', dragStart)
// color_sq.addEventListener('dragend', dragEnd)

color_sq.forEach(function(el) {
    el.addEventListener('dragstart', dragStart)
})

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    color_class = this.className
    console.log(color_class)
    // this.className += ' hold' 
    // setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    // this.className += ' hovered'
}

function dragLeave() {
    // this.className = 'empty'
}

function dragDrop() {
    // this.className = 'empty'
    // this.append('hello')
    this.className = color_class
}