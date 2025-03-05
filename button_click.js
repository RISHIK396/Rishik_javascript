button = document.getElementById("btn1");
image = document.createElement("img");
image.setAttribute("src","https://media1.giphy.com/media/GCO5WNzFmlc0vjK8cA/200w.gif?cid=6c09b952ks5qsuivg9oqmfts7uwoixd4y9ek98rccb34zxsy&ep=v1_gifs_search&rid=200w.gif&ct=g")
button.addEventListener("click",()=>{
    img1 = document.querySelector("body");
    img1.appendChild(image);
})