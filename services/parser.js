const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = {
  async fetchAndParse(url) {
    const data = await JSDOM.fromURL(url).then(
      (dom) =>
        dom.window.document.querySelector(
          "#content > p:nth-child(1) > span:nth-child(1)",
        ).textContent,
    );
    return data;
  },
};
