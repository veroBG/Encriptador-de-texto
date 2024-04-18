window.addEventListener("load", function(){
    let input = document.getElementById("entrada");
    let encriptador = document.getElementById("encriptar");
    let desencriptador = document.getElementById("desencriptar");
    let boxRespuesta = document.getElementById("respuesta");
    let llaves= {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };
    let copiarTexto = () => {
        let btnCopiar = document.getElementById("btn");
        btnCopiar.addEventListener("click", ()=>{navigator.clipboard.writeText(document.getElementById('render').innerHTML)
            .then(() => {
            console.log("El texto se copio en el portapapeles")
        })
            .catch(err => {
            console.log('Se produjo un error al copiar', err);
        });
        });
    }
    let renderizar = (texto) => {
        boxRespuesta.innerHTML= `<p id="render">${texto}</p><button id="btn">Copiar</button>`;
        copiarTexto();
    }
    let encriptar = (texto) => {
        texto = texto.toLowerCase();
        let resultado=""
        for(let s of texto){
            switch (s) {
                case "a":
                    resultado += llaves.a; 
                    break;
                case "e":
                    resultado += llaves.e;
                    break;   
                case "i":
                    resultado += llaves.i;
                    break;
                case "o":
                    resultado += llaves.o;
                    break;
                case "u":
                    resultado += llaves.u;
                    break;         
                default:
                    resultado += s;
                    break;
            }
        }
        return resultado[0].toUpperCase() + resultado.slice(1);
    };
    let desencriptar = (texto) => {
        for (let i = 0; i < 5; i++) {
            texto = texto.replaceAll(Object.values(llaves)[i],`${Object.keys(llaves)[i]}`);
        }
        return texto[0].toUpperCase() + texto.slice(1);
    };

    encriptador.addEventListener("click", ()=>{
        if(input.value){
            renderizar(encriptar(input.value));
        }
    });

    desencriptador.addEventListener("click", ()=>{
        if(input.value){
            renderizar(desencriptar(input.value));
        }
    });
});
