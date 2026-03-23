const metaFieldboth     =   require( '../static/schedule/fieldboth.js');
const schedule      =   require( 'node-schedule' );

module.exports =  {
    name : "코드실행",
    description : "코드실행",
    used : false,
    execute(message, args) {


        for ( const name in schedule.scheduledJobs )
        {

            console.log( schedule.scheduledJobs[name].pendingInvocations[0].fireDate.toLocaleString())
        }

        return message.channel.send( `${message.author}, 코드실행!!` );
    }
}