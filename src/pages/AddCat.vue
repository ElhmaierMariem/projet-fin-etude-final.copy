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
                    <form @submit.prevent="createCAT">
                        <div class="form-group">
                            <label for="libelle" class="h2">Libelle</label>
                            <input type="text" name="libelle" id="libelle" class="form-control" placeholder="Libelle" v-model="cat.catLibelle">
                        </div>
                         <input type="submit" class="btn btn-dark" value="Créer">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import CATSrevice from '@/service/cat-service'

export default {
    name: "AddRapport",
    data(){
        return {
            rdss: {
                id: "1"
            },
            cat: {
                catId: "",
                catLibelle: "",
            },
            rds: [],
            
        }
    },
    methods: {
       
          getAll(){
            CATSrevice.getAll()
                .then(response =>{
                    this.rds = response
            })
            
        },   
        
        createCAT(){
            CATSrevice.add(this.cat)
        }
    },
    mounted() {
        this.getAll()
        
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










