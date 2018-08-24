module.exports = (robot) => {
  robot.respond(/search/, (res) => {
    var query = res.message.text
      .replace(/otto search/, '')
      .trim()
      .replace(/\s/gi, '+');
    robot.http(`https://api.duckduckgo.com/?q=${query}&format=json`)
      .get() (function(err, result, body) {
        var data = JSON.parse(body);
        var relatedArray = data['RelatedTopics'];
        var message = 'Top 3 results from DuckDuckGo: \n';
        relatedArray.forEach(function(elem, index) {
          if (index <= 2) {
            message += `
              *${elem["Text"]}*
              ${elem["FirstURL"]}`
          }
        });
        res.reply(message);
      });
  });
}
