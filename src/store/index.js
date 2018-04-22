import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    img: ''
  },
  mutations: {
    setImage: (state, imgSource = '') => {
      state.img = imgSource
    }
  }
})
