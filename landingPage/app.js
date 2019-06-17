const person = {
    name: "Tim",
    date: new Date().toDateString()
}

const ui = {
    greetingEl : document.querySelector('#greeting'),
    dateEl : document.querySelector('#date')
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("object");
    ui.greetingEl.innerHTML = `Hello ${person.name}`;
    ui.dateEl.textContent = `Todays Date: ${person.date}`
})