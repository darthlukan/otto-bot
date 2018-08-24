module.exports = (robot) => {
  robot.respond(/version(?![\s|\w|\d])/, function(res) {
    var pkgJson = require('../package.json');
      res.reply(`${pkgJson.version}`);
  })
}
