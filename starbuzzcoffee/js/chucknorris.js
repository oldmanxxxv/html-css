function showFact(joke){
    document.querySelector('#fact').innerHTML = joke;
}

axios.get('http://api.icndb.com/jokes/random').then(response => showFact(response.data.value.joke))

function rel(){
    location.reload();
}

document.querySelector('input[type="button"]').addEventListener('click', rel)