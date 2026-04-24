const fs    =   require( 'fs' );
// 1. 주요 클래스 가져오기
const { Client, Events, GatewayIntentBits,
    Collection, GuildScheduledEvent, TextChannel, GuildScheduledEventManager, GuildScheduledEventPrivacyLevel,
    GuildScheduledEventCreateOptions, GuildScheduledEventEntityType, EmbedBuilder
} = require('discord.js');
const schedule                      =   require( 'node-schedule' );
const { guildID, channelID, prefix, token }  =   require('./config.json');
const fnSchedule                    =   require( './components/Schedule');
const client                    =   require( './client' );
// 2. 클라이언트 객체 생성 (Guilds관련, 메시지관련 인텐트 추가)
// const client = new Client({ intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.GuildMessages,
//         GatewayIntentBits.MessageContent
//     ]});

const args      =   process.argv;

const commands  =   new Collection();

const commandFiles  =   fs.readdirSync( './commands').filter( file => file.endsWith('.js'));

for ( const file of commandFiles )
{
    const command   =   require( `./commands/${file}` );
    commands.set( command.name, command );
}

// 3. 봇이 준비됐을때 한번만(once) 표시할 메시지
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);

    // const channel   =    client.channels.fetch( channelID );
    const channel   =    client.channels.cache.get( channelID );
    // console.log( channel );
    // console.log( !channel );
    // console.log( !(channel instanceof TextChannel) );

    // if (!channel || !(channel instanceof TextChannel))
    if (!channel )
        return console.error('지정한 채널을 찾을 수 없거나 텍스트 채널이 아닙니다.');

    // 패턴 A: 크론 표현식 (매 분 0초마다 실행)
    // 초 분 시 일 월 요일
    // schedule.scheduleJob('0 * * * * *', () => {
    // schedule.scheduleJob('0 * * * * *', () => {
    //     const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    //     channel.send(`[반복 알림] 현재 시간은 ${now} 입니다.`);
    //     console.log('매 분 알림 발송 완료');
    // });

    // schedule.scheduleJob('* * * * * *', ( currentDate ) => {
    //     const date  =   new Date();
    //     const now   =   date.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    //     channel.send(`[반복 알림] 현재 시간은 ${now} 입니다.`);
    //
    //     // console.log( currentDate instanceof Date)
    //
    //     fnSchedule.job( currentDate );
    //
    //     if ( date.getSeconds()%10 == 0 )
    //         console.log(`매 초 알림 테스트 : ${now}`);
    // });



    // const job1Cron = schedule.scheduleJob( '이름1', '* * * * * *', function() {
    //     console.log('Cron Job: 매 분 10초에 실행되었습니다.');
    // }, function(){
    //     console.log( 'callback 함수')
    // });
    // const job2Cron = schedule.scheduleJob('30 * * 24 * *', function() {
    //     console.log('Cron Job: 매 분 10초에 실행되었습니다.');
    // });

    // fnSchedule.deleteAll();
    fnSchedule.create( 'Namedboth' );
    fnSchedule.create( 'Content' );

    console.log( args)

    if ( args.length > 2 )
    {

        fnSchedule.create( 'Fieldboth', args[2] );
    }
    else
    {
        console.log( Object.keys( schedule.scheduledJobs ) );
    }

    fnSchedule.otherJob();


    // channel.send( '```ansi\n' + `\u001b[37m[ 발록 ]\n\u001b[32m\n시작입니다.\u001b[0m` + '```' );
    // channel.send( '# [ 발록 ]\n\n시작입니다.' );

    // channel.send( { embeds : [new EmbedBuilder().setColor(0x00FF00)
    //         .setTitle('[ 리퍼 피닉스 이프 제로스 마요 샤스키 커츠 마이노 데스 네크 카스파 도펠 흑기사대장 오르쿠스 정령감시자 망자교도관 맘보 ]')
    //         .setDescription('시작입니다.').setTimestamp()]} );


    // channel.send( '```ansi\n' + `\u001b[37m[ 발록 ]\n\u001b[32m\n시작입니다.\u001b[0m` + '```' );

    // console.log( Object.keys( schedule.scheduledJobs ) );

    // for ( const name in schedule.scheduledJobs )
    // {
    //     // console.log( schedule.scheduledJobs[name].pendingInvocations[0].recurrenceRule)
    //     console.log( schedule.scheduledJobs[name].pendingInvocations[0].fireDate.toLocaleString())
    // }
    // console.log( schedule.scheduledJobs );

    // const guild     =   client.guilds.cache.get( guildID );
    // console.log(fnField.update())
});

// 4. 누군가 ping을 작성하면 pong으로 답장한다.
/*client.on('messageCreate', (message) => {
    if(message.content == 'ping'){
        message.reply('pong');
    }

    console.log( '실행 ::  messageCreate ' );
})*/

client.on( 'messageCreate', message => {

    if ( !message.content.startsWith( prefix) || message.author.bot) return;
    const args  =   message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift();

    if ( !commands.has(command) ) return;

    try
    {
        commands.get( command ).execute( message, args );
    }
    catch ( e )
    {
        console.error(e);
    }
    finally
    {
    }

    Log.log( message );
});

//  새 멤버가 서버에 들어왔을 때 알림
// client.on('guildMemberAdd', async (member) => {
//
//     console.log( 'guildMemberAdd  check 1 ')
//     const channel   =   member.guild.channels.cache.get(channelID);
//
//     if (!channel)
//         return;
//     console.log( 'guildMemberAdd  check 2 ')
//     channel.send(`👋 안녕하세요 ${member.user}님, 서버에 오신 것을 환영합니다!`);
//     console.log( 'guildMemberAdd  check 3 ')
// });

// 5. 시크릿키(토큰)을 통해 봇 로그인 실행
client.login(token);


const Log   =   {

    log : (message) => {
        console.log( `■ log :: ${message.author.username}   >>>  ${message.content}` );
    }

}


const embed11 = new EmbedBuilder()
    .setColor(0x5865F2) // 왼쪽 세로선 색상 (디스코드 블루)
    .setTitle('📢 서버 업데이트 공지사항') // 큰 제목
    .setURL('https://discord.js.org/') // 제목 클릭 시 이동할 링크
    .setAuthor({
        name: '시스템 관리자',
        iconURL: 'https://i.imgur.com/AfFp7pu.png',
        url: 'https://github.com'
    }) // 상단 작성자 정보
    .setDescription('이번 업데이트를 통해 새로운 기능들이 추가되었습니다.\n아래 내용을 확인해 주세요!') // 본문 설명
    .setThumbnail('https://i.imgur.com/AfFp7pu.png') // 우측 상단 작은 썸네일
    .addFields(
        { name: '✅ 업데이트 항목 1', value: '명령어 반응 속도 개선' },
        { name: '✅ 업데이트 항목 2', value: '새로운 임베드 UI 적용' },
        { name: '\u200B', value: '\u200B' }, // 공백 라인 추가 (가독성용)
        { name: '서버 상태', value: '정상 작동 중', inline: true }, // 가로 나열
        { name: '현재 버전', value: 'v1.2.0', inline: true }      // 가로 나열
    )
    .setImage('https://i.imgur.com/AfFp7pu.png') // 중앙 하단 큰 이미지
    .setTimestamp() // 메시지 전송 시간 표시 (현재 시간)
    .setFooter({
        text: '문의 사항은 관리자에게 메시지를 남겨주세요.',
        iconURL: 'https://i.imgur.com/AfFp7pu.png'
    }); // 하단 작은 푸터