import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface IconProps {
  backgroundColor: string
  icon: IconDefinition | string
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
        ) : (
          <FontAwesomeIcon
            icon={icon}
            className={'i-ico'}
            style={{ color: '#fff' }}
          />
        )}
      </div>
      <div className="icon-name">{props.name}</div>
    </a>
  )
}
