import SkillSet from "./SkillSet"

const Hero = () => {
    const skills = ['Python', 'Django', 'Selenium', 'Ruby', 'Rails', 'React', 'NextJs', 'NodeJs', 'Javascript' ,'Typescript' , 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Adobe Photoshop', 'Blender']
    const githubLink = "https://github.com/seanamir30"
    const linkedInLink = "https://www.linkedin.com/in/seancafe/"
    const email = "hi@seancafe.com"
    const displayName = "Sean"

    return (
        <header className="flex justify-center dark:bg-slate-900 dark:text-orange-500">
            <div className="py-16 lg:py-28 flex flex-col w-full justify-center items-center lg:max-w-screen-md">
                <p className="lg:text-lg">Hey there!</p>
                <p className="lg:text-6xl text-4xl font-thin w-fit">I&apos;m</p>
                <div className="flex items-center lg:items-end lg:flex-row flex-col-reverse">
                    <div className="flex lg:flex-col flex-row">
                        {githubLink && <a className="p-1" href={githubLink} target="blank_"><i className="fab fa-github"></i></a>}
                        {linkedInLink && <a className="p-1" href={linkedInLink}><i className="fab fa-lg fa-linkedin"></i></a>}
                    </div>
                    <h1 className="text-[9rem] md:text-[17rem] md:leading-[16rem] font-black w-fit lg:mx-10">{displayName}</h1>
                </div>
                {skills &&
                    <SkillSet skills={skills}/>
                }
                <div className="mt-6">
                    <a className="transition text-center w-full hover:underline" href="mailto:hi@seancafe.com">{email}</a>
                </div>
            </div>
        </header>
    )
  }

export default Hero