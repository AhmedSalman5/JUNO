
var draggableElem = document.querySelectorAll('.draggble');

var containersDrg = document.querySelectorAll('.container');

draggableElem.forEach(draggable => {
    draggable.addEventListener('dragstart' , () => {
        draggable.classList.add('dragging');
       // draggable.id.add('IdDrag')
    })
    draggable.addEventListener('dragend' , () => {
        draggable.classList.remove('dragging');
    })
})

containersDrg.forEach(contElem => {
    contElem.addEventListener('dragover' , e =>{
        e.preventDefault();
        var draggingElement = document.querySelector('.dragging');
        contElem.appendChild(draggingElement);
    })
})
