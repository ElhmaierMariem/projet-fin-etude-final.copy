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
                    <form @submit.prevent="createLV">
                        <div class="form-group">
                            <label for="libelle" class="h2">Libelle</label>
                            <input type="text" class="form-control" placeholder="Libelle" v-model="lv.lVLibelle">
                        </div>
                        <div class="form-group">
                            <label for="type-rd" class="h2">Sources de Données</label>
                             <select class="form-control" style="color: #fff" v-model="lv.rdId">
                                <option v-for="rd in rds" :key="rd.rdId" :value="rd.rdId" style="color: #454545">{{rd.libelle}} </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="requeteSql" class="h2">Requête SQL</label>
                            <input type="text"  class="form-control" placeholder="Requête SQL" v-model="lv.lVRequeteSql">
                        </div>
                        <div class="form-group">
                            <label for="colonneId" class="h2">Colonne ID</label>
                            <input type="text" class="form-control" placeholder="Colonne ID" v-model="lv.lvcolonneId">
                        </div>
                        <div class="form-group">
                            <label for="clonneVal" class="h2">Colonne de Valeurs</label>
                            <input type="text"  class="form-control" placeholder="Colonne de Valeurs"  v-model="lv.lvcolonneValeur">
                        </div>
                        
                        <input type="submit" class="btn btn-dark" value="Créer">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import RDSrevice from '@/service/rd-service'
import LVSrevice from '@/service/lv-service'


export default {
    name: "AddListVal", 
    data(){
        return {
            rdss: {
                id: "1"
            },
            lv: {
                lVId: "",
                lVLibelle: "",
                lVRequeteSql: "",
                lvcolonneId: "",
                lvcolonneValeur: "",
                rdId: ""
            },
            rds: [],
            
        }
    },
    methods: {
        getAllRDS(){
            RDSrevice.getRDs()
                .then(response =>{
                    this.rds = response
            })
            
        },
        createLV(){
            console.log(this.lv)
            LVSrevice.add(this.lv)
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










