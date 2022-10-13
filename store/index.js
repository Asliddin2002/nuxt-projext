import Vue from 'vue'
import Vuex from 'vuex'
import crud from './crud'
import dynamic from './crud/dynamic'
import cart from './modules/cart'
import modal from './modules//modal'
Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
          cart,
          modal,
      products: crud('products'),
      brands: crud('brands'),
      category: crud('categories')
    },
    getters: {
      // isAuthenticated: state => { return state.auth.loggedIn },
      // loggedInUser: state => { return state.auth.user },
    }
  })
}
export default createStore