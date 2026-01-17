import CityScene from "@/components/CityScene";
import BlurNav from "@/components/BlurNav";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <CityScene />
            <div className="city-overlay disable-selection">
                <div className="city-header text-center flex flex-col items-center">
                    <Link href="/landing">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold m-0 px-4 cursor-pointer hover:text-white/80 transition-colors">
                            Prajwal Ghule
                        </h1>
                    </Link>
                    <p className="text-xl sm:text-2xl text-white/50 mt-2 mb-4">Full Stack Developer</p>
                    <BlurNav />
                </div>
            </div>
        </main>
    );
}
