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

    divMosaico.appendChild(mosaicoNuevo)
}

// const sendContact = async() =>{
    
//     let nombre = document.getElementsByName("nombre")[0];
//     let mail = document.getElementsByName("mail")[0];
//     let consulta = document.getElementsByName("consulta")[0];
//     if(!nombre.value || !mail.value || !consulta.value){
//         [nombre,mail,consulta].forEach((input) =>{
//             if (!input.value){
//                 input.style.border = "4px solid red"
//                 setTimeout(()=>{
//                     input.style.border = "2px solid black"
//                 },3000);
//             } 
//         });
//         return;
//     }
//     //window.open('https://mail.google.com/mail/u/0/#inbox?compose=new');
//     //window.open('https://mail.google.com/mail/?view=cm&fs=1&to=bounzeriog@gmail.com&su=Consulta Mucciarelli&body='+consulta.value+'&bcc=taliercioluis1@gmail.com');
    
//     console.log(nombre,mail,consulta);

// }


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
