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
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "Stranger" } = request.params;
            const { lang } = request.query;

            if (lang === 'id') {
                return `Yahallo! ${name}!`;
            }
            
            return `Hello, ${name}!`;
        },
    },
]

module.exports = routes;