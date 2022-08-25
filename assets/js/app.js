// console.log('hello');
let btn = document.getElementById('btn-photo');
let photoChien = document.getElementById('chien-photo');

btn.addEventListener('click', afficher)

function afficher() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
        return response.json();
    }).then(function(data){
            photoChien.innerHTML =`<img src="${data.message}"/>`;
            // photoChien.style.backgroundImage = "url("+data.message+")";
        })
}