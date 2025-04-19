const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leo")
    .setDescription("Get your daily Horoscope for Leo"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://www.astrology.com/horoscope/daily/leo.html",
    );

    await interaction.reply(data);
  },
};
