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
                    <form @submit.prevent="createRapp">
                        <div class="form-group">
                            <label for="libelle" class="h2">Libelle</label>
                            <input type="text" name="libelle" id="libelle" class="form-control" placeholder="Libelle" v-model="rd.rappLibelle">
                        </div>
                         <div class="form-group">
                            <label for="cat" class="h2">Catégorie</label>
                             <select  class="form-control" style="color: #fff" v-model="rd.cattId">
                                <option v-for="k in rds" :key="k.cattId" :value="k.cattId"  style="color: #454545">{{k.catLibelle}}</option>
                            </select>
                        </div>
                         <div class="form-group">
                            <label for="sd" class="h2">Sources de Données</label>
                             <select  class="form-control" style="color: #fff" v-model="rd.rdId">
                                <option v-for="trd in rds" :key="trd.rdId" :value="trd.rdId"  style="color: #454545">{{trd.libelle}}</option>
                            </select>
                        </div>
                         <div class="form-group">
                            <label for="form" class="h2">Formulaire Critère de Recherche</label>
                            <select  class="form-control" style="color: #fff" v-model="rd.formId">
                                <option v-for="form in rds" :key="form.formId" :value="form.formId"  style="color: #454545">{{form.formLibelle}}</option>
                            </select>
                        </div>
                         <div class="form-group">
                            <label for="libelle" class="h2">Requête Sql Entête</label>
                            <input type="text" name="requeteSqlEntete" id="requeteSqlEntete" class="form-control" placeholder="Requête Sql Entête" v-model="rd.requeteSqlEntete">
                        </div>
                        
                        <div class="form-group">
                            <label for="formC" class="h2">Formulaire de Resultat Entête</label>
                            <select  class="form-control" style="color: #fff" v-model="rd.formChampsNom">
                                <option v-for="formC in rds" :key="formC.formChampsNom" :value="formC.formChampsNom"  style="color: #454545">{{formC.formChampsLibelle}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="nom-base" class="h2">Requête Sql Détail</label>
                            <input type="text" name="requeteSqlDetail" id="requeteSqlDetail" class="form-control" placeholder="Requête Sql Détail" v-model="rd.requeteSqlDetail">
                        </div>
                        <div class="form-group">
                            <label for="tab" class="h2">Tableau de Resultat</label>
                            <select  class="form-control" style="color: #fff" v-model="rd.tabId">
                                <option v-for="tab in rds" :key="tab.tabId" :value="tab.tabId"  style="color: #454545">{{tab.tabLibelle}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <p>Avec Template:</p>
                              <form>
                                 <label class="radio-inline">
                                    <input type="radio" name="optradio" checked> Oui
                                 </label>
                                 <label class="radio-inline">
                                     <input type="radio" name="optradio"> Non
                                 </label>
                              </form>
                        </div>
                        <input type="submit" class="btn btn-dark" value="Créer">
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>




import RDService from '@/service/rd-service'
import CATService from '@/service/cat-service'
import FORMService from '@/service/form-service'
import FORMCHAMPSService from '@/service/form-champs-service'
import TABService from '@/service/tab-service'
import RAPPService from '@/service/rapport-service'

export default {
    name: "AddRapport",
    data(){
        return {
            rdss: {
                id: "1"
            },
            rd: {
                rappId: "",
                rappLibelle: "",
                requeteSqlEntete: "",
                requeteSqlDetail: "",
                cattId: "",
                rdId: "",
                formId: "",
                formChampsNom: "",
                tabId:"",
            },
            rds: [],
            
        }
    },
    methods: {
        getAllRDS(){
            RDService.getRDs()
                .then(response =>{
                    this.rds = response
            })
            
        },

          getAllCat(){
            CATService.get()
                .then(response =>{
                    this.rds = response
            })
            
        },

          getAllForm(){
            FORMService.getAll().then(response =>{
                    this.rds = response
            })
            
        },
          getAllFormChamps(){
            FORMCHAMPSService.getAll()
                .then(response =>{
                    this.rds = response
            })
            
        },
          getAllTab(){
            TABService.getAll()
                .then(response =>{
                    this.rds = response
            })
            
        },



        createRapp(){
            RAPPService.add(this.rd)
        }
    },
    mounted() {
        this.getAllRDS()
        this.getAllCat()
        this.getAllForm()
        this.getAllFormChamps()
        this.getAllTab()
        
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