const { 오만탐 }             =   require( '../../static/enum/constants.js' );
const schedule              =   require( 'node-schedule' );
const client                =   require( '../../client' );
const {channelID}           =   require('../../config');
const fnScheduleHandler     =   require( '../ScheduleHandler' );
const meta                  =   require( '../../static/schedule/namedboth');
const omanTimeItemNotice    =   require( '../../template/omanTimeItemNotice');

module.exports =
    {

        buildJob()
        {



            for ( let i = 0 ; i < meta.list.length ; i++ )
            {

                fnScheduleHandler.buildRepeatSchedule( meta, this, i );
            }

            this.setOmannotice()
        },
        setOmannotice()
        {

            let a오만탐    =   meta.list.filter( item => item.name == '오만탐' )


            let templateCronExpression  =   [ '2,12,24,36,48', '*', '*', '*', '*', '*' ];
            const channel   =    client.channels.cache.get( channelID );

            // for ( let item of a오만탐 )
            for ( let i = 0 ; i < a오만탐.length ; i++ )
            {

                let item            =   a오만탐[i];
                let date            =   item.time;
                let cronExpression  =   templateCronExpression;
                let iDuration       =   7;
                // console.log( item )

                // cronExpression.splice( 0, 1, date.getSeconds().toString() );
                // cronExpression.splice( 1, 1, date.getMinutes().toString() );

                let minStart    =   date.getMinutes();
                let minEnd      =   date.getMinutes()+iDuration;
                let hour        =   date.getHours();

                //  50-57 or 0-5,58-59
                let cronMinute  =   minEnd < 59 ? [minStart.toString(), minEnd.toString()].join( '-' ) : ['0', Math.floor( minEnd%60 ).toString()].join( '-' ) + ',' + [minStart.toString(), '59'].join( '-' );
                let cronHour    =   minEnd < 59 ? hour.toString() : [hour.toString(), (hour+1).toString()].join(',');

                cronExpression.splice( 1, 1, cronMinute );
                cronExpression.splice( 2, 1, cronHour );

                schedule.scheduleJob(
                    fnScheduleHandler.buildName( meta.prefix, '오만탐notice', i ),
                    cronExpression.join(' '),
                    function( currentDate )
                    {

                        let message     =   '# 진행중 : ' + omanTimeItemNotice.exist.join(', ') + '\n' +
                                            '# 완료 : ' + omanTimeItemNotice.end.join( ', ' );
                        channel.send( message );
                    }
                )

                console.log( cronExpression )

                let initDate    =   new Date( date.getTime() - (3000));
                console.log( [initDate.getSeconds().toString(), initDate.getMinutes().toString(), initDate.getHours().toString(), '*', '*', '*' ].join(' ') )

                // 오만탐 3초 전에 초기화
                schedule.scheduleJob(
                    fnScheduleHandler.buildName( meta.prefix, 'init오만탐notice', i ),
                    [initDate.getSeconds().toString(), initDate.getMinutes().toString(), initDate.getHours().toString(), '*', '*', '*' ].join(' '),
                    function( currentDate )
                    {

                        omanTimeItemNotice.exist   =   ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
                        omanTimeItemNotice.end     =   [];
                    }
                )
            }
        }

    }