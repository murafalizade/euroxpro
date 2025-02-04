import React, { useState } from "react";

const Feedback: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "40px",
                width: "100vw",
                height: "100vh",
                boxSizing: "border-box",
            }}
        >
            {/* Left Section - Form */}
            <div
                style={{
                    width: "45%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "20px",
                    borderRadius: "8px",
                }}
            >
                <h2
                    style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        marginBottom: "20px",
                    }}
                >
                    Feedback Form
                </h2>

                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <label
                        htmlFor="name"
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            marginBottom: "8px",
                        }}
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            marginBottom: "15px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />

                    <label
                        htmlFor="email"
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            marginBottom: "8px",
                        }}
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            marginBottom: "15px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />

                    <label
                        htmlFor="description"
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            marginBottom: "8px",
                        }}
                    >
                        Description:
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            marginBottom: "20px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            resize: "vertical",
                            minHeight: "100px",
                        }}
                    ></textarea>

                    <button
                        type="submit"
                        style={{
                            padding: "12px 20px",
                            fontSize: "16px",
                            backgroundColor: "#005402",
                            color: "white",
                            borderRadius: "6px",
                            cursor: "pointer",
                            border: "none",
                            transition: "background-color 0.3s ease",
                        }}
                    >
                        Send Feedback
                    </button>
                </form>
            </div>

            {/* Right Section - Globe Icon */}
            <div
                style={{
                    width: "45%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    style={{
                        fill: "none",
                        stroke: "#005402",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                </svg>
            </div>
        </div>
    );
};

export default Feedback;
