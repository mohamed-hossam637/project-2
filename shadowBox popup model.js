window.onload = function(){
    // get box element
    let box = document.querySelector(".design") ;
    // create popup container and other element 
    let popupContainer = document.createElement("div")  ,
        image_box = document.createElement("div") ,
        img = document.createElement("img") ;
    // add popup container to body
    document.body.appendChild(popupContainer) ;
    // add image box to popup
    popupContainer.appendChild(image_box) ;
    // add image tag to image box
    image_box.appendChild(img) ;
    popupContainer.classList.add("popup-container") ;
    // add style to element 
    popupContainer.style.cssText= `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 9999999999;
        background-color: rgb(255 255 255 / 48%);;
        position: fixed;
        display : none;
        justify-content : center ;
        align-items : center;` ;
    image_box.style.cssText = `
        max-width : 400px ;
        background-color :  #fff ;
        box-shadow: rgb(128 128 128 / 38%) 6px 7px 20px 5px;;
        border-radius: 6px;
        overflow: hidden;
    `;
    img.style.cssText = `
        width : 100% ;
        
    `;
    // set on click event to box to open popup
    box.onclick = function(e){
        let selector = e.target.parentElement.getAttribute("href") ;
        let image = document.querySelector(`.design .gallery_post_two a[href="${selector}"] .img img`)
        e.preventDefault()
        popupContainer.style.display = "flex";
        img.setAttribute("src" ,image.getAttribute("src"))
    };
    // add event click to close popup
    popupContainer.addEventListener("click" , (e) =>{
        if(e.target.classList.contains("popup-container")){
            e.target.style.display = "none";
            img.setAttribute("src" ,"")
        }
        
    })
   }