module.exports = (robot) => {
  robot.respond(/\brc(-|\s)version\b/i, function(res) {
      res.send(`v0.0.1-dev`);
  })
}
