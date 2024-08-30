 const URL = "https://cat-fact.herokuapp.com/facts";
const paraFacts = document.querySelector('#facts');
const factButton =  document.querySelector('#Btn');

//  let promise = fetch(URL);     Normal syntax for fetch api 
//  console.log(promise);

// const getFacts = async() => {
//     let response = await fetch(URL);             // async await
//     let json = await response.json();         
//     paraFacts.innerText = json[0].text;
// }

// By Using promise 

function getFacts(){
    fetch(URL)

    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json.length);                               //Promise chaining
        paraFacts.innerText = json[Math.floor(Math.random() * 5)].text;
    })
    .catch((error)=> {
        console.log(error);
    })
}

factButton.addEventListener('click', getFacts);