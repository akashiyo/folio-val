export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />

      <div className="hero-content">
        <span className="hero-eyebrow">SIGN UP GET REWARDED</span>

        <h1>
          UP TO <strong>20,000</strong>
        </h1>

        <p>
          Get free rewards and unlock exclusive content.
        </p>

        <button className="primary-button">SIGN UP NOW</button>
      </div>

      <div className="hero-character">
        <div className="character-shadow" />
         <img src="/images/reyna.jpeg" alt="" />
      </div>

      <div className="hero-side-menu">
        <button>ONLINE CASINO</button>
        <button>ESPORT</button>
        <button>NEWS</button>
      </div>
    </section>
  );
}
