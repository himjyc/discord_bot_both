const metaFieldboth     =   require( '../static/both/fieldboth.js');
const fnFieldboth       =   require( '../components/both/Fieldboth' );


module.exports =  {
    name : "필드보스시간",
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
        }
        catch ( e )
        {
            console.error(e);
            sendMessage =   '날짜 포맷이 잘못되었습니다. \n6자리 숫자를 입력해주세요.\nex) AM 9시 10분 21초 : /필드보스시간 091021\nex) PM 9시 10분 21초 : /필드보스시간 211021 와 같이 입력하세요.';
        }

        return message.channel.send(sendMessage);
    }
}