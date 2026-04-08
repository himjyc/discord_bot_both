const schedule      =   require( 'node-schedule' );
const schedulefn    =   require( '../ScheduleHandler' );
const meta          =   require( '../../static/schedule/content');

module.exports =
    {
        set()
        {

            this.buildJob();
        },
        buildJob()
        {

            for ( let i = 0 ; i < meta.list.length ; i++ )
            {
                schedulefn.buildRepeatSchedule( meta, this, i );
            }
        }
    }