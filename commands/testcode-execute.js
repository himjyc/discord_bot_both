const metaFieldboth     =   require( '../static/both/fieldboth.js');

module.exports =  {
    name : "코드실행",
    description : "코드실행",
    used : false,
    execute(message, args) {

        console.log( metaFieldboth.list )
        return message.channel.send( `${message.author}, 코드실행!!` );
    }
}