import SoftBackDrop from "../components/SoftBackDrop";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "MVP Launch",
    status: "Completed / In Progress",
    items: [
      "Modern landing page UI",
      "Thumbnail generation flow",
      "Aspect ratio & style selection",
      "Vite + React + Tailwind setup"
    ]
  },
  {
    phase: "Phase 2",
    title: "AI & User Features",
    status: "Upcoming",
    items: [
      "AI image generation integration",
      "Prompt optimization for thumbnails",
      "User authentication (JWT)",
      "Save & manage generations"
    ]
  },
  {
    phase: "Phase 3",
    title: "Scaling & Monetization",
    status: "Planned",
    items: [
      "Credit-based usage system",
      "Premium styles & templates",
      "Performance optimization",
      "Deployment on cloud (AWS/Vercel)"
    ]
  }
];

const Roadmap = () => {
  return (
    <>
      <SoftBackDrop />

      <div className="min-h-screen max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6">
            Product <span className="text-pink-500">Roadmap</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            VisionThumbAI is built with a clear roadmap to evolve from a powerful
            MVP into a scalable AI-driven product.
          </p>
        </div>

        {/* Roadmap Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {roadmapData.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:scale-[1.03] transition"
            >
              <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-pink-500/20 text-pink-400">
                {phase.phase}
              </span>

              <h3 className="text-2xl font-semibold mb-1">
                {phase.title}
              </h3>

              <p className="text-sm text-gray-400 mb-6">
                {phase.status}
              </p>

              <ul className="space-y-3 text-gray-300">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-pink-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Building the future of AI thumbnails 🚀
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            This roadmap reflects the long-term vision of VisionThumbAI — focused
            on creators, performance, and scalability.
          </p>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
