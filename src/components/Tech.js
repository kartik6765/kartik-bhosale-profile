import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Tech = () => {
  const iconsRef = useRef([]);
  const containerRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (inView) {
      gsap.from(iconsRef.current, {
        opacity: 0,
        scale: 0.5,
        y: 50,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2,
      });

      iconsRef.current.forEach((icon, index) => {
        gsap.to(icon, {
          y: -10,
          repeat: -1,
          yoyo: true,
          duration: 1.5 + index * 0.1,
          ease: 'power1.inOut'
        });
      });
    }
  }, [inView]);

  const techStack = [
    { name: 'React', src: './assets/tech/react.png' },
    { name: 'HTML', src: './assets/tech/htm.png' },
    { name: 'CSS', src: './assets/tech/css.png' },
    { name: 'Bootstrap', src: './assets/tech/boot.png' },
    { name: 'Tailwind', src: './assets/tech/tailwind.png' },
    { name: 'JavaScript', src: './assets/tech/js.png' },
    { name: 'Laravel', src: './assets/tech/laravel.png' },
    { name: 'Java', src: './assets/tech/java.png' },
    { name: 'Spring', src: './assets/tech/spring.png' },
    { name: 'Next.js', src: './assets/tech/nextjs.png' },
    { name: 'SQL', src: './assets/tech/sql.png' }
  ];

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-6 py-10 bg-[#212428]">
      {techStack.map((tech, index) => (
        <div
          key={index}
          ref={el => (iconsRef.current[index] = el)}
          className="p-2 rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-125 hover:rotate-3 hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-white hover:shadow-xl"
          style={{ perspective: '1000px' }}
        >
          <img
            src={tech.src}
            alt={tech.name}
            className="w-12 h-12 md:w-20 md:h-20 object-contain transition-transform duration-300 hover:rotate-[5deg] hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default Tech;
