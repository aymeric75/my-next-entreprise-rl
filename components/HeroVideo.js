import React from 'react'

const HeroVideo = () => (
  <section className="hero-video">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="video-bg"
      poster="/videos/header-bg-placeholder.jpg"
    >
      <source src="/videos/header-bg.mov" type="video/mp4" />
      {/* Consider converting to MP4/WebM for better browser support */}
      Your browser doesn't support the video tag.
    </video>
    {/* Overlay for contrast */}
    <div className="overlay" />
    <div className="hero-content">
      <h1>Smarter Trading. Global Access. Real Returns.</h1>
      <p>Access high-performance bots anywhere, anytime.</p>
      <a href="#get-started" className="cta-button">Get Started</a>
    </div>
    <style jsx>{`
      .hero-video {
        position: relative;
        width: 100%;
        height: 90vh; /* adjust height as desired */
        overflow: hidden;
      }
      .video-bg {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        transform: translate(-50%, -50%);
        z-index: -2;
        object-fit: cover;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); /* 40–60% dark overlay */
        z-index: -1;
      }
      .hero-content {
        position: relative;
        z-index: 1;
        color: #fff;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 1rem;
      }
      .hero-content h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      .hero-content p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
      .cta-button {
        padding: 0.8rem 2rem;
        background: #ff9900;
        color: white;
        border: none;
        text-decoration: none;
        font-weight: 600;
        border-radius: 4px;
      }

      @media (max-width: 768px) {
        .hero-video {
          height: 60vh;
        }
        .hero-content h1 {
          font-size: 1.8rem;
        }
        .hero-content p {
          font-size: 1rem;
        }
      }
    `}</style>
  </section>
)

export default HeroVideo
