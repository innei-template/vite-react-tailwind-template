import { QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, MotionConfig } from 'framer-motion'
import { Provider } from 'jotai'
import type { FC, PropsWithChildren } from 'react'

import { Toaster } from '~/components/ui/sonner'
import { jotaiStore } from '~/utils/jotai'
import { queryClient } from '~/utils/query-client'

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
      <QueryClientProvider client={queryClient}>
        <Provider store={jotaiStore}>
          <StableRouterProvider />
          {children}
        </Provider>
      </QueryClientProvider>
    </MotionConfig>
    <Toaster />
  </LazyMotion>
)
