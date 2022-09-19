import Vue from 'vue'
import Vuex from 'vuex'
import crud from './crud'
import dynamic from './crud/dynamic'
import cart from './modules/cart'
Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
          cart,

      products: crud('products'),
      brands: crud('brands')
    },
    getters: {
      // isAuthenticated: state => { return state.auth.loggedIn },
      // loggedInUser: state => { return state.auth.user },
    }
  })
}
export default createStore