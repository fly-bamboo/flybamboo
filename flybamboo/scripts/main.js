const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/feizhu.png") {
    myImage.setAttribute("src", "images/angry.png");
  } else {
    myImage.setAttribute("src", "images/feizhu.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("输入您的尊称");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `欢迎来到飞竹大陆, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `欢迎来到飞竹大陆, ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
};
