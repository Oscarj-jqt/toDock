const input = document.getElementById('input')
const ajouter = document.getElementById('ajouter')
const liste = document.getElementById('list')


ajouter.addEventListener("click", (e) => {
    const li = document.createElement('li')
    li.textContent = input.value
    liste.appendChild(li)
    input.value = ""
})