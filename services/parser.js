const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = {
  async fetchAndParse(url) {
    const data = await JSDOM.fromURL(url).then(
      (dom) =>
        dom.window.document.querySelector(".entry-content > p:nth-child(7)")
          .textContent,
    );
    return data;
  },
};
