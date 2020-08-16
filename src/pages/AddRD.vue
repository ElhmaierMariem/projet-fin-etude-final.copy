<template>
    <div>
        <div class="container"> 
            <div class="row">
                <div class="col-4">
                    <router-link to="typerd">
                        <div class="btn btn-dark">
                            Type de Ressources de Données
                        </div>
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link to="typed">
                        <div class="btn btn-dark">
                            Type de Données
                        </div>
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link to="type-champs">
                        <div class="btn btn-dark">
                            Type de Champs
                        </div>

                    </router-link>
                </div>
            </div>
            <div class="row  mt-5 ">
                <div class="col-3">
                    <ul class="text-center">
                        <li class="menu">
                            <router-link to="ressource-données">Ressources de Données</router-link>
                        </li>
                        <li class="menu">
                            <router-link to="liste-valeurs">Liste des Valeurs</router-link>
                                
                        </li>
                        <li class="menu">
                             <router-link to="form">Formulaires</router-link>
                        </li>
                        <li class="menu">
                            <router-link to="tableau">Tableaux</router-link>
                        </li>
                        <li class="menu">
                            <router-link to="categorie">Categories Rapport</router-link>
                        </li>
                        <li class="menu">
                            <router-link to="rapport">Rapport</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-9">
                    <form @submit.prevent="createRD">
                        <div class="form-group">
                            <label for="libelle" class="h2">Libelle</label>
                            <input type="text" name="libelle" id="libelle" class="form-control" placeholder="Libelle" v-model="rd.libelle">
                        </div>
                        <div class="form-group">
                            <label for="type-rd" class="h2">Type de Ressources de Données</label>
                             <select name="libelle" id="libelle" class="form-control" style="color: #fff" v-model="rd.typeRdId">
                                <option v-for="trd in rds" :key="trd.typeRdId" :value="trd.typeRdId"  style="color: #454545">{{trd.libelle}} </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="ad-ip" class="h2">Adresse Ip</label>
                            <input type="text" name="ad-ip" id="ad-ip" class="form-control" placeholder="Adresse Ip" v-model="rd.ipAdr">
                        </div>
                        <div class="form-group">
                            <label for="nom-base" class="h2">Nom de la base</label>
                            <input type="text" name="nom-base" id="nom-base" class="form-control" placeholder="Nom de la base" v-model="rd.dataBase">
                        </div>
                        <div class="form-group">
                            <label for="login" class="h2">Login</label>
                            <input type="text" name="login" id="login" class="form-control" placeholder="Login"  v-model="rd.login">
                        </div>
                        <div class="form-group">
                            <label for="passwd" class="h2">Mot de Passe</label>
                            <input type="password" name="passwd" id="passwd" class="form-control" placeholder="Mot de passe" v-model="rd.passwd">
                        </div>
                        <input type="submit" class="btn btn-dark" value="Créer">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TypeRDSrevice from '@/service/type-rd-service'
import RDSrevice from '@/service/rd-service'

export default {
    name: "AddRapport",
    data(){
        return {
            rdss: {
                id: "1"
            },
            rd: {
                id: "",
                libelle: "",
                ipAdr: "",
                dataBase: "",
                login: "",
                passwd: "",
                typeRdId: ""
            },
            rds: [],
            
        }
    },
    methods: {
        getAllRDS(){
            TypeRDSrevice.getRDs()
                .then(response =>{
                    this.rds = response
            })
            
        },
        createRD(){
            RDSrevice.addRD(this.rd)
        }
    },
    mounted() {
        this.getAllRDS()
        
    }
}
</script>
<style scoped>
.menu {
    padding: 15px 0;
    border-radius: 10px;
    margin: 10px;
    background: rgba(255, 255, 255, .2);
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}

</style>










