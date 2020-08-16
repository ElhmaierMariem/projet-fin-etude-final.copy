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
                    <form  @submit.prevent="createForms">
                        <div class="form-group">
                            <label for="libelle" class="h2" >Libelle</label>
                            <input type="text" name="libelle" id="libelle" class="form-control" placeholder="Libelle" v-model="formModel.formLibelle">
                        </div>
                        <div class="form-group">
                            <label for="libelle" class="h2">Nombre de Colonnes</label>
                            <input type="text" name="nombreColonnes" id="nombreColonnes" class="form-control" placeholder="Nombre de Colonnes" v-model="formModel.formNombreColonnes">
                        </div>
                      <div class="form-group">
                            <label for="libelle" class="h2">Formulaire Champs</label>
                         
                      </div>
                      
                    <div class="card">
                    
                    <div class="card-body">
                        <div id="table" class="table-editable">
                            <div class="btn btn-success" @click="addTR"> + </div>
                            <div class="btn btn-success" @click="removeTR"> - </div>
                        <table class="table table-responsive-md table-striped text-center">
                            <thead>
                            <tr>
                                <th class="text-center">Nom</th>
                                <th class="text-center">Libellé</th>
                                <th class="text-center">Type de données</th>
                                <th class="text-center">Type de champs</th>
                                <th class="text-center">Liste des valeurs</th>
                                <th class="text-center">Largeur</th>
                                <th class="text-center">Colspan</th>
                            </tr>
                            </thead>
                            <tbody>


                <tr v-for="count in counter" :key="count">
                    <td>
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="formModel.tabFormChamps[count-1].formChampsNom">
                        </div>
                    </td>
                    <td>
                         <div class="form-group">
                            <input type="text" class="form-control" v-model="formModel.tabFormChamps[count-1].formChampsLibelle">
                        </div>
                    </td>
                    <td>
                         <div class="form-group">
                           
                              <select name="typed" id="typed" class="form-control"  v-model="formModel.tabFormChamps[count-1].typeDId" style="color: #fff">
                                   
                                    <option v-for="item in typeD" :value="item.typeDId" :key="item.typeDId" style="color: #454545">{{item.typeDLibelle}}</option>
                                   
                            </select>
                        </div>
                    </td>
                    <td>
                         <div class="form-group">
                            
                             <select name="typec" id="typec" class="form-control"  v-model="formModel.tabFormChamps[count-1].typeChampsId" style="color: #fff">
                                     <option v-for="item in typeChamps" :value="item.typeChampsId" :key="item.typeChampsId" style="color: #454545">{{item.typeChampsLibelle}}</option>
                            </select>
                        </div>
                    </td>
                    <td>
                         <div class="form-group">
                            
                             <select name="lv" id="lv" class="form-control"  v-model="formModel.tabFormChamps[count-1].lvid" style="color: #fff">
                                    <option v-for="item in lvs" :value="item.lvid" :key="item.lvid" style="color: #454545">{{item.lvlibelle}}</option>
                            </select>
                        </div>
                    </td>
                    <td> <div class="form-group">
                            <input type="text" class="form-control" v-model="formModel.tabFormChamps[count-1].formChampsLargeur">
                        </div></td>
                    <td>
                         <div class="form-group">
                            <input type="text" class="form-control" v-model="formModel.tabFormChamps[count-1].formChampsColspan">
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
            </div>
        </div>
        </div>
        <!-- Editable table -->
                       
                       
                        
                        <input type="submit" class="btn btn-dark" value="Créer">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import TYPEDService from '@/service/type-d-service'
import TYPECHAMPSService from '@/service/type-champs-service'
import LVSrevice from '@/service/lv-service' 
import FORMService from '@/service/form-service'
import FORMCHAMPSService from '@/service/form-champs-service'
export default {
    name: "AddForm",
     data(){
        return {
           counter: 1,
           typeD: null,
           lvs: null,
           typeChamps: null,
        //    formChamps:[{
        //         formChampsLibelle:"",
        //         formChampsNom:"",
        //         formChampsColspan:"",
        //         formChampsLargeur:"",
        //         lvId:"",
        //         typeDId:"",
        //         typeChampsId:"",

        //     }],
            // singleFormChamps: null,
            formModel: {
                formId:null,
                formLibelle:null,
                formNombreColonnes:null,
                tabFormChamps:[
                    {
                        formChampsNom:"",
                        formChampsLibelle:"",
                        formChampsLargeur:"",
                        formChampsColspan:"",
                        typeDId:"",
                        typeChampsId:"",
                        lvid:""
                    }
                ]
            } 
        }
    },

 methods: {
       addTR(){
           this.counter ++
           
           let c = {
               ...this.formModel.tabFormChamps[this.counter-1]
           }
           this.formModel.tabFormChamps.push(c)
           
           console.log( this.formModel.tabFormChamps)
       },
       removeTR(){
           this.counter --
           this.formModel.tabFormChamps.pop()
           console.log(this.formModel.tabFormChamps)
       },
       getAll(){
           TYPEDService.getAll().then(response => {
               this.typeD = response
               console.log(this.typeD)
           })
           TYPECHAMPSService.getAll().then(response => {
               this.typeChamps = response
               console.log(response)
           })
           LVSrevice.getAll().then(response => {
               this.lvs = response
           })
           FORMService.getAll().then(response => {
               console.log(response)
           })
       },
       createForms(){
           console.log(this.formModel)
           FORMService.add(this.formModel)
       }
    },
    mounted(){
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
