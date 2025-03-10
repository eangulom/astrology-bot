const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aries")
    .setDescription("Get your daily Horoscope for Aries"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://cafeastrology.com/ariesdailyhoroscope.html",
    );

    await interaction.reply(data);
  },
};
