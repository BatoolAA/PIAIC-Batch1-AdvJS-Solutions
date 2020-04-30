document.getElementById("btn1").addEventListener("click", ()=>addTodo());

let lists = [];
let index = 0;

const displayTodo = (input) => {

        let li = document.createElement("LI");
        let a = document.createElement("A");

        a.setAttribute("href", "#");
        li.setAttribute("id", input);

        let txt = document.createTextNode(input);
        let btn2 = document.createElement("BUTTON");
        let btn2_txt = document.createTextNode("X");
        btn2.setAttribute("id", "btn2");

        btn2.appendChild(btn2_txt);
        a.appendChild(txt);
        li.appendChild(a);
        li.appendChild(btn2);
        document.getElementById("ul").appendChild(li);

        btn2.addEventListener("click", ()=>deleteTodo(input));
        a.addEventListener("click", ()=>toggle(input));

}

const addTodo = () => {
    
    let input = document.getElementById("input").value;
    if( input.length !== 0 ){
        lists.push(input);
        document.getElementById("input").value = "";
        index++;
        console.log(lists);
        displayTodo(input);
    }
    else{
        alert("Please enter todo");
    }
    
}

const deleteTodo = (id) => {
    
    //console.log(id);
    document.getElementById(id).remove();
    lists = lists.filter( li => li!==id);

    console.log(lists);
}

const toggle = (id) => {

    let x = document.getElementById(id);
    x.style.textDecoration = (x.style.textDecoration == "line-through") ? "none" : "line-through";

}