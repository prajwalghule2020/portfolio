import BlurNav from "@/components/BlurNav";
import AboutSection from "@/components/AboutSection";
import HeroHeader from "@/components/HeroHeader";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function LandingPage() {
    return (
        <div className="landing-page min-h-screen w-full relative bg-black cursor-default overflow-y-auto">
            {/* Red Nebula Background with Top Glow */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(240, 32, 80, 0.25), transparent 70%), #000000",
                }}
            />

            {/* Fixed Navbar */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center ">
                <BlurNav />
            </div>

            {/* Your Content/Components */}
            <div className="relative z-10 pt-12">
                <div className="max-w-6xl mx-auto px-6 pt-8">
                    <HeroHeader />
                </div>

                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </div>
    );
}