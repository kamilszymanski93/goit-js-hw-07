import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryClass = document.querySelector(".gallery");

let markup = "";
galleryItems.forEach(({ preview, original, description }) => {
  const newImage = `<li class="gallery__item">
<a href="${original}"><img src="${preview}" alt="${description}" title="${description}"/></a>
</li>`;
  markup += newImage;
});
console.log("markup: ", markup);
galleryClass.insertAdjacentHTML("beforeend", markup);
const imageClick = document.querySelector(".gallery");

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

// <a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
//  </a>
