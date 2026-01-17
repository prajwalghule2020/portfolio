import CityScene from "@/components/CityScene";
import BlurNav from "@/components/BlurNav";

export default function Home() {
    return (
        <main>
            <CityScene />
            <div className="city-overlay disable-selection">
                <div className="city-header text-center flex flex-col items-center">
                    <h1 className="text-6xl font-bold m-0">
                        Prajwal Ghule
                    </h1>
                    <p className="text-2xl text-white/50 mt-2 mb-4">Full Stack Developer</p>
                    <BlurNav />
                </div>
            </div>
        </main>
    );
}
