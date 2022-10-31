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
function validate(input){
  if(/^\s/.test(input.value))
    input.value = '';
}

let editPost = (e) => {
  input.value = e.previousElementSibling.innerHTML;
  e.parentElement.remove();
};

addBTN.addEventListener("click", () => {
  let container = document.createElement("div");
  List.appendChild(container);
  let listItem = document.createElement("li");
  listItem.innerHTML = ` <div class="flex justify-between px-2 item-center mt-2 border-2">
  <li class="w-96 py-1">${inputVal.value}</li>
  <button onClick="editPost(this)"  id="edit"><i class="fa-solid fa-pen-to-square"></i></button>
  <button id="clear" onclick="deletePost(this)">
    <i class="fa-solid fa-trash"></i>
  </button>
</div>`;
  // listItem.innerHTML = `<div class="flex"><li>${inputVal.value}</li> <button id="clear">clear</button> <button id="edit">edit</button></div>`;
  container.appendChild(listItem);
  inputVal.value = "";

});
