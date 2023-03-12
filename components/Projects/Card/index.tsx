import React from 'react'
import clsx from 'clsx';

interface ContainerPropType {
    children: React.ReactNode
    className?: string;
}

const Container = ({children, className}: ContainerPropType) => {
  return (
    <div className={clsx('flex flex-col rounded-md justify-between h-96 shadow-lg w-full md:w-[calc(50%-1.6875rem)] lg:w-[calc(100%/3-1.6875rem)] mx-4 md:m-2 p-6 gap-4 transition hover:scale-105', className)}>
        {children}
    </div>
  )
}

interface FooterPropType {
    github?: string
    external?: string
}

const Footer = ({github, external}: FooterPropType) => {
    return (
        <div className="flex gap-4">
            {github &&
                <a href={github} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"/>
                </a>
            }
            {external &&
                <a href={external} target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"/>
                </a>
            }
        </div>
    )
}

const Card = {
    Container,
    Footer
}

export default Card