import Image from 'next/image'

const contents = [
    {
    id: 0,  
    welcomeTitle: 'Welcome to Adex Story',
    welcomeSubtitle: 'ADEX NFTs can bridge capable of sending NFTs across any blockchains. Each of those penguin is programmatically generated from dozens of unique traits and varying rarities. Minting a Penguin will going to provide lots of utilities for holders both in the short-term and long-term with investments/passive income and rewards.',
    }
  ]
  
  const nfts = [
    {
      id: 1,
      name: 'NFT #0001',
      imageSrc: '/images/nfts/nft-1.png',
      imageAlt: 'NFT#0001',
    },
    {
      id: 2,
      name: 'NFT #0002',
      imageSrc: '/images/nfts/nft-2.png',
      imageAlt: 'NFT#0002',
    },
    {
      id: 3,
      name: 'NFT #0003',
      imageSrc: '/images/nfts/nft-3.png',
      imageAlt: 'NFT#0003',
    },
    {
      id: 4,
      name: 'NFT #0004',
      imageSrc: '/images/nfts/nft-4.png',
      imageAlt: 'NFT#0004',
    },
  ]
  
  export default function Images() {
    return (
      <div>
        {contents.map((content) => (
        <div key={content.id} className="max-w-2xl mx-auto py-24 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-12xl lg:mt-0 sm:mt-[14rem] md:mt-[14rem]">
            <p className="mt-2 font-justanotherhand text-6xl text-maastricht text-center">{content.welcomeTitle}</p>
            <p className="mt-4 font-justanotherhand text-5xl text-pale-yellow text-center">{content.welcomeSubtitle}</p>
          </div>
  
          <div className="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {nfts.map((nft) => (
              <div key={nft.id} className="flex flex-col-reverse bg-pale-yellow rounded-lg">
                <div className="mt-4 mb-3">
                  <h3 className="font-justanotherhand text-5xl text-teal text-center">{nft.name}</h3>
                  </div>
                <div className="aspect-w-1 aspect-h-1 rounded-tl-lg rounded-tr-lg bg-gray-100 overflow-hidden">
                  <Image
                  src={nft.imageSrc}
                  alt={nft.imageAlt}
                  className="object-center object-cover"
                  layout="fill"/>
                </div>
              </div>
            ))}
          </div>
        </div>
        ))}
      </div>
    )
  }
  