const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("scorpio")
    .setDescription("Get your daily Horoscope for Scorpio"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://www.astrology.com/horoscope/daily/scorpio.html",
    );

    await interaction.reply(data);
  },
};
