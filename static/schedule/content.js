const { CT, 점령전, 개미, 공성전, 샌드윔 } =   require( '../enum/constants.js' );
const date1     =   new Date(2026, 1, 1, 17, 0, 0);
const date2     =   new Date(2026, 1, 1, 20, 0, 0);
const date3     =   new Date(2026, 1, 1, 21, 0, 0);

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
                "repeat" : [1200000, 600000, 0],
                "crondayOfWeek" : () => '6'
            },
            {
                "name" : 공성전,
                "time" : date2,
                "itemDesc" : [공성전],
                "type" : "",
                "message" : [],
                "repeat" : [1200000, 600000, 0],
                "crondayOfWeek" : () => '0'
            },
            {
                "name" : 샌드윔,
                "time" : date3,
                "itemDesc" : [샌드윔],
                "type" : "",
                "message" : [],
                "repeat" : [1200000, 600000, 0],
                "crondayOfWeek" : () => '5,6'
            },
            {
                "name" : 개미,
                "time" : date2,
                "itemDesc" : [개미],
                "type" : "",
                "message" : [],
                "repeat" : [1200000, 600000, 0],
                "crondayOfWeek" : () => '1,4'
            }
        ]
    }
module.exports  =   content