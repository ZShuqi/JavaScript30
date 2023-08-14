const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// const items = [];
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault(); // prevent auto reload
  console.log('hello');
  // this => form, (we can also use document.querySelector)
  // name attribute of the input; .value => value attribute of input
  const text = this.querySelector('[name=item]').value
  const item = {
    text,
    done:false
  };

  items.push(item);
  // everytime we add an item, we call this populateList function
  //
  populateList(items, itemsList);
  // set items array to local storage
  // localStorage.setItem('items', items); // would save as Objects
  localStorage.setItem('items', JSON.stringify(items));
  this.reset(); // form element reset
}

// everytime it creats an entire list, with list items with labels inside
// [] to prevent js from breaking
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  // console.log(e.target);
  // skip this unless the target's an input
  if(!e.target.matches('input')) return;
  // set the done element of Object; (flip-flop)
  const el = e.target;
  // index of the item in the array
  // console.log(el.dataset.index);
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  // populateList(items, itemsList); // update on the page
}


addItems.addEventListener('submit', addItem); // form

// Won't work properly
// checkBoxes.forEach(input => input.addEventListener('click', () => alert('hi')));
itemsList.addEventListener('click', toggleDone);

// before we add anything
populateList(items, itemsList);
