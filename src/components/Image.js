import React from "react"
import Image from "next/image"

const CustomImage = (props) => {
  if (process.env.production_type === "static") {
    return (
      <img
      
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={props.className}
        resizeMode= 'contain'
      />
    )
  } else {
    return <Image {...props} />
  }
}
export default CustomImage
