let page_container = document.getElementById("page_container")

for(i=0;i<24;i++){
    let page = document.createElement("img");
        page.src = "jpgs/" + i + ".jpg";
        page_container.appendChild(page);
}


let progress_bar_box = document.getElementById("progress_bar_box")
let instructions = document.getElementById("instructions")
let video_bg = document.getElementById("video_bg");

    document.addEventListener("scroll",()=>{
        let progress_percentage = window.scrollY/page_container.offsetHeight
            progress_bar_box.style.width = page_container.offsetWidth * progress_percentage * 1.05 + "px";
            progress_bar_box.style.maxWidth = page_container.offsetWidth + "px";

        if(progress_percentage > 0.95){
            progress_bar_box.style.display = "none";
        } else {
            progress_bar_box.style.display = "block";
        }

        if(progress_percentage < 0.001 || progress_percentage > 0.95){
            instructions.style.display = "block";
        } else {
            instructions.style.display = "none";
        }
            if(progress_percentage < 0.001){
                instructions.innerText = "Scroll";
            } else if(progress_percentage > 0.95){
                instructions.innerText = "The End";
            }

        video_bg.style.opacity = progress_percentage;
})