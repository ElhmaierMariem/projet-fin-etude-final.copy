<template>
  <div class="card">
    <div class="card-header">
      <h3 class="title">Control Panel</h3>
    </div>
    <div class="card-body all-icons">
      <div class="row">

        <div class="font-icon-list col-6">
          <div class="font-icon-detail">
            <i class="tim-icons icon-single-copy-04"></i>
            <router-link to="gestion-rapport">
              <p class="h4">Ajouter Un Rapport</p>
            </router-link>

          </div>

        </div>
        
        <div class="font-icon-list col-6">
          <div class="font-icon-detail">
            <i class="tim-icons icon-single-02"></i>
             <router-link to="gestion-utilisateur">
              <p>Gestion Des Utilisateurs</p>
            </router-link>
            

          </div>

        </div>

        
        <div class="font-icon-list col-6">
          <div class="font-icon-detail">
            <i class="tim-icons icon-badge"></i>
            <router-link to="profil">
              <p>Profile</p>
            </router-link>
            
          </div>

        </div>
        
        <div class="font-icon-list col-6">
          <div class="font-icon-detail">
            <i class="tim-icons icon-button-power"></i>
            <p>Deconnexion</p>

          </div>

        </div>
        

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  data(){
    return {
      user: null
    }
  },
  methods: {
    getUser(){

    }
  }
};
</script>
<style>
</style>

