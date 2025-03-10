const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cancer")
    .setDescription("Get your daily Horoscope for Cancer"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://cafeastrology.com/cancerdailyhoroscope.html",
    );

    await interaction.reply(data);
  },
};
