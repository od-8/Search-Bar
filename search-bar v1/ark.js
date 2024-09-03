const searchBar = document.getElementById("search");
searchBar.addEventListener('input', locateDinos);

const message = document.getElementById('message');

const dinos = [
    {
        name: "pteranodon",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "raw prime meat, raw meat"
    }, 
    {
        name: "allosauros",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "raw prime meat, raw mutton, raw meat"
    }, 
    {
        name: "parasaur",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "mejoberrys"
    }, 
    {
        name: "ankylosaur",
        taming: "idk yet, give taming food",
        food: "meat"
    }, 
    {
        name: "carbonemys",
        taming: "Shoot with tnaquilizing darts or narcotic arrows, give taming food",
        food: ""
    }, 
    {
        name: "dodo",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "berries"
    },
    {
        name: "dilopasaur",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "raw meat, berries"
    },
    {
        name: "pelagonis",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "raw meat, raw prime meat"
    },
    {
        name: "argentavis",
        taming: "Shoot with tnaquilizing darts or narcotic arrows, give taming food",
        food: "raw meat, raw prime meat"
    },
    {
        name: "itchysauras",
        taming: "Go up to if and feed taming food",
        food: "raw meat, raw prime meat"
    },
    {
        name: "rex",
        taming: "Shoot with tnaquilizing darts or narcotic arrows, give taming food",
        food: "raw prime meat, raw meat"
    },
    {
        name: "raptor",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "raw prime meat, raw meat"
    },
]

let userInput;
let newDinos;

function locateDinos () {
    let newElement = document.createElement("p")
    newElement.textContent = "";
    newDinos = []
    userInput = document.getElementById('search').value.toLowerCase();
    dinos.forEach((dino) => {
        if (dino.name.startsWith(userInput)) {
            newElement.replaceChildren(dino.name);
            newDinos.push(dino.name);
        }
    })
    console.log(newDinos)
    newDinos.forEach( (name) => {
        newElement = document.createElement('p');
        newElement.textContent = name;
        message.appendChild(newElement); 
    }); 
}