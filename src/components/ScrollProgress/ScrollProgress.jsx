import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-transparent z-30 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 shadow-[0_0_30px_rgba(250,204,21,0.8),0_0_60px_rgba(251,191,36,0.4)]"
        style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease-out' }}
      />
    </div>
  );
};

export default ScrollProgress;
