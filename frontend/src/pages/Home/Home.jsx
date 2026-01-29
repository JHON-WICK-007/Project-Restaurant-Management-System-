import { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Home.css";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logging system
  const logEvent = (eventType, eventData) => {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      eventType,
      page: 'home',
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      ...eventData
    };

    // Log to console (in production, send to your backend)
    console.log('[EVENT LOG]', logEntry);

    // Store in sessionStorage for analytics
    try {
      const logs = JSON.parse(sessionStorage.getItem('eventLogs') || '[]');
      logs.push(logEntry);
      sessionStorage.setItem('eventLogs', JSON.stringify(logs));
    } catch (error) {
      console.error('[LOGGING ERROR]', error);
    }

    // In production, send to your logging service:
    // fetch('/api/logs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(logEntry)
    // });
  };

  const handleGetStarted = (e) => {
    logEvent('button_click', {
      buttonName: 'get_started',
      buttonText: 'Get Started',
      scrollPosition: scrollY
    });
  };

  const handleFeatureView = (featureName) => {
    logEvent('feature_view', {
      featureName,
      scrollPosition: scrollY
    });
  };

  useEffect(() => {
    // Log page view
    logEvent('page_view', {
      referrer: document.referrer,
      loadTime: performance.now()
    });

    // Log time on page when leaving
    const handleBeforeUnload = () => {
      const timeSpent = Math.round(performance.now() / 1000);
      logEvent('page_exit', { timeOnPage: timeSpent });
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <>
      <Navbar />
      <section className="hero" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="hero-content">
          <h1 className="hero-title">Modern Restaurant Experience</h1>
          <p className="hero-description">
            Book tables, explore menus, and manage dining seamlessly.
          </p>
          <a 
            href="/login" 
            className="btn"
            onClick={handleGetStarted}
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="features">
        <div className="feature-card" onClick={() => handleFeatureView('reservations')}>
          <div className="feature-icon">🍽️</div>
          <h3>Easy Reservations</h3>
          <p>Book your table in seconds with our streamlined reservation system.</p>
        </div>

        <div className="feature-card" onClick={() => handleFeatureView('menu')}>
          <div className="feature-icon">📖</div>
          <h3>Digital Menu</h3>
          <p>Explore our carefully curated menu with detailed descriptions and photos.</p>
        </div>

        <div className="feature-card" onClick={() => handleFeatureView('experience')}>
          <div className="feature-icon">✨</div>
          <h3>Premium Experience</h3>
          <p>Enjoy white-glove service and an unforgettable dining atmosphere.</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;