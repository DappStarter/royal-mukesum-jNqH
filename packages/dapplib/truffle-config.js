require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strategy rival pulse purpose install hat army gesture'; 
let testAccounts = [
"0x2bb28b1d90cac26177473557ac44a397b5d56ded77b7031af24e61bc85cb459e",
"0xf5789ade0d555db04b95aea0f7053d5640f030c9e47eea251e20737b6bb14e9a",
"0xb3d6a1555b564f1d67fc601fc5938e8f924fe30351536d4dbac66082a0862a33",
"0x601804666936b6c70d357de1ae8fe1cd15216a9c998f91f24e57c9dc1000b96d",
"0x9bb99f9c24145175a8e4a7b442bd24677172df48ec55fd66d1cf96d7e0bfa1c9",
"0x1864bc0a3e0f4aa455d5a6206e64e5d27b0d232caa7b6a515f213c1c87da9dd2",
"0x67c979f38c1c87b8489758e4c1af6079bf04631e0c4746b4b90519b4a269b275",
"0xe668bad78de1c4025b7a4b1dce750796a490184ab1b3770d35b2c709a7f6b577",
"0xfb543e21cb0967829651d3f8a9048fffbac14b62608bdfb23815d4995dd344b0",
"0x3094f4fd13c81ba0ef810cefd0d56acde7b60a82817d71e02a0943175670d848"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

