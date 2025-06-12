"use client";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MdDateRange } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import InputBox from "@/components/globalcomponents/InputBox";
import { Building2, Link2, Mail, MapPinHouse, UserPen } from "lucide-react";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";

const JobApplicationForm = () => {
  const [jobrole, setJobRole] = useState("");
  const [state, handleSubmit] = useForm("xkgrzedk");
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    linkedin: '',
    portfolio: '',
    date: '',
    resume: null,
    coverLetter: ''
  });
  const [formErrors, setFormErrors] = useState({});

  console.log(jobrole);

  useEffect(() => {
    const Jobtitle = localStorage.getItem("jobTitle");
    setJobRole(Jobtitle);
    window.scrollTo(0, 0); // Reset to the top of the page
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    // Handle file input separately
    if (name === "resume" && files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
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
    const requiredFields = ['fullName', 'email', 'address', 'city', 'date'];
    
    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required`;
        isValid = false;
      }
    });

    // Check resume separately since it's a file
    if (!formData.resume) {
      errors.resume = 'Resume is required';
      isValid = false;
    }
    
    setFormErrors(errors);
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
      <div className="flex justify-center w-full items-center min-h-screen flex-col lg:flex-row mt-[85px]">
        <p className="text-2xl font-bold text-[#1A3C3C] text-center">
          Thanks for applying!
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full items-center min-h-screen flex-col lg:flex-row mt-[85px]">
      <div className="h-full w-1/2 grid place-items-center">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2020/05/15/Vector-Design-of-Check-Job-Application-Graphics-4125266-1.jpg"
          alt="img"
        />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center md:w-full">
        <div className="text-rounded-blacklg shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-6 text-[#1A3C3C]">
            Apply as a {jobrole}
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <InputBox
                  label={"Full Name"}
                  icon={<UserPen size={20} />}
                  type={"text"}
                  name="fullName"
                  placeholder={"Enter full name.."}
                  onChange={handleInputChange}
                  value={formData.fullName}
                />
                {formErrors.fullName && (
                  <p className="text-[#F4A261] text-sm">{formErrors.fullName}</p>
                )}
                <ValidationError
                  prefix="Full Name"
                  field="fullName"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <InputBox
                  label={"Email"}
                  icon={<Mail size={20} />}
                  type={"email"}
                  name="email"
                  placeholder={"abc@gmail.com"}
                  onChange={handleInputChange}
                  value={formData.email}
                />
                {formErrors.email && (
                  <p className="text-[#F4A261] text-sm">{formErrors.email}</p>
                )}
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <InputBox
                  label={"Address"}
                  icon={<MapPinHouse size={20} />}
                  type={"text"}
                  name="address"
                  placeholder={"Enter your Adress"}
                  onChange={handleInputChange}
                  value={formData.address}
                />
                {formErrors.address && (
                  <p className="text-[#F4A261] text-sm">{formErrors.address}</p>
                )}
                <ValidationError
                  prefix="Address"
                  field="address"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <InputBox
                  label={"City"}
                  icon={<Building2 size={20} />}
                  type={"text"}
                  name="city"
                  placeholder={"Enter your city"}
                  onChange={handleInputChange}
                  value={formData.city}
                />
                {formErrors.city && (
                  <p className="text-[#F4A261] text-sm">{formErrors.city}</p>
                )}
                <ValidationError
                  prefix="City"
                  field="city"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <InputBox
                  label={"LinkedIn"}
                  icon={<Link2 size={20} />}
                  type={"text"}
                  name="linkedin"
                  placeholder={"Enter your linkedin link"}
                  onChange={handleInputChange}
                  value={formData.linkedin}
                />
                <ValidationError
                  prefix="LinkedIn"
                  field="linkedin"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <InputBox
                  label={"Portfolio"}
                  icon={<Link2 size={20} />}
                  type={"text"}
                  name="portfolio"
                  placeholder={"Enter your portfolio link"}
                  onChange={handleInputChange}
                  value={formData.portfolio}
                />
                <ValidationError
                  prefix="Portfolio"
                  field="portfolio"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <InputBox
                  label={"Date"}
                  icon={<MdDateRange />}
                  type={"date"}
                  name="date"
                  placeholder={""}
                  onChange={handleInputChange}
                  value={formData.date}
                />
                {formErrors.date && (
                  <p className="text-[#F4A261] text-sm">{formErrors.date}</p>
                )}
                <ValidationError
                  prefix="Date"
                  field="date"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <InputBox
                  label={"upload your resume"}
                  icon={<FaFileAlt />}
                  type={"file"}
                  name="resume"
                  onChange={handleInputChange}
                />
                {formErrors.resume && (
                  <p className="text-[#F4A261] text-sm">{formErrors.resume}</p>
                )}
                <ValidationError
                  prefix="Resume"
                  field="resume"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2 text-[#1A3C3C]">
                Cover Letter:
              </label>
              <textarea
                placeholder="Write your cover letter here..."
                name="coverLetter"
                className="w-full p-2 rounded-md outline-none focus:border-[#2E8B8B] border border-gray-300 text-black focus:outline-none"
                rows="4"
                onChange={handleInputChange}
                value={formData.coverLetter}
              ></textarea>
              <ValidationError
                prefix="Cover Letter"
                field="coverLetter"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full btn text-white py-3 rounded-lg font-semibold bg-gradient-to-r from-[#F4A261] to-[#2E8B8B] hover:opacity-90 transition mt-4"
            >
              Apply Now
            </button>
            {Object.keys(formErrors).length > 0 && (
              <p className="text-[#F4A261] text-sm mt-2 text-center">
                Please fill in all required fields.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;