// let first = document.getElementById("par").textContent;
// let second = first.replaceAll("p", "s");
// console.log(second);

// const users = ["Новый", "Egor", "Jaroslav"];

// for (let index = 0; index < users.length; index++) {
//     const para = document.createElement("p"); 
//     para.textContent = users[index].replace("ы", "и");
//     para.id = "user" + index;
//     document.querySelector(".users").appendChild(para);
// }

let circle = document.createElement("div");
circle.style.backgroundColor = "red";
circle.style.width = "100px";
circle.style.height = "100px";
circle.style.borderRadius = "50%";
circle.style.marginLeft = "100px";
document.body.appendChild(circle);
