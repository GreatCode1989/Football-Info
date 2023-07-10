import axiosClient from "../AxiosClient"

export function searchTeams({commit}, teamname) {
    axiosClient.get(`searchplayers.php?p=${teamname}`)
    .then(({data}) => {
        commit('searchNameTeams', data.player)
    }) 
}

