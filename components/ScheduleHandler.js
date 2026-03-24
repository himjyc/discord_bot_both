const schedule          =   require( 'node-schedule' );
const client            =   require( '../client' );
const {channelID}       =   require('../config');
const {Colors}          =   require( '../static/enum/constants' );

// 20분, 10분, 5분, 1분, 30초, 0초
const repeat            =   [1200000, 600000, 300000, 60000, 30000, 0];
// const defaultMessage    =   '```ansi\n' + `${Colors.white} [ {title} ]\n${Colors.green} {time}{timeunit} 입니다.${Colors.reset}`+'```';
// const endMessage        =   '```ansi\n' + `${Colors.white} [ {title} ]\n${Colors.green} 시작입니다.${Colors.reset}` + '```';
const defaultMessage    =   '[ {title} ]\n\n{time}{timeunit} 입니다.';
const endMessage        =   '[ {title} ]\n\n시작입니다.';
const message           =   [
                                defaultMessage,
                                defaultMessage,
                                defaultMessage,
                                defaultMessage,
                                defaultMessage,
                                endMessage
                            ]
const sleep     =   (ms) => new Promise(res => setTimeout(res, ms));

module.exports  =
    {

        nameSeperator : '_',

        buildName( prefix, name, seq )
        {
            return prefix + this.nameSeperator + String(seq).padStart(2, '0') + this.nameSeperator + name;
        },

        // schedule.scheduleJob( '이름1', '* * * * * *', function() {
        //     console.log('Cron Job: 매 분 10초에 실행되었습니다.');
        // }, function(){
        //     console.log( 'callback 함수')
        // })

        buildRepeatSchedule( meta, metafn, index )
        {

            let item    =   meta.list[ index ];

            // let itemRepeat  =   repeat;
            // let itemMessage =   message;
            let itemRepeat      =   (!item.repeat || item.repeat.length == 0) ? repeat : item.repeat;
            let itemMessage     =   (!item.message || item.message.length == 0) ? itemRepeat.map((value) => (value > 0 ? defaultMessage : endMessage) ) :item.message;

            let date            =   item.time;
            let itemDesc        =   item.itemDesc;

            const currentDate   =   new Date();
            const channel       =    client.channels.cache.get( channelID );

            for ( let i = 0; i < itemRepeat.length ; i++  )
            {

                let name        =   this.buildName( meta.prefix, item.name, String(index)+String(i) );
                let gap         =   itemRepeat[ i ];
                let message     =   itemMessage[ i ];

                let ago         =   new Date( date - gap );
                ago.setFullYear( currentDate.getFullYear() );
                ago.setMonth( currentDate.getMonth() );
                ago.setDate( currentDate.getDate() );

                let minutes     =   Math.floor( gap/60000 );
                let seconds     =   Math.floor( (gap%60000) / 1000 );

                let noticeTitle     =   itemDesc.join(' ');
                let time            =   '';
                let noticeMinutes   =   minutes > 0 ? minutes + '분' : '';
                let noticeSeconds   =   seconds > 0 ? seconds + '초' : '';
                let noticeTimeunit  =   minutes > 0 || seconds > 0 ? '전' : '시간';

                if ( noticeMinutes )
                    time            +=  noticeMinutes;
                if ( noticeSeconds )
                    time            +=  noticeSeconds;

                message         =   message.replace( '{title}',     noticeTitle );
                message         =   message.replace( '{time}',      time );
                message         =   message.replace( '{timeunit}',  noticeTimeunit );

                console.log( message );
                console.log( ago.toLocaleString())
                // console.log( schedule)
                // console.log( ago.getHours() + '  ' + ago.getMinutes() + '  ' +ago.getSeconds())

                schedule.scheduleJob( name, this.getCronExpression( ago, item ), function(){

                    channel.send(message);
                });
                console.log()
            }
        },

        getCronExpression( date, item )
        {
            // 초 분 시 일 월 요일
            let cronExpression    =   [ '*', '*', '*', '*', '*', '*' ];
            cronExpression.splice( 0, 1, date.getSeconds().toString() );
            cronExpression.splice( 1, 1, date.getMinutes().toString() );
            cronExpression.splice( 2, 1, date.getHours().toString() );

            if ( item.crondayOfWeek )
                cronExpression.splice( 5, 1, item.crondayOfWeek() );

            console.log( cronExpression.join(' ') )

            return cronExpression.join(' ');
        }
    }