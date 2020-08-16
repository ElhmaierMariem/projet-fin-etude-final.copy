<template>
    <div>
        <div class="container">

     <div>
         <modal :show="toggleMsgDelete" @update:show="displayMsgDelete(null)">
                <template slot="header">
                    <h5 class="modal-title" id="exampleModalLabel">Voulez Vous Vraiment supprimer</h5>
                </template>
                <div>
                    <div class="btn btn-danger" @click="deleteTab()">Supprimer</div>
                    <div class="btn btn-danger" @click="displayMsgDelete(null)">Ignorer</div>
                 </div>
                 <template slot="footer">
                     
                 </template>
         </modal>
     </div> 

       <div>
        <modal :show="toggleData" @update:show="toggleModal" style="width: 100%">
          <template slot="header">
            <h5 class="modal-title" id="exampleModalLabel">Modifier</h5>
          </template>
          <div v-if="testTab">
            <form @submit.prevent="updateTab(testTab.tabId, testTab)">
              <div class="form-group">
                <label for="libelle" class="h2">Libelle</label>
                <input
                  type="text"
                  name="libelle"
                  id="libelle"
                  class="form-control"
                  placeholder="Libelle"
                  v-model="testTab.tabLibelle"
                  style="color: #000"
                />
              </div>

               <div class="card">
                <div class="card-body">
                  <div id="table" class="table-editable">
                    <table class="table table-responsive-md table-striped text-center">
                      <thead>
                        <tr>
                          <th class="text-center">Libellé</th>
                          <th class="text-center">Type de données</th>
                          <th class="text-center">Largeur</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="tabCols in testTab.tabColClass"
                          :key="tabCols.tabColClassId"
                        >
                          <td class="pt-3-half" contenteditable="true">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                v-model="tabCols.tabColClassLibelle"
                              />
                            </div>
                          </td>
                          <td class="pt-3-half" contenteditable="true">
                            <div class="form-group">
                              <select
                                name="typed"
                                id="typed"
                                class="form-control"
                                style="color: #fff"
                                v-model="tabCols.typeDId"
                              >
                                <option
                                  v-for="item in typeD"
                                  :value="item.typeDId"
                                  :key="item.typeDId"
                                  style="color: #454545"
                                >{{item.typeDLibelle}}</option>
                              </select>
                            </div>
                          </td>
                         
                         
                          <td class="pt-3-half" contenteditable="true">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                v-model="tabCols.tabColClassLargeur"
                              />
                            </div>
                          </td>
                         
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
               <input type="submit" class="btn btn-dark" value="Créer" />
            </form>
          </div>
          <template slot="footer"></template>
        </modal>
      </div>


           <div class="row">
        <div class="col-4">
          <router-link to="typerd">
            <div class="btn btn-dark">Type de Ressources de données</div>
          </router-link>
        </div>
        <div class="col-4">
          <router-link to="typed">
            <div class="btn btn-dark">Type de Données</div>
          </router-link>
        </div>
        <div class="col-4">
          <router-link to="type-champs">
            <div class="btn btn-dark">Type de Champs</div>
          </router-link>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12">
          <ul class="text-center row">
            <li class="col-4">
              <router-link to="ressource-données" class="menu">Ressources de Données</router-link>
            </li>
            <li class="col-4">
              <router-link to="liste-valeurs" class="menu">Liste des Valeurs</router-link>
            </li>
            <li class="col-4">
              <router-link to="form" class="menu">Formulaires</router-link>
            </li>
            <li class="col-4">
              <router-link to="tableau" class="menu">Tableaux</router-link>
            </li>
            <li class="col-4">
              <router-link to="categorie" class="menu">Categories Rapport</router-link>
            </li>
            <li class="col-4">
              <router-link to="rapport" class="menu">Rapport</router-link>
            </li>
          </ul>
        </div>
               <div class="col-12 mt-5">
          <div class="row">
            <div class="col-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Libellé</th>
                    <th scope="col">Modifier</th>
                    <th scope="col">Supprimer</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="tab in tabs" :key="tab.tabId">
                    <td>{{tab.tabId}}</td>
                    <td>{{tab.tabLibelle}}</td>

                    <td @click="toggleModal(); passData(tab)">
                      <i class="lni lni-pencil-alt" style="color: #fff"></i> Modifier
                    </td>
                    <td @click="displayMsgDelete(tab.tabId)">
                      Supprimer
                      <i class="lni lni-pencil-alt" style="color: #fff"></i>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
            </div>
        </div>
    </div>
    
</template> 
<script>
import { BaseButton } from "@/components";
import { BaseInput } from "@/components";

import { Modal } from "@/components";
import TYPEDService from "@/service/type-d-service";
import TABService from "@/service/tab-service";
import TABCOLService from "@/service/tab-col-service";
export default {
    name: "ManageTabs",
     data() {
    return {
      tabs: null,
      toggleData: false,
      toggleMsgDelete: false,
      idOfTabToDelete: null,
      tabColClass: null,
      typeD: null,
      toggle: false,
      testTab: {
        tabId: null,
        tabLibelle: null,
         tabFormChamps: [
          // {
          //     formChampsNom:"",
          //     formChampsLibelle:"",
          //     formChampsLargeur:"",
          //     formChampsColspan:"",
          //     typeDId:"",
          //     typeChampsId:"",
          //     lvid:""
          // }
        ],
        
       
      },
    };
  },
       methods: {
    getAll() {
      TYPEDService.getAll().then((response) => {
        this.typeD = response;
        console.log(this.typeD);
      });
     
      TABService.getAll().then((response) => {
        this.tabs = response;
      });
      TABCOLService.getAll().then((response) => {
        this.tabColClass = response;
      });
    },
    createTabs() {},

    toggleModal() {
      this.toggleData = !this.toggleData;
      console.log(this.testTab);
      this.testTab.tabFormChamps = [];
      
    },
    passData(tab) {
      this.testTab.tabId = tab.tabId;
      this.testTab.tabLibelle = tab.tabLibelle;
      this.tabColClass.forEach((el) => {
        if (el.tabClass.tabId == this.testTab.tabId) {
          this.testTab.tabFormChamps.push(el);
        }
      });
    },
    updateTab(id, testTab) {
      console.log(this.testTab);
      this.$delete(this.testTab.tabFormChamps[0], "typeD");
      this.$delete(this.testTab.tabFormChamps[0], "tabClass");
      TABService.update(this.testTab.tabId, this.testTab);
    },
     deleteTab(){
            TABService.delete(this.idOfTabToDelete).then(response => {
                this.getAll()
                this.toggleMsgDelete = !this.toggleMsgDelete
            })
             },
            
        displayMsgDelete(id){
            this.toggleMsgDelete = !this.toggleMsgDelete
            this.idOfTabToDelete = id
        } 
  },
  mounted() {
    this.getAll();
  },

  components: {
    Modal,
    BaseButton,
    BaseInput,
  },
};
  

</script>
<style scoped>
.menu {
    padding: 15px 0;
    border-radius: 10px;
    margin: 10px 0px;
    background: rgba(255, 255, 255, .2);
    display: block;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}

</style>