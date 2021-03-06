var Spark = require("../")
const Command = Spark.command("ping")

Command.addAlias("test-alias")
Command.setLevel(0)

Command.code = async (client, message) => {
    var result = await message.channel.send("Ping!")
    result.edit(`Pong! | Took **${result.createdTimestamp - message.createdTimestamp}**ms.`)

}
module.exports = Command;
