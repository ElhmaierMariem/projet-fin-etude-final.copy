<template>
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
</template> 
<script>
import { BaseTable } from "@/components";
const tableColumns = ["Nom", "Prénom", "Mail","CIN","Login","MotDePasse"];
const tableData = [
  {
    id: 1,
    nom: "mohamed",

    prénom: "Ben Aziz",
    mail: "mohamed@mohamed.com",
    cin: "00231487",
    login: "test",
    motdepasse: "test",
  },
  {
    id: 2,
    nom: "Wafa",

    prénom: "Chaar",
    mail: "wafa@wafa.com",
    cin: "00986514",
    login: "test",
    motdepasse: "test",
  },
  {
    id: 3,
    nom: "mariem",

    prénom: "Hmaier",
    mail: "mariem@mariem.com",
    cin: "00657436",
    login: "test",
    motdepasse: "test",
  },
   {
    id: 4,
    nom: "Salma",

    prénom: "Ben Jemia",
    mail: "salma@salma.com",
    cin: "00231487",
    login: "test",
    motdepasse: "test",
  },
];
export default {
    name: "ManageUsers",
    components: {
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "Gestion des Utilisateurs",
        columns: [...tableColumns],
        data: [...tableData]
      },
    };
  }
}
</script>