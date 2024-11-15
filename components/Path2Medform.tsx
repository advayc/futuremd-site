import React, { useState, useEffect } from "react";

// Import the Inter font
const inter = Inter({ subsets: ['latin'] });

const FutureMDForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    termsAccepted: false,
    wantsShawarma: false,
    heardAboutUs: "",
    referredBy: "",
  });

  const [selectedTheme, setSelectedTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("transition-colors", "duration-700");
    root.className = selectedTheme === "dark" ? "dark" : "";
    setTimeout(() => {
      root.classList.remove("transition-colors", "duration-700");
    }, 1700);
  }, [selectedTheme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Handle the response as needed
        alert("Form submitted successfully!");
      } else {
        console.error("Failed to submit the form");
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className={` min-h-screen flex items-start justify-center py-8`}> {/* Adjusted vertical alignment */}
      {/* The theme bug here has been removed */}
      <div
        className={`w-full max-w-4xl p-8 bg-white dark:bg-[#000000] rounded-lg ${
          selectedTheme === "dark"
            ? "shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
            : "shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
        }`
       }
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium dark:text-gray-100">Full Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none dark:bg-[#191919] dark:text-gray-100 dark:border-[#374151]"
            />
          </div>

          <div>
            <label className="block text-lg font-medium dark:text-gray-100">Birthdate:</label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none dark:bg-[#191919] dark:text-gray-100 dark:border-[#374151]"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              className="h-4 w-4 text-blue-600 focus:ring-0 dark:bg-[#191919] dark:border-[#374151]"
            />
            <label className="ml-2 text-lg font-medium dark:text-gray-100">I agree to the Terms & Conditions</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="wantsShawarma"
              checked={formData.wantsShawarma}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-0 dark:bg-[#191919] dark:border-[#374151]"
            />
            <label className="ml-2 text-lg font-medium dark:text-gray-100">I would like complementary and FREE shawarma during the event (courtesy of Lezetts)</label>
          </div>

          <div>
            <label className="block text-lg font-medium dark:text-gray-100">How did you hear about us?</label>
            <select
              name="heardAboutUs"
              value={formData.heardAboutUs}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none dark:bg-[#191919] dark:text-gray-100 dark:border-[#374151]"
            >
              <option value="">Select an option</option>
              <option value="social_media">Social Media</option>
              <option value="friend">Friend</option>
              <option value="ad">Ad</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium dark:text-gray-100">Referred By (optional):</label>
            <input
              type="text"
              name="referredBy"
              value={formData.referredBy}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none dark:bg-[#191919] dark:text-gray-100 dark:border-[#374151]"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FutureMDForm;
