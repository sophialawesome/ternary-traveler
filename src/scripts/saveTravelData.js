import api from "./travelData.js"
import renderTravelData from "./dataDOM.js";

const addJournalSaveEventListener = () => {
    const saveButton = document.querySelector("#submit");

    saveButton.addEventListener("click", () => {
        let userInput = {
            pointOfInterest: document.querySelector("#pointOfInterest").value,
            description: document.querySelector("#description").value,
            cost: document.querySelector("#cost").value,
            location: document.querySelector("#location").value
        }

        api.addEntry(userInput)
            .then(api.getAllEntries)
            .then(renderTravelData)
    }


    );
}

export default addTravelSaveEventListener