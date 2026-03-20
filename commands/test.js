module.exports =  {
    name : "테스트",
    description : "test",
    execute(message, args) {
        return message.channel.send( `${message.author}, 테스트!!` );
    }
}