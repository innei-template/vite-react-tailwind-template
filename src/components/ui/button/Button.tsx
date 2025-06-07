// Tremor Button [v0.2.0]

import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cx, focusRing } from '~/lib/cn'

const buttonVariants = tv({
  base: [
    // base - 调整圆角和间距
    'relative inline-flex items-center justify-center whitespace-nowrap rounded-lg border px-4 py-2 text-center text-sm font-medium shadow-sm transition-all duration-200 ease-out',
    // disabled
    'disabled:pointer-events-none disabled:shadow-none disabled:bg-control-disabled disabled:text-text-secondary',
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      primary: [
        // border
        '!border-transparent',
        // text color
        'text-accent-foreground',
        'bg-accent',
        // active state
        'active:scale-[0.98]',
      ],
      secondary: [
        // border - 更细的边框
        'border-gray-200 dark:border-gray-700',
        // text color
        'text-gray-900 dark:text-gray-100',
        // background color - 更柔和的背景
        'bg-white dark:bg-gray-900',
        // hover color - 微妙的悬停效果
        'hover:bg-gray-50 hover:border-gray-300 shadow-none hover:shadow-sm dark:hover:bg-gray-800 dark:hover:border-gray-600',
        // active state
        'active:bg-gray-100 active:scale-[0.98] dark:active:bg-gray-750',
        // disabled
        'disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-100',
        'dark:disabled:bg-gray-800 dark:disabled:text-gray-500 dark:disabled:border-gray-700',
      ],
      light: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // text color
        'text-gray-900 dark:text-gray-100',
        // background color - 更柔和的灰色
        'bg-gray-100 dark:bg-gray-800',
        // hover color
        'hover:bg-gray-150 hover:shadow-sm dark:hover:bg-gray-750',
        // active state
        'active:bg-gray-200 active:scale-[0.98] dark:active:bg-gray-700',
        // disabled
        'disabled:bg-gray-75 disabled:text-gray-400',
        'dark:disabled:bg-gray-850 dark:disabled:text-gray-500',
      ],
      ghost: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // text color
        'text-gray-700 dark:text-gray-300',
        // hover color - 非常微妙的悬停效果
        'bg-transparent hover:bg-gray-100/80 hover:text-gray-900 dark:hover:bg-gray-800/60 dark:hover:text-gray-100',
        // active state
        'active:bg-gray-150 active:scale-[0.98] dark:active:bg-gray-750',
        // disabled
        'disabled:text-gray-400',
        'dark:disabled:text-gray-600',
      ],
      destructive: [
        // text color
        'text-white',
        // border
        'border-transparent',
        // background color - Apple 风格的红色
        'bg-red-500 dark:bg-red-600',
        // hover color
        'hover:bg-red-600 hover:shadow-md dark:hover:bg-red-700',
        // active state
        'active:bg-red-700 active:scale-[0.98] dark:active:bg-red-800',
        // disabled
        'disabled:bg-red-300 disabled:text-white',
        'dark:disabled:bg-red-800 dark:disabled:text-red-200',
      ],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Button = ({
  ref: forwardedRef,
  asChild,
  isLoading = false,
  loadingText,
  className,
  disabled,
  variant,
  children,
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      ref={forwardedRef}
      className={cx(buttonVariants({ variant }), className)}
      disabled={disabled || isLoading}
      tremor-id="tremor-raw"
      {...props}
    >
      {isLoading ? (
        <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
          <i
            className="size-4 shrink-0 animate-spin i-mingcute-loading-3-line"
            aria-hidden="true"
          />
          <span className="sr-only">{loadingText ?? 'Loading'}</span>
          {loadingText ?? children}
        </span>
      ) : (
        children
      )}
    </Component>
  )
}

Button.displayName = 'Button'

export { Button, type ButtonProps }
