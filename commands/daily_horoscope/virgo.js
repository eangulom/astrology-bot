const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("virgo")
    .setDescription("Get your daily Horoscope for Virgo"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://cafeastrology.com/virgodailyhoroscope.html",
    );

    await interaction.reply(data);
  },
};
