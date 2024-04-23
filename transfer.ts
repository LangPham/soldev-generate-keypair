import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

const add_store = new PublicKey("3dE6XtaY5Yz1Jowywtm9HPCVXo5QvDqaEMPRzbwZGeH2");
const add_customer = new PublicKey(  "DCopW1WBXjcESXjwNr33ekwh2w3HUgUP1HLwjWC3Ux9C");


const connection = new Connection("https://api.devnet.solana.com", "confirmed");



const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: add_customer,
  toPubkey: add_store,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderKeypair,
]);


console.log(`Transaction signature is ${signature}!`);
