import makeDataEntryComponent from "./dataEntryComponent.js"

const renderTravelData = (submissions) => {
   
    const loggedDataContainer = document.querySelector(".entryLog");
    
    const clearForm = document.querySelector(".entryLog");
    clearForm.innerHTML="";

    for (let i = 0; i < submissions.length; i++) {
        const userInput = submissions[i]
        loggedDataContainer.innerHTML += makeDataComponent(userInput)
    }


}

export default renderTravelData
