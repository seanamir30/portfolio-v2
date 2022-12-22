
const Journey = () => {

    const timelineData  = [
        {
            description: 'First started learning Javascript basics',
            date: '2018'
        },
        {
            description: 'Enrolled at Pamantasan ng Lungsod ng Maynila taking BS Information and Technology',
            date: '2019'
        },
        {
            description: 'Enrolled at Avion to study Ruby on Rails and React',
            date: '2021-2022'
        },
        {
            description: 'Had my first job as a Software Engineer at Oqulo',
            date: '2022-Present'
        }
    ]
    
    return (
        <>
        <div className="timeline-container px-4">
            {timelineData.map((data, index)=>{
                return(
                  <div key={index} className="timeline-item">
                    <div className="timeline-item-content">
                        <time>{data.date}</time>
                        <p>{data.description}</p>
                        <span className="circle" />
                    </div>
                </div>
                )
            })}
        </div>
        <div className="pb-40"/>
        </>
    )
  }

  export default Journey