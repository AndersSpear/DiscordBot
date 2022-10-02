const { SlashCommandBuilder } = require('@discordjs/builders');
const { GuildMember, Guild, GuildMemberManager } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('changenick')
		.setDescription('doin your mom')
        .addUserOption(option =>
            option.setName("userid")
            .setDescription("person to change")
            .setRequired(true)

        )
        .addStringOption(option => 
                option.setName("nickname")
                .setDescription("losr")
                .setRequired(true)
            ),

        async execute(interaction) {
            const m = interaction.guild.members
           const u=  m.resolve(interaction.options.data[0].user);
            u.setNickname(interaction.options.data[1].value);
            const r = `<@${interaction.member.id}> changed **${u.user.username}**'s nickname to ${interaction.options.data[1].value}`
           await interaction.reply(r);

        },
	// guildmember.setNickname lets me change the nickname
};
