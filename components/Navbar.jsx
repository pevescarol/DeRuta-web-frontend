import Link from 'next/link'
import {NAV_LINKS} from '../constants/constants'
import Button from './Button'
import {HiMenuAlt3} from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav className='mx-auto max-w-[1440px] flex items-center justify-between px-6 lg:px-20 relative z-30 py-5'>
      <Link href='/' className='bold-32 text-gray-900'>
        De<span className='text-green-600'>Ruta</span>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-500 flex items-center justify-center cursor-pointer transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex lg:items-center lg:justify-center hidden">
        <Button text='Descargá la app' variant='btn_dark_green' />
      </div>

      <HiMenuAlt3 className='inline-block cursor-pointer bold-32 lg:hidden' />

    </nav>
  )
}

export default Navbar