import { QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, MotionConfig } from 'framer-motion'
import { Provider } from 'jotai'
import type { FC, PropsWithChildren } from 'react'

import { Toaster } from '~/components/ui/sonner'
import { jotaiStore } from '~/lib/jotai'
import { queryClient } from '~/lib/query-client'

import { SettingSync } from './setting-sync'
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
          <SettingSync />
          {children}
        </Provider>
      </QueryClientProvider>
    </MotionConfig>
    <Toaster />
  </LazyMotion>
)
