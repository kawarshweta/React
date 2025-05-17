const About = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="bg-[#1c1c1c] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          Bringing your favorite meals to your doorstep – fast, fresh, and fuss-free.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            At <span className="text-orange-500 font-medium">FoodExpress</span>, we're passionate about delivering happiness with every bite. Whether you're craving comfort food or exploring new flavors, we make it easy and enjoyable.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Handpicked restaurants and dishes</li>
              <li>Fast & reliable delivery network</li>
              <li>Real-time tracking and updates</li>
              <li>Exciting offers and loyalty rewards</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Delicious food"
            className="rounded-md w-full h-64 object-cover shadow-md"
          />
        </section>

        <section className="text-center">
          <p className="text-gray-600 italic text-md">
            Made with ❤️ by food lovers, for food lovers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
