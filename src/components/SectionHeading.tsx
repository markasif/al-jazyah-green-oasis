import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  subtitleColor?: 'primary' | 'secondary';
  rightElement?: React.ReactNode;
  mbClass?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  subtitleColor = 'primary',
  rightElement,
  mbClass = 'mb-6 md:mb-8 lg:mb-12'
}) => {
  const subtitleColorClass = subtitleColor === 'secondary' ? 'text-secondary' : 'text-primary';

  return (
    <div className={`flex flex-col md:flex-row justify-between items-start md:items-end ${mbClass} w-full`}>
      <div className="max-w-2xl text-left">
        {subtitle && (
          <p className={`text-xs md:text-sm uppercase tracking-[0.25em] ${subtitleColorClass} mb-1 md:mb-2 font-semibold`}>
            {subtitle}
          </p>
        )}
        <h2 className="heading-section text-foreground">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-lg mt-2 md:mt-4 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {rightElement}
    </div>
  );
};

export default SectionHeading;
