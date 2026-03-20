// import table    from 'table';
const {table}         =   require( 'table' );
const metaFieldboth =   require( '../static/both/fieldboth.js');
// const AsciiTable         =   require( 'ascii-table' );


module.exports =  {
    name : "보스탐",
    description : "보스탐 시간표",
    used : true,
    execute(message, args)
    {

        let output      =   '';

        try
        {

            console.log( 'bothtime.js : execute() | start' )

            console.log( metaFieldboth.initialize );
            if ( !metaFieldboth.initialize )
                throw new Error();

            for ( let i = 0 ; i < metaFieldboth.list.length ; i++ )
            {

                let item    =   metaFieldboth.list[i];
                let time    =   item.time;
                let list    =   item.list;

                const hours     =   String(time.getHours()).padStart(2, '0');
                const minutes   =   String(time.getMinutes()).padStart(2, '0');
                const seconds   =   String(time.getSeconds()).padStart(2, '0');

                // console.log(`${hours}시 ${minutes}분 ${seconds}초`); // 출력 예: 23:45:10

                // output  +=  '■ ' + [time.getHours(), time.getMinutes(), time.getSeconds() ].join( ' ' ) + '  @  ' + list.join(' ') + '\n'
                // output  +=  `## ■ ${hours}시 ${minutes}분 ${seconds}초  \n  # ${list.join(' ')} \n`

                let timePrefixText  =   '';
                let iHours          =   parseInt( hours );
                if ( 0<= iHours && iHours <= 6 ) timePrefixText = '새벽';
                else if ( 7<= iHours && iHours <= 12 ) timePrefixText = '오전';
                else if ( 13<= iHours && iHours <= 18 ) timePrefixText = '오후';
                else if ( 19<= iHours && iHours <= 23 ) timePrefixText = '저녁';

                output  +=  "```ansi\n\u001b[33m ■ ("+timePrefixText+") "+hours+"시 "+minutes+"분("+seconds+")  \u001b[32m "+list.join(' ')+"``` \n"
            }

            output  +=  "```ansi\n\u001b[31m 발록 \u001b[34m 12시 ~ 14시, 21시 ~ 22시``` \n";
            output  +=  "```ansi\n\u001b[31m 아크모 \u001b[34m 6시간  " +
                        "\u001b[31m 거드 \u001b[34m 12시간  " +
                        "\u001b[31m 데몬 \u001b[34m 4시간  " +
                        "\u001b[31m 카스파 \u001b[34m 6시간``` \n";

            message.channel.send( output );

            console.log( 'bothtime.js : execute() | end' )
        }
        catch ( e )
        {
            console.error(e);
            output  =   '필드보스 시간이 설정되지 않았습니다.\n/필드보스시간 을 사용하여 시간을 설정하세요.'
            message.channel.send(output)
        }

        return null;
    }
}