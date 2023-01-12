var cartas = ['baltazar','gaspar','ninodios','mula','pastor','melchor','jose','maria','baltazar','gaspar','ninodios','mula','pastor','melchor','jose','maria']
let click = 0
let clase 
var mensaje = ""
const empezar = document.getElementById('empezar')
const continuar = document.getElementById('continuar')

function dar_mensaje(id){
    switch (id){
        case 'melchor':
            mensaje = 'El villancico es un género de cancion cuya letra hace referencia a la navidad.'
            break;
        case 'baltazar':
            mensaje = 'A la nanita nana es un villancio compuesto por Jeremías Quinetero, oriundo de Barbacoas, Nariño.'
            break;
        case 'gaspar':
            mensaje = 'La palabra tutaina es utilizada en Perú para referirse coloquialmente a una fiesta pequeña, por lo'
            break;
        case 'jose':
            mensaje = 'En Ecuador, México, Colombia, Guatemala, El Salvador, Venezuela, Perú, Argentina, Chile y Canarias, la figura del niño Jesús se coloca despúes de la llegada de la navidad.'
            break;
        case 'pastor':
            mensaje = 'A las novenas se les llama "Las posadas" y son fiestas populares de Mexico, Honduras, Guatemala, El Salvador, Costa Rica, Nicaragua y Panamá.'
            break;
        case 'mula':
            mensaje = 'En las posadas, cada uno de los nueve días representa un valor, como humildad, fortaleza, desapego, caridad, confianza, justicia, pureza, alegría y generosidad.'
            break;
        case 'ninodios':
            mensaje = 'El villancico es un género de canción cuya letra hace referencia a la navidad.'
            break;
        case 'maria':
            mensaje = 'La primera celebración navideña en la que se montó un pesebre para la conmemoraciónd del nacimiento de Jesús fue en la nochebuena del año 1223, realizada por San Francisco de Asís.'
            break;

    }
}




console.log(continuar.parentNode.parentNode.parentNode.parentNode);

for(i=15;i>=0;i--){
    const a = parseInt(Math.random()*i)
    const parte = cartas[a]
    cartas.splice(a,1)
    cartas.push(parte)
}
console.log(cartas);

empezar.addEventListener('click',()=>{
    empezar.parentNode.parentNode.classList.add('ocultar')
})
continuar.addEventListener('click',()=>{
    continuar.parentNode.parentNode.parentNode.parentNode.classList.add('ocultar')
})

var memorama = document.getElementById('memorama')


const contenedor = document.querySelector('#contenedor')
contenedor.addEventListener('click', (e)=>{
    if(e.target.classList.contains('true')){
        void(0)
    }else{

        let pos = parseInt(e.target.id)
        let id
        id = cartas[pos]
        rotar(id, e.target)
        if(click == 0){
            clase = e.target.parentNode
            //console.log(clase.classList)
            
            console.log(click);
            click= 1
        }else{
            
            if (clase.classList[4] == e.target.parentNode.classList[4]){
                console.log("melo")
                click = 0
                clase = null
                //console.log(e.target.parentNode.classList[4]);
                dar_mensaje(e.target.parentNode.classList[4])
                document.getElementById('datos').textContent = mensaje
                setTimeout(()=>{
                    document.querySelector('.notificacion1').classList.remove('ocultar')

                },800)
            }else{
                setTimeout(()=>{
                    console.log('melont')
                    console.log(clase.classList)
                    console.log(clase.childNodes)
                    clase.classList.remove('true')
                    clase.childNodes[0].classList.remove('rotacion')
                    clase.childNodes[0].classList.add('rotaciont')
                    clase.classList.remove(clase.classList[3])
                    e.target.parentNode.classList.remove('true')
                    e.target.classList.remove('rotacion')
                    e.target.classList.add('rotaciont')
                    e.target.parentNode.classList.remove(id)
                    
                    click=0;
                }, 700)
            }
        
        }
    }    
  

   
    
    


})


function rotar(id, carta){
    if(!carta.classList.contains('carta')){
        void(0)
    }else{
        if(carta.classList.contains(true)){
            carta.classList.remove('rotacion')
            carta.parentNode.classList.remove('true')
            carta.parentNode.classList.remove(`${id}`)
        }else{
            carta.classList.remove('rotaciont')
            carta.parentNode.classList.add('true')
            carta.parentNode.classList.add(`${id}`)
            carta.classList.add('rotacion')
            
        }

    }

}

/*
Sabias que...

-El villancico es un género de cancion cuya letra hace referencia a la navidad.
-A la nanita nana es un villancio compuesto por Jeremías Quinetero, oriundo de Barbacoas, Nariño.
-La palabra tutaina es utilizada en Perú para referirse coloquialmente a una fiesta pequeña, por lo 
que el título de este villancico se refiere a la celebración de la tradicional novena de aguinaldos.
-En Ecuador, México, Colombia, Guatemala, El Salvador, Venezuela, Perú, Argentina, Chile y 
Canarias, la figura del niño Jesús se coloca despúes de la llegada de la navidad.
-A las novenas se les llama "Las posadas" y son fiestas populares de Mexico, Honduras, Guatemala, El Salvador, Costa Rica, Nicaragua y Panamá.
-En las posadas, cada uno de los nueve días representa un valor, como humildad, fortaleza, desapego, caridad, confianza, justicia, pureza, alegría y generosidad.
-El villancico es un género de canción cuya letra hace referencia a la navidad.
-La primera celebración navideña en la que se montó un pesebre para la conmemoraciónd del 
nacimiento de Jesús fue en la nochebuena del año 1223, realizada por San Francisco de Asís.
*/