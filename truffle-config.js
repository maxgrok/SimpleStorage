const HDWalletProvder = require("truffle-hdwallet-provider");
const path = require("path");

const infuraURL = " ";
const mnemonic = " ";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby:{
      provider: () => HDWalletProvider(mnemonic, infuraURL),
      network_id:"4"
    }
  }
};
