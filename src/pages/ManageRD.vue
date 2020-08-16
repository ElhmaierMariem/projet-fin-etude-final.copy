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
const tableColumns = ["Libelle", "Type", "AdresseIP","Nomdelabase","Login","MotdePasse"];
const tableData = [
  {
    id: 1,
    libelle: "Base de données RH",
    type: "PostgreSql",
    adresseip: "127.0.0.1",
    nomdelabase: "RH",
    login:"test",
    motdepasse:"test",

  },

  {
    id: 2,
    libelle: "Base de données IT",
    type: "Oracle",
    adresseip: "128.0.0.1",
    nomdelabase: "IT",
    login:"test",
    motdepasse:"test",

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
        title: "Liste ressources de données",
        columns: [...tableColumns],
        data: [...tableData]
      },
    };
  }
}
</script>