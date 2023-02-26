let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const store = [];
function add() {
document.getElementById("nav").style.display="none"
document.getElementById("hero").style.display="none"
document.getElementById("tv-section1").style.display="none"
document.getElementById("tv-section2").style.display="none"
document.getElementById("tv-section3").style.display="none"
document.getElementById("tv-section4").style.display="none"
document.getElementById("accordian").style.display="none"
document.getElementById("footer").style.display="none"
// document.getElementById("total").style.display="none"
// document.getElementById("footer").style.display="none"




const email = document.createElement("input");
email.type = "email";
email.style.texttransform="lowercase"
email.placeholder = "Enter your email";
email.classList.add("new");

const button = document.createElement("button");
button.innerHTML = "submit";
button.classList.add("bbtn");
button.addEventListener('click', function() {
  store.push(email.value);
  email.value = '';
  email.style.display="none"
button.style.display="none"

document.getElementById("nav").style.display="block"
document.getElementById("hero").style.display="block"
document.getElementById("tv-section1").style.display="block"
document.getElementById("tv-section2").style.display="block"
document.getElementById("tv-section3").style.display="block"
document.getElementById("tv-section4").style.display="block"
document.getElementById("accordian").style.display="block"
document.getElementById("footer").style.display="block"

});

document.getElementById("header").appendChild(email);
document.getElementById("header").appendChild(button);


console.log(store)

}
function start(){
 const testemail= document.getElementById("testEmail");
 if(testemail.value==store[0]){
  const anchor = document.createElement("a");
  anchor.href = "./second.html";

  
  document.body.appendChild(anchor);

 
  anchor.click();
 }
else{
 alert("wrong email")
}

}