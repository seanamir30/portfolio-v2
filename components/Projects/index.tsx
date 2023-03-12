import Access from "./ProjectCards/Access"
import DefinitelyAnotherBlogApp from "./ProjectCards/DefinitelyAnotherBlogApp"
import Qtime from "./ProjectCards/Qtime"
import RealSuite from "./ProjectCards/RealSuite"
import RealWB from "./ProjectCards/RealWB"
import ComingSoon from "./ProjectCards/CTA"

const Projects = () => {
    const projects = [
        {
            Component: DefinitelyAnotherBlogApp,
            key: 'DefinitelyAnotherBlogApp'
        },
        {
            Component: Access,
            key: 'Access'
        },
        {
            Component: Qtime,
            key: 'Qtime'
        },
        {
            Component: RealSuite,
            key: 'RealSuite'
        },
        {
            Component: RealWB,
            key: 'RealWB'
        },
        {
            Component: ComingSoon,
            key: 'CommingSoon'
        },
    ]
    
    return (
        <section className="bg-neutral-100 dark:bg-neutral-800 dark:text-white lg:px-56 md:px-7 pb-32">
            <h2 className="text-5xl md:py-20 text-center px-4 py-20">Here are some projects I&apos;ve worked on</h2>
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-wrap w-full gap-4 lg:max-w-screen-lg">
                    {projects.map((Project, index)=>(
                        <Project.Component key={Project.key}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects