const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aquarius")
    .setDescription("Get your daily Horoscope for Aquarius"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://www.astrology.com/horoscope/daily/aquarius.html",
    );

    await interaction.reply(data);
  },
};
