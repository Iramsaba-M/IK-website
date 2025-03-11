'use client';

import React, { useRef, useEffect } from 'react';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

const TimelineSlider: React.FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      year: 2021,
      title: 'Birth of a Silicon Valley startup',
      description: 'We began our operations at Deshpande Startups in Hubli, creating a foundation for innovation and growth in a thriving entrepreneurial ecosystem',
    },
    {
      year: 2023,
      title: 'Oracle sees the future',
      description: 'Took a significant leap by launching our first flagship products – Payroll and LMS – delivering practical, user-focused solutions to simplify enterprise processes.',
    },
    {
      year: 1986,
      title: 'Oracle goes public',
      description: ' Continued our journey of innovation with the introduction of Low-Code Applications, empowering businesses to break down development barriers and accelerate their digital transformation. ',
    },
    {
      year: 1990,
      title: 'Birth of a Silicon Valley startup',
      description: 'Engineers Larry Ellison, Bob Miner, and Ed Oates found Software Development Laboratories. Their first office is 900 square feet in Santa Clara, California.',
    },
    {
      year: 1992,
      title: 'Oracle sees the future',
      description: 'The company changes its name to Oracle Corporation from Relational Software Inc. (formerly SDL).',
    },
    {
      year: 1996,
      title: 'Oracle goes public',
      description: 'Oracle becomes a publicly traded company on the NASDAQ exchange. The quotation symbol is ORCL.',
    },
    {
      year: 2000,
      title: 'Birth of a Silicon Valley startup',
      description: 'Engineers Larry Ellison, Bob Miner, and Ed Oates found Software Development Laboratories. Their first office is 900 square feet in Santa Clara, California.',
    },
    {
      year: 2005,
      title: 'Oracle sees the future',
      description: 'The company changes its name to Oracle Corporation from Relational Software Inc. (formerly SDL).',
    },
    {
      year: 2015,
      title: 'Oracle goes public',
      description: 'Oracle becomes a publicly traded company on the NASDAQ exchange. The quotation symbol is ORCL.',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (containerRef.current) {
        // Prevent the default vertical scroll
        event.preventDefault();
        // Scroll horizontally based on the vertical scroll delta
        containerRef.current.scrollLeft += event.deltaY;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-[85%] max-h-[80vh] overflow-y-auto">
      {/* Inject custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px; /* Thinner scrollbar */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #6b46c1; /* Custom thumb color */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #4c2889; /* Hover color */
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: #f0f0f0; /* Track color */
        }
      `}</style>

      <div
        ref={containerRef}
        className="flex overflow-x-auto p-4 custom-scrollbar"
        style={{
          scrollbarWidth: 'thin', // Firefox
          scrollbarColor: '#374151 #f0f0f0', // Firefox (thumb and track colors)
        }}
      >
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="min-w-[32.5%] mx-2 p-4 h-[30vh] rounded-lg bg-white shadow-md"
          >
            <h2 className="text-xl font-bold">{event.year}</h2>
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <div>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSlider;