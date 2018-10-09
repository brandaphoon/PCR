<template>
  <v-app>
    <div id="app">
      <v-container fluid>
        <v-layout row>
          <v-flex xs3>
            <v-card dark flat color="secondary">
              <navigationMenu/>
            </v-card>
          </v-flex>
          <v-flex xs9 order-lg2>
            <v-card flat color="secondary">
              <div class='pages'>
                <router-view/>
              </div>
            </v-card>
          </v-flex>
        </v-layout >
      </v-container>
    </div>
  </v-app>
</template>

<script>
import navigationMenu from '@/components/navigationMenu'

export default {
  name: 'App',
  components: {
    navigationMenu
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("./assets/background.jpg");
  height: 100;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.pages {
  padding: 30px;
  background-color: white;
}
</style>
