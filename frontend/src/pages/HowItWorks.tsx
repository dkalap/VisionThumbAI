import SoftBackDrop from "../components/SoftBackDrop";

const steps = [
  {
    step: "01",
    title: "Enter Your Idea",
    description:
      "Provide a title and optional description for your thumbnail. This helps the AI understand your content intent."
  },
  {
    step: "02",
    title: "Customize the Look",
    description:
      "Choose aspect ratio, thumbnail style, and color scheme tailored for platforms like YouTube, Instagram, or Shorts."
  },
  {
    step: "03",
    title: "AI Generates Thumbnails",
    description:
      "Our AI processes your input and generates eye-catching, optimized thumbnails using modern image generation models."
  },
  {
    step: "04",
    title: "Download or Regenerate",
    description:
      "Preview results instantly. Download your favorite thumbnail or regenerate variations until you're satisfied."
  }
];

const HowItWorks = () => {
  return (
    <>
      <SoftBackDrop />

      <div className="min-h-screen max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6">
            How <span className="text-pink-500">VisionThumbAI</span> Works
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A simple, fast, and AI-powered workflow designed to help creators
            generate professional thumbnails in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-2">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:scale-[1.03] transition"
            >
              {/* Step Number */}
              <span className="absolute -top-5 -left-5 w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 text-black font-bold">
                {item.step}
              </span>

              <h3 className="text-2xl font-semibold mb-3 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
