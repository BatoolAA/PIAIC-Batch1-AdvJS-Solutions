let form = document.createElement("FORM");

let div1 = document.createElement("DIV");
div1.setAttribute("id", "div1");
let h1 = document.createElement("h3");
let h1Txt = document.createTextNode("Stage 1 of 3");
h1.appendChild(h1Txt);
let fname = document.createElement("INPUT");
fname.setAttribute("id", "fname");
fname.setAttribute("placeholder", "First Name*");
let lname = document.createElement("INPUT");
lname.setAttribute("id", "lname");
lname.setAttribute("placeholder", "Last Name*");
let email = document.createElement("INPUT");
email.setAttribute("id", "email");
email.setAttribute("type", "email");
email.setAttribute("placeholder", "Email Address*");
let pass = document.createElement("INPUT");
pass.setAttribute("id", "pass");
pass.setAttribute("type", "password");
pass.setAttribute("placeholder", "Password*");
let confPass = document.createElement("INPUT");
confPass.setAttribute("id", "confPass");
confPass.setAttribute("type", "password");
confPass.setAttribute("placeholder", "Confirm Password*");
let sp = document.createElement("SPAN");
sp.setAttribute("id", "sp");
let contBtn1 = document.createElement("INPUT");
contBtn1.setAttribute("type", "button");
contBtn1.setAttribute("value", "Continue");
contBtn1.setAttribute("onclick", "stage1()");

div1.appendChild(h1);
div1.appendChild(fname);
div1.appendChild(lname);
div1.appendChild(email);
div1.appendChild(pass);
div1.appendChild(confPass);
div1.appendChild(sp);
div1.appendChild(contBtn1);

let div2 = document.createElement("DIV");
div2.setAttribute("id", "div2");
let h2 = document.createElement("h3");
let h2Txt = document.createTextNode("Stage 2 of 3");
h2.appendChild(h2Txt);
let address = document.createElement("INPUT");
address.setAttribute("id", "address");
address.setAttribute("placeholder", "Address*");
let p = document.createElement("p");
let pTxt = document.createTextNode("Select Country*");
p.appendChild(pTxt);
//select
let country = document.createElement("SELECT");
country.setAttribute("id", "select");
//option1
let opt1 = document.createElement("OPTION");
opt1.setAttribute("value", "China");
let opt1Txt = document.createTextNode("China");
opt1.appendChild(opt1Txt);
//option2
let opt2 = document.createElement("OPTION");
opt2.setAttribute("value", "Pakistan");
let opt2Txt = document.createTextNode("Pakistan");
opt2.appendChild(opt2Txt);
//option3
let opt3 = document.createElement("OPTION");
opt3.setAttribute("value", "USA");
let opt3Txt = document.createTextNode("USA");
opt3.appendChild(opt3Txt);
//option4
let opt4 = document.createElement("OPTION");
opt4.setAttribute("value", "Other");
let opt4Txt = document.createTextNode("other");
opt4.appendChild(opt4Txt);

country.appendChild(opt1);
country.appendChild(opt2);
country.appendChild(opt3);
country.appendChild(opt4);

let postalCode = document.createElement("INPUT");
postalCode.setAttribute("placeholder", "Postal Code");
let phone = document.createElement("INPUT");
phone.setAttribute("placeholder", "Phone");
let mobilePhone = document.createElement("INPUT");
mobilePhone.setAttribute("id", "mobilePhone");
mobilePhone.setAttribute("placeholder", "Mobile Phone*");
let contBtn2= document.createElement("INPUT");
contBtn2.setAttribute("type", "button");
contBtn2.setAttribute("value", "Continue");
contBtn2.setAttribute("onclick", "stage2()");
let backBtn1 = document.createElement("INPUT");
backBtn1.setAttribute("type", "button");
backBtn1.setAttribute("id", "back1");
backBtn1.setAttribute("value", "Back");
backBtn1.setAttribute("onclick", "backToS1()");

div2.appendChild(h2);
div2.appendChild(address);
div2.appendChild(p);
div2.appendChild(country);
div2.appendChild(postalCode);
div2.appendChild(phone);
div2.appendChild(mobilePhone);
div2.appendChild(contBtn2);
div2.appendChild(backBtn1);

let div3 = document.createElement("DIV");
div3.setAttribute("id", "div3");
let h3 = document.createElement("h3");
let h3Txt = document.createTextNode("Stage 3 of 3");
h3.appendChild(h3Txt);
let jobTitle= document.createElement("INPUT");
jobTitle.setAttribute("id", "jobTitle");
jobTitle.setAttribute("placeholder", "Job Title*");
let exp = document.createElement("INPUT");
exp.setAttribute("id", "exp")
exp.setAttribute("placeholder", "Years of Experience*");
let age = document.createElement("INPUT");
age.setAttribute("placeholder", "Age");
let website = document.createElement("INPUT");
website.setAttribute("placeholder", "Website (if any)");
let profileLink = document.createElement("INPUT");
profileLink.setAttribute("placeholder", "Profile Link");
let submit= document.createElement("INPUT");
submit.setAttribute("type", "button");
submit.setAttribute("value", "Submit");
submit.setAttribute("onclick", "stage3()");
let backBtn2 = document.createElement("INPUT");
backBtn2.setAttribute("type", "button");
backBtn2.setAttribute("id", "back2");
backBtn2.setAttribute("value", "Back");
backBtn2.setAttribute("onclick", "backToS2()");

