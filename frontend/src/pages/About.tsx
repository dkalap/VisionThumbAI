import SoftBackDrop from "../components/SoftBackDrop";

const About = () => {
  return (
    <>
      <SoftBackDrop />

      <div className="min-h-screen max-w-6xl mx-auto px-6 pt-32 pb-20 relative">
        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6">
            About <span className="text-pink-500">VisionThumbAI</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            An AI-powered platform built to help creators design
            scroll-stopping thumbnails effortlessly.
          </p>
        </div>

        {/* STORY SECTION */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why VisionThumbAI?</h2>

            <p className="text-gray-400 mb-4">
              Creating high-converting thumbnails is time-consuming and
              requires design expertise. Many creators struggle to maintain
              consistency, speed, and quality.
            </p>

            <p className="text-gray-400">
              VisionThumbAI solves this by combining modern UI design with
              AI-powered image generation — allowing creators to focus on
              content, not design tools.
            </p>
          </div>

          {/* IMAGE / MOCK BOX */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-xl">
              <p className="text-sm text-gray-300">
                ✨ AI-Generated Thumbnails  
                <br />
                🎯 Optimized for CTR  
                <br />
                ⚡ Generated in seconds
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Makes It Powerful
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Driven Design",
                desc: "Generate thumbnails using AI based on title, style and context."
              },
              {
                title: "Creator-Focused UI",
                desc: "Clean, modern interface built with React & Tailwind."
              },
              {
                title: "Fast & Scalable",
                desc: "Built with MERN architecture for performance and scalability."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:scale-[1.02] transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FUTURE VISION */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">The Vision</h2>
          <p className="text-gray-400">
            VisionThumbAI aims to become a complete AI-powered creative suite
            for content creators — from thumbnail generation to analytics-driven
            optimization and personalization.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
