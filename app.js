const addBTN = document.getElementById("addBtn");
const List = document.querySelector(".list");
const editBTN = document.getElementById("edit");
const clearBTN = document.getElementById("clear");
const inputVal = document.getElementById("input");
console.log(inputVal);

//  Clear Button
let deletePost = (e) => {
  // console.log('yes')
  e.parentElement.remove();
};

// no whitespace
function validate(input) {
  if (/^\s/.test(input.value)) input.value = "";
}

let editPost = (e) => {
  input.value = e.previousElementSibling.innerHTML;
  e.parentElement.remove();
};

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    addFunction();
  }
});

addBTN.addEventListener("click", () => {
  addFunction();
});

function addFunction() {
  if (inputVal.value == "") {
    console.log("yes");
  } else {
    let container = document.createElement("div");
    List.appendChild(container);
    let listItem = document.createElement("li");
    listItem.innerHTML = `  <div class="flex justify-between px-2 item-center mt-4  rounded bg-white">
  <li class="w-96 py-3">kya bee</li>
  <button id="edit" onClick="editPost(this)">
    <i class="fa-solid fa-pen-to-square text-xl"></i>
  </button>
  <button id="clear" onclick="deletePost(this)">
    <i class="fa-solid fa-trash text-xl"></i>
  </button>
</div>`;
    // listItem.innerHTML = `<div class="flex"><li>${inputVal.value}</li> <button id="clear">clear</button> <button id="edit">edit</button></div>`;
    container.appendChild(listItem);
    inputVal.value = "";
  }
}
