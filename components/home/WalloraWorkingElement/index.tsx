import React from 'react'

export interface WalloraWorkingElementProps {
  title: string
  summary: string
  imgSrc: string
  imgAlt: string
  rowReverse?: true
}

const WalloraWorkingElement: React.FC<WalloraWorkingElementProps> = (props) => {
  const { title, summary, imgSrc, imgAlt, rowReverse } = props
  return (
    <div className={`flex flex-col py-16 ${rowReverse ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="flex-1 p-4 lg:p-8 text-[#8a8888] self-center">
        <h3 className="text-2xl lg:text-4xl ">{title}</h3>
        <p className="m-0 pt-2 text-base lg:pt-4 lg:text-xl">{summary}</p>
      </div>
      <div className="flex-2">
        <img className="w-full shadow-img" src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  )
}

export default WalloraWorkingElement
