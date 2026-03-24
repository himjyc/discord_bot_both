const omanTimeItemNotice    =   require( '../template/omanTimeItemNotice');


module.exports =  {
    name : "/",
    description : "test",
    used : false,
    execute(message, args) {

        if ( args.length > 0 )
        {

            console.log( 'updateOmanTimeItem' + args[0] )
            let updateTime      =   args[0];
            let idxUpdateTime   =   omanTimeItemNotice.exist.indexOf( updateTime );

            if ( idxUpdateTime > -1 )
            {

                omanTimeItemNotice.exist    =   omanTimeItemNotice.exist.filter( time => updateTime != time);
                console.log( omanTimeItemNotice.exist )
                omanTimeItemNotice.end.push( updateTime );
                omanTimeItemNotice.end.sort( (a,b) => {

                    const numA = a.replace(/[^0-9]/g, '').padStart(5, '0');
                    const numB = b.replace(/[^0-9]/g, '').padStart(5, '0');

                    return numA.localeCompare(numB);
                });
                console.log( omanTimeItemNotice.end )
            }
        }

        return null;
    }
}