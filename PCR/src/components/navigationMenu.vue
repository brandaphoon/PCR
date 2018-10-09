<template>
    <v-card>
      <v-navigation-drawer
        floating
        value="true"
      >
        <v-list>
          <router-link to = '/'>
          <v-list-tile class='tile'>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          </router-link>
          <router-link to = '/request'>
          <v-list-tile class='tile'>
            <v-list-tile-action>
              <v-icon>question_answer</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Request</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          </router-link>
          <router-link to = '/create'>
           <v-list-tile class='tile'>
            <v-list-tile-action>
              <v-icon>playlist_add_check</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Create</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          </router-link>
        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>

<style scoped>

* {
  text-decoration: none;
  color: white;
}

</style>
