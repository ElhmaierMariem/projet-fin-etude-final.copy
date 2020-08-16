<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links" v-if="getUser.roles.indexOf('ROLE_ADMIN') != -1">
          <sidebar-link to="/dashboard" :name="$t('sidebar.dashboard')" icon="tim-icons icon-chart-pie-36"/>
          <sidebar-link to="/gestion-rapport" :name="$t('Gestion Rapports')" icon="tim-icons icon-single-copy-04"/>
          <sidebar-link to="/gestion-utilisateur" :name="$t('Gestion Utilisateurs')" icon="tim-icons icon-single-02"/>
      </template>
      <template slot="links" v-else>
          <sidebar-link to="/interface-utilisateur" :name="$t('InterfaceUtilisateur')" icon="tim-icons icon-single-02"/>
      </template>
      <template slot="links">
          <sidebar-link to="/profil" :name="$t('Profile')" icon="tim-icons icon-badge"/>
          <sidebar-link  to="/deconnexion" :name="$t('Deconnexion')" icon="tim-icons icon-button-power"/>  
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import { mapGetters } from 'vuex'

export default { 
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      getUser: 'auth/getUser',
    })
  },
  methods: {
    
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    logout(){
      this.logout()
    }
  }
};
</script>
