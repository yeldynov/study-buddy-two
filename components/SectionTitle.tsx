import React from 'react'

interface SectionTitleProps {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='flex items-center gap-2 py-10 lg:p-20'>
      <span className='h-[4px] w-10 lg:w-[179px] bg-lime-500'></span>
      <h2 className='font-medium text-[38px] relative -top-[5px] font-jura'>
        {title}
      </h2>
      <span className='h-[4px] flex-1 bg-lime-500'></span>
    </div>
  )
}

export default SectionTitle
