const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("taurus")
    .setDescription("Get your daily Horoscope for Taurus"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://www.astrology.com/horoscope/daily/taurus.html",
    );

    await interaction.reply(data);
  },
};
