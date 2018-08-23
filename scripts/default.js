module.exports = (robot) => {
  robot.respond(/info(?![\s|\w|\d])/, (res) => {
    res.reply(`
      Basic help and resources:
      -- Automation COP Mojo Page: https://mojo.redhat.com/community/communities-at-red-hat/management/automation-community-of-practiceYou rang?
      -- Email list: ansible-questions@redhat.com
      -- Ansible Documentation: https://docs.ansible.com
      -- Available commands: help, search, version, maintainer
    `); 
  });
}
