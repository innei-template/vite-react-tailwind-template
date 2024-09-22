// Tremor Button [v0.2.0]

import { Slot } from '@radix-ui/react-slot'
import { RiLoader2Fill } from '@remixicon/react'
import { m, motion } from 'framer-motion'
import React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cx, focusRing } from '~/lib/cn'

const buttonVariants = tv({
  base: [
    'relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-center font-medium transition-all duration-100 ease-in-out',
    'disabled:pointer-events-none',
    focusRing,
  ],
  variants: {
    variant: {
      primary: [
        'border-transparent',
        'text-white dark:text-white',
        'bg-accent dark:bg-accent',
        'hover:bg-accent/90 dark:hover:bg-accent/90',
        'disabled:bg-accent/50 disabled:text-white/70',
        'disabled:dark:bg-accent/30 disabled:dark:text-white/50',
      ],
      secondary: [
        'border border-gray-200 dark:border-gray-700',
        'text-gray-700 dark:text-gray-200',
        'bg-gray-50 dark:bg-gray-800',
        'hover:bg-gray-100 dark:hover:bg-gray-750',
        'disabled:bg-gray-50 disabled:text-gray-400',
        'disabled:dark:bg-gray-800 disabled:dark:text-gray-500',
      ],
      light: [
        'shadow-none',
        'border-transparent',
        'text-gray-900 dark:text-gray-50',
        'bg-gray-200 dark:bg-gray-900',
        'hover:bg-gray-300/70 dark:hover:bg-gray-800/80',
        'disabled:bg-gray-100 disabled:text-gray-400',
        'disabled:dark:bg-gray-800 disabled:dark:text-gray-600',
      ],
      ghost: [
        'shadow-none',
        'border-transparent',
        'text-gray-900 dark:text-gray-50',
        'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/80',
        'disabled:text-gray-400',
        'disabled:dark:text-gray-600',
      ],
      destructive: [
        'text-white',
        'border-transparent',
        'bg-red-600 dark:bg-red-700',
        'hover:bg-red-700 dark:hover:bg-red-600',
        'disabled:bg-red-300 disabled:text-white',
        'disabled:dark:bg-red-950 disabled:dark:text-red-400',
      ],
    },
    size: {
      xs: 'h-6 px-2 text-xs',
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-11 px-8 text-base',
      xl: 'h-12 px-8 text-base',
    },
    flat: {
      true: 'shadow-none',
      false: 'shadow-sm',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
    flat: false,
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      size,
      flat,
      children,
      ...props
    }: ButtonProps,
    forwardedRef,
  ) => {
    const Component = asChild ? Slot : m.button
    return (
      // @ts-expect-error
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant, size, flat }), className)}
        disabled={disabled || isLoading}
        data-tremor-id="tremor-raw"
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none inline-flex items-center justify-center gap-1.5">
            <RiLoader2Fill
              className={cx(
                'shrink-0 animate-spin',
                size === 'xs' || size === 'sm' ? 'size-3' : 'size-4',
              )}
              aria-hidden="true"
            />
            <span className="sr-only">{loadingText ?? 'Loading'}</span>
            <span className="inline-block">{loadingText ?? children}</span>
          </span>
        ) : (
          children
        )}
      </Component>
    )
  },
)

Button.displayName = 'Button'

export { Button, type ButtonProps, buttonVariants }
