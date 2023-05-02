import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryClass = document.querySelector(".gallery");

let markup = "";
galleryItems.forEach(({ preview, original, description }) => {
  const newImage = `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  markup += newImage;
});
console.log("markup: ", markup);
galleryClass.insertAdjacentHTML("beforeend", markup);
const imageClick = document.querySelector(".gallery");

imageClick.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const clickedImage = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
    <img src="${clickedImage}" width="800" height="600">
`);
  instance.show();

  galleryClass.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
