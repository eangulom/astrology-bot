const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pisces")
    .setDescription("Get your daily Horoscope for Pisces"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://cafeastrology.com/piscesdailyhoroscope.html",
    );

    await interaction.reply(data);
  },
};
