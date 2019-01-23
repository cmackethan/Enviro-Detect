//CODE!!!

//where the mussel algorithm should be...
//add express, node.js, opencv library, and/or synaptic.js if we need it\

//some openCV framework
let imgElement = document.getElementById("imageinput")
let inputElement = document.getElementById("submitbutton");
inputElement.addEventListener("change", (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

