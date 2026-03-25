const metaFieldboth     =   require( '../static/schedule/fieldboth.js');
const fnFieldboth       =   require( '../components/both/Fieldboth' );
const schedule          =   require("node-schedule");


module.exports =  {
    name : "필드보스설정",
    description : "Field both 시간 세팅",
    used : true,
    execute(message, args)
    {

        let sendMessage =   '필드 보스 시간이 정상적으로 등록되었습니다.';

        console.log( args )
        try
        {

            if ( !fnFieldboth.validInputValue( args ) )
                throw new Error();

            fnFieldboth.set( args[0] );

            fnFieldboth.deleteJob();
            fnFieldboth.buildJob();

            console.log( Object.keys( schedule.scheduledJobs ) );

            // for ( const name in schedule.scheduledJobs )
            // {
            //     // console.log( schedule.scheduledJobs[name].pendingInvocations[0].recurrenceRule)
            //     console.log( schedule.scheduledJobs[name].pendingInvocations[0].fireDate.toLocaleString())
            // }

        }
        catch ( e )
        {
            console.error(e);
            sendMessage =   '날짜 포맷이 잘못되었습니다. \n전체탐 시간을 숫자로 입력해주세요.\nex) AM 9시 10분 21초 : /필드보스시간 091021\nex) PM 9시 10분 21초 : /필드보스시간 211021 와 같이 입력하세요.';
        }

        return message.channel.send({
            content : sendMessage,
            flags : [4096]
        });
    }
}