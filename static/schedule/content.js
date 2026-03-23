const { CT, 점령전, 개미 } =   require( '../enum/constants.js' );
const date1     =   new Date(2026, 1, 1, 17, 0, 0);
const date2     =   new Date(2026, 1, 1, 20, 0, 0);

var content   =
    {
        'prefix' : CT,
        list : [
            {
                "name" : 점령전,
                "time" : date1,
                "itemDesc" : [점령전],
                "type" : "",
                "message" : [],
                "repeat" : [600000, 0],
                "crondayOfWeek" : () => '6'
            },
            {
                "name" : 개미,
                "time" : date2,
                "itemDesc" : [개미],
                "type" : "",
                "message" : [],
                "repeat" : [600000, 0],
                "crondayOfWeek" : () => '1,4'
            }
        ]
    }
module.exports  =   content