import {FaMap} from 'react-icons/fa'

const BlogItem = ({ backgroundImage, title, text}) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-[50px] 2xl:rounded-[50px]`}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flex items-center justify-center gap-4'>
          <div className='rounded-full bg-green-600 p-4'>
            <FaMap className='text-white w-8 h-8' />
          </div>
        
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='medium-14 text-white'>{text}</p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default BlogItem