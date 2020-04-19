'use strict';
const berry = document.getElementById("berry");
berry.style.background = "red";

const orange = document.querySelector('li[data-foodtype="squishy"]');
orange.style.background = "orange";

const collection = document.getElementsByTagName("li");
console.log(collection);
for (let i = 0; i < collection.length; i++) {
    if (collection[i].innerText == "Pear") {
        collection[i].style.background = "green";
    }
    collection[i].style.width = "50";
    collection[i].style.listStyleType = "none";
}

const queryCollection = document.querySelectorAll("li");
console.log(queryCollection);

queryCollection.forEach((element) => {
    console.log(element.innerText);
    element.style.borderStyle = "solid";
});
