const loadPhotos = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPhotos(data))
    .catch((e) => console.log(e));
};
const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const displayPhotos = (photos) => {
  const cardContainer = document.getElementById("container");
  const count = counter();
  photos.forEach((photo) => {
    const countNum = count();
    if (countNum <= 20) {
      const card = document.createElement("div");
      card.innerHTML = `
            <img src="${photo.url}">
            <h3>${photo.title}</h3>
            <button onclick="loadPhotoDetails(${photo.id})">Details</button>
        `;
      cardContainer.appendChild(card);
    }
  });
};

const loadPhotoDetails = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    photoDetails (data);
  } catch (e) {
    console.log(e);
  }
};

const photoDetails = photo => {
  const modalContainer = document.getElementById('simple-modal');
  modalContainer.classList.remove('hidden');
  modalContainer.innerHTML = '';
  modalContainer.innerHTML = `
    <h3>ID: ${photo.id}</h3>
    <h4>TITLE: ${photo.title}</h4>
    <p>MAIN IMAGE</p>
    <img src="${photo.url}" class="modal-first-img">
    <p>THUMBNAIL</p>
    <img src="${photo.thumbnailUrl}" class="modal-second-img">
    <button onclick="closeModal()">Close</button>
  `;
}

const closeModal = () => {
  document.getElementById('simple-modal').classList.add('hidden')
}

loadPhotos();
