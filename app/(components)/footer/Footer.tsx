import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="my-8">
            <div className="pt-16 px-8 border-t-2 border-black border-solid  flex flex-col items-center justify-center">
                <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
                <div className="flex flex-col md:flex-row items-center">
                    Habib Ullah <span className="text-primary px-2 text-2xl">&#9825;</span>
                    <Link href={""} className="underline underline-offset-2">A Full Stack web developer</Link>
                </div>
                <Link href={""} className="underline underline-offset-4">Say Hello</Link>
            </div>
        </footer>
    )
}

export default Footer