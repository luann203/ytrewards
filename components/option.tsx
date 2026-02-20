/* eslint-disable @typescript-eslint/no-explicit-any */

// OPTION CLASSNAME
const optionClass = 'flex justify-center items-center ring-2 transition rounded-lg relative shadow-md p-2.5 bg-[#181818] ring-[#303030] hover:bg-[#272727] hover:ring-[#404040] focus:ring-[#4CAF50]'

export default function Option({
  onClick,
  className,
  children,
}:{
  onClick?: any,
  className?: string,
  children: React.ReactNode,
}) {

  // OPTION CLASSNAME
  const optionClassName = className ? `${optionClass} ${className}` : optionClass;

  return (
    <button
      type="button"
      onClick={onClick}
      className={optionClassName}
    >
      {children}
    </button>
  );
}