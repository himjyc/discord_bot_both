module.exports =  {
    name : "코드실행",
    description : "코드실행",
    execute(message, args) {
        return message.channel.send( `${message.author}, 코드실행!!` );
    }
}