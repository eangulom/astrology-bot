const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gemini")
    .setDescription("Get your daily Horoscope for Gemini"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://cafeastrology.com/geminidailyhoroscope.html",
    );

    await interaction.reply(data);
  },
};