div3.appendChild(h3);
div3.appendChild(jobTitle);
div3.appendChild(exp);
div3.appendChild(age);
div3.appendChild(website);
div3.appendChild(profileLink);
div3.appendChild(submit);
div3.appendChild(backBtn2);

let div4 = document.createElement("DIV");
div4.setAttribute("id", "div4");
let h4 = document.createElement("h3");
let h4Txt = document.createTextNode("Resume:");
h4.appendChild(h4Txt);
let rh1 = document.createElement("h2");
let rh1Txt = document.createTextNode("First Name:");
rh1.appendChild(rh1Txt);
let p1 = document.createElement("P");
p1.setAttribute("id", "p1");
let rh2 = document.createElement("h2");
let rh2Txt = document.createTextNode("Last Name:");
rh2.appendChild(rh2Txt);
let p2 = document.createElement("P");
p2.setAttribute("id", "p2");
let rh3 = document.createElement("h2");
let rh3Txt = document.createTextNode("Email Address:");
rh3.appendChild(rh3Txt);
let p3 = document.createElement("P");
p3.setAttribute("id", "p3");
let rh4 = document.createElement("h2");
let rh4Txt = document.createTextNode("Address:");
rh4.appendChild(rh4Txt);
let p4 = document.createElement("P");
p4.setAttribute("id", "p4");
let rh5 = document.createElement("h2");
let rh5Txt = document.createTextNode("Country:");
rh5.appendChild(rh5Txt);
let p5 = document.createElement("P");
p5.setAttribute("id", "p5");
let rh6 = document.createElement("h2");
let rh6Txt = document.createTextNode("Mobile Phone:");
rh6.appendChild(rh6Txt);
let p6 = document.createElement("P");
p6.setAttribute("id", "p6");
let rh7 = document.createElement("h2");
let rh7Txt = document.createTextNode("Job Title:");
rh7.appendChild(rh7Txt);
let p7 = document.createElement("P");
p7.setAttribute("id", "p7");
let rh8 = document.createElement("h2");
let rh8Txt = document.createTextNode("Years of Experience:");
rh8.appendChild(rh8Txt);
let p8 = document.createElement("P");
p8.setAttribute("id", "p8");

div4.appendChild(h4);
div4.appendChild(rh1);
div4.appendChild(p1);
div4.appendChild(rh2);
div4.appendChild(p2);
div4.appendChild(rh3);
div4.appendChild(p3);
div4.appendChild(rh4);
div4.appendChild(p4);
div4.appendChild(rh5);
div4.appendChild(p5);
div4.appendChild(rh6);
div4.appendChild(p6);
div4.appendChild(rh7);
div4.appendChild(p7);
div4.appendChild(rh8);
div4.appendChild(p8);

const _ = (x) => {
    return document.getElementById(x);
}

_("div").appendChild(form);
form.appendChild(div1);
form.appendChild(div2);
form.appendChild(div3);
form.appendChild(div4);


let details = {};

const stage1 = () => {
    let fname =_("fname").value;
    let lname =_("lname").value;
    let email =_("email").value;
    let pass =_("pass").value;
    let confPass =_("confPass").value;

    if( (fname == '') || (lname == '') || (email == '') || (pass == '') || (confPass == '')){
        alert("Please enter required fields..");
        return false;
    }
    if( pass !== confPass ){
        _("sp").innerHTML = "Password not match"
        return false;
    }
   
    details.fname = fname;
    details.lname = lname;
    details.email = email;

    _("div1").style.display = "none";
    _("div2").style.display = "block";
    
}

const stage2 = () => {
    let address = _("address").value;
    let country = _("select").value;
    let mobilePhone = _("mobilePhone").value;

    if( (address == '') || (mobilePhone == '')){
        alert("Please enter required fields..");
        return false;
    }

    details.address = address;
    details.country = country;
    details.mobilePhone = mobilePhone;

    _("div2").style.display = "none";
    _("div3").style.display = "block";
}

const stage3 = () => {
    let jobTitle = _("jobTitle").value;
    let exp = _("exp").value; 

    if( (jobTitle == '') || (exp == '')){
        alert("Please enter required fields..");
        return false;
    }

    details.jobTitle = jobTitle;
    details.exp = exp;

    _("div3").style.display = "none";
    _("div4").style.display = "block";

    _("p1").innerHTML = details.fname;
    _("p2").innerHTML = details.lname;
    _("p3").innerHTML = details.email;
    _("p4").innerHTML = details.address;
    _("p5").innerHTML = details.country;
    _("p6").innerHTML = details.mobilePhone;
    _("p7").innerHTML = details.jobTitle;
    _("p8").innerHTML = details.exp;

    console.log(`
    First Name: ${details.fname}
    Last Name: ${details.lname}
    Email: ${details.email}
    Address: ${details.address}
    Country: ${details.country}
    Mobile Phone: ${details.mobilePhone}
    Job Title: ${details.jobTitle}
    Experience: ${details.exp}
    `);
}

const backToS1 = () => {
    _("div2").style.display = "none";
    _("div1").style.display = "block";
}

const backToS2 = () => {
    _("div3").style.display = "none";
    _("div2").style.display = "block";
}
