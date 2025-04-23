import WorkExperienceTimeline from '../component/timeline';

export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      title: 'IT Systems Assistant Coop II',
      company: 'Government of Ontario, Canada',
      period: 'Sep 2024 - Dec 2024 (4 months)',
      achievements:
        'Implemented a dark mode feature in Next.js, achieving full compatibility cross-browser and cross-device',
      position: 'right' as 'right' | 'left',
    },
    {
      id: 2,
      title: 'IT Systems Assistant Coop I',
      company: 'Government of Ontario, Canada',
      period: 'Jan 2024 - Apr 2024 (4 months)',
      achievements:
        'Developed VBA scripts to handle errors in institution codes, improving work efficiency by 10%',
      position: 'left' as 'right' | 'left',
    },
    {
      id: 3,
      title: 'Senior Service Parts Engineer',
      company: 'Toyota Motor Asia, Thailand',
      period: 'Dec 2021 - Dec 2022 (1 year)',
      achievements:
        'Led projects to develop software for locating in-house tooling in manufacturing plants, reducing production downtime',
      position: 'right' as 'right' | 'left',
    },
  ];

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto '>
        <div className='text-center mb-16'>
          <h2 className='text-sm font-medium uppercase tracking-wider text-gray-700'>
            PROFESSIONAL JOURNEY
          </h2>
          <h1 className='text-5xl font-bold mt-2 text-gray-900'>
            MY WORK EXPERIENCE
          </h1>
        </div>

        <WorkExperienceTimeline experiences={experiences} />
      </div>
    </div>
  );
}
