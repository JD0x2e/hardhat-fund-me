require("hardhat-deploy")
require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("hardhat-gas-reporter")
require("solidity-coverage")

const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL || "https://eth-goerli/example"
const ARBITRUM_RPC_URL =
    process.env.ARBITRUM_RPC_URL || "https://eth-arbitrum-goerli/example"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x..key"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const CMC_API_KEY = process.env.CMC_API_KEY || "key"

module.exports = {
    // solidity: "0.8.7",
    solidity: {
        compilers: [{ version: "0.8.7" }, { version: "0.6.6" }]
    },
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6
        },
        arbitrum: {
            url: ARBITRUM_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 42161,
            blockConfirmations: 6
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337
        }
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: CMC_API_KEY,
        token: "MATIC"
    },
    namedAccounts: {
        deployer: {
            default: 0
        }
    }
}
