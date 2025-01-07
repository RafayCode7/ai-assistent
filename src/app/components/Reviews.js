'use client';

export default function Reviews() {
  const reviews = [
    {
      name: "Jane Smith",
      title: "Marketing Agency Owner",
      feedback:
        "VocalFlow has transformed how we manage client calls and follow-ups. The AI receptionist is a game-changer!",
      stars: 5,
      image: "/img/face1.png", // Path to the image
    },
    {
      name: "John Doe",
      title: "SaaS Founder",
      feedback:
        "Our sales team saw a 30% increase in conversion rates thanks to the automated follow-ups.",
      stars: 5,
      image: "/img/face2.png", // Path to the image
    },
    {
      name: "Samul Adams",
      title: "Law Firm Partner",
      feedback:
        "Appointments are now scheduled faster than ever. Our clients love the seamless experience!",
      stars: 5,
      image: "/img/face3.png", // Path to the image
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Customers Are Saying
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105"
          >
            {/* Profile Image */}
            <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-4">
              <img
                src={review.image}
                alt={`${review.name} profile`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Star Ratings */}
            <div className="flex justify-center mb-4">
              {[...Array(review.stars)].map((_, starIndex) => (
                <span key={starIndex} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>

            {/* Name and Title */}
            <h3 className="text-lg font-bold text-gray-800">{review.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{review.title}</p>

            {/* Feedback */}
            <p className="text-gray-700 text-sm">{review.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
