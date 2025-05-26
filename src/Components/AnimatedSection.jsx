
import useInView from "./../Hooks/useInView";

const AnimatedSection = ({ children, animationClass, threshold = 0.1, ...props }) => {
  const [ref, inView] = useInView({ threshold: threshold });

  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity duration-1000 ease-out',
    'slide-up': 'opacity-0 translate-y-10 transition-all duration-1000 ease-out',
    'slide-in-left': 'opacity-0 -translate-x-10 transition-all duration-1000 ease-out',
    'slide-in-right': 'opacity-0 translate-x-10 transition-all duration-1000 ease-out',

  };

  const activeClasses = {
    'fade-in': 'opacity-100',
    'slide-up': 'opacity-100 translate-y-0',
    'slide-in-left': 'opacity-100 translate-x-0',
    'slide-in-right': 'opacity-100 translate-x-0',
  };

  const baseClasses = animationClasses[animationClass] || '';
  const finalClasses = `${baseClasses} ${inView ? (activeClasses[animationClass] || '') : ''}`;

  return (
    <div ref={ref} className={finalClasses} {...props}>
      {children}
    </div>
  );
};

export default AnimatedSection;