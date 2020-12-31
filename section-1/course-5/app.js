const inputEl = document.querySelector('input#goal')
const buttonEl = document.querySelector('div#app button')
const unorderListEl = document.querySelector('div#app ul')

buttonEl.addEventListener('click', function () {
    const listEl = document.createElement('li')
    listEl.textContent = inputEl.value
    unorderListEl.appendChild(listEl)
    inputEl.value = ''
})
