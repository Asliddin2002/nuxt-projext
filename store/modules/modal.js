export default{
    state:{
        showModal: false
    },
    mutations:{
        SHOW_MODAL(state) {
            state.showModal = true
        },
        HIDE_MODAL(state) {
            state.showModal = false
        },
    },
    actions:{
        showModalFunc({ commit }) {
            commit('SHOW_MODAL')
        },
        hideModalFunc({ commit }) {
            commit('HIDE_MODAL')
        },
    },
    getters:{
        productsInCart(state) {
            return state.showModal
        }
    }

}

// export const state = () => ({
    
// })

// export const actions = {
   
// }

// export const mutations = {
    
// }

// export const getters = {
    
// }