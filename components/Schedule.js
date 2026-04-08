const metaFieldboth     =   require( '../static/schedule/fieldboth.js');
const schedule          =   require( 'node-schedule' );
const { CT, FD, ND }    =   require( '../static/enum/constants.js' );
const fs                =   require( 'fs' );

module.exports =
    {
        create( filename, time )
        {

            // console.log( __dirname )
            let entity  =   require( `./both/${filename}` );
            entity.set( time );
        },

        delete( prefix )
        {

            for ( const name in schedule.scheduledJobs )
            {

                if ( name.startsWith( prefix ) )
                {

                    schedule.scheduledJobs[ name ].cancel();
                    console.log( `■ Job 삭제 : ${name}` )
                }
            }
        },

        deleteAll()
        {

            schedule.gracefulShutdown();
        },

        // job( currentDate )
        // {
        //
        //     if ( !metaFieldboth.initialize )
        //         return;
        //
        //     const currentHours      =   currentDate.getHours();
        //     const currentMinutes    =   currentDate.getMinutes();
        //     const currentSeconds    =   currentDate.getSeconds();
        //
        //     let listLength      =   metaFieldboth.list.length;
        //
        //     for ( let i = 0 ; i < listLength; i++ )
        //     {
        //
        //         let item        =   metaFieldboth.list[i];
        //         let date        =   item.time;
        //         let interval    =   item.interval;
        //
        //         let hours       =   date.getHours()
        //         let minutes     =   date.getMinutes()
        //         let seconds     =   date.getSeconds()
        //
        //         // const hours     =   String(date.getHours()).padStart(2, '0');
        //         // const minutes   =   String(date.getMinutes()).padStart(2, '0');
        //         // const seconds   =   String(date.getSeconds()).padStart(2, '0');
        //
        //
        //         // let nextIdx     =   ( listLength == i+1 ) ? 0 : i+1;
        //         // let nextItem    =   metaFieldboth.list[nextIdx];
        //         // let nextDate    =   nextItem.time;
        //
        //         console.log(currentDate.toLocaleString() + '   ' + date.toLocaleString())
        //     }
        // }
    }