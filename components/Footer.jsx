import Link from 'next/link'
import {BsFacebook, BsInstagram, BsYoutube, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='contacto' className='flex items-center justify-center mb-24'>
      <div className='px-6 lg:px-20 2xl:px-0 flex w-full flex-col gap-14 mx-auto max-w-[1440px]'>
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href='/' className='mb-10 bold-32 text-[#3F3D56]' >
            De<span className='text-green-600'>Ruta</span>
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">

            <div className="flex flex-col gap-5">
              <h4 className='bold-18 whitespace-nowrap'>Nosotros</h4>
              <ul className='regular-14 flex flex-col gap-4 text-gray-600'>
                <li>Quienes Somos</li>
                <li>Nuestro equipo</li>
                <li>Trabaja con nosotros</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className='bold-18 whitespace-nowrap'>Nuestra Comunidad</h4>
              <ul className='regular-14 flex flex-col gap-4 text-gray-600'>
                <li>Blog</li>
                <li>Preguntas frecuentes</li>
                <li>Newsletter</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className='bold-18 whitespace-nowrap'>Contáctanos</h4>
              <Link href='/' className='flex items-center gap-4 md:flex-col lg:flex-row'>
                  <p className='whitespace-nowrap text-gray-600'>Email:</p>
                  <p className='medium-14 whitespace-nowrap text-[#3F3D56]'>info@deruta.com</p>
              </Link>
              <Link href='/' className='flex items-center gap-4 md:flex-col lg:flex-row'>
                  <p className='whitespace-nowrap text-gray-600'>Teléfono:</p>
                  <p className='medium-14 whitespace-nowrap text-[#3F3D56]'>(334) 246-585</p>
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className='bold-18 whitespace-nowrap'>Nuestras Redes</h4>
              <ul className='regular-14 flex gap-4 text-gray-600'>
                <Link href='/'>
                  <BsFacebook />
                </Link>
                <Link href='/'>
                  <BsInstagram />
                </Link>
                <Link href='/'>
                  <BsYoutube />
                </Link>
                <Link href='/'>
                  <BsTwitter />
                </Link>
              </ul>
            </div>

          </div>
        </div>
        <div className="border bg-gray-600"></div>
        <p className='regular-14 w-full text-center text-gray-600'>&#169;2023 DeRuta | Todos los derechos reservados.</p>
      </div>

    </footer>
  )
}

export default Footer