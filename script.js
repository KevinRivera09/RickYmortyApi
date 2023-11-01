document.getElementById('search').addEventListener('click',() =>{
    displayCharacter();
})

async function displayCharacter (){
    const characterName = document.getElementById('name').value;
    const character = await getCharacter(characterName);
    addCharacter(character);
    console.log(character);
}

async function getCharacter(name){
    let response = await fetch(`https://rickandmortyapi.com/api/character/${name}`);
    return await response.json();
}

function addCharacter(character){
const characterList = document.getElementById(`character container`);
const element = document.createElement(`div`);

element.innerHTML = `
<strong>Id</strong: ${character.id}
<strong>Name</strong: ${character.name}
<strong>Status</strong: ${character.status}
<strong>Species</strong: ${character.species}


`;

}