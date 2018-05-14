import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    img: '',
    appMode: {
      initMode: 'INIT_MODE',
      nonactive: 'NONACTIVE',
      addRegion: 'ADD_REGION',
      selectRegion: 'SELECT_REGION'
    },
    polygonArray: [],
    isImageLoad: false,
    currentMod: 'INIT_MODE'
  },
  mutations: {
    setImage: (state, imgSource = '') => {
      state.img = imgSource;
    },
    setImageLoad: (state) => {
      state.isImageLoad = true;
    },
    setCurrentMod: (state, mod = '') => {
      if(mod) state.currentMod = mod;
    }
  }
});
