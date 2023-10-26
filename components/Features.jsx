import Image from 'next/image'
import phone1 from '../public/p1.png'

import {FEATURES} from '@/constants/constants'
import FeatureItem from './FeatureItem'

const Features = () => {
  return (
    <section className='flex flex-col items-center justify-center overflow-hidden py-24'>
      <div className="flex mx-auto max-w-[1440px] px-6 lg:px-20 2xl:px-0 relative w-full items-center flex-col lg:flex-row gap-5">
        <div className='flex w-full flex-col lg:w-[50%] xl:w-[60%]'>
          <div className="relative">
            <h2 className='bold-40 lg:bold-64'>Características</h2>
          </div>

          <ul className='mt-14 grid gap-10 md:grid-cols-2 lg:gap-20'>
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
        
        <div className="flex flex-1 lg:min-h-[900px] mt-16">
          <Image 
            src={phone1} 
            alt='phone app' 
            width={550} 
            height={650} 
            className='w-full h-full md:left-16 md:top-[20%] relative' 
          />
        </div>

        

      </div>
    </section>
  )
}

export default Features