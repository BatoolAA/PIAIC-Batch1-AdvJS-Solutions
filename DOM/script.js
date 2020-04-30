let div = document.createElement("DIV");

let h1 = document.createElement("H1");
let txt = document.createTextNode("Todo List");

h1.appendChild(txt);
div.appendChild(h1);

let input = document.createElement("INPUT");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add Todo..");

div.appendChild(input);

let btn1 = document.createElement("BUTTON");
let btn_txt1 = document.createTextNode("Add Todo");
btn1.setAttribute("id", "btn1");

btn1.appendChild(btn_txt1);
div.appendChild(btn1);

let list = ["read a book", "go to market", "do the dishes"];
let ul = document.createElement("UL");

for( let i=0; i<list.length; i++){
    
    let li = document.createElement("LI");
    let a = document.createElement("A");
    let txt =document.createTextNode(list[i]);

    let btn2 = document.createElement("BUTTON");
    let btn_txt2 = document.createTextNode("x");
    btn2.setAttribute("id", "btn2");

    a.appendChild(txt);
    btn2.appendChild(btn_txt2);
    li.appendChild(a);
    li.appendChild(btn2);
    ul.appendChild(li);
}

div.appendChild(ul);

document.body.appendChild(div);