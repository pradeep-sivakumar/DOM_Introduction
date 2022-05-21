let form = document.getElementById("addForm");
let item = document.getElementById('items');
let change = document.getElementById('select');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

item.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItem);

// let s = change.addEventListener('change', selectionItem)




function addItem(e){
    e.preventDefault();

    
    let newItem = document.getElementById('item').value;

    let list = document.createElement('li');

    list.className = 'list-group-item';

    list.appendChild(document.createTextNode(newItem+""));

    // list.appendChild(document.createTextNode(s));

    item.appendChild(list);

    let button = document.createElement('button');

    button.className = 'btn btn-danger btn-sm float-end delete';

    button.appendChild(document.createTextNode('Delete'));

    list.appendChild(button);
}

function removeItem(e){

    if(e.target.classList.contains('delete')){

        if(confirm('Are You Sure?')){

            let current = e.target.parentElement;
            
            item.removeChild(current);
            
        }
    }
}

function filterItem(e){
    let text = e.target.value.toLowerCase();
    let itemsList = items.getElementsByTagName('li');

    Array.from(itemsList).forEach(function(item){
        let itemName = item.firstChild.textContent;
        
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.backgroundColor = 'skyblue';
        }
    })
}