function loadData () {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then(data => displayPhotos(data));
}
loadData();

function displayPhotos (photos) {
    console.log(photos);
    const photosContainer = document.getElementById('photos-container');
    for (const photo of photos) {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src=${photo.url} alt='images'>
        `;
        photosContainer.appendChild(div);
    }
}