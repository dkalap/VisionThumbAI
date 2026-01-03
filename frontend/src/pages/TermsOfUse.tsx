import SoftBackDrop from "../components/SoftBackDrop";

const TermsOfUse = () => {
  return (
    <>
      <SoftBackDrop />

      <section className="relative min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Use
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These terms govern your access to and use of VisionThumbAI. By
              using our platform, you agree to comply with the terms below.
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-8">

            {/* Section */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-400">
                By accessing or using VisionThumbAI, you confirm that you have
                read, understood, and agreed to these Terms of Use.
              </p>
            </div>

            {/* Section */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                2. Use of the Platform
              </h2>
              <p className="text-gray-400">
                You agree to use VisionThumbAI only for lawful purposes and in a
                way that does not violate applicable laws or regulations.
              </p>
            </div>

            {/* Section */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                3. AI-Generated Content
              </h2>
              <p className="text-gray-400">
                VisionThumbAI generates thumbnails based on user input. While we
                strive for accuracy and quality, we do not guarantee specific
                outcomes or performance results.
              </p>
            </div>

            {/* Section */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                4. Intellectual Property
              </h2>
              <p className="text-gray-400">
                All platform branding, UI elements, and system components belong
                to VisionThumbAI. Users retain ownership of their generated
                thumbnails.
              </p>
            </div>

            {/* Section */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-400">
                VisionThumbAI shall not be liable for any indirect, incidental,
                or consequential damages arising from the use of the platform.
              </p>
            </div>

            {/* Section */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                6. Changes to Terms
              </h2>
              <p className="text-gray-400">
                We reserve the right to update these terms at any time. Continued
                use of the platform indicates acceptance of the revised terms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;
