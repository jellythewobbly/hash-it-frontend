import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'dashboard',
        title    : 'Dashboards',
        type     : 'item',
        icon     : 'dashboard',
        url      : '/features/dashboard'
    },
    {
        id       : 'consultants',
        title    : 'Consultants Administration',
        type     : 'item',
        icon     : 'people',
        url      : '/features/consultants'
    },
    {   
        id       : 'wip',
        title    : 'Cross Hive Planner',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'projects',
                title    : 'Projects',
                type     : 'item',
                icon     : 'assessment',
                url      : '/features/projects'
            },
            {
                id       : 'staffing',
                title    : 'Staffing Requirements',
                type     : 'item',
                icon     : 'group_add',
                url      : '/features/staffing'
            },
            {
                id       : 'presales',
                title    : 'Pre Sales',
                type     : 'item',
                icon     : 'business_center',
                url      : '/features/presales'
            }
        ]
    }
];
