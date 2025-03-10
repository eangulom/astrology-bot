const { SlashCommandBuilder } = require("discord.js");
const { fetchAndParse } = require("../../services/parser");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leo")
    .setDescription("Get your daily Horoscope for Leo"),
  async execute(interaction) {
    const data = await fetchAndParse(
      "https://cafeastrology.com/leodailyhoroscope.html",
    );

    await interaction.reply(data);
  },
};
