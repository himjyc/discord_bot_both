module.exports =  {
    name : "테스트",
    description : "test",
    used : false,
    execute(message, args) {
        return message.channel.send( `${message.author}, 테스트!!` );
    }
}