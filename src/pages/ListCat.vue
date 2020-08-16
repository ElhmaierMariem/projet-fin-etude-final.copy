<template>
    <div>

        <div class="container"> 

        <div>
             
            <modal :show="toggleMsgDelete" @update:show="displayMsgDelete(null)">
                <template slot="header">
                    <h5 class="modal-title" id="exampleModalLabel">Voulez Vous Vraiment supprimer</h5>
                </template>
                <div>
                    <div class="btn btn-danger" @click="deleteCat()">Supprimer</div>
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
                     
                           
                             <form @submit.prevent="updateCat(singleCat.cattId, singleCat)">
                            <div class="form-group">
                                <label for="libelle">Libelle</label>
                                <input type="text" v-model="singleCat.catLibelle" class="form-control" style="color: #454545">
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
                            <th scope="col">Modifier</th>
                            <th scope="col">Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cat in rds" :key="cat.cattId">
                            <th scope="row">{{cat.cattId}}</th>
                            <th scope="row">{{cat.catLibelle}}</th>
                            <td @click="toggleModal(); passData(cat)"><i class="lni lni-pencil-alt " style="color: #fff"></i> Modifier</td>
                            <td @click="displayMsgDelete(cat.cattId)">Supprimer<i class="lni lni-pencil-alt " style="color: #fff"></i></td>
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
import CATSrevice from '@/service/cat-service'
import {Modal} from '@/components'
import {BaseButton} from '@/components'
import {BaseInput} from '@/components'


export default {
    name: "ManageCAT",
    data() {
        return {
          rds: [],
          
          toggleData: false,
          toggleMsgDelete: false,
          idOfCatToDelete: null,
          singleCat: {
            cattId: "",
            catLibelle: "",
           
            },
            
        }
  },
   methods: {
       
        getAll(){
            CATSrevice.getAll()
                .then(response =>{
                    this.rds = response
                    console.log(this.rds)
            })  
        },
        toggleModal(){
            this.toggleData = !this.toggleData
        },
        passData(singleCat){
            this.singleCat = singleCat
        },
        updateCat(id,cat){
            console.log(this.singleCat)
            CATSrevice.update(id,cat).then((response) =>{
                this.getAll()

            })
            
        },
        deleteCat(){
            CATSrevice.delete(this.idOfCatToDelete).then(response => {
                this.getAll()
                this.toggleMsgDelete = !this.toggleMsgDelete
            })
            
        },
        displayMsgDelete(id){
            this.toggleMsgDelete = !this.toggleMsgDelete
            this.idOfCatToDelete = id
        }
    },
    mounted() {
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