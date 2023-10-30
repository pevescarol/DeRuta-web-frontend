import Link from 'next/link'
import Button from './Button'
import {HiPlay, HiX} from 'react-icons/hi'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='w-full h-[90vh] relative' >
      <Image src='/forest-bg-l.png' width={1440} height={300} alt='' className=' mx-auto w-full h-full object-cover object-center' />
      
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[30%] w-full md:-[50%] max-w-[600px] h-full flex flex-col p-4'>
          <h1 className='text-[#3F3D56] bold-40 md:bold-52 lg:bold-74'>Tu Aventura,<br /> Nuestra Ruta</h1>
          <p className="regular-16 mt-6 text-gray-600 xl:max-w-[520px]">
            Descubre rutas épicas, obtén estadísticas detalladas, y conecta con una comunidad 
            apasionada por el ciclismo. <br /> ¡Tu aventura comienza aquí!
          </p>

          <button className='mt-10 w-1/2 bg-green-600 px-8 py-4 text-white hover:bg-[#3F3D56] rounded-full flex items-center justify-center'>
            <Link href='/' className='flex gap-2 items-center'>
              <HiPlay className='text-xl' /> <span className='bold-16'>Ver demo</span>
            </Link>
          </button>
        </div>
      </div>
      
    </section>
  )
}

export default Hero