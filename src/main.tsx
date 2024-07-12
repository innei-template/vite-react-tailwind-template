import { createRoot } from 'react-dom/client'

import './styles/index.css'

import { ClickToComponent } from 'click-to-react-component'
import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './router'

const $container = document.querySelector('#root') as HTMLElement

createRoot($container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ClickToComponent />
  </React.StrictMode>,
)
