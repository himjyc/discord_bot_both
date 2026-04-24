const schedule          =   require( 'node-schedule' );
const fnFieldboth       =   require( '../both/Fieldboth' );

module.exports  =
    {

        initInspection()
        {

            schedule.scheduleJob( 'OTH_01_점검초기화', '0 0 5 * * 3', function()
            {

                fnFieldboth.deleteJob();
            });
        }
    }