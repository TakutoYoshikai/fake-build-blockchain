const fakeInstall = require("fake-build");

const owners = [
  "ethereum",
  "eosio",
  "bitcoin",
  "iotaledger",
  "NemProject",
];

module.exports = async function() {
  for (const owner of owners) {
    await fakeInstall(owner);
  }
}
