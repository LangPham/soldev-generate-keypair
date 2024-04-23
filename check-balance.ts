import { Connection, PublicKey } from "@solana/web3.js";

const add_store = new PublicKey("3dE6XtaY5Yz1Jowywtm9HPCVXo5QvDqaEMPRzbwZGeH2");
const add_customer = new PublicKey("DCopW1WBXjcESXjwNr33ekwh2w3HUgUP1HLwjWC3Ux9C");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balance_store = await connection.getBalance(add_store);

const balance_customer = await connection.getBalance(add_customer);

const formatter = new Intl.NumberFormat('default', {
  style: "unit",
  unit: "liter",
});

const balance_storef = formatter.format(balance_store);
const balance_customerf = formatter.format(balance_customer);

console.log(
  `💰 Finished! \n The balance store is ${balance_storef} \n The balance customer is ${balance_customerf}`
);