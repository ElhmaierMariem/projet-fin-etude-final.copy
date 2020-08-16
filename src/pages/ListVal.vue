<template>
    <div>

        <div class="container"> 

        <div>
             
            <modal :show="toggleMsgDelete" @update:show="displayMsgDelete(null)">
                <template slot="header">
                    <h5 class="modal-title" id="exampleModalLabel">Voulez Vous Vraiment supprimer</h5>
                </template>
                <div>
                    <div class="btn btn-danger" @click="deleteLV()">Supprimer</div>
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
                 <div v-if="singleLv">
                      <form @submit.prevent="updateLV(singleLv.lVId, singleLv)">
                           <div class="form-group">
                            <label for="libelle" class="h2">Libelle</label>
                            <input type="text" class="form-control" placeholder="Libelle" v-model="singleLv.lVLibelle" style="color: #454545">
                        </div>
                        <div class="form-group">
                            <label for="type-rd" class="h2">Sources de Données</label>
                             <select class="form-control"  v-model="singleLv.rdId" style="color: #000">
                                 <option :value="singleLv.rdId" style="color: #454545">{{singleLv.libelle}} </option>
                                <option v-for="rd in rds" :key="rd.rdId" :value="rd.rdId" style="color: #454545">{{rd.libelle}} </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="requeteSql" class="h2">Requête SQL</label>
                            <input type="text"  class="form-control" placeholder="Requête SQL" v-model="singleLv.lVRequeteSql" style="color: #454545">
                        </div>
                        <div class="form-group">
                            <label for="colonneId" class="h2">Colonne ID</label>
                            <input type="text" class="form-control" placeholder="Colonne ID" v-model="singleLv.lvcolonneId" style="color: #454545">
                        </div>
                        <div class="form-group">
                            <label for="clonneVal" class="h2">Colonne de Valeurs</label>
                            <input type="text"  class="form-control" placeholder="Colonne de Valeurs"  v-model="singleLv.lvcolonneValeur" style="color: #454545">
                        </div>
                        
                        <input type="submit" class="btn btn-dark" value="Créer">

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
                            <router-link to="tableau" class="menu">Categories Rapport</router-link>
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
                            <th scope="col">ID</th>
                            <th scope="col">Libellé</th>
                            <th scope="col">Sources de données</th>
                            <th scope="col">Requête SQL</th>
                            <th scope="col">Colonne ID</th>
                            <th scope="col">Colonne de Valeurs</th>
                            <th scope="col">Modifier</th>
                            <th scope="col">Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="lv in lvs" :key="lv.lvid">
                                <th scope="row">{{lv.lvid}}</th>
                                <th scope="row">{{lv.lvlibelle}}</th>
                                <th scope="row">{{lv.rd.libelle}}</th>
                                <td>{{lv.lvrequeteSql}}</td>
                                <td>{{lv.lvcolonneId}}</td>
                                <td>{{lv.lvcolonneValeur}}</td>
                                <td @click="toggleModal(); passData(lv)"><i class="lni lni-pencil-alt " style="color: #fff"></i> Modifier</td>
                                <td @click="displayMsgDelete(lv.lvid)">Supprimer<i class="lni lni-pencil-alt " style="color: #fff"></i></td>
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
import RDSrevice from '@/service/rd-service'
import {Modal} from '@/components'
import {BaseButton} from '@/components'
import {BaseInput} from '@/components'
import LVService from '@/service/lv-service'

export default {
    name: "ManageListVal",
    data() {
        return {
          rds: [],
          lvs :[],
          toggleData: false,
          toggleMsgDelete: false,
          idOfLvToDelete: null,
          singleLv:{
                lVLibelle: null,
                lVRequeteSql: null,
                rdId: null,
                lvcolonneId: null,
                lVId: null,
                lvcolonneValeur: null
            
            } 
        }
  },
   methods: {
        getAll(){
            LVService.getAll()
                .then(response =>{
                    this.lvs = response
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
        passData(lv){
            console.log(this.singleLv)
            this.singleLv.lVLibelle = lv.lvlibelle
            this.singleLv.lVRequeteSql = lv.lvrequeteSql
            this.singleLv.rdId = lv.rd.rdId
            this.singleLv.lvcolonneId = lv.lvcolonneId
            this.singleLv.lVId = lv.lvid
            this.singleLv.lvcolonneValeur = lv.lvcolonneValeur
        },
        updateLV(id, lv){
            console.log(id)
            console.log(lv)
            LVService.update(id,lv).then((response) =>{
                this.getAllRDS()

            })
            
        },
        deleteLV(){
            
            LVService.delete(this.idOfLvToDelete).then(response => {
                this.getAll()
                this.toggleMsgDelete = !this.toggleMsgDelete
            })
            
        },
        displayMsgDelete(id){
            this.toggleMsgDelete = !this.toggleMsgDelete
            this.idOfLvToDelete = id
        }
    },
    mounted() {
        this.getAllRDS()
        this.getAll()
        
        
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