const URL = 'https://api.thecatapi.com/v1/images/search';

fetch(URL)
.then(respuesta => respuesta.json())
.then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
})


