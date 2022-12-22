const Projects = () => {
    const projects = [
        {
            title: 
                <div>
                    Definitely Another
                    <div>Blog App</div>
                </div>
            ,
            description: "A blog app wherein blogs posted from your current device are only saved there, other users on other device can't see it.",
            githubLink: 'https://github.com/seanamir30/another-blog',
            externalLink: 'https://anotherblogapp.seancafe.com/',
        }
    ]
    
    return (
        <section className="bg-neutral-100 lg:px-56 md:px-7 py-7 pb-32">
            <h2 className="text-5xl md:py-11 text-center md:p-0 px-4 pb-7">Here are some projects I&apos;ve worked on</h2>
            <div className="w-full flex items-center justify-center">
            <div className="flex flex-col w-full gap-11">
                {projects.map((project, index)=>(
                    <div key={index} className='flex flex-col justify-between h-96 bg-white shadow-lg mx-2 p-6'>
                        <div className="flex flex-col gap-4">
                            {project.title}
                            {project.description}
                        </div>
                        <div className="flex gap-2">
                            {project.githubLink &&
                                <a href={project.githubLink} target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"/>
                                </a>
                            }
                            {project.externalLink &&
                                <a href={project.externalLink} target="_blank" rel="noreferrer">
                                    <i className="fas fa-external-link-alt"/>
                                </a>
                            }
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default Projects