//Al hacer click en btnNavbar que tenga en cuenta el alto de la NavBar para que no tape los divs apuntados.
window.addEventListener("hashchange", function() { scrollBy(0, -100) })

class dataMosaico {
    constructor(id,title,image,imageHover){
        this.id = id;
        this.title = title;
        this.image = image;
        this.imageHover = imageHover;
    }
}

const item1 = new dataMosaico(1,"Ventanas de aluminio","assets/img/ventanas1.jpg","assets/img/ventanas2.jpg")
const item2 = new dataMosaico(2,"Puertas de aluminio","assets/img/puertas1.jpg","assets/img/puertas2.jpg")
const item3 = new dataMosaico(3,"Redes de protección","assets/img/redes1.jpg","assets/img/redes2.jpg")
const item4 = new dataMosaico(4,"Seguridad","assets/img/seguridad1.jpg","assets/img/seguridad2.png")
const item5 = new dataMosaico(5,"Aberturas de madera","assets/img/maderas1.jpg","assets/img/maderas2.jpg")
const item6 = new dataMosaico(6,"Y mucho más...","assets/img/plegables1.jpg","assets/img/plegables2.jpg")

let arrayMosaicos=[]

arrayMosaicos.push(item1)
arrayMosaicos.push(item2)
arrayMosaicos.push(item3)
arrayMosaicos.push(item4)
arrayMosaicos.push(item5)
arrayMosaicos.push(item6)


let divMosaico = document.getElementById("divMosaicos")

//CarrouselPopUp Code
let slideIndex = 0

const showSlides = () =>{
    let i;
    let slides = document.getElementsByClassName("imagesCarrousel");
    for(i=0; i<showSlides.length; i++){
        slides[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex-1].style.display = "block"
    setTimeout(showSlides,2000);
}
//showSlides();




const plusSlides = (i) =>{
    console.log(slideIndex);
    //Controla que no se intente mover mas de las imagenes permitidas, ya que hay 3 por popup
    if(i == -1){
        if(slideIndex == 0){
            return;
        }else slideIndex = slideIndex - 1
    }else{
        if(slideIndex == 2) return;
        else slideIndex = slideIndex + 1;
    }
    console.log('index after slide' +slideIndex);
    //Mover div horizontalmente en eje X para que se corra la imagen
    //Ademas actualizar el slideIndex
    //Video youtube https://www.youtube.com/watch?v=wj9txMVExZY
    //https://www.shecodes.io/athena/5675-creating-a-carousel-with-html-css-javascript
    let slides = document.getElementsByClassName("inner-carrousel")[0];
    let width = slides.offsetWidth;
    console.log(width);
    let move = i * width;
    slides.scrollLeft += move; 
}


for (let data of arrayMosaicos){
    let mosaicoNuevo = document.createElement("div")
    mosaicoNuevo.className="mosaicoHover"
    mosaicoNuevo.innerHTML=`<div class="dataMosaico" id="${data.id}">
                                <img src="./${data.image}" alt="imagen ${data.title}" width="300px" height="200px">
                                <h3>${data.title}</h3>
                            </div>`
    mosaicoNuevo.onmousemove = () => {
        mosaicoNuevo.innerHTML=`<div class="dataMosaico" id="${data.id}">
                                    <img src="./${data.imageHover}" alt="imagen ${data.title}" width="300px" height="200px">
                                    <h3>${data.title}</h3>
                                </div>`
    }
   

    mosaicoNuevo.onmouseleave = () => {
        mosaicoNuevo.innerHTML=`<div class="dataMosaico" id="${data.id}">
                                    <img src="./${data.image}" alt="imagen ${data.title}" width="300px" height="200px">
                                    <h3>${data.title}</h3>
                                </div>`
    }

    let popUpImages = document.createElement("div");
    let body = document.getElementsByTagName("body")[0];
    
    popUpImages.innerHTML = `<div id="popupCarrousel${data.id}" class="popupCarrousel">
        
        <div class="carrousel" id="${data.id}carrousel">

            <div class="inner-carrousel">
            
                <div class="imagesCarrousel">
                    <div class="numberText">1 / 3</div>
                    <img src="./assets/img/headerBackProvisorio.jpg"/>
                    <div class="imgCarrouselText">Caption</div>
                </div>

                <div class="imagesCarrousel">
                    <div class="numberText">2 / 3</div>
                    <img src="./assets/img/seguridad2.png"/>
                    <div class="imgCarrouselText">Caption</div>
                </div>

                <div class="imagesCarrousel">
                    <div class="numberText">3 / 3</div>
                    <img src="./assets/img/ventanas2.jpg"/>
                    <div class="imgCarrouselText">Caption</div>
                </div>
        
            </div>

            <a class="prevCarrousel">&#10094;</a>
            <a class="nextCarrousel">&#10095;</a>

            <button class="closeCarrousel" id="closeCarrousel${data.id}">X</button>

        </div>
    </div>`;

    body.appendChild(popUpImages);

    const nextBtn = document.getElementsByClassName("nextCarrousel")[0];
    const prevBtn = document.getElementsByClassName("prevCarrousel")[0];
    const closePopup = document.getElementById(`closeCarrousel${data.id}`);
    let popUpCarrousel = document.getElementById(`popupCarrousel${data.id}`);

    prevBtn.addEventListener("click",()=>plusSlides(-1))
    nextBtn.addEventListener("click",()=>plusSlides(1))    

    closePopup.addEventListener("click",()=>popUpImages.style.display = "none");


    mosaicoNuevo.onclick = () =>{
       
        console.log('lol');
        console.log(popUpCarrousel);
        popUpCarrousel.style.display = "block"
    
    }

    divMosaico.appendChild(mosaicoNuevo)
}

let btnConsultas = document.getElementById("btnNav3")
let mainDiv = document.getElementsByTagName("main")[0];
//let popUp = document.getElementById("containerPopUp")
let popUp = document.getElementsByClassName("containerPopUp")[0]
let btnCierraPopUp = document.getElementById("btnCierraPopUp")
btnConsultas.onclick = () => {
    mainDiv.classList.add("popUpOpen")
    popUp.style.visibility=("visible")

}
btnCierraPopUp.onclick = () => {
    mainDiv.classList.remove("popUpOpen")
    popUp.style.visibility=("hidden")
}

