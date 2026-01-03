import SoftBackDrop from "../components/SoftBackDrop";

const techSections = [
  {
    title: "Frontend",
    items: [
      { name: "React", logo: "react" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
      { name: "Vite", logo: "vite" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", logo: "nodejs" },
      { name: "Express", logo: "express" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "JWT Auth", logo: "jsonwebtokens" }
    ]
  },

  {
    title: "Tools & Deployment",
    items: [
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
      { name: "VS Code", logo: "vscode" },
      { name: "Vercel", logo: "vercel" }
    ]
  }
];

const TechStack = () => {
  return (
    <>
      <SoftBackDrop />

      <div className="min-h-screen max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6">
            Tech Stack Behind <span className="text-pink-500">VisionThumbAI</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A modern, scalable technology stack carefully chosen to build
            high-performance AI-powered applications.
          </p>
        </div>

        {/* TECH SECTIONS */}
        <div className="space-y-20">
          {techSections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold mb-10 text-center">
                {section.title}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {section.items.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:scale-[1.05] transition"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.logo}/${tech.logo}-original.svg`}
                      alt={tech.name}
                      className="h-14 mb-4"
                      loading="lazy"
                    />
                    <p className="text-sm text-gray-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
