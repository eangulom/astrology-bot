const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("libra")
    .setDescription("Get your daily Horoscope for Libra"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://www.astrology.com/horoscope/daily/libra.html",
    );

    await interaction.reply(data);
  },
};
