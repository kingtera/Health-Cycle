export function Elements() {
    const waterProgress = document.querySelector(".water-cycle  .progress")
    const exerciseProgress = document.querySelector(".exercise-cycle  .progress")
    const meditationProgress = document.querySelector(".meditation-cycle  .progress")

    return {
        waterProgress,
        exerciseProgress,
        meditationProgress
    }
}