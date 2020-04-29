document.getElementById("btn1").addEventListener("click", addTodo);

let lists = [];
let index = 0;

function displayTodo(input){

        let li = document.createElement("li");
        let a = document.createElement("a");

        a.setAttribute("href", "#");
        li.setAttribute("id", input);
        li.setAttribute("class", "li")

        let txt = document.createTextNode(input);
        let btn3 = document.createElement("button");
        let btn3_txt = document.createTextNode("X");
        let btn2 = document.createElement("button");
        let btn2_txt = document.createTextNode("✔");
        btn2.setAttribute("id", "btn2")
        btn3.setAttribute("id", "btn3");

        btn2.appendChild(btn2_txt);
        btn3.appendChild(btn3_txt);
        a.appendChild(txt);
        li.appendChild(a);
        li.appendChild(btn2)
        li.appendChild(btn3);
        document.getElementById("ul").appendChild(li);

        btn3.addEventListener("click", ()=>deleteTodo(input));
        a.addEventListener("click", ()=>toggle(input));

}

function addTodo(){
    
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

function deleteTodo(id){
    
    //console.log(id);
    document.getElementById(id).remove();
    lists = lists.filter( li => li!==id);

    console.log(lists);
}

function toggle(id){

    // let x = document.getElementById(id);
    // if( x.style.textDecoration === "none"){
    //     //x.style.textDecoration == "line-through"; 
    //     alert("none")       
    // }
    // else{
    //     x.style.textDecoration == "none";     
    //     alert("not none")   

    // }

    document.getElementById(id).style.textDecoration == "line-through"; 
    console.log(id);

}