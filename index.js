/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn")
const inputEl = document.querySelector("#input-el")
const lengthEL = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEL = document.querySelector("#mass-el")

convertBtn.addEventListener("click", function() {
    let toBeConverted = Number(readInput()) // Convert the input to a number here
    
    if (isNaN(toBeConverted) || inputEl.value.trim() === "") {
        console.log("Please enter a valid number")
        return 
    }
    console.log(toBeConverted)
    
    // Wrap the math in parentheses, then apply .toFixed(3)
    let metersToFeet = Number((toBeConverted * 3.281).toFixed(3))
    let feetToMeters = Number((toBeConverted / 3.281).toFixed(3))
    let litersToGallons = Number((toBeConverted * 0.264).toFixed(3))
    let gallonsToLiters = Number((toBeConverted / 0.264).toFixed(3))
    let kilogramsToPounds = Number((toBeConverted * 2.204).toFixed(3))
    let poundsToKilograms = Number((toBeConverted / 2.204).toFixed(3))
    
    lengthEL.textContent = `${toBeConverted} meters = ${metersToFeet} feet | ${toBeConverted} feet = ${feetToMeters} meters`
    volumeEl.textContent = `${toBeConverted} liters = ${litersToGallons} gallons | ${toBeConverted} gallons = ${gallonsToLiters} liters`
    massEL.textContent = `${toBeConverted} kilos = ${kilogramsToPounds} pounds | ${toBeConverted} pounds = ${poundsToKilograms} kilos`
})

function readInput() {
    return inputEl.value
}