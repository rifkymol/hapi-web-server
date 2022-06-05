const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Cannot access the page'
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'Page About';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Cannot access page about with that method';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Page not found !';
        },
    },
]

module.exports = routes;