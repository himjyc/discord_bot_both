const 네크로멘서 = '네크';
const 거대드레이크    =   "거드";
const 망자교도관   =   "망자교도관";
const 데몬    =   "데몬";
const 데스나이트    =   "데스";
const 도펠갱어    =   "도펠";
const 리퍼    =   "리퍼";
const 마요    =   "마요";
const 마이노샤먼   =   "마이노";
const 맘보토끼    =   "맘보";
const 샤스키   =   "샤스키";
const 아크모   =   "아크모";
const 오르쿠스  =   "오르쿠스";
const 이프리트    =   "이프";
const 정령감시자 =   "정령감시자";
const 제로스   =   "제로스";
const 카스파    =   "카스파";
const 커츠    =   "커츠";
const 피닉스   =   "피닉스";
const 흑기사대장   =   "흑기사대장";


var fieldboth           =   {};
fieldboth.initialize    =   false;
fieldboth.list          =
    [
        {
            "time" : new Date(),
            "list" : [ 리퍼, 피닉스, 이프리트, 제로스, 마요, 샤스키, 커츠, 마이노샤먼, 데스나이트, 네크로멘서, 카스파, 도펠갱어, 흑기사대장, 오르쿠스, 정령감시자, 망자교도관, 맘보토끼],
            "type" : "",
            "interval" : 4
        },
        {
            "time" : new Date(),
            "list" : [오르쿠스, 정령감시자],
            "type" : "",
            "interval" : 2
        },
        {
            "time" : new Date(),
            "list" : [네크로멘서, 카스파, 흑기사대장, 망자교도관, 맘보토끼],
            "type" : "",
            "interval" : 2
        },
        {
            "time" : new Date(),
            "list" : [ 마요, 이프리트,  샤스키, 마이노샤먼, 도펠갱어, 커츠, 오르쿠스,  정령감시자 ],
            "type" : "",
            "interval" : 4
        },
        {
            "time" : new Date(),
            "list" : [ 리퍼, 피닉스, 제로스, 데스나이트, 네크로멘서, 카스파, 흑기사대장, 오르쿠스,  정령감시자,  망자교도관,  맘보토끼 ],
            "type" : "",
            "interval" : 4
        },
        {
            "time" : new Date(),
            "list" : [ 마요, 이프리트, 샤스키, 마이노샤먼, 도펠갱어,  커츠, 오르쿠스, 정령감시자 ],
            "type" : "",
            "interval" : 2
        },
        {
            "time" : new Date(),
            "list" : [ 네크로멘서, 카스파, 흑기사대장, 망자교도관, 맘보토끼 ],
            "type" : "",
            "interval" : 2
        },
        {
            "time" : new Date(),
            "list" : [ 오르쿠스, 정령감시자 ],
            "type" : "",
            "interval" : 4
        }
    ]

module.exports  =   fieldboth