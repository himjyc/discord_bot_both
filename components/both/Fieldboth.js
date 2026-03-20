const metaFieldboth     =   require( '../../static/both/fieldboth.js');

module.exports =
    {

        validInputValue( args )
        {

            let valid   =   true;

            try
            {

                if ( args.length == 0 || args[0].trim().length != 6 || !Number.isInteger( parseInt(args[0].trim()) ))
                    throw new Error();

                let time    =   args[0];

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
        set( inputValue )
        {

            console.log( 'Fieldboth.js : set() | start' )
            let inH     =   parseInt( inputValue.slice( 0, 2 ) );
            let inM     =   parseInt( inputValue.slice( 2, 4 ) );
            let inS     =   parseInt( inputValue.slice( 4, 6 ) );

            let date    =   new Date();
            date.getFullYear();
            date.getMonth();
            date.getDate();

            for ( let i = 0 ; i < metaFieldboth.list.length ; i++ )
            {

                let item        =   metaFieldboth.list[i];
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

            metaFieldboth.initialize    =   true;
            console.log( 'Fieldboth.js : set() | end' )

            // console.log( metaFieldboth )
            return 'set';
        }
    }