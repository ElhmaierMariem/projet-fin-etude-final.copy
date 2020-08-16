<template>
    <div>
        <!-- <div class="container"> 
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
                   <div class="row">
                    <div class="col-12">
                        <card :title="table1.title">
                        <div class="table-responsive">
                            <base-table :data="table1.data"
                                        :columns="table1.columns"
                                        thead-classes="text-primary">
                            </base-table>
                        </div>
                        </card>
                    </div>

                    </div>
                </div>
            </div>
        </div> -->
    </div>
    
</template> 
<script>
import { BaseTable } from "@/components";
const tableColumns =  ["Libelle", "Categorie", "RessourceDonnées","FormulaireCritèreDeRecherche","RequeteSqlEntete","RequeteSqlDetail","FormulaireResultatEntete","TableauDeResultat","AvecTemplate","Template"];
const tableData = [
 {
    id: 1,
    libelle: "Liste des salaires employés",
    categorie: "Rapport RH",
    ressourcedonnées: "Base de données RH",
    formulairecritèrederecherche: "Salaires employés",
    requetesqlentete:"SELECT SOCIETE, ADRESSE, SERVICE FROM SERVICE LEFT JOIN SOCIETE ON SOCIETE. SOCIETE_ID= SERVICE. SOCIETE WHRE 1=1 ",
    requetesqldetail:"Information de service",
    formulaireresultatentete:"SELECT MATRECULE, NOM, PRENOM, SERVICE, DATE_NAISSANCE, SALAIRE FROM EMPLLOYE WHRE  1=1",
    tableauderesultat:": Liste des salaires employé",
    avectemplate:"Non",
    template:"Non",

  },

 
  
];
export default {
    name: "ManageRD",
    components: {
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "Liste Rapport",
        columns: [...tableColumns],
        data: [...tableData]
      },
    };
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