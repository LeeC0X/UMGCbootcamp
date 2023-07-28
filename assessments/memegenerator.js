document.addEventListener("DOMContentLoaded", function () {
  const memeForm = document.getElementById("meme-form");

  memeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const imageUrl = document.getElementById("image-url").value;
    const topText = document.getElementById("top-text").value;
    const bottomText = document.getElementById("bottom-text").value;

    let memeHolder = document.createElement("div");
    memeHolder.classList.add("meme");
    memeHolder.addEventListener("click", function (event) {
      memeHolder.remove();
    });

    let image = document.createElement("img");
    image.src = imageUrl;

    let topTextElement = document.createElement("div");
    topTextElement.classList.add("text", "top-text");
    topTextElement.textContent = topText;

    let bottomTextElement = document.createElement("div");
    bottomTextElement.classList.add("text", "bottom-text");
    bottomTextElement.textContent = bottomText;

    memeHolder.appendChild(image);
    memeHolder.appendChild(topTextElement);
    memeHolder.appendChild(bottomTextElement);

    let memeHolderDiv = document.getElementById("meme-holder");
    memeHolderDiv.appendChild(memeHolder);

    document.getElementById("image-url").value = "";
    document.getElementById("top-text").value = "";
    document.getElementById("bottom-text").value = "";

    let memeHolderRemove = document.getElementById("meme-holder");
  });
});
