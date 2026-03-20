const fs    =   require( 'fs' );
// 1. 주요 클래스 가져오기
const { Client, Events, GatewayIntentBits, Collection, GuildScheduledEvent, TextChannel } = require('discord.js');
const schedule                      =   require( 'node-schedule' );
const { channelID, prefix, token }  =   require('./config.json');
const fnSchedule                    =   require( './components/Schedule');

// 2. 클라이언트 객체 생성 (Guilds관련, 메시지관련 인텐트 추가)
const client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]});
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
    //     // channel.send(`[반복 알림] 현재 시간은 ${now} 입니다.`);
    //
    //     console.log( currentDate instanceof Date)
    //     fnSchedule.job( currentDate );
    //
    //     if ( date.getSeconds()%10 == 0 )
    //         console.log(`매 초 알림 테스트 : ${now}`);
    // });

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

        // console.log( bothtime );
        // bothtime[0].time = 'update' + Math.random();
    }

    Log.log( message );
});

// 5. 시크릿키(토큰)을 통해 봇 로그인 실행
client.login(token);


const Log   =   {

    log : (message) => {
        console.log( `■ log :: ${message.author.username}   >>>  ${message.content}` );
    }

}