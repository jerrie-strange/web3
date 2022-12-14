import { Home } from './components/Home';
import {connectMatamask} from './ethers'
function App() {
  let userAddress
 
//  async function getBalance() {
//   balance = await signer.getBalance("ethers.eth")
//   const convertToEth = 1e18;
//   console.log("account balance in ethers", balance.toString()/ convertToEth)
//  }
 
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={getBalance}>get balance</button> */}
        <Home/>
        {/* <button onClick={connectMatamask}>connect your wallet</button> */}
         
      </header>
    </div>
  );
}

export default App;
