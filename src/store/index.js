import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[]
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      fetch('http://localhost:3000/products')
      .then(response => {
        return response.json();
      })
      .then(data => {
        commit('SET_PRODUCTS', data)
      })
      .catch(err => {
        console.log(err);
        
      })
    }
  },
  modules: {
  },
  getters:{
    PRODUCTS(state){
      return state.products
    }
  }
})
