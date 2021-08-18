import React, { FC } from 'react'

export interface IconProps {
  backgroundColor: string
  icon: string | null
  name: string
  url: string
}

export const Icon: FC<IconProps> = (props) => {
  const { icon, backgroundColor } = props
  return (
    <a className={'icon-wrap'} href={props.url} target={'_blank'}>
      <div className="icon" style={{ backgroundColor }}>
        {typeof icon === 'string' ? (
          <div
            className={'iconfont' + ' ' + icon + ' i-ico'}
            style={{ color: '#fff' }}
          ></div>
        ) : null}
      </div>
      <div className="icon-name">{props.name}</div>
    </a>
  )
}
