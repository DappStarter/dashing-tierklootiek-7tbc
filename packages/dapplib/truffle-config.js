require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note spider coach include fork bridge taste'; 
let testAccounts = [
"0xa5e442f0c21bc046af0e89b5d62a1c28bca5defc71f1017e5d65d46c22fa6ffc",
"0xb4d6ffcfaeda1ac40e3cdd996b9bfb89667b2493e8a671bdd4eb90035baa6285",
"0x643d8fb44b96ac6c1ddc4c20e6c90c40b84f777634a6b2575abbd3d98e8af365",
"0x7cd2a3054721c683417fb32bc6d5df124ff89f5804a7dc88836f5d84b6621d02",
"0xfe6c1e59c132e1169601e840d55b4bcbbb016bdde43f83de2fd241234a860085",
"0xf453704912c5727c0c6ba89787d2c68cb9dca2c58b1a0fc2cc7ec2336df5dead",
"0x8a5170bf0fc2a535ad4216a66462a1576bdeb61fbf30ed8d14154c75baa91531",
"0x7d2b5b62f5989dae8b38b9b596d37b92750e4fc5c25b030eaa3592df1680b458",
"0xe114f9d5afbd54c7588acfad325e6f124cb0631121a1b27b29d590ba442acfb5",
"0x7f33f6454b273e35eeab3b1ae436690135d10c9596030c2c2ee428d4f12a14f5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


