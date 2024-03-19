let page_container = document.getElementById("page_container")

for(i=0;i<23;i++){
    let page = document.createElement("img");
        page.src = "jpgs/" + i + ".jpg";
        page_container.appendChild(page);
}