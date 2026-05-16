import "../styles/Hero.css"

export default function Hero() {
    const heroShoe = "https://i.pinimg.com/1200x/dd/26/e0/dd26e03a8ae088c3273fbb7d34dce814.jpg"

    return (
        <section className="page-container hero-section">
            <div className="hero-content">
                <h2 className="hero-title">
                    Unleash<br />Speed Chase<br />Victory
                </h2>
                <p className="hero-description">
                    Unleash Your Speed With Every Stride. Designed For Those Who Chase Victory.
                </p>
                <button className="btn-hero">
                    Buy now
                </button>
            </div>

            <div className="hero-visual" aria-hidden="true">
                <div className="hero-orbit">
                    <span className="hero-orbit-line hero-orbit-line-one"></span>
                    <span className="hero-orbit-line hero-orbit-line-two"></span>
                    <span className="hero-orbit-line hero-orbit-line-three"></span>
                </div>
                <img className="hero-shoe" src={heroShoe} alt="" />
            </div>
        </section>
    )
}
