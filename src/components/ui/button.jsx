import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300',
    {
        variants: {
            variant: {
                default: 'bg-indigo-500 hover:shadow-3xl',
                rose: 'bg-rose-500 hover:shadow-3xl',
                teal: 'bg-teal-500 text-teal-950 hover:shadow-3xl',
                ghost: '',
            },
            size: {
                default: 'h-max px-8 py-4 lg:px-10 lg:py-5 lg:text-lg',
                sm: 'h-max px-8 py-3 text-base',
                md: 'h-max px-10 py-4 text-base',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
