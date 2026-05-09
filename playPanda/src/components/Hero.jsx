import "../styles/Hero.css"

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h2>
                    Unleash
                    <br />
                    Speed Chase
                    <br />
                    Victory
                </h2>

                <p>
                    Unleash Your Speed With Every Stride. Designed
                    <br />
                    For Those Who Chase Victory.
                </p>

                <button>Buy now</button>
            </div>

            <div className="hero-image-box">
                <div className="red-circle"></div>

                <img
                    src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1100&q=90"
                    alt="black sports shoe"
                />
            </div>
        </section>
    )
}
