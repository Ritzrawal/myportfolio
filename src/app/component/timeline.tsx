import ExperienceCard from './experience-card';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  achievements: string;
  position: 'left' | 'right';
}

interface WorkExperienceTimelineProps {
  experiences: Experience[];
}

export default function WorkExperienceTimeline({
  experiences,
}: WorkExperienceTimelineProps) {
  return (
    <div className='relative'>
      {/* Timeline line */}
      <div className='absolute left-1/2 lg:left-1/2 md:left-1/2 sm:-left-2 transform -translate-x-1/2 h-full w-0.5 bg-blue-300 '></div>

      <div className='relative'>
        {experiences.map((experience) => (
          <div key={experience.id} className='mb-12 relative'>
            {/* Timeline dot */}
            <div className='absolute left-1/2 top-1/2 sm:-left-2 lg:left-1/2 md:left-1/2 transform -translate-x-1/3 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md z-10'></div>

            {/* Experience card with conditional positioning */}
            <div
              className={`flex ${
                experience.position === 'left'
                  ? 'justify-end md:justify-start'
                  : 'justify-start md:justify-end'
              } md:w-1/2 ${
                experience.position === 'left'
                  ? 'md:pr-2 md:ml-2'
                  : 'md:pl-2 md:ml-auto'
              } w-full`}
            >
              <ExperienceCard
                title={experience.title}
                company={experience.company}
                period={experience.period}
                achievements={experience.achievements}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
