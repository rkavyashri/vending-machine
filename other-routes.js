server.route( {
    method: 'GET',
    path: '/',
    handler: (request,reply) => {
       // return '<h1> Welcome to Vending Machine Application </h1>'
        return reply.view('index')
    }
} )

server.route( {
    method: 'GET',
    path: '/image',
    handler: (request,reply) => {
        return reply.file('./public/lays.jpg')
    }
} ) 