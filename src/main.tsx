import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = document.getElementById('root')
const Root: FC = () => {
  return <span className="text-3xl">Hello, world</span>
}
ReactDOM.render(<Root />, App)
