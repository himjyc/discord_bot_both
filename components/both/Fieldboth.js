const meta              =   require( '../../static/schedule/fieldboth.js');
const schedule          =   require( 'node-schedule' );
const fnSchedule        =   require( '../Schedule' );
const fnScheduleHandler =   require( '../ScheduleHandler' );

module.exports =
    {

        validInputValue( time )
        {

            let valid   =   true;

            try
            {

                if ( time.length == 0 || time.trim().length != 6 || !Number.isInteger( parseInt(time.trim()) ))
                    throw new Error();

                if ( time.slice( 0, 2 ) > 23 || time.slice( 2, 4 ) > 59 || time.slice( 4, 6 ) > 59 )
                    throw new Error();
            }
            catch ( e )
            {
                console.log( 'fieldboth.js:validInputValue()  /  유효하지 않은 입력 시간' );
                valid   =   false;
            }

            return valid;
        },

        update( time )
        {
            // new Date().getFullYear()
            // new Date().getMonth()
            // new Date().getDate()
            return 'update';
        },
        set( time )
        {

            let action      =   'continue';
            let message     =   '필드 보스 시간이 정상적으로 등록되었습니다.';

            console.log( time )
            try
            {

                if ( !this.validInputValue( time ) )
                    throw new Error();

                this.setTime( time );
                this.deleteJob();
                this.buildJob();

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
                message     =   '날짜 포맷이 잘못되었습니다. \n전체탐 시간을 숫자로 입력해주세요.\nex) AM 9시 10분 21초 : /필드보스시간 091021\nex) PM 9시 10분 21초 : /필드보스시간 211021 와 같이 입력하세요.';
                action      =   'invalid';
            }

            return {
                'action' : action,
                'message' : message
            }
        },
        setTime( inputValue )
        {

            console.log( 'Fieldboth.js : set() | start' )
            let inH     =   parseInt( inputValue.slice( 0, 2 ) );
            let inM     =   parseInt( inputValue.slice( 2, 4 ) );
            let inS     =   parseInt( inputValue.slice( 4, 6 ) );

            let date    =   new Date();
            // date.getFullYear();
            // date.getMonth();
            // date.getDate();

            for (let i = 0 ; i < meta.list.length ; i++ )
            {

                let item        =   meta.list[i];
                let date        =   item.time;
                let interval    =   item.interval;
                console.log( 'interval  = '+ interval);
                console.log( 'update Hour  :  ' + inH);
                console.log( '■ saved   date  :  ' + date.toLocaleString() )

                // console.log(i + ' # ' + date.toLocaleString());
                date.setHours( inH, inM, inS, 0 );

                inH += parseInt(interval);

                console.log( '■ changed date  :  '+date.toLocaleString() )
            }

            meta.initialize    =   true;
            console.log( 'Fieldboth.js : set() | end' )

            // console.log( meta )
            return 'set';
        },

        buildJob()
        {

            for ( let i = 0 ; i < meta.list.length ; i++ )
            {
                fnScheduleHandler.buildRepeatSchedule( meta, this, i );
            }
        },

        deleteJob()
        {

            fnSchedule.delete( meta.prefix );
            meta.initialize     =   false;
        }
    }