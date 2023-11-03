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
const item3 = new dataMosaico(3,"Tecnología","assets/img/tecnologia1.jpg","assets/img/tecnologia2.jpg")
const item4 = new dataMosaico(4,"Seguridad","assets/img/seguridad1.jpg","assets/img/seguridad2.png")
const item5 = new dataMosaico(5,"Aberturas de madera","assets/img/maderas1.jpg","assets/img/maderas2.jpg")
const item6 = new dataMosaico(6,"Y muchos productos más...","assets/img/plegables1.jpg","assets/img/plegables2.jpg")

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