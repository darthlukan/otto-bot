module.exports = (robot) => {
  robot.respond(/maintainer(?![\s|\w|\d])/, (res) => {
    var pkgJson = require('../package.json');
    res.reply(`${pkgJson.author}, ${pkgJson.repository}`);
  });
}
