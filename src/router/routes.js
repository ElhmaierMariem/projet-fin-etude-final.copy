import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const ProfilePage = () => import(/* webpackChunkName: "common" */ "@/pages/ProfilePage.vue");
const ManageUsers = () => import(/* webpackChunkName: "common" */ "@/pages/ManageUsers.vue");
const AddRapport = () => import(/* webpackChunkName: "common" */ "@/pages/AddRapport.vue");
const TypeRD = () => import(/* webpackChunkName: "common" */ "@/pages/TypeRD.vue");
const TypeD = () => import(/* webpackChunkName: "common" */ "@/pages/TypeD.vue");
const TypeChamps = () => import(/* webpackChunkName: "common" */ "@/pages/TypeChamps.vue");
const DataSource = () => import(/* webpackChunkName: "common" */ "@/pages/DataSource.vue");
const AddRD = () => import(/* webpackChunkName: "common" */ "@/pages/AddRD.vue");
const ListRD = () => import(/* webpackChunkName: "common" */ "@/pages/ListRD.vue");
const UserInterface = () => import(/* webpackChunkName: "common" */ "@/pages/UserInterface.vue");
const LoginPage = () => import(/* webpackChunkName: "common" */ "@/pages/LoginPage.vue");
const Logout = () => import(/* webpackChunkName: "common" */ "@/pages/Logout.vue");
const ListValue = () => import(/* webpackChunkName: "common" */ "@/pages/ListValue.vue");
const ListVal = () => import(/* webpackChunkName: "common" */ "@/pages/ListVal.vue");
const AddListVal = () => import(/* webpackChunkName: "common" */ "@/pages/AddListVal.vue");
const Form = () => import(/* webpackChunkName: "common" */ "@/pages/Form.vue");
const AddForm = () => import(/* webpackChunkName: "common" */ "@/pages/AddForm.vue");
const ListForm = () => import(/* webpackChunkName: "common" */ "@/pages/ListForm.vue");
const Rapport = () => import(/* webpackChunkName: "common" */ "@/pages/Rapport.vue");
const ListRapport = () => import(/* webpackChunkName: "common" */ "@/pages/ListRapport.vue");
const Table = () => import(/* webpackChunkName: "common" */ "@/pages/Table.vue");
const AddTable = () => import(/* webpackChunkName: "common" */ "@/pages/AddTable.vue");
const ListTab = () => import(/* webpackChunkName: "common" */ "@/pages/ListTab.vue");
const AddCat = () => import(/* webpackChunkName: "common" */ "@/pages/AddCat.vue");
const Category = () => import(/* webpackChunkName: "common" */ "@/pages/Category.vue");
const ListCat = () => import(/* webpackChunkName: "common" */ "@/pages/ListCat.vue");


import store from '@/store'

const routes = [
  {
    path: "/connexion",
    name: "connexion",
    component: LoginPage
  },

  {
    path: "/",
    name:'home',
    component: DashboardLayout,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']){
        return next({
          name: 'connexion'
        })
      }
      next()
    },
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "gestion-utilisateur",
        name: "ManageUsers",
        component: ManageUsers
      },
      {
        path: "profil",
        name: "profil",
        component: ProfilePage
      },
      {
        path: "gestion-rapport",
        name: "ManageRapport",
        component: AddRapport
      },
      {
        path: "deconnexion",
        name: "deconnexion",
        component: Logout
      },
      {
        path: "typerd",
        name: "typerd",
        component: TypeRD
      },
      {
        path: "typed",
        name: "typed",
        component: TypeD
      },
      {
        path: "type-champs",
        name: "type-champs",
        component: TypeChamps
      },
      {
        path: "ressource-données",
        name: "ressource-donnee",
        component: DataSource
      },
      {
        path: "rapport",
        name: "rapport",
        component: Rapport
      },
      {
        path: "tableau",
        name: "tableau",
        component: Table
      },
      {
        path: "ajouter-un-tableau",
        name: "ajouter-un-tableau",
        component: AddTable
      },
      {
        path: "liste-tab",
        name: "liste-tab",
        component: ListTab
      },
      {
        path: "ajouter-un-rapport",
        name: "ajouter-un-rapport",
        component: AddRapport
      },
      {
        path: "liste-rapport",
        name: "liste-rapport",
        component: ListRapport
      },
      {
        path: "ajouter-une-ressource-données",
        name: "ajouter-une-ressource-donnees",
        component: AddRD
      },
      {
        path: "ajouter-une-catégorie-rapport",
        name: "ajouter-une-catégorie-rapport",
        component: AddCat
      },
      {
        path: "liste-catégorie",
        name: "liste-catégorie",
        component: ListCat
      },
      {
        path: "categorie",
        name: "categorie",
        component: Category
      },
      
      {
        path: "form",
        name: "form",
        component: Form
      },
      {
        path: "ajouter-un-formulaire",
        name: "ajouter-un-formulaire",
        component: AddForm
      },
      {
        path: "liste-formulaire",
        name: "liste-formulaire",
        component: ListForm
      },
      {
        path: "liste-valeurs",
        name: "liste-valeurs",
        component: ListValue
      },
      {
        path: "ajouter-une-liste-valeurs",
        name: "ajouter-une-liste-valeurs",
        component: AddListVal
      },
      {
        path: "liste-val",
        name: "liste-val",
        component: ListVal
      },
      {
        path: "liste-rd",
        name: "liste-rd",
        component: ListRD
      },
      {
        path: "interface-utilisateur",
        name: "interface-utilisateur",
        component: UserInterface
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
