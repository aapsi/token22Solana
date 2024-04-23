import {
  percentAmount,
  generateSigner,
  signerIdentity,
  createSignerFromKeypair,
} from "@metaplex-foundation/umi";
import {
  AuthorityType,
  createSetAuthorityInstruction,
  setAuthority,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import * as web3 from "@solana/web3.js";
import secret from "./guideSecret.json";
import { PublicKey } from "@solana/web3.js";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const umi = createUmi("https://api.devnet.solana.com"); //Replace with your QuickNode RPC Endpoint

const Payer = Keypair.fromSecretKey(
  bs58.decode(
    "63qvB2yiJEMR2xFJH9moGJLqYgpZ6s6gPefzH5t6D8WPNvG9nrQubfy4jsmujDc2ZtpCLLHmsxj2fQw9uNTtgZGE"
  )
);

const userWallet = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(secret));
const userWalletSigner = createSignerFromKeypair(umi, userWallet);
const connection = new web3.Connection(
  web3.clusterApiUrl("devnet"),
  "confirmed"
);
//   const metadata = {
//     name: "Silly Dragon Token",
//     symbol: "SDT",
//     uri: "https://raw.githubusercontent.com/loopcreativeandy/video-tutorial-resources/main/metadataUpdate/sillydragon.jpg",
//   };

//   const mint = generateSigner(umi);
umi.use(signerIdentity(userWalletSigner));
umi.use(mplCandyMachine());

const mintPubkey = new PublicKey(
  "28xfBt5wRnG2ybc1VJgmN9JcvfgaZihgpiCmbonkpuPE"
);

let txhash = setAuthority(
  connection, // connection
  Payer, // payer
  mintPubkey, // mint account || token account
  Payer.publicKey, // current authority
  AuthorityType.MintTokens, // authority type
  null // new authority (you can pass `null` to close it)
);
console.log(`txhash: ${txhash}`);

let txhash1 = setAuthority(
  connection, // connection
  Payer, // payer
  mintPubkey, // mint account || token account
  Payer.publicKey, // current authority
  AuthorityType.FreezeAccount, // authority type
  null // new authority (you can pass `null` to close it)
);
console.log(`txhash: ${txhash1}`);
