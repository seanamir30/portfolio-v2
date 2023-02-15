import clsx from "clsx"
import Image from "next/image"

const Projects = () => {
    const projects = [
        {
            title: 
                <div className="text-5xl">
                    Definitely Another
                    <div className="text-orange-400">Blog App</div>
                </div>
            ,
            description: "A blog app wherein blogs posted from your current device are only saved there, other users on other device can't see it.",
            githubLink: 'https://github.com/seanamir30/another-blog',
            externalLink: 'https://anotherblogapp.seancafe.com/',
            background: '#0f172a',
            textColor: "#ffffff",
        },{
            title: 
            <div className="flex items-center justify-center my-2">
                <Image loader={()=>"https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Faccess-logo.svg?alt=media&token=3376c514-f99d-4210-8f40-54dc43b072df"} src="https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Faccess-logo.svg?alt=media&token=3376c514-f99d-4210-8f40-54dc43b072df" alt='access' width={195} height={64}/>
            </div>
            ,
            description: "Use ACCESS to create stunning, one of a kind, digital presentations that will bring your brand to life and propel you ahead of the competition. The goal of ACCESS is to help you secure more listings.",
            externalLink: 'https://app.access.com/',
            background: "#000000",
            textColor: "#ffffff",
            isTextJustified: true,
        },{
            title: 
                <div>
                    <Image loader={()=>'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Fqtime-logo.svg?alt=media&token=cd75174a-7c81-4ead-bf20-fbfe8a51b59b'} src='https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Fqtime-logo.svg?alt=media&token=cd75174a-7c81-4ead-bf20-fbfe8a51b59b' alt='qtime' width={195} height={64}/>
                </div>
            ,
            description: "A blog app wherein blogs posted from your current device are only saved there, other users on other device can't see it.",
            githubLink: 'https://github.com/seanamir30/another-blog',
            externalLink: 'https://anotherblogapp.seancafe.com/',
            background: "#ECF6F7",
            textColor: "#000000",
            isTextCentered: true,
        },
    ]
    
    return (
        <section className="bg-neutral-100 dark:bg-neutral-800 dark:text-white lg:px-56 md:px-7 pb-32">
            <h2 className="text-5xl md:py-20 text-center px-4 py-20">Here are some projects I&apos;ve worked on</h2>
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-wrap w-full gap-4 lg:max-w-screen-lg">
                    {projects.map((project, index)=>(
                        <div key={index} style={{background: project.background, color: project.textColor}} className='flex flex-col rounded-md justify-between h-96 bg-white shadow-lg mx-4 md:mx-2 xl:mx-2 p-6 w-full md:w-[calc(50%-27px)] lg:w-[calc(100%/3-27px)] relative'>
                            <div className={clsx("flex flex-col gap-4 items", {
                            'text-justify': project.isTextJustified,
                            'text-center': project.isTextCentered,
                            })}>
                                <div className="min-h-[8.5rem] flex justify-center items-center">
                                    {project.title}
                                </div>
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