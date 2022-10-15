import { Elements } from "./elements.js"

const elements = Elements()

// const waterGoal = Number(prompt("Ei usuário, quantos litros de água você planeja beber por dia?"))
// const exerciseGoal = Number(prompt("Quantos exercícios tem o seu treino hoje?"))

// const exerciseList = []
// for(let i = 1; i <= exerciseGoal; i++) {
//     const exerciseName = prompt(`Digite o nome do seu ${i}o exercício`)
//     exerciseList.push(exerciseName)
// }

// const meditationGoal = Number(prompt("Quantos minutos você planeja meditar hoje?"))

const waterGoal = 5
const exerciseGoal = 3
const exerciseList = ["biceps", "costas", "triceps"]
const meditationGoal = 10

function resetProgress() {
    elements.waterProgress.textContent = "0%"
    elements.exerciseProgress.textContent = "0%"
    elements.meditationProgress.textContent = "0%"
}

resetProgress()