import store from ".";

export function searchNameTeams(state, player) {
    state.searchedTeams = player;
}




export function searchEventName(state, event) {
   state.searchedEvents = event; 
}