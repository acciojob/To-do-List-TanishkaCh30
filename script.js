let button = document.getElementById("addTodoBtn");
let ol =  document.getElementById("todoList");
let input = document.getElementById("newTodoInput");


button.addEventListener("click",()=>{

	let li = document.createElement("li");
	li.innerText = input.value;
	ol.appendChild(li);
	input.value="";
})


