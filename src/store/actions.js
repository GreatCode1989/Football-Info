import axiosClient from "../AxiosClient"

export function searchTeams({commit}, teamname) {
    axiosClient.get(`searchplayers.php?p=${teamname}`)
    .then((response) => {
        const data = response.data
        commit('searchNameTeams', data.player)
    })
    .catch((error) => {
        console.log(error)
    })
}

export function searchEvents({commit}, event) {
    axiosClient.get(`searchevents.php?e=${event}`)
    .then((response) => {
        const data = response.data
        commit('searchEventName', data.event)
        console.log(data.event)
        })
        .catch((error) => {
            console.log(error)
        })
}