<template>
  <v-app>
  
    <v-navigation-drawer app
    v-model="drawer"
      absolute
      bottom
      >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CO² Tabelle e.V.</v-toolbar-title>
    </v-app-bar>
  
    <!-- Sizes your content based upon application components -->
    <v-main>
  
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
  
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  
    <v-footer app class="footer">
      <p>CO² Tabelle e.V. 2022 </p>
      <a href="/datenschutz">Datenschutz</a>
      <a href="/impressum">Impressum</a>
    </v-footer>
  </v-app>
</template>


<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: true,
    title: 'CO² Info Service',
    group: null,
    items: [
          { title: 'Tabelle', icon: 'mdi-view-dashboard' },
          { title: 'Impressum', icon: 'mdi-gavel' },
        ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #677475;
  color: white;
  line-height: 80px;
  display: block;
  
  
  height: 80px;
  text-align: center;

  p {
    display: inline-block;
  }

  a {
    margin-left: 10px;
    color: rgb(231, 215, 255);
    text-decoration: none;
  }
}
</style>