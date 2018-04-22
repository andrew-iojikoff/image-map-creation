<template>
  <div id="app">
    <v-app>
      <v-toolbar app>
        <v-btn icon>
          <v-icon>collections</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid align-center justify-center fill-height>
            <router-view/>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
