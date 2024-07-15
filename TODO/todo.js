let tittle = document.getElementById("tittle");
let des = document.getElementById("description");
let form = document.querySelector("form");
let container = document.querySelector(".container");

const tasks = [];

function showAllTasks() {
    container.innerHTML = ""; // Clear previous content

    tasks.forEach((task, index) => {
        let div = document.createElement("div");
        div.setAttribute("class", "task");

        let innerDiv = document.createElement("div");
        div.appendChild(innerDiv);
        
        let p = document.createElement("p");
        p.textContent = `Title: ${task.title}`;
        innerDiv.appendChild(p);

        let span = document.createElement("span");
        span.textContent = `Description: ${task.description}`;
        innerDiv.appendChild(span);

        container.appendChild(div);
    });

    function remtask(){
        tasks.foreach((value)=>{
            let div = document.querySelector(value);
            div.remove
        });
    }
    let btn = document.createElement("button");
    btn.setAttribute("class", "delete");
    btn.innerText = "";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    tasks.push({
        title: tittle.value,
        description: des.value
    });

    showAllTasks();
    form.reset(); // Clear form fields after submission
});

// Initial display
showAllTasks();
