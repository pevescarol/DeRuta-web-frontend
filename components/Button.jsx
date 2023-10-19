import Link from 'next/link'

const Button = ({text, variant}) => {
  return (
    <button  className={`rounded-full ${variant}`}>
      <Link href='/' className='bold-16 whitespace-nowrap cursor-pointer uppercase'>{text}</Link>
    </button>
  )
}

export default Button