import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Opensea from '../public/logos/opensea'
import Link from 'next/link'
import Image from 'next/image'

const nft = {
  name: 'Adex Story #15',
  imageSrc: '/images/nft-detail/nft-detail.png',
  imageAlt: 'SpaceBoo#968',

  properties: [
    { name: 'Birth Chain', type:'Ethereum'},
    { name: 'Background', type:'Background 150'},
    { name: 'Star', type:'Star 12F'},
    { name: 'Skin', type:'Skin 7'},
    { name: 'Mouth', type:'Mouth 1'},
    { name: 'Eye', type:'Eye 1'},
    { name: 'Hair', type:'Hair 23D'},
    { name: 'Glasses', type:'Glasses 3B'},
    { name: 'Necklace', type:'Necklace 1D'},
    { name: 'Clothes', type:'Clothes 88'},
    
    /* Add more */
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NftDetail() {
  const [selectedProperty, setSelectedProperty] = useState(nft.properties[2])

  return (
    <div className="max-w-2xl mx-auto py-24 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
    <div className="max-w-12xl lg:mt-0 sm:mt-[14rem] md:mt-[14rem]">
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 mt-16">
        <div className="rounded-lg overflow-hidden sm:col-span-8 lg:col-span-5">
          <Image
          src={nft.imageSrc}
          alt={nft.imageAlt}
          className="object-center object-cover"
          width={500}
          height={500}
          />
        </div>
        <div className="sm:col-span-8 md:col-span-8 lg:col-span-7">
          <h2 className="font-justanotherhand text-6xl text-pale-yellow text-center ">{nft.name}</h2>


          <section aria-labelledby="options-heading" className="mt-10">

            <form>

              {/* Sizes */}
              <div className="mt-10">

                <RadioGroup value={selectedProperty} onChange={setSelectedProperty} className="mt-4">
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                    {nft.properties.map((property) => (
                      <RadioGroup.Option
                        key={property.name}
                        value={property}
                        className={({ active }) =>
                          classNames(
                            property
                              ? 'bg-pale-yellow shadow-sm cursor-pointer font-justanotherhand text-4xl text-maastricht'
                              : 'text-gray-200 cursor-not-allowed',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative rounded-md py-3 px-4 flex items-center justify-center focus:outline-none sm:flex-1 md:flex-1'
                          )
                        } 
                      >
                          <>
                            <RadioGroup.Label as="p">{property.name}:<span className="text-teal"> {property.type}</span></RadioGroup.Label>
                          </>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <Link href="https://opensea.io/collection/dogevipclub" passHref>
              <button
                type="submit"
                className="mt-2 w-full bg-pale-yellow rounded-md py-3 px-8 flex items-center justify-center font-justanotherhand text-4xl text-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              ><Opensea className="h-10 mr-3"/>
                View details on Opensea
              </button>
              </Link>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
  )
}
