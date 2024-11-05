import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 2,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 1
            },
            {
                id: 3,
                label: 'image',
                link: '/image',
                parentId: 1
            }
        ]
    },
  {
    id: 2,
    label: 'Super admin',
    icon: 'bx bx-user-circle',
    link: '/super-admin',
    // subItems: [
    //   {
    //     id: 2,
    //     label: 'Nouveau super admin ',
    //     link: '/dashboard',
    //     parentId: 1
    //   },
    //   {
    //     id: 3,
    //     label: 'Liste super admin',
    //     link: '/image',
    //     parentId: 1
    //   }
    // ]
  },
  {
    id: 3,
    label: 'Ecole',
    icon: 'bx bxs-school',
    link: '/ecole'
    // subItems: [
    //   {
    //     id: 2,
    //     label: 'Ajouter une école',
    //     link: '/dashboard',
    //     parentId: 1
    //   },
    //   {
    //     id: 3,
    //     label: 'Voir les écoles',
    //     link: '/image',
    //     parentId: 1
    //   }
    // ]
  },
  {
    id: 4,
    label: 'Classe',
    icon: 'bx bxs-institution',
    link:'classe/classe'
  },
  {
    id: 5,
    label: 'Parent',
    icon: 'bx bxs-user',
    link:'parent/parent'
  },
  {
    id: 6,
    label: 'Professeur',
    icon: 'bx bxs-user-rectangle',
    link:'professeur/professeur'
  },
  {
    id: 7,
    label: 'Eleve',
    icon: 'bx bxs-user-detail',
    link:'eleve/eleve'  
  },
  {
    id: 8,
    label: 'Personnel',
    icon: 'bx bxs-user-badge',
    link:'personnel/personnel'
  },
  {
  id: 9,
  label: 'Matiere',
  icon: 'bx bxs-edit',
  link:'matiere/matiere'
  },


];

