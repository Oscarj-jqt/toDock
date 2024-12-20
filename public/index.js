const input = document.getElementById('input');
const ajouter = document.getElementById('ajouter');
const liste = document.getElementById('list');

ajouter.addEventListener('click', async () => {
    console.log('Bouton "Ajouter" cliqué'); 
    const taskTitle = input.value;
    if (taskTitle) {
        console.log('Titre de la tâche à envoyer :', taskTitle); 
        const li = document.createElement('li')
        li.textContent = input.value
        liste.appendChild(li)
        input.value = ""
        const response = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: taskTitle })
        });

        if (response.ok) {
            console.log('Tâche ajoutée avec succès'); 
            input.value = ''; 
        } else {
            console.error('Erreur lors de l\'ajout de la tâche');
        }
    } else {
        console.error('Le champ de saisie est vide');
    }
});


