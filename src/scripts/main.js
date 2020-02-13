import addTravelSaveEventListener from "./saveTravelData.js"
import api from "./travelData.js"
import renderTravelData from "./dataDOM.js"



addTravelSaveEventListener();

api.getAllEntries().then(entries => renderTravelData(entries));