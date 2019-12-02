import React from 'react';

import asyncComponent from '@/common/utils/asyncComponent';

// import CategoryEntrance from '../page';
// import CategoryOne from '../page/categoryOne';
// import CategoryTwo from '../page/categoryTwo';

const CategoryEntrance = asyncComponent(() => import('../page'));
const CategoryOne = asyncComponent(() => import('../page/categoryOne'));
const CategoryTwo = asyncComponent(() => import('../page/categoryTwo'));

const routes = [
    {
        path: '/app',
        component: CategoryEntrance,
        childRoutes: [
            {
                path: '/app/categoryone',
                component: CategoryOne
            },
            {
                path: '/app/categorytwo',
                component: CategoryTwo
            }
        ]
    }
];

export default routes;