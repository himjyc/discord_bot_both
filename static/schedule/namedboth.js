const { ND, 흑장로, 발록, 오만탐, Colors }  =   require( '../enum/constants.js' );

const date1     =   new Date(2026, 1, 1, 12, 0, 0);
const date2     =   new Date(2026, 1, 1, 21, 0, 0);
// 흑장로 종료 멘트
const date3     =   new Date(2026, 1, 1, 0, 0, 0);
const date4     =   new Date(2026, 1, 1, 11, 0, 0);
const date5     =   new Date(2026, 1, 1, 23, 0, 0);

var namedboth   =
    {
        prefix : ND,
        list : [
            {
                "name" : "발록",
                "time" : date1,
                "itemDesc" : [발록],
                "type" : "",
                "message" : [],
                "repeat" : [600000, 0],
                "crondayOfWeek" : () => '1-5'
            },
            {
                "name" : "발록",
                "time" : date2,
                "itemDesc" : [발록],
                "type" : "",
                "message" : [],
                "repeat" : [600000, 0],
                "crondayOfWeek" : () => '1-5'
            },
            {
                "name" : "흑장로",
                "time" : date3,
                "itemDesc" : [흑장로],
                "type" : "",
                // "message" : [ '```ansi\n' + `${Colors.white}[ {title} ]\n${Colors.green}{time}후 종료됩니다.` + '```', '```ansi' + `\n${Colors.white}[ {title} ]\n${Colors.green}종료되었습니다.` + '```' ],
                "message" : [ '[ {title} ]\n{time}후 종료됩니다.', '[ {title} ]\n종료되었습니다.' ],
                "repeat" : [600000, 0]
            },
            {
                "name" : "오만탐",
                "time" : date4,
                "itemDesc" : [오만탐],
                "type" : "",
                "message" : [],
                "repeat" : []
            },
            {
                "name" : "오만탐",
                "time" : date5,
                "itemDesc" : [오만탐],
                "type" : "",
                "message" : [],
                "repeat" : []
            }
        ]
    }
module.exports  =   namedboth