import React from "react"
import clsx from "clsx"

type SkillSetProps = {
   skills: string[]
}

const SkillSet = ({skills}: SkillSetProps) => {
    const [activeSkill, setActiveSkill] = React.useState(0)
    const [isHoverActive, setHoverActive] = React.useState(false)

    React.useEffect(()=>{
        const activeSkillRandomizer = setInterval(()=> {if(!isHoverActive)setActiveSkill(Math.floor(Math.random() * skills.length))},3000);
        return () => clearInterval(activeSkillRandomizer)
    },[isHoverActive]);

    const handleSkillHover = (skillIndex: number) => {
        setActiveSkill(skillIndex)
        setHoverActive(true)
    }


    return (
        <div className="flex flex-wrap justify-center mt-6 px-3">
            {skills.map((skill, index) =>
                <div key={index} className={clsx(`transition-all duration-500 border-solid border m-1 cursor-default border-neutral-800 rounded-full text-center w-fit h-fit px-2`, {
                    'bg-neutral-800 text-white shadow-md -translate-y-1' : index===activeSkill
                })} onMouseEnter={()=>{handleSkillHover(index)}} onMouseLeave={()=>setHoverActive(false)}>{skill}</div>
            )}
        </div>
    )
}

export default SkillSet