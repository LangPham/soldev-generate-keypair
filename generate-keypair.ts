import "dotenv/config"
import { addKeypairToEnvFile, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";

// const keypair = getKeypairFromEnvironment("SECRET_KEY");
const keypair = Keypair.generate();

addKeypairToEnvFile(keypair,"SECRET_KEY" , ".env");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);