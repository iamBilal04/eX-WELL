import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (

  <VerticalTimelineElement 
    contentStyle={{ background: '#7b8cea', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt="Foto"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
  <div>
    <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-black text-[17px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
  </div>
  </VerticalTimelineElement>
)

const Working = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>How our product</p>
      <h2 className={styles.sectionHeadText}>Works</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#58E186">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Working, "work")