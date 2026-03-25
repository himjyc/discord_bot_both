const fs    =   require( 'fs' );
const { prefix } =  require('../config.json');

module.exports =  {
    name : "도움말",
    description : "도움말",
    used : true,
    execute(message, args) {

        let list                =   [];
        const commandFiles  =   fs.readdirSync( './commands' ).filter( file => file.endsWith('.js'));
        console.log( commandFiles )

        for ( const file of commandFiles )
        {

            const command   =   require( `../commands/${file}` );

            if ( command.used )
                list.push( prefix + command.name );
        }

        return message.channel.send({
            content : list.join( '\n' ),
            flags : [4096]
        } );
    }
}