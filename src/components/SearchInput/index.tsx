import React, { FC, useState } from 'react'

export enum SearchEngine {
  Google,
  Bing,
}

export const SearchInput: FC = (props) => {
  const [value, setValue] = useState('')
  const [engine, setEngine] = useState<SearchEngine>(SearchEngine.Google)
  const renderPrefixIcon = () => {
    switch (engine) {
      case SearchEngine.Bing: {
        return <div className="iconfont icon-bing"></div>
      }
      case SearchEngine.Google: {
        return null
      }
    }
  }

  const getSearchUrl = (keyword: string) => {
    switch (engine) {
      case SearchEngine.Bing: {
      }
      case SearchEngine.Google: {
        return `https://google.com/?q=${keyword}`
      }
    }
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keycode = e.keyCode
    if (keycode === 13) {
      const $a = document.createElement('a')
      $a.href = getSearchUrl(value)
      $a.target = '_blank'
      $a.click()
      $a.remove()
    }
  }

  return (
    <div className="input-bar-wrap">
      <div className="prefix-icon">{renderPrefixIcon()}</div>

      <input
        type={'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={'input-bar'}
        onKeyDown={handleSearch}
      />
      <div className="search-icon">
        {/* <FontAwesomeIcon icon={faSearch} /> */}
      </div>
    </div>
  )
}
