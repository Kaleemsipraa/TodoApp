let input = document.querySelector(".input");
let addBtn = document.querySelector(".add-btn");
let taskList = document.querySelector(".task-list");

let addTask = () => {
	let task = input.value;
	if (task === "") {
		alert("Please Write any task");
	} else {
		let taskAdd = document.createElement("li");
		taskAdd.className = "task-add";
		let deleteBtn = document.createElement("button");
		deleteBtn.innerText = "x";
		deleteBtn.className = "delete-btn";

		let date = new Date().toLocaleDateString();
		let p = document.createElement("p");
		p.innerText = date;
		p.className = "date";

		taskAdd.innerText = task;
		taskList.appendChild(taskAdd);
		taskAdd.appendChild(deleteBtn);
		taskList.appendChild(p);
		input.value = "";

		deleteBtn.addEventListener("click", () => {
			taskList.removeChild(taskAdd);
			taskList.removeChild(p);
		});
		taskAdd.addEventListener("click", (e) => {
			taskAdd.classList.toggle("done");
		});
	}
};

addBtn.addEventListener("click", () => {
	addTask();
});

input.addEventListener("keyup", (e) => {
	if (e.key == "Enter") {
		addTask();
	}
});

let menu = document.querySelector(".menu");
let ul = document.querySelector("nav ul");
menu.addEventListener("click", () => {
	ul.classList.toggle("toggle");
});
