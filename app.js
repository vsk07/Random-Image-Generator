const imageContainerEl = document.querySelector(".img-container")

const btnEl = document.querySelector(".btn")

const inputEl = document.querySelector(".input");




btnEl.addEventListener("click", () => {
    // imgNum = 10;

    
    let imgNum = parseInt(inputEl.value);
    if (imgNum < 1) {
        imgNum = 1;
    }
    else if(isNaN(imgNum) || inputEl.value === ""){
        imgNum = 10;
    }
    imageContainerEl.innerHTML = "";
    addNewImage(imgNum);

})

inputEl.addEventListener("keydown", (event)=>{
    if(event.key==="Enter"){
        btnEl.click();
    }
});

function addNewImage(n) {

    for (let index = 0; index < n; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;

        imageContainerEl.appendChild(newImgEl);

    }

}

