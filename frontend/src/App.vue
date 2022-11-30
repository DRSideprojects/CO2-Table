<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" absolute bottom>
      <v-list>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Tabelle</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="img"></div>
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
      <p>CO² Tabelle e.V. 2022</p>
      <router-link to="/datenschutz">Datenschutz</router-link>
      <router-link to="/impressum">Impressum</router-link>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: true,
    title: "CO² Info Service",
    group: null,
    items: [
      { title: "Tabelle", icon: "mdi-view-dashboard" },
      { title: "Impressum", icon: "mdi-gavel" },
      { title: "Datenschutz", icon: "mdi-gavel" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
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

.img {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: orange;
  border-radius: 999px;
  margin-left: 10px;
}
</style>
