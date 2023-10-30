import React from 'react'
import Button from './Button'

const Download = () => {
  return (
    <section className='flex items-center justify-center w-full flex-col pb-[100px]'>
      <div className="mx-auto max-w-[1440px] relative flex flex-col justify-between gap-32 w-full overflow-hidden bg-[#292c27] px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-[40px] ">
        <div className="flex w-full flex-col items-center justify-center gap-12">
          <h2 className='bold-32 lg:bold-64 text-center'>Descargá la App ahora</h2>
          <p className='regular-16 text-gray-200'>Disponible en iOS y Android</p>
          <div className='flex w-full items-center justify-center flex-col gap-3 whitespace-nowrap md:flex-row'>
            <Button text='App Store' variant='btn_green' />
            <Button text='Play Store' variant='btn_white_green' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download