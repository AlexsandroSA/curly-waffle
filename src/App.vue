<template>
  <div id="app">
    <v-app id="app-layout" standalone>
      <v-navigation-drawer absolute persistent light :mini-variant.sync="mini" v-model="drawer" overflow>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar tag="div">
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>User Name</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.native.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed class="blue darken-1" dark>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title> CheckPoint </v-toolbar-title>
      </v-toolbar>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'Settings', icon: 'settings' },
        { title: 'Reports', icon: 'timeline' },
        { title: 'Notifications', icon: 'notifications_none' },
        { title: 'About', icon: 'info' },
        { title: 'Logout', icon: 'power_settings_new' }
      ],
      mini: false,
      right: null
    }
  }
}
</script>

<style>
</style>
