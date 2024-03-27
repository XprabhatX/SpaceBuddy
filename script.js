const loadingElem = document.querySelector("#loadingElement");
const imageElem = document.querySelector("#imageElement");

fetch("https://api.nasa.gov/planetary/apod?api_key=UKBW7bUVsOwP8HCzSDZCx98SMBYsxQKzXuXGHc4C")
    .then(response => response.json())
    .then(apodData => {
        loadingElem.remove();

        imageElem.setAttribute("src", apodData.url);
        imageElem.setAttribute("alt", apodData.title);
        imageElem.setAttribute("height", 500);
    })
    .catch(err => {
        console.log("Error in fetching data: " + err);
    })