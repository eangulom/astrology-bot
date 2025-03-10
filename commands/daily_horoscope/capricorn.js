const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("capricorn")
    .setDescription("Get your daily Horoscope for Capricorn"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://cafeastrology.com/capricorndailyhoroscope.html",
    );

    await interaction.reply(data);
  },
};
