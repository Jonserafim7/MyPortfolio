import * as React from 'react'

import { cn } from '@/lib/utils'

const Card = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'relative flex h-full w-full flex-col items-start justify-center overflow-hidden rounded-3xl border before:absolute before:inset-0 before:-z-10 shadow-3xl border-neutral-800 p-8 before:backdrop-blur-sm md:p-14 2xl:p-20',
            className
        )}
        {...props}
    />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'font-space text-4xl font-medium md:text-5xl xl:text-6xl',
            className
        )}
        {...props}
    />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            'text-sm text-neutral-500 dark:text-neutral-400',
            className
        )}
        {...props}
    />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-2', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex items-center mt-4 lg:mt-8', className)}
        {...props}
    />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
