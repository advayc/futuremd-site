import React, { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";
import { Inter } from "next/font/google";

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
    document.body.className = selectedTheme === "dark" ? "dark-mode" : "light-mode";
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

  const isDark = selectedTheme === "dark";

  return (
    <div
      className={inter.className} // Apply Inter font to everything inside this div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDark ? "#000000" : "#FFFFFF",
        color: isDark ? "#FFFFFF" : "#000000",
        transition: "all 0.5s ease",
      }}
    >
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        <ToggleButton selected={selectedTheme} setSelected={setSelectedTheme} />
      </div>

      {/* Background */}
      <div
        style={{
          backgroundColor: isDark ? "#000000" : "#FFFFFF",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      {/* Title text */}
      <div
        style={{
          width: 843,
          height: 155,
          textAlign: "center",
          fontSize: 80,
          fontWeight: "700",
          position: "absolute",
          top: "20px",
          zIndex: 2,
        }}
      >
        Path2Med
      </div>

      {/* Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 3,
          marginTop: "80px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "800px",
            width: "100%",
            padding: "40px",
            background: isDark ? "#1F1F1F" : "#F3F4F6",
            borderRadius: "8px",
            boxShadow: isDark
              ? "0px 4px 15px rgba(255, 255, 255, 0.2)"
              : "0px 4px 15px rgba(0, 0, 0, 0.2)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "35px",
            rowGap: "30px",
            transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = isDark
              ? "0px 10px 30px rgba(255, 255, 255, 0.3)"
              : "0px 10px 30px rgba(0, 0, 0, 0.3)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = isDark
              ? "0px 4px 15px rgba(255, 255, 255, 0.2)"
              : "0px 4px 15px rgba(0, 0, 0, 0.2)")
          }
        >
          <label
            style={{
              display: "block",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "13px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: isDark ? "#1F1F1F" : "#FFFFFF",
                color: isDark ? "#FFFFFF" : "#000000",
                border: `2px solid ${isDark ? "#374151" : "#E5E7EB"}`,
                borderRadius: "4px",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Birthdate:
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
              className={isDark ? "dark-theme-date-picker" : "light-theme-date-picker"}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: isDark ? "#1F1F1F" : "#FFFFFF",
                color: isDark ? "#FFFFFF" : "#000000",
                border: `2px solid ${isDark ? "#374151" : "#E5E7EB"}`,
                borderRadius: "4px",
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                fontFamily: "'Inter', sans-serif", // Apply Inter font here
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Do you agree to our Terms & Conditions?:
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              style={{ marginLeft: "8px", accentColor: isDark ? "#3B82F6" : "#1E40AF" }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Would you like complementary shawarma?
            <input
              type="checkbox"
              name="wantsShawarma"
              checked={formData.wantsShawarma}
              onChange={handleChange}
              style={{ marginLeft: "8px", accentColor: isDark ? "#3B82F6" : "#1E40AF" }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              gridColumn: "span 2",
              fontWeight: "600",
            }}
          >
            How did you hear about us?
            <select
              name="heardAboutUs"
              value={formData.heardAboutUs}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: isDark ? "#1F1F1F" : "#FFFFFF",
                color: isDark ? "#FFFFFF" : "#000000",
                border: `2px solid ${isDark ? "#374151" : "#E5E7EB"}`,
                borderRadius: "4px",
              }}
            >
              <option value="">Select an option</option>
              <option value="social_media">Social Media</option>
              <option value="friend">Friend</option>
              <option value="ad">Ad</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              gridColumn: "span 2",
              fontWeight: "600",
            }}
          >
            Referred By (optional):
            <input
              type="text"
              name="referredBy"
              value={formData.referredBy}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: isDark ? "#1F1F1F" : "#FFFFFF",
                color: isDark ? "#FFFFFF" : "#000000",
                border: `2px solid ${isDark ? "#374151" : "#E5E7EB"}`,
                borderRadius: "4px",
              }}
            />
          </label>

          <div style={{ gridColumn: "span 2", textAlign: "center" }}>
            <button
              type="submit"
              style={{
                backgroundColor: isDark ? "#3B82F6" : "#1E40AF",
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: "600",
                padding: "14px 28px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = isDark ? "#60A5FA" : "#1D4ED8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = isDark ? "#3B82F6" : "#1E40AF")
              }
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
