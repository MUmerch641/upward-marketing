"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Heading from "../../components/globalcomponents/Heading";
import Button from "../../components/globalcomponents/Button";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xkgrzedk");
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [showPrivacyError, setShowPrivacyError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};
    
    // Check each required field
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        isValid = false;
      }
    });
    
    setFormErrors(errors);
    
    // Check privacy policy
    if (!isPrivacyChecked) {
      setShowPrivacyError(true);
      isValid = false;
    } else {
      setShowPrivacyError(false);
    }
    
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    
    if (isValid) {
      handleSubmit(e);
    }
  };

  if (state.succeeded) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 contact-img text-center">
        <p className="text-2xl font-bold text-[#1A3C3C]">
          Thanks for reaching out!
        </p>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 contact-img">
      <div className="md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-l lg:grid-cols-2 gap-10 items-center">
        {/* Left Section: Illustration */}
        <div className="flex absolute -z-10 md:relative justify-center items-center">
          <DotLottieReact
            height={250}
            src="https://lottie.host/4d5fc344-5b45-4c7d-8d88-a52b7ed891a3/URGRXMxSo9.lottie"
            loop
            autoplay
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-full backdrop-blur-[2px]">
          <Heading text={"Contact"} style={{ color: "#F4A261" }} />
          <h3 className="text-3xl font-bold tracking-tight text-[#1A3C3C] mb-6">
            To Connect with Upward Send Your Message Today!
          </h3>
          <form className="space-y-2" onSubmit={handleFormSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full p-3 border-2 border-transparent bg-white rounded-md outline-none"
                  style={{
                    borderImage: "linear-gradient(to right, #F4A261, #2E8B8B) 0.5",
                  }}
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && (
                  <p className="text-[#F4A261] text-sm mt-1">{formErrors.firstName}</p>
                )}
                <ValidationError
                  prefix="First Name"
                  field="firstName"
                  errors={state.errors}
                  className="text-[#F4A261] text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full p-3 border-2 border-transparent bg-white rounded-md outline-none"
                  style={{
                    borderImage: "linear-gradient(to right, #F4A261, #2E8B8B) 1",
                  }}
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className="text-[#F4A261] text-sm mt-1">{formErrors.lastName}</p>
                )}
                <ValidationError
                  prefix="Last Name"
                  field="lastName"
                  errors={state.errors}
                  className="text-[#F4A261] text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E mail"
                  className="w-full p-3 border-2 border-transparent bg-white rounded-md outline-none"
                  style={{
                    borderImage: "linear-gradient(to right, #F4A261, #2E8B8B) 1",
                  }}
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className="text-[#F4A261] text-sm mt-1">{formErrors.email}</p>
                )}
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-[#F4A261] text-sm"
                />
              </div>
            </div>

            {/* Email and Phone Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No"
                  className="w-full p-3 border-2 border-transparent bg-white rounded-md outline-none"
                  style={{
                    borderImage: "linear-gradient(to right, #F4A261, #2E8B8B) 1",
                  }}
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {formErrors.phone && (
                  <p className="text-[#F4A261] text-sm mt-1">{formErrors.phone}</p>
                )}
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                  className="text-[#F4A261] text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="w-full p-3 border-2 border-transparent bg-white rounded-md outline-none"
                  style={{
                    borderImage: "linear-gradient(to right, #F4A261, #2E8B8B) 1",
                  }}
                  value={formData.company}
                  onChange={handleInputChange}
                />
                {formErrors.company && (
                  <p className="text-[#F4A261] text-sm mt-1">{formErrors.company}</p>
                )}
                <ValidationError
                  prefix="Company"
                  field="company"
                  errors={state.errors}
                  className="text-[#F4A261] text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 border-2 border-transparent bg-white rounded-md outline-none"
                style={{
                  borderImage: "linear-gradient(to right, #F4A261, #2E8B8B) 1",
                }}
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {formErrors.message && (
                <p className="text-[#F4A261] text-sm mt-1">{formErrors.message}</p>
              )}
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-[#F4A261] text-sm"
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy-policy"
                name="privacyPolicy"
                className="h-5 w-5 text-[#2E8B8B] border rounded focus:ring-[#F4A261]"
                onChange={(e) => {
                  setIsPrivacyChecked(e.target.checked);
                  if (e.target.checked) {
                    setShowPrivacyError(false);
                  }
                }}
                checked={isPrivacyChecked}
              />
              <label
                htmlFor="privacy-policy"
                className={`ml-2 text-sm ${showPrivacyError ? 'text-[#F4A261] font-medium' : 'text-[#1A3C3C]'}`}
              >
                By sending this form I confirm that I have read and accept
                Intellect Soft privacy policy.
              </label>
            </div>
            {showPrivacyError && (
              <p className="text-[#F4A261] text-sm">
                Please check the privacy policy consent box to proceed
              </p>
            )}

            {/* Submit Button */}
            <div className="flex justify-end w-full">
              <Button
                text={"Submit"}
                type="submit"
                className={`bg-gradient-to-r from-[#F4A261] to-[#2E8B8B] text-white py-3 rounded-lg font-semibold transition hover:opacity-90`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;