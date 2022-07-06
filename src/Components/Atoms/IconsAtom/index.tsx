import React from 'react'

export interface IconsProps {
    source?: string,
    className?: string,
    onClick?: ()=>void;
    style?: React.CSSProperties;
    height: string;
    width: string;
}

export const Icons = (props:any) => {
let {source, onClick, style, className} = props

return (

    <img src={source} alt="Logo" className={className} onClick={onClick} style={style} height={props.height}
    width={props.width} />
)
}

