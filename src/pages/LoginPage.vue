<template>
    <div class="container mt-5 p-3" style="max-width: 40rem;background-color: rgba(255,255,255,0.2)">
        <h1>Login Page</h1>
        <form @submit.prevent="submit" method="post">
            <div class="form-group">
                <label for="username">Nom d'utilisateur</label>
                <input type="text" v-model="form.username" class="form-control">
            </div>
            <div class="form-group">
                <label for="password">Mot de Passe</label>
                <input type="password" v-model="form.password" class="form-control">
            </div>
            <input type="submit" value="Connexion" class="form-control btn btn-primary">
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
    name: "LoginPage",
    data(){
        return {
            form: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),
        submit(){
            this.signIn(this.form).then(() => {
                this.$router.push({
                    name: "home",
                })
            }).catch((e) => {
                console.log(e)
            })
        },
        saveNewUser(){
            // let user={
            //     roles: ["admin"],
            //     username: "foo",
            //     email: "foo123@gmail.com",
            //     password: "123456"
            // }
            // axios.post("auth/signup", user)
        }
    }
}
</script>