<template>
    <div>
        <div class="btn btn-primary" @click="logOut">
            Deconnexion
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "Logout",

    methods: {
        ...mapActions({
            logout: 'auth/logout'
      }),
      logOut(){
        this.logout()
        this.$router.push({
            name: "connexion",
      })
    }

}
}
</script>