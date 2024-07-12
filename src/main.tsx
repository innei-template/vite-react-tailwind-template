import type { FC } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <div className="absolute h-full w-full flex items-center justify-center">
      <i className="i-mingcute-hand-fill size-5 mr-2" />
      <span className="text-3xl">Hello, world</span>
    </div>
  )
}

createRoot(App!).render(<Root />)
