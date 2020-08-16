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
                    <form  @submit.prevent="createTabs">
                        <div class="form-group">
                            <label for="libelle" class="h2">Libelle</label>
                            <input type="text" name="libelle" id="libelle" class="form-control" placeholder="Libelle"  v-model="tabModel.tabLibelle">
                    
                      <div class="form-group">
                            <label for="libelle" class="h2">Tableau Colonnes</label>
                         
                      </div>
                        </div>   
<div class="card">
  
  <div class="card-body">
    <div id="table" class="table-editable">
        <div class="btn btn-success" @click="addTR"> + </div>
        <div class="btn btn-success" @click="removeTR"> - </div>
      <table class="table table-responsive-md table-striped text-center">
        <thead>
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Libellé</th>
            <th class="text-center">Type de données</th>
            <th class="text-center">Largeur</th>
          </tr>
        </thead>
        <tbody>


                <tr v-for="count in counter" :key="count">
                    <td class="pt-3-half" contenteditable="true">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="tabModel.tabCol[count-1].tabColId">
                        </div>
                    </td>
                    <td class="pt-3-half" contenteditable="true">
                         <div class="form-group">
                            <input type="text" class="form-control" v-model="tabModel.tabCol[count-1].tabColLibelle">
                        </div>
                    </td>
                    <td class="pt-3-half" contenteditable="true">
                         <div class="form-group">
                           
                              <select name="typed" id="typed" class="form-control"  v-model="tabModel.tabCol[count-1].typeDId" style="color: #fff">
                                   
                                    <option v-for="item in typeD" :value="item.typeDId" :key="item.typeDId" style="color: #454545">{{item.typeDLibelle}}</option>
                                   
                            </select>
                        </div>
                    </td>
                    
                        
                  
                   
                    <td class="pt-3-half" contenteditable="true"> 
                        <div class="form-group">
                            <input type="text" class="form-control"  v-model="tabModel.tabCol[count-1].tabColLargeur">
                        </div></td>
                    
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
import TABService from '@/service/tab-service'
import TABCOLService from '@/service/tab-col-service'





export default {
    name: "AddTab",
     data(){
        return {
           counter: 1,
            typeD: null,
          /*  tabCol:[{
                tabColId:"",
                tabColLibelle:"",
                tabColLargeur:"",
                typeDId:"",

            }], 
            singleTabCol: null,
            */
             tabModel: {
                tabId:null,
                tabLibelle:null,
                tabCol:[
                    {
                        tabColId:"",
                        tabColLibelle:"",
                        tabColLargeur:"",
                        typeDId:""
                    }
                ]
            } 

            
        }
    },


 methods: {
       addTR(){
           this.counter ++
           let c = {
               ...this.tabCol[this.counter-1]
           }
           this.tabCol.push(c)
           
           console.log(this.tabCol)
       },
       removeTR(){
           this.counter --
       },
       getAll(){
           TYPEDService.getAll().then(response => {
               this.typeD = response
               console.log(this.typeD)
           })
           
           TABService.getAll().then(response => {
               console.log(response)
           })
       },
       createTabs(){
           console.log(this.tabModel)
           TABService.add(this.tabModel)
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
