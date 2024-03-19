const inputBox = document.querySelector('.input-box')
const listContainer = document.querySelector('.list-container')
const button = document.querySelector('.btn')

button.addEventListener('click', () => {
  if (inputBox.value === '') {
    alert('You Must Write Something')
  } else {
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }
  inputBox.value = ''
  dataSave()
})

listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
    dataSave()
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    dataSave()
  }
}, false)

const dataSave = () => {
  localStorage.setItem('data', listContainer.innerHTML);
}

const ShowTask = () => {
  listContainer.innerHTML = localStorage.getItem('data')
}

ShowTask()

