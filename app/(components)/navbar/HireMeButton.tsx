import React from 'react'
import { CircularText } from './CircularText'
import Link from 'next/link'

const HireMeButton = () => {
    return (
        <div className="relative">
            <div className="w-24 md:w-32  h-auto flex items-center md:relative">
                <CircularText
                    className={"fill-dark animate-spin-slow dark:fill-light"}
                />
                <Link
                    href={"mailto:habibsujan007@gmail.com"}
                    className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-16 h-16 rounded-full hover:bg-light hover:text-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light md:w-18 md:h-18 text-xs"
                >
                    Hire Me
                </Link>
            </div>
        </div>
    )
}

export default HireMeButton