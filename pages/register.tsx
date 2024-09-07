import React, { useState } from "react";
import { Notification } from "../components/NotificationStyles"; // import error styles
import {Inter} from "next/font/google"
const inter = Inter({ subsets: ["latin"] });
const FutureMDForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    email: "", // Add email field
    termsAccepted: false,
    wantsShawarma: false,
    heardAboutUs: "",
    referredBy: "",
  });

  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setNotification({ message: "Please enter a valid email address.", type: "error" });
      setTimeout(() => {
        setNotification(null);
      }, 7000);
      return;
    }

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
        setNotification({ message: "Form submitted successfully!", type: "success" });
      } else {
        setNotification({ message: "There was an error submitting the form.", type: "error" });
      }

      setTimeout(() => {
        setNotification(null);
      }, 7000);

    } catch (error) {
      setNotification({ message: "There was an error submitting the form.", type: "error" });
      
      setTimeout(() => {
        setNotification(null);
      }, 7000);
    }
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8EA2F2",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          backgroundColor: "#8EA2F2",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <img
        src="/logo.png"
        alt="Logo"
        style={{
          position: "absolute",
          top: "5px",
          left: "380px",
          width: "180px",
          height: "auto",
          zIndex: 3,
        }}
      />
      {/* Left Side Elements */}
      <div
        style={{
          width: 377,
          height: 699.68,
          transform: "rotate(37.59deg)",
          transformOrigin: "0 0",
          background: "#D9E7FE",
          borderRadius: 223.55,
          border: "2px #08053B solid",
          zIndex: 2,
          position: "relative",
          left: "-500px", // Adjust position relative to the centered form
          top: "60px",
        }}
      />
      <div
        style={{
          width: 352.98,
          height: 699.68,
          transform: "rotate(37.59deg)",
          transformOrigin: "0 0",
          background: "#08053B",
          borderRadius: 223.55,
          zIndex: 1,
          position: "relative",
          marginTop: "-675px", // control overlap
          marginLeft: "40px",
          left: "-490px", // Adjust position relative to the centered form
          top: "60px",
        }}
      />
      <div
        style={{
          width: 912, /* title box */
          height: 240,
          overflow: "hidden",
          position: "relative",
          background: "#D9E7FE",
          borderRadius: 42,
          border: "5px #08053B solid",
          clipPath: "inset(42px 0 0 0)",
          transform: "translateY(-775px)",
          zIndex: 1,
        }}
      />
      {/* Title text */}
      <div
        style={{
          width: 843,
          height: 155,
          textAlign: "center",
          color: "#08053B",
          fontSize: 110,
          fontWeight: "800",
          position: "absolute",
          top: "0px",
          zIndex: 2,
          left: "450px",
        }}
      >
        Path2Med
      </div>

      {/* Sub-text */}
      <p
        style={{
          textAlign: "center",
          width: 377,
          height: 46,
          color: "#08053B",
          fontWeight: "700",
          position: "absolute",
          top: "120px",
          zIndex: 2,
          fontSize: 32,
          left: "700px",
        }}
      >
        Event Registration
      </p>

      {/* Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 4,
          marginTop: "-760px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "1000px",
            width: "100%",
            padding: "20px",
            background: "#FFFFFF",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            display: "grid",
            gridTemplateColumns: "1fr", 
            gap: "20px", // Space between form elements
            transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0px 8px 15px rgba(0,0,0,0.5)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow =
              "0px 4px 10px rgba(0,0,0,0.5)")
          }
        >
          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#08053B",
              fontWeight: "600",
            }}
          >
            Name *
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
                backgroundColor: "#FFFFFF",
                color: "#08053B",
                border: "2px solid #08053B",
                borderRadius: "4px",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#08053B",
              fontWeight: "600",
            }}
          >
            Birthdate *
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "13px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: "#FFFFFF",
                color: "#08053B",
                border: "2px solid #08053B",
                borderRadius: "4px",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "20px",
              color: "#08053B",
              fontWeight: "600",
            }}
          >
            I accept the terms and conditions <br></br>(found at https://futuremd.net/terms-and-conditions)
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                accentColor: "#00ad06",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#08053B",
              fontWeight: "600",
            }}
          >
            Would you like complementary <br></br>and FREE shawarma? (From Lezetts)
            <input
              type="checkbox"
              name="wantsShawarma"
              checked={formData.wantsShawarma}
              onChange={handleChange}
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                accentColor: "#00ad06",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#08053B",
              gridColumn: "span 2",
              fontWeight: "600",
            }}
          >
            How did you hear about us? *
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
                backgroundColor: "#FFFFFF",
                color: "#08053B",
                border: "2px solid #08053B",
                borderRadius: "4px",
                fontWeight: "600",
              }}
            >
              <option value="">Select an option</option>
              <option value="socialMedia">Social Media</option>
              <option value="friendsFamily">Friends and Family</option>
              <option value="teamMember">A team member</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#08053B",
              fontWeight: "600",
              gridColumn: "span 2",
            }}
          >
            Referring Person (if any)
            <input
              type="text"
              name="referredBy"
              value={formData.referredBy}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "13px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: "#FFFFFF",
                color: "#08053B",
                border: "2px solid #08053B",
                borderRadius: "4px",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#08053B",
              fontWeight: "600",
              gridColumn: "span 2", // This makes the email field span across both columns
            }}
          >
            Email *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "13px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: "#FFFFFF",
                color: "#08053B",
                border: "2px solid #08053B",
                borderRadius: "4px",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              gridColumn: "span 2",
              padding: "15px 20px",
              fontSize: "24px",
              fontWeight: "600",
              color: "#FFFFFF",
              backgroundColor: "#08053B",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "20px",
              fontFamily: "'Inter', sans-serif",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#2E2A68")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#08053B")
            }
          >
            Submit
          </button>
        </form>
      </div>
      {notification && (
        <Notification
          type={notification.type}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: 999,
            border: notification.type === "error" ? "2px solid red" : "2px solid green",
            backgroundColor: notification.type === "error" ? "#FFE5E5" : "#E5FFE5",
            color: notification.type === "error" ? "red" : "green",
          }}
        >
          {notification.message}
        </Notification>
      )}
    </div>
  );
};

export default FutureMDForm;
