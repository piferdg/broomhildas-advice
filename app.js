const apiURL = ('https://galvanize-cors.herokuapp.com/http://api.adviceslip.com/advice')

button = document.getElementsByTagName('button')[0]
button.addEventListener('click', advice)

let info = document.getElementsByTagName('h2')[0]
let text = document.createElement('p')

function advice(event) {
  fetch (apiURL)
  .then (response => response.json())
  .then (myJSON = myJSON => {
      newAdvice(myJSON)
  })
}

function newAdvice(myJSON) {
  let adviceText = myJSON.slip.advice

  text.textContent = adviceText
  info.appendChild(text)
}

