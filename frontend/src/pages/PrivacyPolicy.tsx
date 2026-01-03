import SoftBackDrop from "../components/SoftBackDrop";

const PrivacyPolicy = () => {
  return (
    <>
      <SoftBackDrop />

      <section className="relative min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your privacy matters to us. This page explains how VisionThumbAI
              collects, uses, and protects your information.
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid gap-8">

            {/* Card */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                1. Information We Collect
              </h2>
              <p className="text-gray-400">
                We collect minimal information necessary to provide AI-powered
                thumbnail generation services. This may include text inputs,
                usage data, and basic account-related details.
              </p>
            </div>

            {/* Card */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                2. How We Use Your Data
              </h2>
              <p className="text-gray-400">
                Your data is used solely to generate thumbnails, improve model
                accuracy, enhance user experience, and maintain platform
                performance.
              </p>
            </div>

            {/* Card */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                3. AI-Generated Content Ownership
              </h2>
              <p className="text-gray-400">
                All thumbnails generated using VisionThumbAI remain the property
                of the user. We do not claim ownership over your generated
                content.
              </p>
            </div>

            {/* Card */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                4. Data Security
              </h2>
              <p className="text-gray-400">
                We implement standard security practices to protect your data.
                However, no online platform can guarantee absolute security.
              </p>
            </div>

            {/* Card */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-3">
                5. Contact Us
              </h2>
              <p className="text-gray-400">
                If you have any questions regarding this Privacy Policy, please
                contact us via the VisionThumbAI support channels.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
