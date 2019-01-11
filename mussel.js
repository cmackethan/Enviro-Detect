//CODE!!!

//where the mussel algorithm should be...
//add express, node.js, opencv library, and/or synaptic.js if we need it

let imgElement = document.getElementById("imageSrc")
let inputElement = document.getElementById("fileInput");
inputElement.addEventListener("change", (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);