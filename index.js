const options = {
  method: "GET",
  headers: {
    Authorization: "Bearer 563492ad6f91700001000001c7ab7e9a41184435bfcaa750d54c12c9",
  },
};

const loadbtn = document.querySelector("#load-image");
const loadSecbtn = document.querySelector("#load-second-image");
const editbtn = document.querySelectorAll(".btn-group>.btn:not(:first-child");
const cardbody = document.querySelectorAll(".card-body");
const minsText = document.querySelectorAll("small");
const searchInput = document.querySelector("[type=search]");
const searchbtn = document.querySelector("#search-button");
let cards = document.querySelectorAll(".card");
let aler = document.querySelector(".alert");

const userSearch = searchInput.value;

searchbtn.addEventListener("click", () => {
  searchImage();
});

// const searchImage = () => {
//   fetch(`https://api.pexels.com/v1/search?query=${searchInput.value}`, options)
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data.photos[0].src.original);

//       const imageSection = document.querySelectorAll(".card-img-top");
//       const photos = data.photos;
//       for (let p = 0; p < photos.length; p++) {
//         const imageDisplayerContainer = document.createElement("div");
//         imageDisplayerContainer.classList.add("image-container");
//         imageDisplayerContainer.classList.add("img-top");
//         const imageDisplayer = document.createElement("img");
//         imageDisplayer.src = photos[p].src.small;
//         imageDisplayerContainer.appendChild(imageDisplayer);

//         cards[p].insertBefore(imageDisplayerContainer, cardbody[p]);
//         imageSection[p].remove();
//         minsText[p].textContent = photos[p].id;

//         console.log(photos[p].id);
//         console.log(searchInput.value);
//       }
//     });
//   removeCard();
// };

loadbtn.addEventListener("click", () => {
  loadImage("trees");
});

loadSecbtn.addEventListener("click", () => {
  loadImage("car");
});

const searchImage = () => {
  loadImage(`${searchInput.value}`);
};

const loadImage = (image) => {
  fetch(`https://api.pexels.com/v1/search?query=${image}`, options)
    .then((response) => response.json())
    .then((data) => {
      const photos = data.photos;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        let svgs = card.querySelector("svg");
        let image;
        if (svgs) {
          image = document.createElement("img");
          svgs.parentNode.replaceChild(image, svgs);
        } else {
          image = card.querySelector("img");
        }

        image.src = photos[i].src.small;
      }

      // for (let p = 0; p < photos.length; p++) {
      //   const imageDisplayerContainer = document.createElement("div");
      //   imageDisplayerContainer.classList.add("image-container");
      //   // imageDisplayerContainer.classList.add("img-top");
      //   const imageDisplayer = document.createElement("img");
      //   imageDisplayer.src = photos[p].src.small;
      //   imageDisplayerContainer.appendChild(imageDisplayer);

      //   cards[p].insertBefore(imageDisplayerContainer, cardbody[p]);
      //   imageSection[p].remove();
      //   minsText[p].textContent = photos[p].id;

      //   console.log(photos[p].id);
      //   console.log(searchInput.value);
      // }
    });
  removeCard();
};

const changeEditbtnToHide = () => {
  for (let btn of editbtn) {
    btn.textContent = "Hide";
  }
};
changeEditbtnToHide();

const removeCard = () => {
  for (let i = 0; i < editbtn.length; i++) {
    // console.log(cards[i]);
    editbtn[i].addEventListener("click", () => {
      cards[i].style.display = "none";
    });
  }
};
