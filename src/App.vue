<template>
  <div ref="container" class="app-container">
    <v-app>
      <v-toolbar app height="45px">
        <router-link to="/" tag="button">
          <v-icon>collections</v-icon>
        </router-link>
        <v-btn icon :disabled="!btnState.addRegion" @click="addRegion">
          <v-icon>library_add</v-icon>
        </v-btn>
        <v-btn icon :disabled="!btnState.selectRegion">
          <v-icon>photo_size_select_small</v-icon>
        </v-btn>
        <v-btn icon :disabled="!btnState.saveAll">
          <v-icon>save</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid align-center justify-center fill-height>
            <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import router from './router';
import { store } from './store';
import Vue from 'vue';
import { EventBus } from './event-bus.js';

//router.beforeEach((to, from, next) => {
//  console.log();
//  next();
//});

export default {
  name: 'App',
  data () {
    return {
      btnState: {
        addRegion: false,
        selectRegion: false,
        saveAll: false
      }
    }
  },
  methods: {
    addRegion: function () {
      this.$refs.container.classList.add('editeModeStyle');
      this.modManage('addRegion');
      store.commit('setCurrentMod', 'ADD_REGION');
      EventBus.$emit('addRegion');
    },
    modManage: function (mod = 'default') {
      if(!mod){
         return store.state.currentMod;
      }
      let currenMod = store.state.currentMod;
      let isImageLoad = store.state.isImageLoad;

      let selectMod = {
          'addImage': () => {
            this.btnState.addRegion = true;
          },
          'addRegion': () => {

          },
          'returnToLoadImagePage': () => {
            this.btnState.removeRegion = false;
            this.btnState.addRegion = false;
            this.btnState.selectRegion = false;
            this.btnState.addPoint = false;
          }
      };
      return selectMod[mod]();
    }
  }
};
</script>

<style>
  .theme--light .icon{
    color: rgba(0, 0, 0, 0.87);
  }
  .editeModeStyle .application{
    background-color: #c2c2c2;
  }
  .editeModeStyle .canvas{
    background-color: rgba(255, 255, 255, .25);
    cursor: crosshair;
  }

</style>
