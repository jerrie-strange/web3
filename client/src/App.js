import { ethers } from "ethers";

function App() {
  let userAddress
  (async function () {
    const provider =  new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
  
    await signer.getAddress();
    return console.log(userAddress);
  })()
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> {userAddress}and save to reload.
        </p>
       
         
      </header>
    </div>
  );
}

export default App;
