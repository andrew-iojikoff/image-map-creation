<template>
    <form class="text-md-center text-sm-center text-xs-center">
      <h1 class="headline file-loader__header">Для создания карты изображения загрузите файл</h1>
      <p class="text-md-center text-sm-center text-xs-center">
        <v-icon x-large color="red darken-4">
          cloud_upload
        </v-icon>
      </p>
      <input ref="file_input" class="file-loader__file" type="file" @change="loadFile">
      <v-btn @click="loadImage" color="success">
        Загрузить
      </v-btn>
      <v-alert
        type="error"
        :value="alert"
        transition="scale-transition"
        dismissible
        v-model="alert"
      >
        Этот формат файла изображения не поддерживается или не является изображением!
      </v-alert>
    </form>
</template>

<script>
import router from '../router'

export default {
  name: 'LoadImage',
  methods: {
    loadImage () {
      this.$refs.file_input.click()
    },
    loadFile () {
      let file = this.$refs.file_input.files[0]
      let reader = new FileReader()

      reader.onloadend = () => {
        this.$store.commit('setImage', reader.result)
        router.push('addMap')
      }

      if (file) {
        let extension = file.name.split('.').pop().toLowerCase()
        let isSuccess = this.fileExtensions.indexOf(extension) > -1

        if (isSuccess) {
          reader.readAsDataURL(file)
        } else {
          this.alert = !this.alert
        }
      }
    }
  },
  data () {
    return {
      fileExtensions: ['jpg', 'jpeg', 'png', 'bmp'],
      alert: false
    }
  }
}
</script>

<style scoped>
  .file-loader__header{
    margin-bottom: 1em;
  }
  .file-loader__file{
    display: none;
  }
</style>
