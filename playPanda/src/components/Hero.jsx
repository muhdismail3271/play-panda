import "../styles/Hero.css"
import heroShoe from "../assets/images/65e9f0cbec393a5e8bc9fcba0d7d786f-removebg-preview.png"
import { Link } from "react-router-dom"

export default function Hero() {

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
                    <Link to="/product/4">
                        Buy now
                    </Link>
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
