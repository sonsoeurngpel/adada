import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import spaceBooNFT from "../public/components/SpaceBooNFT.json"
import Ethereum from "../public/logos/ethereum"
import Supply from "../public/logos/supply"
import Image from 'next/image'

const contents = [
  {
  id: 1,  
  title: 'Adex Story',
  pTitle: 'NFTs',
  mainText: 'Adex Story is LayerZero Omnichain NFTs that can be traversed through different blockchains. Currently, it is possible to bridge NFTs between Ethereum, Avalanche, Binance Smart Chain, Arbitrum, Polygon, Optimism and Fantom.',
  howMany: 'How many Adex Story NFTs do you want?',
  }
]

const spaceBooNFTAddress = "0x1f45da026f0d5b36F2Bd5006889eB1212aF990e9";

const Heroes = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        spaceBooNFTAddress,
        spaceBooNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.5 * mintAmount).toString()),
        });
        console.log('response: ',response);
      } catch (err) {
        console.log("error: ", err)
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount -1);
  };

  const handeIncrement = () => {
    if (mintAmount >= 5) return;
    setMintAmount(mintAmount + 1);
  };
  
  return (
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      {contents.map((content) => (
      <div key={content.id} className="mx-auto lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-1 font-justanotherhand sm:text-9xl text-8xl text-maastricht text-center sm:text-left">
                {content.title} <span className="text-pale-yellow">{content.pTitle}</span>
              </h1>
              <p className="mt-3 font-justanotherhand text-4xl text-pale-yellow text-center sm:text-5xl sm:text-left">{content.mainText}</p>
              <p className="mt-3 pt-3 sm:mt-4 font-justanotherhand text-4xl text-center sm:text-left lg:text-left text-maastricht">{content.howMany}</p>
              <div className="mt-4 sm:mt-3">
                  <div className="sm:flex">
                    {isConnected ? (
                    <div>

                        <button className="text-center font-justanotherhand text-5xl inline-flex py-3 px-4 mr-3 rounded-md shadow bg-pale-yellow text-teal items-center" onClick={handleDecrement}>-</button>
                        <input className="text-center font-justanotherhand text-5xl inline-flex py-2 px-1 mr-3 rounded-md shadow bg-pale-yellow text-teal items-center" type="number" value={mintAmount}/>
                        <button className="text-center font-justanotherhand text-5xl inline-flex py-3 px-4 mr-3 rounded-md shadow bg-pale-yellow text-teal items-center" onClick={handeIncrement}>+</button>
                        <button className="text-center font-justanotherhand text-5xl inline-flex py-3 px-4 rounded-md shadow bg-pale-yellow text-teal items-center" onClick={handleMint}>Mint Now</button>
                    </div>
                    ) : ( 
                      <p className="font-justanotherhand text-5xl text-pale-yellow text-center sm:text-left lg:text-left">You must be connected to Mint.</p>
                    )}
                  </div>
                  <div className="pt-3 sm:flex">
                  <button className="text-center mr-3 md:mb-0 sm:mb-3 mb-3 lg:mb-0 font-justanotherhand text-5xl inline-flex w-full py-3 px-4 rounded-md shadow bg-pale-yellow text-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 items-center"><Supply className="h-8 mr-3"/>total supply: 4000</button> 
                  <button className="text-center font-justanotherhand text-5xl inline-flex w-full py-3 px-4 rounded-md shadow bg-pale-yellow text-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 items-center"><Supply className="h-8 mr-3"/>mint price: 0.5 avax</button> 
                  </div>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <Image
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/main-image/main-image.gif"
                priority
                width={800}
                height={700}
                alt=""
                />
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
)
}

export default Heroes;
