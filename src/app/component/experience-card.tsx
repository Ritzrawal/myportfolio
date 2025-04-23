interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  achievements: string;
}

export default function ExperienceCard({
  title,
  company,
  period,
  achievements,
}: ExperienceCardProps) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
      <h3 className='text-xl font-bold text-gray-900'>{title}</h3>
      <p className='text-gray-600 mt-1'>{company}</p>
      <p className='text-gray-500 text-sm mt-1'>{period}</p>

      <div className='mt-4'>
        <p className='font-semibold text-gray-700'>Key achievements:</p>
        <p className='text-gray-600 mt-1'>{achievements}</p>
      </div>
    </div>
  );
}
