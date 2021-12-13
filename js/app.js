/**
 * document.querySelector() --> Selección de nodos de tipo object HTMLElement
 * document.createElement() --> creación de nodos de tipo object HTMLElement
 * document.createTextNode() --> creación de nodos de tipo object node text
 * element.className = 'nombre-clase' // element.setAttribute('class', 'nombre-clase') --> poner nombre clase de un atributo // element.classList.add('nombre-clase)
 */

const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");








// Eventos

form1.onsubmit = e => {
    e.preventDefault();
    // Vamos a crear un párrafo HTMLElement (DOM)
    let p = document.createElement("p");
    p.setAttribute("class", "mi-parrafo");
    let textoParrafo = document.createTextNode("Vamos a crear nodos. Para ello utilizaremos el método ");
    let strongParrafo = document.createElement("strong");
    let textoStrong = document.createTextNode("document.createElement()")
    // metemos texto en el strong
    strongParrafo.appendChild(textoStrong);
    p.appendChild(textoParrafo);
    p.appendChild(strongParrafo);
    // Pintamos en el dom real
    document.querySelector(".parrafo").appendChild(p)
}


form2.addEventListener(
    "submit",
    e => { // Función anónima y además función callback    
        e.preventDefault();
        const outputLista = document.querySelector(".lista");

        const ul = document.createElement("ul");
        ul.setAttribute("class", "mi-lista");

        // Primer nivel
        const primerNivel = [
            "HTML 5",
            "JavaScript",
            "Accesibilidad",
            "a"
        ];

        const segundoNivel = [
            "<li>Formularios</li><li>Enlaces</li><li>Imágenes</li>",
            "<li>let/const/var</li><li>Arrays</li><li>Nodos</li>",
            "<li>Formularios</li>",
            "b"
        ];

        for (let i = 0; i < primerNivel.length; i++) {
            let li = document.createElement("li");
            let textoNode = document.createTextNode(primerNivel[i]);
            let ul2 = document.createElement("ul");
            ul2.innerHTML = segundoNivel[i];
            li.appendChild(textoNode);
            ul.appendChild(li);
            li.appendChild(ul2);

        }

        


        outputLista.appendChild(ul);



    }
);