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
    icon: 'bx-home-circle',
    subItems: [
      {
        id: 2,
        label: 'Nouveau super admin ',
        link: '/dashboard',
        parentId: 1
      },
      {
        id: 3,
        label: 'Liste super admin',
        link: '/image',
        parentId: 1
      }
    ]
  },
  {
    id: 2,
    label: 'Ecole',
    icon: 'bx-home-circle',
    subItems: [
      {
        id: 2,
        label: 'Ajouter une école',
        link: '/dashboard',
        parentId: 1
      },
      {
        id: 3,
        label: 'Voir les écoles',
        link: '/image',
        parentId: 1
      }
    ]
  },


];

