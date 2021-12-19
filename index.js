let http = require( 'http' );
let fs = require( 'fs' );
let acceptedDenominations = [ 1,2,5,10,20,50,100,200,500,2000 ];
let itemsInVendingMachine = [ {
    item: "Lays",
    price: 10
    },
    {
    item: "Kurkure",
    price: 10
    },
    {
        item: "Pepsi",
        price: 22
    },
    {
        item: "Sprite",
        price: 22
    },{
        item: "dairyMilk",
        price: 25
    }]
async function venderMachine () {
    let input1 = process.argv[ 2 ];
    let input2 = process.argv[ 3 ];
    input2=parseInt(input2,10)
    console.log( input1 )
    console.log(input2)
    if ( typeof input1 == 'string' )
    {
        input1=parseInt(input1,10)
    }
    
    console.log('Welcome to Snacks Vending Machine')
    console.log( 'Please enter the amount ' )
    console.log( 'Entered amount is ',input1 )
    if ( !input1 ||  !acceptedDenominations.includes(input1))
    {
        console.log( 'Sorry. Please enter a valid denomination' )
        console.log('Valid denominations are ',acceptedDenominations)
    } else
    {
        console.log('Please select the items for the amount ')
        console.log( 'Please select the product of your choice. Press 1 for Lays, 2 for dairyMilk Silk, 3 for pepsi, 4 for kurkure, 5 for sprite ' )
        switch ( input2 )
        {
            case 1:
                console.log("Lays")
                return "Lays";
            case 2:
                console.log( "DairyMilk" )
                return "DairyMilk";
            case 3:
                    console.log( "Pepsi" )
                return "Pepsi";
            case 4:
                    console.log( "Kurkure" )
                return "Kurkure";
            case 5:
                    console.log( "Sprite" )
                return "Sprite";
        }
        
    }
    
}
async function filterItemsByPrice (inputAmount,items) {
    try {
    } catch (err) {
        throw err;
    }
}
    var server=http.createServer( function ( req,res ) {
        res.writeHead( 200,{ 'Content-Type': 'text/html' } );
        var readStream = fs.createReadStream( __dirname + '/index.html','utf8' );
        readStream.pipe( res );
    } )
server.listen( 1000,'127.0.0.1' )
console.log('Server Running at Port ',1000 )

venderMachine()