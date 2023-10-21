import Link from 'next/link'
import BlogItem from './BlogItem'
import {FaArrowRight} from 'react-icons/fa'

const Blog = () => {
  return (
    <section className='2xl:mx-auto 2xl:max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <BlogItem backgroundImage='bg-blog-item' title='Parque Nacional Ciervo de los Pantanos' text='Otamendi, Campana' />
        <BlogItem backgroundImage='bg-blog-item-2' title='Areco Camping' text='San Antonio de Areco' />
      </div>

      <div className='flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-600 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-[30px] xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-xl '>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>¿No sabes a dónde ir?</strong> <br />Descubre las experiencias de otros ciclistas.
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            La comunidad comparte sus experiencias, destinos, que rutas seguir, consejos, etc.
            En nuestro Blog encontrarás distintas aventuras por recorrer.
          </p>

          <button className='mt-5 text-white'>
            <Link href='/' className='flex items-center gap-x-2'>
              <span className=' bold-18'>Ir al Blog</span> <FaArrowRight />
            </Link>
          </button>

        </div>
      </div>

    </section>
  )
}

export default Blog