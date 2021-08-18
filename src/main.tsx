import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Icon } from './components/Icon'
import { UrlList } from './config'
import { SearchInput } from './components/SearchInput'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <div className={'root'}>
      <section className={'search'}>
        <SearchInput />
      </section>
      <div className="icons-wrap">
        {UrlList.map((item, i) => (
          <Icon
            {...{
              key: i,
              icon: item.icon,
              name: item.name,
              backgroundColor: item.backgroundColor,
              url: item.url,
            }}
          />
        ))}
      </div>
    </div>
  )
}
ReactDOM.render(<Root />, App)
