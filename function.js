document.body.style.backgroundColor = 'grey';

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'foto.jpg') {
      miImage.setAttribute('src','foto2.jpg');
    } else {
      miImage.setAttribute('src', 'foto.jpg');
    }
}
