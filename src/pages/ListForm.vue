<template>
  <div>
    <div class="container">
      <div>
        <modal :show="toggleMsgDelete" @update:show="displayMsgDelete(null)">
                <template slot="header">
                    <h5 class="modal-title" id="exampleModalLabel">Voulez Vous Vraiment supprimer</h5>
                </template>
                <div>
                    <div class="btn btn-danger" @click="deleteForm()">Supprimer</div>
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
          <div v-if="testform">
            <form @submit.prevent="updateForm(testform.formId, testform)">
              <div class="form-group">
                <label for="libelle" class="h2">Libelle</label>
                <input
                  type="text"
                  name="libelle"
                  id="libelle"
                  class="form-control"
                  placeholder="Libelle"
                  v-model="testform.formLibelle"
                  style="color: #000"
                />
              </div>
              <div class="form-group">
                <label for="libelle" class="h2">Nombre de Colonnes</label>
                <input
                  type="text"
                  name="nombreColonnes"
                  id="nombreColonnes"
                  class="form-control"
                  placeholder="Nombre de Colonnes"
                  v-model="testform.formNombreColonnes"
                  style="color: #000"
                />
              </div>
              <div class="form-group">
                <label for="libelle" class="h2">Formulaire Champs</label>
              </div>
              <div class="card">
                <div class="card-body">
                  <div id="table" class="table-editable">
                    <table class="table table-responsive-md table-striped text-center">
                      <thead>
                        <tr>
                          <th class="text-center">Libellé</th>
                          <th class="text-center">Type de données</th>
                          <th class="text-center">Type de champs</th>
                          <th class="text-center">Liste des valeurs</th>
                          <th class="text-center">Largeur</th>
                          <th class="text-center">Colspan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="typchamp in testform.tabFormChamps"
                          :key="typchamp.formChampsNom"
                        >
                          <td class="pt-3-half" contenteditable="true">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                v-model="typchamp.formChampsLibelle"
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
                                v-model="typchamp.typeDId"
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
                              <select
                                name="typec"
                                id="typec"
                                class="form-control"
                                style="color: #fff"
                                v-model="typchamp.typeChampsId"
                              >
                                <option
                                  v-for="item in typeChamps"
                                  :value="item.typeChampsId"
                                  :key="item.typeChampsId"
                                  style="color: #454545"
                                >{{item.typeChampsLibelle}}</option>
                              </select>
                            </div>
                          </td>
                          <td class="pt-3-half" contenteditable="true">
                            <div class="form-group">
                              <select
                                name="lv"
                                id="lv"
                                class="form-control"
                                style="color: #fff"
                                v-model="typchamp.lvid"
                              >
                                <option
                                  v-for="item in lvs"
                                  :value="item.lvid"
                                  :key="item.lvid"
                                  style="color: #454545"
                                >{{item.lvlibelle}}</option>
                              </select>
                            </div>
                          </td>
                          <td class="pt-3-half" contenteditable="true">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                v-model="typchamp.formChampsLargeur"
                              />
                            </div>
                          </td>
                          <td class="pt-3-half" contenteditable="true">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                v-model="typchamp.formChampsColspan"
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
                    <th scope="col">Nombre Coolonnes</th>
                    <!-- <th scope="col">formulaire Champs Nom</th>
                            <th scope="col">formulaire Champs libelle</th>
                            <th scope="col">largeur</th>
                            <th scope="col">Colspanne</th>
                            <th scope="col">type champs</th>
                            <th scope="col">type d</th>
                    <th scope="col">liste Valeur</th>-->
                    <th scope="col">Modifier</th>
                    <th scope="col">Supprimer</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="form in forms" :key="form.formId">
                    <td>{{form.formId}}</td>
                    <td>{{form.formLibelle}}</td>

                    <td>{{form.formNombreColonnes}}</td>

                    <td @click="toggleModal(); passData(form)">
                      <i class="lni lni-pencil-alt" style="color: #fff"></i> Modifier
                    </td>
                    <td @click="displayMsgDelete(form.formId)">
                      Supprimer
                      <i class="lni lni-pencil-alt" style="color: #fff"></i>
                    </td>
                  </tr>
                  <!-- <tr v-for="form in forms" :key="form.formChampsNom">
                            <th scope="row">{{form.formClass.formId}}</th>
                            <th scope="row">{{form.formClass.formLibelle}}</th>
                            <td>{{form.formClass.formNombreColonnes}}</td>

                            <td>{{form.formChampsNom}}</td>
                            <td>{{form.formChampsLibelle}}</td>

                            <td>{{form.formChampsLargeur}}</td>
                            <td>{{form.formChampsColspan}}</td>
                            <td>{{form.typeChamps.typeChampsLibelle}}</td>
                            <td>{{form.typeD.typeDLibelle}}</td>
                            <td>{{form.lvClass.lvlibelle}}</td>
                            <td @click="toggleModal(); passData(form) "><i class="lni lni-pencil-alt " style="color: #fff"></i> Modifier</td>
                            <td @click="displayMsgDelete(rd.rdId)">Supprimer<i class="lni lni-pencil-alt " style="color: #fff"></i></td>
                  </tr>-->
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
import TYPEDService from "@/service/type-d-service";
import FORMService from "@/service/form-service";
import LVService from "@/service/lv-service";
import TYPECHAMPSService from "@/service/type-champs-service";
import FORMCHAMPSService from "@/service/form-champs-service";
import { Modal } from "@/components";
import { BaseButton } from "@/components";
import { BaseInput } from "@/components";

export default {
  name: "ManageForms",
  data() {
    return {
      forms: null,
      toggleData: false,
      toggleMsgDelete: false,
      idOfFormToDelete: null,
      formChamps: null,
      typeD: null,
      lvs: null,
      toggle: false,
      typeChamps: null,
      testform: {
        formId: null,
        formLibelle: null,
        formNombreColonnes: null,
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
      TYPECHAMPSService.getAll().then((response) => {
        this.typeChamps = response;
        console.log(response);
      });
      LVService.getAll().then((response) => {
        this.lvs = response;
      });
      FORMService.getAll().then((response) => {
        this.forms = response;
      });
      FORMCHAMPSService.getAll().then((response) => {
        this.formChamps = response;
      });
    },
    createForms() {},
    toggleModal() {
      this.toggleData = !this.toggleData;
      console.log(this.testform);
      this.testform.tabFormChamps = [];
    },
    passData(form) {
      this.testform.formId = form.formId;
      this.testform.formLibelle = form.formLibelle;
      this.testform.formNombreColonnes = form.formNombreColonnes;
      this.formChamps.forEach((el) => {
        if (el.formClass.formId == this.testform.formId) {
          this.testform.tabFormChamps.push(el);
        }
      });
    },
    updateForm(id, testform) {
      console.log(this.testform);
      this.$delete(this.testform.tabFormChamps[0], "typeD");
      this.$delete(this.testform.tabFormChamps[0], "formClass");
      this.$delete(this.testform.tabFormChamps[0], "lvClass");
      FORMService.update(this.testform.formId, this.testform);
    },
     deleteForm(){
            FORMService.delete(this.idOfFormToDelete).then(response => {
                this.getAll()
                this.toggleMsgDelete = !this.toggleMsgDelete
            })
             },
            
        displayMsgDelete(id){
            this.toggleMsgDelete = !this.toggleMsgDelete
            this.idOfFormToDelete = id
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
  background: rgba(255, 255, 255, 0.2);
  display: block;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>