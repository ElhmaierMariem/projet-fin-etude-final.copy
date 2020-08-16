<template>
  <card>
    <h5 slot="header" class="title">Ajouter un utilisateur</h5>
     
     <form @submit.prevent="createUser">
     <div class="row">

        
      
                <div class="col-md-5 pr-md-1">
              <base-input label="Entreprise (disabled)"  placeholder="Entreprise"  v-model="model.company"   disabled>
               </base-input>
             </div>
             <div class="col-md-3 px-md-1">
                 <base-input label="Nom d'utilisateur" placeholder="Nom d'utilisateur" v-model="model.username">
                   </base-input>
               </div>
                 <div class="col-md-4 pl-md-1">
                   <base-input label="Adresse Mail" type="email" placeholder="mike@email.com"  v-model="model.email">
                   </base-input>
                 </div>
         </div>
        <div class="row">
                <div class="col-md-6 pr-md-1">
                     <base-input label="Nom" v-model="model.firstName" placeholder="Nom">
                     </base-input>
                 </div>
           <div class="col-md-6 pl-md-1">
                <base-input label="Prénom" v-model="model.lastName" placeholder="Prénom">
                </base-input>
             </div>
         </div>
         <div class="row">
            <div class="col-md-12">
               <base-input label="Adresse" v-model="model.address"  placeholder="Adresse">
                </base-input>
              </div>
         </div>
            <div class="row">
                 <div class="col-md-4 pr-md-1">
                    <base-input label="Date de Naissance" v-model="model.dateBirth"  placeholder="Date de Naissance">
                    </base-input>
                 </div>
               <div class="col-md-4 px-md-1">
                    <base-input label="CIN"  v-model="model.cin"   placeholder="CIN">
                   </base-input>
                 </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Poste" v-model="model.poste" placeholder="Poste">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <base-input label="Catégories autorisées" placeholder="Catégories autorisées">
         <select name="categories" id="categories" class="form-control" style="color: #fff" v-model="model.cattId">
             <option v-for="trd in rds" :key="trd.cattId" :value="trd.cattId"  style="color: #454545">{{trd.catLibelle}} </option>
           </select>
        </base-input>
      </div>
       <input type="submit" class="btn btn-dark" value="Ajouter">
    </div>
         
    
     
     </form>
 </card>
</template>


<script>
import USERSrevice from '@/service/user-service'
import CATSrevice from '@/service/cat-service'
  export default {
   name: "AddUser",
    data(){
        return {
            cat:"",
            rdss: {
                id: "1"
            },
            model: {
                username: "",
                email: "",
                lastName:"",
                firstName:"",
                poste:"",
                cin:"",
                dateBirth:"",
                password:"",
                cattId:"",
                address:"",
            },
            rds: [],
            
        }
    },
    methods: {
       
          getAll(){
            USERSrevice.getAll()
                .then(response =>{
                    this.cat = response
            })
             CATSrevice.getAll()
                .then(response =>{
                    this.rds = response
            })
            
        },   

         
           
           
        
        createUser(){
            USERSrevice.add(this.model)
        }
    },
    mounted() {
        this.getAll()
        
    }
}
</script>
<style>
</style>
