/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel(...paths){ // allows any number of image paths to be passed to one argument
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  leftButton.textContent = " < ";

  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  rightButton.textContent = " > ";

  const images = paths.map(path => {
    const image = document.createElement("img");
    image.src = path;
    image.style = "transition: opacity 1s; display: initial; width: 100%";
    carousel.append(image);
    return image;
  });

  carousel.prepend(leftButton);
  carousel.append(rightButton);

  let currentIndex = 0;

  function hideAllButCurrentIndex(){
    images.forEach((item, index) => {
      if(currentIndex === index) item.style.opacity = "100%";
      else item.style.opacity = "0%";
    });
  }

  hideAllButCurrentIndex();
  
  leftButton.addEventListener("click", event => {
    currentIndex -= 1;
    if(currentIndex < 0) currentIndex += images.length;
    hideAllButCurrentIndex();
  });

  rightButton.addEventListener("click", event => {
    currentIndex += 1;
    if(currentIndex >= images.length) currentIndex -= images.length;
    hideAllButCurrentIndex();
  });

  return carousel;
}

document.querySelector(".carousel-container").append(carousel(
  "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg",
  "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg",
  "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg",
  "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg"
));