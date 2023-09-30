import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  console.log(process.env.NEXT_PUBLIC_INFURA_API_KEY);
  const provider = new Web3.providers.HttpProvider(
    process.env.NEXT_PUBLIC_INFURA_API_KEY
  );
  web3 = new Web3(provider);
}

export default web3;
