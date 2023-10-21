import Image from 'next/image'
import {HiX} from 'react-icons/hi'

const Stats = () => {
  return (
    <section className='flex items-center flex-col'>
      <div className='px-6 lg:px-20 2xl:px-0 mx-auto max-w-[1440px] w-full pb-24'>
        <p className='uppercase regular-16 -mt-1 mb-3 text-green-600'>Te mostramos tus avances</p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-32 lg:bold-64 xl:max-w-[390px]'>Revisa tus estadísticas</h2>
          <p className='regular-16 text-gray-500 xl:max-w-[520px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio alias ipsum error. Qui optio dolores, commodi nesciunt dolor excepturi sapiente molestiae sed, facilis enim consequuntur nihil! Vero debitis est alias!</p>
        </div>
      </div>

      <div className='flex items-center justify-center mx-auto max-w-[1440px] relative w-full'>
        <Image 
          src='/stats.jpg' 
          alt='cycling' 
          width={1440} 
          height={580} 
          className='w-full object-cover object-center 2xl:rounded-[40px] h-[580px]' />

        <div className='absolute flex flex-col w-[268px] bg-white py-8 pl-5 pr-7 gap-3 rounded-2xl border shadow-md md:left-[5%] lg:top-20'>
          <div className="flex flex-col">
            <div className="flex justify-between w-full">
              <p className="regular-16 text-gray-500">Ubicación</p>
              <HiX />
            </div>
            <p className="bold-18">San Luis</p>
          </div>

            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-500">Distancia</p>
                <p className="bold-18">173.28 km</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-500">Elevación</p>
                <p className="bold-18">1.040 m</p>
              </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Stats