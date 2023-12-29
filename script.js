const jokeContainer = document.getElementById('Joke');
const btn = document.getElementById('buton');
const url = "https://v2.jokeapi.dev/joke/Programming?type=single";

const getJoke = () => {
    fetch(url)
       .then(data => data.json())
       .then(item=> {
        jokeContainer.innerHTML = `${item.joke}`
       })
       .catch(error => {
        console.error('Error fetching joke:', error);
        jokeContainer.innerHTML = 'Failed to fetch a joke. Please try again later.';
    });
       
       }
btn.addEventListener("click", getJoke);
getJoke();