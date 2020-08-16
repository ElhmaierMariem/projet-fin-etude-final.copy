<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard'
  export default {
    components: {
      EditProfileForm,
      UserCard
    },
    data() {
      return {
        model: {
          company: 'Societe .....',
          email: '',
          username: '',
          firstName: "",
          lastName: '',
          address: '',
          dateBirth: '',
          poste:"",
          cin: '',
          categories: ''
        },
        
      }
    }
  }
</script>
<style>
</style>
