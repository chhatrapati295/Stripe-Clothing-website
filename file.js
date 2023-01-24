const featuredBox = document.querySelectorAll(".featured-box");
featuredBox.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log("box clicked");
    const mainImage = document.getElementById("mainImg");
    // console.log(mainImage.getAttribute("src"));
    mainImage.setAttribute("src",e.src);
    console.log(mainImage.getAttribute('src'))
  });
});
