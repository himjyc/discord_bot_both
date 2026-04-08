const metaFieldboth     =   require( '../static/schedule/fieldboth.js');
const schedule      =   require( 'node-schedule' );
const { guildID, channelID, prefix, token }  =   require('../config.json');
const client                    =   require( '../client' );

module.exports =  {
    name : "x",
    description : "코드실행",
    used : false,
    execute(message, args) {


        for ( const name in schedule.scheduledJobs )
        {

            console.log( schedule.scheduledJobs[name].pendingInvocations[0].fireDate.toLocaleString())
        }



//         const data = {
//             channel_overwrites: {
//                 [1486291001868816494]: {
//                     muted: true,
//                     mute_config: {
//                         selected_time_window: -1, // -1은 '다시 켤 때까지'를 의미
//                         end_time: null
//                     }
//                 }
//             }
//         };
//         const url = `https://discord.com/api/v9/users/@me/guilds/서버ID/settings`;
//         const response =  fetch(url, {
//             method: 'PATCH',
//             headers: {
//                 'Authorization': token,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
// console.log( 'response = ' + response)
        // if (response.ok) {
        //     console.log('채널 알림이 성공적으로 꺼졌습니다.');
        // } else {
        //     console.error('오류 발생:',  response.json());
        // }

        let channel =   client.channels.cache.get( '1486291001868816494' );
        console.log( channel )

        channel.permissionOverwrites.edit(
            channel.guild.roles.everyone,
            {
                ViewChannel : false
            }
        )




        // console.log( message.channel )
        // console.log( message.channel.messages )
        return message.channel.send( {
            'content' : `${message.author}, xxxxx!!`,
            'flags' : [4096]
        } );
    }
}