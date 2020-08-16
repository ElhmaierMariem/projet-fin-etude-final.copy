<template>
<div>

    <div class="container"> 

        <div>
            <div>
             
               <modal :show="toggleMsgDelete" @update:show="displayMsgDelete(null)">
                  <template slot="header">
                       <h5 class="modal-title" id="exampleModalLabel">Voulez Vous Vraiment supprimer</h5>
                  </template>
                    <div>
                         <div class="btn btn-danger" @click="deleteRD()">Supprimer</div>
                         <div class="btn btn-danger" @click="displayMsgDelete(null)">Ignorer</div>
                    </div>
                 <template slot="footer">
                     
                 </template>
             </modal>

            </div>

            <div>
             
               <modal :show="toggleData" @update:show="toggleModal">
                 <template slot="header">
                    <h5 class="modal-title" id="exampleModalLabel">Modifier</h5>
                 </template>
                 <div>
                      <form @submit.prevent="updateRD(singleRd.rdId, singleRd)">
                            <div class="form-group">
                                <label for="ipAdr">ID RD</label>
                                <input type="text" v-model="singleRd.rdId" class="form-control" style="color: #454545" disabled>
                            </div>
                            
                            <div class="form-group">
                                <label for="libelle">Libelle</label>
                                <input type="text" v-model="singleRd.libelle" class="form-control" style="color: #454545">
                            </div>

                            <div class="form-group">
                                <label for="typeRd">Type RD</label>
                                <select name="libelle" id="libelle" class="form-control"  v-model="singleRd.typeRd.idRD" style="color: #000">
                                    <option :value="singleRd.typeRd.idRD">{{singleRd.typeRd.libelle}} </option>
                                    <option  v-for="trd in rdsType" :key="trd.idRD" :value="trd.typeRdId">{{trd.libelle}} </option>
                            </select>
                            </div>

                            <div class="form-group">
                                <label for="ipAdr">DataBase</label>
                                <input type="text" v-model="singleRd.dataBase" class="form-control" style="color: #454545">
                            </div>

                            <div class="form-group">
                                <label for="ipAdr">Ip Adresse</label>
                                <input type="text" v-model="singleRd.ipAdr" class="form-control" style="color: #454545">
                            </div>

                            <div class="form-group">
                                <label for="login">Login</label>
                                <input type="text" v-model="singleRd.login" class="form-control" style="color: #454545">
                            </div>

                            <div class="form-group">
                                <label for="passwd">Password</label>
                                <input type="text" v-model="singleRd.passwd" class="form-control" style="color: #454545">
                            </div>
                            
                           <input class="btn btn-primary" type="submit" value="Enregistrer">
                        </form>
                 </div>
                 <template slot="footer">
                     
                 </template>
               </modal>
 
            </div>

            <div class="row">
                <div class="col-4">
                    <router-link to="typerd">
                        <div class="btn btn-dark">
                            Type de Ressources de données
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
                            <th scope="col">Type sources de données</th>
                            <th scope="col">Adresse IP</th>
                            <th scope="col">Nom de la Base</th>
                            <th scope="col">Login</th>
                            <th scope="col">Mot de Passe</th>
                            <th scope="col">Modifier</th>
                            <th scope="col">Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="rd in rds" :key="rd.RdId">
                            <th scope="row">{{rd.rdId}}</th>
                            <th scope="row">{{rd.libelle}}</th>
                            <td>{{rd.typeRd.libelle}}</td>
                            <td>{{rd.ipAdr}}</td>
                            <td>{{rd.dataBase}}</td>
                            <td>{{rd.login}}</td>
                            <td>{{rd.passwd}}</td>
                            <td @click="toggleModal(); passData(rd)"><i class="lni lni-pencil-alt " style="color: #fff"></i> Modifier</td>
                            <td @click="displayMsgDelete(rd.rdId)">Supprimer<i class="lni lni-pencil-alt " style="color: #fff"></i></td>
                            </tr>
                            
                        </tbody>
                        </table>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  
</template> 
<script>
import RDSrevice from '@/service/rd-service'
import {Modal} from '@/components'
import {BaseButton} from '@/components'
import {BaseInput} from '@/components'
import TypeRDSrevice from '@/service/type-rd-service'

export default {
    name: "ManageRD",
    data() {
        return {
          rds: [],
          rdsType: [],
          toggleData: false,
          toggleMsgDelete: false,
          idOfRdToDelete: null,
          singleRd: {
            rdId: "",
            libelle: "",
            typeRd: {
                idRD: "",
                libelle: ""
            },
            ipAdr: "",
            dataBase: "",
            login: "",
            passwd: ""
          }
        }
  },
   methods: {
        getAllRDSType(){
            TypeRDSrevice.getRDs()
                .then(response =>{
                    this.rdsType = response
            })
            
        },
        getAllRDS(){
            RDSrevice.getRDs()
                .then(response =>{
                    this.rds = response
                    console.log(this.rds)
            })  
        },
        toggleModal(){
            this.toggleData = !this.toggleData
        },
        passData(singleRd){
            this.singleRd = singleRd
        },
        updateRD(id, rd){
            console.log(this.singleRd)
            RDSrevice.updateRD(id,rd).then((response) =>{
                this.getAllRDS()

            })
            
        },
        deleteRD(){
            RDSrevice.deleteRD(this.idOfRdToDelete).then(response => {
                this.getAllRDS()
                this.toggleMsgDelete = !this.toggleMsgDelete
            })
            
        },
        displayMsgDelete(id){
            this.toggleMsgDelete = !this.toggleMsgDelete
            this.idOfRdToDelete = id
        }
    },
    mounted() {
        this.getAllRDS()
        this.getAllRDSType()
        
    },
    
    components: {
        Modal,
        BaseButton,
        BaseInput

    }
}
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