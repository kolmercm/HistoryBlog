
// test that the script is loading
console.log('hello')


// declare variables
const buttonExample = document.getElementById('buttonExample')
const quoteText = document.getElementById('quoteText') // I couldn't find a facts API that worked / was free :/


// event listeners
buttonExample.addEventListener('click', (e) => {
  e.preventDefault()

  alert('you clicked me!')
})


// Random fact api (just an example)
const randomFactUrl = "https://uselessfacts.jsph.pl/random.json?language=en"

// a function that calls the api and returns the text
const getRandomFact = () => {
  fetch(randomFactUrl, {
    method: 'GET',
    mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'same-origin',
    // headers: {
    //   "Content-Type": "application/json"
    // },
    // referrerPolicy: "no-referrer",
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log('received data: ', data)
      const adviceText = data.text;
      console.log('advice from api:', adviceText)
      
      // update the dom
      quoteText.textContent = adviceText;
    })
    .catch((err) => console.log('error fetching data:', err))
}

getRandomFact()