import React from 'react'

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  title: string
  description: string
  onViewDetails?: () => void
  onClose?: () => void
}

export function Alert ({title, description, onClose = () => {}, onViewDetails}: Props) {
  return (
    <div className='
      flex
      flex-col
      m-2
      border-1
      border-solid
      border-[#FF8A4C]
      rounded-md
      p-4
      gap-3
      bg-[#FDF2F2]
      text-[#9E1C15]
    '>
      <header className='
        relative
        flex
        flex-row
        justify-items-start
        items-center
      '>
        CheckCircle icon
        <h3 className='font-semibold ml-1.5 pr-5'>{title}</h3>
        <button className='
          absolute
          top-0
          right-0
          flex
          flex-col
          justify-start
          hover:text-amber-500'
          onClick={onClose}
        >
          Close Icon
        </button>
      </header>
      <p>
        {description}
      </p>
      {onViewDetails && <button className='
        w-fit
        rounded-lg
        px-3
        py-2
        flex
        flex-row
        items-center
        gap-2
        text-xs
        text-white
        bg-[#DE2C18]
        hover:bg-amber-500'
        onClick={onViewDetails}
      >
        Eye icon
        <span>View more</span>
      </button>}
    </div>
  )
}