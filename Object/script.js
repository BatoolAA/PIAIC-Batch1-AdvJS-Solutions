let form1 = document.createElement("FORM");
let input1 = document.createElement("INPUT");
let input2 = document.createElement("INPUT");
let input3 = document.createElement("INPUT");
let input4 = document.createElement("INPUT");
let input5 = document.createElement("INPUT");
let cont_btn1 = document.createElement("INPUT");

input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "First Name");
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Last Name");
input3.setAttribute("type", "email");
input3.setAttribute("placeholder", "Email");
input4.setAttribute("type", "email");
input4.setAttribute("placeholder", "Confirm Email");
input5.setAttribute("type", "password");
input5.setAttribute("placeholder", "Password");
cont_btn1.setAttribute("type", "button");
cont_btn1.setAttribute("value", "Continue");

form1.appendChild(input1);
form1.appendChild(input2);
form1.appendChild(input3);
form1.appendChild(input4);
form1.appendChild(input5);
form1.appendChild(cont_btn1);

document.getElementById("div").appendChild(form1);
