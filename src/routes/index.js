import MainSection from '@p/mainSection';
import InDetailInfo from '@p/inDetailInfo';


let routes = [
    {
        name: 'home',
        url: '/',
        component: MainSection,
        exact: true
    },
    {
        name: 'inDetailInfo',
        url: '/inDetailInfo',
        component: InDetailInfo,
        exact: true
    }
];

let routesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url;
    }
});

let urlBuilder = function(name, params){
    if(!routesMap.hasOwnProperty(name)){
        return null;
    }

    let url = routesMap[name]; // news/:id

    for(let key in params){
        url = url.replace(':' + key, params[key]);
    }

    return url;
}

export default routes;
export {routesMap, urlBuilder};
