window.alert("ok"); //اظهار رسالة للمتسخدم



let x=25;
let y=5;
console.log(x ** y);
console.log(x+y);
console.log(x/y);
console.log(x%y);
console.log(x-y);

let cardss={
    Header : "hello",
    content : " I AM HOIFA",
    footer : "SAVE PAGE"

};
document.getElementById("card-header").innerHTML = cardss.Header;
document.getElementById("card-body").innerHTML = cardss.content;
document.getElementById("card-footer").innerHTML = cardss.footer;

const names=["hos","hoz","hoo"]; 
const lasts=["mon","moi","mou"];

document.getElementById("frist name1").innerHTML=names[0];
document.getElementById("lats1").innerHTML=lasts[0];
document.getElementById("frist name2").innerHTML=names[1];
document.getElementById("lats2").innerHTML=lasts[1];
document.getElementById("frist name3").innerHTML=names[2];
document.getElementById("lats3").innerHTML=lasts[2];