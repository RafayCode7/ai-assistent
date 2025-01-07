export default function FeaturesMosaic() {
    const features = [
      {
        title: "Appointment Scheduling",
        description:
          "Efficiently schedule and manage meetings without the hassle of back-and-forth communication.",
        image: "/img/appointment.png", // Replace with your actual image path
      },
      {
        title: "Real-Time Notifications",
        description:
          "Get alerts on call status, performance metrics, and appointment reminders instantly.",
        image: "/img/real.png", // Replace with your actual image path
      },
      {
        title: "Voice Transcription",
        description:
          "Accurate call-to-text transcription for better documentation and analysis.",
        image: "/img/voice.png", // Replace with your actual image path
      },
      {
        title: "AI Voice Receptionist",
        description:
          "Never miss a call. Our AI receptionist ensures every client is greeted professionally, 24/7.",
        image: "/img/aivoice.png", // Replace with your actual image path
      },
      {
        title: "Sales Follow-Ups",
        description:
          "Automated follow-up calls to keep your pipeline full and your prospects engaged.",
        image: "/img/sale.png", // Replace with your actual image path
      },
      {
        title: "CRM Integration",
        description:
          "Sync with your favorite tools like HubSpot, Salesforce, and Zoho for seamless workflows.",
        image: "/img/crm.png", // Replace with your actual image path
      },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose VocalFlow?
        </h2>
        <div className="max-w-7xl mx-auto grid gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Feature Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Feature Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  