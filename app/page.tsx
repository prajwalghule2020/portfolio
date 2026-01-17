import CityScene from "@/components/CityScene";
import BlurNav from "@/components/BlurNav";

export default function Home() {
    return (
        <main>
            <CityScene />
            <div className="city-overlay disable-selection">
                <div className="city-header">
                    <h1>
                        <strong>Prajwal Ghule</strong>
                    </h1>
                    <p className="small">Full Stack Developer</p>
                    <BlurNav />
                </div>
            </div>
        </main>
    );
}
