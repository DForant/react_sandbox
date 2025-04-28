import Duties from './Duties'
import { useGlobalContext } from './context'

const JobInfo = () => {
    const {jobs, currentItem} = useGlobalContext()
    const {company, dates, title, duties} = jobs[currentItem]
    return (
        <article className='job-info'>
            <h3>{title}</h3>
            <span className='job-company'>{company}</span>
            <p className='job-date'>{dates}</p>
            <Duties duties={duties}/>
        </article>
    )
}

export default JobInfo