import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <div className="absolute h-full w-full flex items-center justify-center bg-gray-200">
      <span className="text-3xl">Hello, world</span>
    </div>
  )
}
ReactDOM.render(<Root />, App)
