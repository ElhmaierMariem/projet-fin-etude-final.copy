import axios from 'axios';

export default {
    namespaced: true,
    state: {
        accessToken: null,
        user: null
    },

    getters: {
        isAuthenticated(state){
            if (!state.user) {
                return false
            }
            return true
        },
        getUser(state){
            return state.user
        }
    },

    mutations:{
        setToken(state, accessToken){
            state.accessToken = accessToken
        },
        setUser(state, user){
            state.user = user
        }
    },

    actions:{
        async signIn({dispatch} ,credentials){

            let response = await axios.post("auth/signin", credentials)
            
            return dispatch('attempt', response.data)
        },
        async attempt({commit}, user){
            console.log("begin attempt")
            console.log(user)
            if (user.accessToken){
                commit('setToken', user.accessToken)
                commit('setUser', user)
            }
            console.log("end attempt")
        },
        logout(){
            localStorage.removeItem('user')
        }
    }
}