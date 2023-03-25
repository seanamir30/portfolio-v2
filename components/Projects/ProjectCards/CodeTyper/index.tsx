import React from 'react'
import Card from '../../Card'

const CodeTyper = () => {
    return (
        <Card.Container className='bg-neutral-900'>
            <div className='flex flex-col gap-6'>
                <h1 className="text-4xl text-white font-bold h-40 flex justify-center items-center"><span className="text-green-500">Code</span>Typer</h1>
                <p className='text-center'>
                    A typing test but with programming languages instead of just random words. Probably for programmers
                </p>
            </div>
            <Card.Footer external='https://codetyper.seancafe.com/' github='https://github.com/seanamir30/codetyper'/>
        </Card.Container>
    )
}

export default CodeTyper