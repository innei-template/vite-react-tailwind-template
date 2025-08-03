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
    'disabled:pointer-events-none disabled:shadow-none disabled:bg-disabledControl disabled:text-disabledText',
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      primary: [
        // border
        '!border-transparent',
        // text color
        'text-background',
        'bg-accent',
        // hover state
        'hover:bg-accent/90',
        // active state
        'active:scale-[0.98]',
      ],
      secondary: [
        // border
        'border-border',
        // text color
        'text-text',
        // background color
        'bg-background',
        // hover color
        'hover:bg-fill hover:border-border/70 shadow-none hover:shadow-sm',
        // active state
        'active:bg-fill-secondary active:scale-[0.98]',
        // disabled
        'disabled:bg-fill disabled:text-disabledText disabled:border-border',
      ],
      light: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // text color
        'text-text',
        // background color
        'bg-fill',
        // hover color
        'hover:bg-fill-secondary hover:shadow-sm',
        // active state
        'active:bg-fill-tertiary active:scale-[0.98]',
        // disabled
        'disabled:bg-fill disabled:text-disabledText',
      ],
      ghost: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // text color
        'text-placeholderText',
        // hover color
        'bg-transparent hover:bg-fill/80 hover:text-text',
        // active state
        'active:bg-fill active:scale-[0.98]',
        // disabled
        'disabled:text-disabledText',
      ],
      destructive: [
        // text color
        'text-background',
        // border
        'border-transparent',
        // background color
        'bg-red',
        // hover color
        'hover:bg-red/90 hover:shadow-md',
        // active state
        'active:bg-red/80 active:scale-[0.98]',
        // disabled
        'disabled:bg-red/50 disabled:text-background/70',
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
