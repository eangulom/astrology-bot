const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sagittarius")
    .setDescription("Get your daily Horoscope for Sagittarius"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://cafeastrology.com/sagittariusdailyhoroscope.html",
    );

    await interaction.reply(data);
  },
};
