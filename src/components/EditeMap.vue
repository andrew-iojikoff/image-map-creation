<template>
  <div>
    <img v-bind:src=" imageSrc " alt="Изображение для редактирования">
  </div>
</template>
<script>
  import router from '../router'

  export default {
    name: 'EditeMap',
    methods: {

    },
    computed: {
       imageSrc: function () {
           return this.$store.state.img;
       }
    },
    data () {
      return {
          img: ''
      }
    }
  }
</script>
<style>

</style>
