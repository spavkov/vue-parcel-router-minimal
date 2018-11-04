export default
{
    createRoutes() {
        var routes = [];
        routes.push({
            path: '/',
            component: () => import("/src/pages/homePage")
        });
       
        routes.push({
            path: '/home',
            component:  () => import("/src/pages/homePage")
        });
       
        routes.push({
            path: '/products',
            component:  () => import("/src/pages/productsPage")
        })
       
        routes.push({
            path: '*',
            component:  () => import("/src/pages/notFoundPage")
        });
       
        return routes;    
    }
}

