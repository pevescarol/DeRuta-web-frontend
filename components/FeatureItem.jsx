import {BsArrowRightCircleFill} from 'react-icons/bs'

const FeatureItem = ({title, description}) => {
  return (
    <li className="flex w-full flex-1 items-start gap-2">
      <BsArrowRightCircleFill className='text-[44px] text-green-600' />
      <div>
        <h2 className="bold-20 lg:bold-24 capitalize">{title}</h2>
        <p className="regular-16 mt-3 text-gray-500 ">{description}</p>
      </div>
      
    </li>
  )
}

export default FeatureItem