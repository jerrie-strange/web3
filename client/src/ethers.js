import { ethers } from "ethers";
export const provider = new ethers.providers.Web3Provider(window.ethereum ,"any")
 export let signer
 export let balance
export async function connectMatamask() {
//  await provider.send("eth_requestAccount",[])
signer = provider.getSigner();
console.log("ur account address", await signer.getAddress(),signer.getBalance("ethers.eth"))

}