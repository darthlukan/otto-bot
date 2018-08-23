module.exports = (robot) => {
  robot.respond(/help(?![\s|\w|\d])/, (res) => {
    res.reply(`
      Usage: otto help $COMMAND 
        -- Available commands: help, search, version, maintainer`
    ); 
  });

  robot.respond(/help maintainer/, (res) => {
    res.reply(`
      Usage: otto maintainer
      Displays the current maintainer of otto-bot.
    `);
  });

  robot.respond(/help search/, (res) => {
    res.reply(`
      Usage: otto search $QUERY
      Returns results from DuckDuckGo (NYI)
    `); 
  });

  robot.respond(/help version/, (res) => {
    res.reply(`
      Usage: otto version
      Displays the current version of otto-bot.
    `);
  });
}
