const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("capricorn")
    .setDescription("Get your daily Horoscope for Capricorn"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://www.astrology.com/horoscope/daily/capricorn.html",
    );

    await interaction.reply(data);
  },
};
