import Image from 'next/image'

const roadmaps = [
  {
    id:1,
    name: 'Cartoon Paint',
    imageSrc: '/images/roadmap/roadmap-1.png',
    imageAlt: 'roadmap-1'
  },
  {
    id:2,
    name: 'Hand Draw Art',
    imageSrc: '/images/roadmap/roadmap-2.png',
    imageAlt: 'roadmap-2'
  },
  {
    id:3,
    name: 'Comic Artist',
    imageSrc: '/images/roadmap/roadmap-3.png',
    imageAlt: 'roadmap-3'
  },
  {
    id:4,
    name: 'Multichain Man',
    imageSrc: '/images/roadmap/roadmap-4.png',
    imageAlt: 'roadmap-4'
  },
  {
    id:5,
    name: 'LayerZero Kid',
    imageSrc: '/images/roadmap/roadmap-5.png',
    imageAlt: 'roadmap-5'
  },
  {
    id:6,
    name: 'Omnichain Boy',
    imageSrc: '/images/roadmap/roadmap-6.png',
    imageAlt: 'roadmap-6'
  },
]
  
  export default function Roadmap() {
    return(
        <div className="relative py-2 sm:py-2 lg:py-2">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="mt-16 font-justanotherhand text-6xl text-maastricht">Roadmap</h2>
        <p className="mt-5 mb-8 max-w-prose mx-auto font-justanotherhand text-5xl text-pale-yellow">
        We are here for the Long Run. We have lots of future ideas that will help facilitate a vibrant community. Here are a few rewards during the launch.
        </p>

            <div className="flex flex-wrap -mx-4">
            {roadmaps.map((roadmap) => (
                <div key={roadmap.id} className="w-full md:w-1/2 xl:w-1/3 px-4">
                    <div className="bg-pale-yellow rounded-lg overflow-hidden mb-10 shadow">
                    <Image
                        src={roadmap.imageSrc}
                        alt="image"
                        className="w-full"
                        width={500}
                        height={300}
                        />
                    <div className="p-8 text-center">
                        <h3>
                            <a className="font-justanotherhand text-6xl text-teal block hover:text-primary">
                            {roadmap.name}
                            </a>
                        </h3>
                        {/* for Roadmap Details
                        <p className="text-base text-body-color leading-relaxed mb-7">
                            Lorem ipsum dolor sit amet pretium consectetur adipiscing
                            elit. Lorem consectetur adipiscing elit.
                        </p>
                        */}
                    </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
)}