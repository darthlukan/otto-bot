module.exports = (robot) => {
  robot.respond(/info(?![\s|\w|\d])/, (res) => {
    res.reply(`
      Basic help and resources:
      *Automation COP Mojo Page:* https://red.ht/autocop
      *Email list:* ansible-questions@redhat.com
      *Ansible Documentation:* https://docs.ansible.com
      *Ansible Blog*: https://www.ansible.com/blog
      *Available commands:* help, search, version, maintainer
    `); 
  });
}
