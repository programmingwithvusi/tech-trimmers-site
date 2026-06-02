import { useState, useEffect, useMemo } from 'react';
import '../App.css';

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = useMemo(
    () => [
      {
        icon: '🌱',
        title: 'Smart Irrigation',
        description:
          'Automated watering systems that save water and keep your garden thriving.',
        slides: [
          {
            img: '/images/irrigation1.jpg',
            text: 'Sensors detect soil moisture in real-time.',
          },
          {
            img: '/images/irrigation2.jpg',
            text: 'Weather data optimizes watering schedules.',
          },
          {
            img: '/images/irrigation3.jpg',
            text: 'Reduces water waste by up to 40%.',
          },
        ],
      },
      {
        icon: '📊',
        title: 'Garden Planning',
        description:
          'ICT-driven tools to design, visualize, and optimize your garden layout.',
        slides: [
          {
            img: '/images/planning1.jpg',
            text: 'Map out your garden digitally.',
          },
          {
            img: '/images/planning2.jpg',
            text: 'Simulate growth cycles and rotations.',
          },
          {
            img: '/images/planning3.jpg',
            text: 'Optimize space for maximum yield.',
          },
        ],
      },
      {
        icon: '🛠',
        title: 'Maintenance Scheduling',
        description:
          'Track and schedule routine tasks to keep your garden healthy year-round.',
        slides: [
          {
            img: '/images/maintenance1.jpg',
            text: 'Automated reminders for pruning and fertilizing.',
          },
          {
            img: '/images/maintenance2.jpg',
            text: 'Customizable schedules for each plant type.',
          },
          {
            img: '/images/maintenance3.jpg',
            text: 'Keeps your garden consistently maintained.',
          },
        ],
      },
      {
        icon: '🔗',
        title: 'Mobile Integration',
        description:
          'Connect your garden systems to mobile apps for real-time monitoring.',
        slides: [
          {
            img: '/images/mobile1.jpg',
            text: 'Monitor soil moisture from your phone.',
          },
          {
            img: '/images/mobile2.jpg',
            text: 'Get alerts for irrigation needs.',
          },
          {
            img: '/images/mobile3.jpg',
            text: 'Track sunlight exposure and growth.',
          },
        ],
      },
    ],
    [],
  );

  // Auto-play effect
  useEffect(() => {
    if (activeService !== null && !isPaused) {
      const interval = setInterval(() => {
        setSlideIndex(
          (prev) => (prev + 1) % services[activeService].slides.length,
        );
      }, 4000); // 4 seconds per slide
      return () => clearInterval(interval);
    }
  }, [activeService, isPaused, services]);

  const nextSlide = () => {
    if (activeService !== null) {
      setSlideIndex(
        (prev) => (prev + 1) % services[activeService].slides.length,
      );
    }
  };

  const prevSlide = () => {
    if (activeService !== null) {
      setSlideIndex((prev) =>
        prev === 0 ? services[activeService].slides.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div className="page-container">
      <div className="content-box fade-in">
        <h1 className="title">Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <button
                className="learn-btn"
                onClick={() => {
                  setActiveService(index);
                  setSlideIndex(0);
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Modal popup with auto-play carousel */}
        {activeService !== null && (
          <div className="modal-overlay" onClick={() => setActiveService(null)}>
            <div
              className="modal-box"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <h2 className="modal-title">{services[activeService].title}</h2>
              <img
                src={services[activeService].slides[slideIndex].img}
                alt={services[activeService].title}
                className="carousel-image"
              />
              <p className="modal-details">
                {services[activeService].slides[slideIndex].text}
              </p>

              <div className="carousel-controls">
                <button className="carousel-btn" onClick={prevSlide}>
                  ◀ Prev
                </button>
                <button className="carousel-btn" onClick={nextSlide}>
                  Next ▶
                </button>
              </div>

              <button
                className="close-btn"
                onClick={() => setActiveService(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
