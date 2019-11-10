const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");

const infuraURL = "https://mainnet.infura.io/v3/dbcb5a76dfc447e79201a60923e4a64c";
const infuraRinkebyURL = "https://rinkeby.infura.io/v3/dbcb5a76dfc447e79201a60923e4a64c";
const mnemonic = process.env.PRIV_SEED;

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
    "rinkeby":{
      provider: ()=> new HDWalletProvider(mnemonic, infuraRinkebyURL),
      network_id: 4
    },
    "mainnet":{
      provider: () => new HDWalletProvider(mnemonic, infuraURL),
      network_id: 1
    }
  }
};
