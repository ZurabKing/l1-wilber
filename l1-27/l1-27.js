const addAnimation = () => {
  const element = document.querySelector(".block");

  element.addEventListener("click", () => {
    element.classList.toggle("block1");
  });
};

addAnimation();
