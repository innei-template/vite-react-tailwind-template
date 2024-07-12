import { LazyMotion, MotionConfig } from 'framer-motion'
import { Provider } from 'jotai'
import type { FC, PropsWithChildren } from 'react'

import { Toaster } from '~/components/ui/sonner'
import { jotaiStore } from '~/utils/jotai'

import { StableRouterProvider } from './stable-router-provider'

const loadFeatures = () =>
  import('../framer-lazy-feature').then((res) => res.default)
export const RootProviders: FC<PropsWithChildren> = ({ children }) => (
  <LazyMotion features={loadFeatures} strict key="framer">
    <MotionConfig
      transition={{
        type: 'tween',
        duration: 0.15,
        ease: 'easeInOut',
      }}
    >
      <Provider store={jotaiStore}>
        <StableRouterProvider />
        {children}
      </Provider>
    </MotionConfig>
    <Toaster />
  </LazyMotion>
)
