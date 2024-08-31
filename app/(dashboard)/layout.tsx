import Header from '@/components/header';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const DashBoardlayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className='px-4 lg:px-14'>
                {children}
            </main>

        </>
    )
}

export default DashBoardlayout;