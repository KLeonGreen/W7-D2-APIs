const options = {
  method: "GET",
  headers: {
    Authorization: "Bearer 563492ad6f91700001000001c7ab7e9a41184435bfcaa750d54c12c9",
  },
};

fetch("https://api.pexels.com/v1/search?query=Ocean", options)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.photos[0].src.original);
    const loadbtn = document.querySelector("#load-image");
    const cards = document.querySelectorAll(".card");

    const imageSection = document.querySelectorAll(".card-img-top");
    loadbtn.addEventListener("click", () => {
      const photos = data.photos;
      for (let p = 0; p < photos.length; p++) {
        const imageDisplayerContainer = document.createElement("div");
        imageDisplayerContainer.classList.add("card-img-top");
        const imageDisplayer = document.createElement("img");
        imageDisplayer.src = photos[p].src.original;
        imageDisplayerContainer.appendChild(imageDisplayer);
        console.log(photos[p].src.original);

        for (let image of imageSection) {
          image.remove();

          //   image.innerHTML = imageDisplayerContainer;
          //   image.appendChild(imageDisplayerContainer);
        }
        for (let card of cards) {
          card.appendChild(imageDisplayerContainer);
          // imageDisplayerContainer.classList.add("card-img-top");
        }
      }
    });
  });
