
let palabritas;
let canErrores=0; //cuantas veces me confudni 
let cantAciertos = 0; //cuantas veces acerte

const palabras =["marte", "mercurio","luna","jupiter","saturno","tierra","venus","neptuno",
"galaxia", "urano","andromeda","ceres","sol","pluton"];


const btn = id("Jugar");

const imag = id ("imagen");
const btn_letras = document.querySelectorAll("#letrasabc button");

//click en iniciar juego
btn.addEventListener( "click", iniCiar );

//function  que va enlazado con el boton 
function id(str){

return document.getElementById(str);

}
//Algoritmo para lazar numero al azar 
function obtener_ramdom(mun_min, num_max){

    const cantidadValores = num_max - mun_min ; //algorito que nos permite lanzar un nro al azar 
    const valor_azar= Math.floor(Math.random() * cantidadValores) + mun_min ; //
    return valor_azar

}

function iniCiar (event){
    imag.src = "imagenes/img0.png"
    btn.disabled = true; // bloquea el boton 
    canErrores= 0; //cuantas veces me confudni 
    cantAciertos = 0; //cuantas veces acerte

    const parrafo = id("palabra_a_adivinar");
    parrafo.innerHTML= "";

    const cant_palabras= palabras.length;
    const valoBajo = 0                               
    const valor_azar = obtener_ramdom(valoBajo,cant_palabras)

    palabritas = palabras[valor_azar];
    console.log(palabritas);
    const cantLetras = palabritas.length;

    for (let i=0 ; i< btn_letras.length ; i++){

        btn_letras [i].disabled = false;  

        }
       
       
    /*for( let i=0; i < cantLetras; i++){  //sirve para agregar una rayita al id palabra_adivinar 

        const span = document.createElement("span");
        parrafo.appendChild( span );

    }*/
    for( let i =0; i < cantLetras; i++ ){
        const span = document.createElement("span");
        parrafo.appendChild( span );
    }
    
}


//click adivinar letra 
for (let i=0 ; i< btn_letras.length;i++){

 btn_letras [i].addEventListener("click",click_letras);   

}

function click_letras(event){
    const spans = document.querySelectorAll("#palabra_a_adivinar span");
    const button = event.target; //el target es cual de todos los elementos html toque o llame
    button.disabled=true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabritas.toLowerCase( );
    
    let acerto = false;
    for(let i=0;i< palabra.length;i++){

           if(letra==palabra[i]) {
            //la variable i es la posicion de la letra en la palabra
            //que coincide con el span al que tenemos que mostrarle esta letra siempre y cuando adivinemos 
            spans[i].innerHTML= letra;
            cantAciertos++;
            acerto =true; 
          } 
        }

        if (acerto==false){

                canErrores++;        
                const img = `imagenes/img${canErrores}.png`;
                const imag = id ("imagen");
                imag.src = img;

        }

        if (canErrores==6){
            swal({
                title: "perdiste, la palabra era " + palabritas,
                text:"SIGUE INTENTANDO",
                icon: "error",
                } 
        )
            game_over();
        }
        else if (cantAciertos==palabritas.length){
            swal({
                title: "GANASTE",
                text:"jUEGA OTRA VEZ",
                icon: "success",
                } 
        )
            game_over();
        }
        
    }
   

    //fin del juego
    function game_over(){

        for (let i=0 ; i< btn_letras.length;i++){

        btn_letras [i].disabled = true;  

        }

        btn.disabled = false;
    }

game_over( );