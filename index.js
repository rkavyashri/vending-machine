const Hapi = require( 'hapi' );
const Path = require( 'path' );
const acceptedDenominations = [ 10,20,50,100,200,500,2000 ];
const itemsInVendingMachine = [
    {
         item: "lays",
         price: 10
    },
    {
      item: "kurkure",
        price: 10
    },
    {
        item: "pepsi",
        price: 20
    },
    {
        item: "sprite",
        price: 20
    },{
        item: "dairymilk",
        price: 10
    }]

const init = async () => {
    const server = new Hapi.Server( {
        host: 'localhost',
        port: 3000
    } );
    await server.register( require( 'inert' ) );
    await server.register( require( 'vision' ) );
    const viewsPath = Path.resolve(__dirname,'public','views')
    server.views( {
            engines: {
            html: require( 'handlebars' )
        },
        relativeTo:Path.join(__dirname,'public'),
        path: 'views'
               
    } );
    // regstering the routes
    server.route( {
        method: 'GET',
        path: '/home',
        handler: (request,reply) => {
            return reply.file ('./public/views/home.html')
        }
    } )
    server.route( {
        method: 'POST',
        path: '/items',
        handler: ( request,reply ) => {
            let amount = request.payload.amount;
            console.log( amount );
            console.log( acceptedDenominations.includes( parseInt(amount,10) ))
            if ( acceptedDenominations.includes( parseInt(amount,10) ))
            {
                //return 'Enter Valid Amount ';
                return reply.view( 'cards',{amount:amount} );
            } else
            {
                return 'Enter Valid Amount ';
            }
        }
    } )
    server.route( {
        method: 'POST',
        path: '/item/confirmation/{amount}/{item}',
        handler: ( request,reply ) => {
            console.log( request.params)
            let amount = request.params.amount;
            let item = request.params.item;
            return reply.view('confirmation',{amount:amount,item:item})
           
        }
    } )
    server.route( {
        method: 'POST',
        path: '/deliver/{amount}/{item}',
        handler: ( request,reply ) => {
            let amountPaid = request.params.amount;
            let item = request.params.item;
           let itemPrice= itemsInVendingMachine.find(x => x.item === item)
            if ( Number( amountPaid ) < itemPrice.price )
            {
                return `Item Price is - ${itemPrice.price} inserted amount is - ${amountPaid}. Try again with higher amount`;
            } else
            {
                let bal = Number(amountPaid)-itemPrice.price ;
            return reply.view( 'deliver',{ item:item,bal:bal })
            }
            
        }
    } )
    server.route( {
        method: 'POST',
        path: '/cancel/{amount}',
        handler: ( request,reply ) => {
            let amountPaid = request.params.amount;
             return 'Take the refund amount '+amountPaid
        }
    } )
    server.route( {
        method: 'GET',
        path: '/css/{path*}',
        handler:  {
            directory: {
                path: "./public/css",
                    listing: false,
                        index: false
            }
        
        }
    } )
    server.route( {
        method: 'GET',
        path: '/images/{path*}',
        handler:  {
            directory: {
                path: "./public/images",
                    listing: false,
                        index: false
            }
        
        }
    } )
    server.route( {
        method: 'GET',
        path: '/deliver/images/{path*}',
        handler:  {
            directory: {
                path: "./public/images",
                    listing: false,
                        index: false
            }
        
        }
    } )
    // starting the server
    const starter=async ()=> {
        await server.start();
        console.log('Server Running at Port ',3000 )
    }
    setTimeout(starter,30 )
      
}

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
init();
