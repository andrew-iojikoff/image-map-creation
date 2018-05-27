import Vue from 'vue';
import Router from 'vue-router';
import LoadImage from '@/components/LoadImage';
import EditeMap from '@/components/EditeMap';
import { store } from '../store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoadImage',
      component: LoadImage,
      beforeEnter: (to, from, next) => {
        if (store.state.isImageLoad) {
          window.app.$refs.mainComponent.modManage('returnToLoadImagePage');
          store.commit('setCurrentMod', 'INIT_MODE');
          document.getElementsByClassName('app-container')[0].classList.remove('editeModeStyle');
        }

        next();
      }
    },
    {
      path: '/addMap',
      name: 'EditeMap',
      component: EditeMap
    }
  ]
});
