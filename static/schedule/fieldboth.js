

const { FD, 발록, 네크로멘서, 거대드레이크, 망자교도관, 데몬, 데스나이트, 도펠갱어, 리퍼, 마요, 마이노샤먼, 맘보토끼, 샤스키, 아크모, 오르쿠스, 이프리트, 정령감시자, 제로스, 카스파, 커츠, 피닉스, 흑기사대장 }  =   require( '../enum/constants.js' );
const {흑장로} = require("../enum/constants");

var fieldboth           =   {};
fieldboth.initialize    =   false;
fieldboth.prefix        =   FD;
fieldboth.list          =
    [
        {
            "name" : "전체",
            "time" : new Date(),
            "itemDesc" : [ 리퍼, 피닉스, 이프리트, 제로스, 마요, 샤스키, 커츠, 마이노샤먼, 데스나이트, 네크로멘서, 카스파, 도펠갱어, 흑기사대장, 오르쿠스, 정령감시자, 망자교도관, 맘보토끼],
            "type" : "",
            "interval" : 4,
            "message" : [],
            "repeat" : []
        },
        {
            "name" : "오르",
            "time" : new Date(),
            "itemDesc" : [오르쿠스, 정령감시자],
            "type" : "",
            "interval" : 2,
            "message" : [],
            "repeat" : []
        },
        {
            "name" : "네크",
            "time" : new Date(),
            "itemDesc" : [네크로멘서, 카스파, 흑기사대장, 망자교도관, 맘보토끼],
            "type" : "",
            "interval" : 2,
            "message" : [],
            "repeat" : []
        },
        {
            "name" : "마요",
            "time" : new Date(),
            "itemDesc" : [ 마요, 이프리트,  샤스키, 마이노샤먼, 도펠갱어, 커츠, 오르쿠스,  정령감시자 ],
            "type" : "",
            "interval" : 4,
            "message" : [],
            "repeat" : []
        },
        {
            "name" : "반타임",
            "time" : new Date(),
            "itemDesc" : [ 리퍼, 피닉스, 제로스, 데스나이트, 네크로멘서, 카스파, 흑기사대장, 오르쿠스,  정령감시자,  망자교도관,  맘보토끼 ],
            "type" : "",
            "interval" : 4,
            "message" : [],
            "repeat" : []
        },
        {
            "name" : "마요",
            "time" : new Date(),
            "itemDesc" : [ 마요, 이프리트, 샤스키, 마이노샤먼, 도펠갱어,  커츠, 오르쿠스, 정령감시자 ],
            "type" : "",
            "interval" : 2,
            "message" : [],
            "repeat" : []
        },
        {
            "name" : "네크",
            "time" : new Date(),
            "itemDesc" : [ 네크로멘서, 카스파, 흑기사대장, 망자교도관, 맘보토끼 ],
            "type" : "",
            "interval" : 2,
            "message" : [],
            "repeat" : []
        },
        {
            "name" : "오르",
            "time" : new Date(),
            "itemDesc" : [ 오르쿠스, 정령감시자 ],
            "type" : "",
            "interval" : 4,
            "message" : [],
            "repeat" : []
        }
    ]

module.exports  =   fieldboth