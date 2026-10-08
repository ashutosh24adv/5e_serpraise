"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { CheckCircle2, AlertCircle, ArrowRight, RotateCcw } from "lucide-react";

export const CONSULTATION_PROGRAM_OPTIONS = [
  "LILLY — Personal & Managerial Purpose",
  "GOTEL — Team Synergy & Conflict Remediation",
  "SALAM — Leadership Matrix & Stewardship",
  "COPPTER — Executive Strategy & Business Growth",
  "Custom OD Intervention / Culture Building",
  "Train the Trainer Certification",
  "General Corporate Consultation",
] as const;

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    program: CONSULTATION_PROGRAM_OPTIONS[0] as string,
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear inline error on change
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Corporate Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid corporate email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe how we can help your team.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Isolated submission simulation (can be connected to backend endpoint when available)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      program: CONSULTATION_PROGRAM_OPTIONS[0],
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#EFE6D6] border-b border-[#A67C37]/30" id="consultation-form">
      <Container size="standard">
        <div className="max-w-[880px] mx-auto">
          {/* Section Header */}
          <div className="mb-10 text-center sm:text-left space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <span className="w-4 h-[1.5px] bg-[#A67C37]" />
              <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
                REQUEST A PROPOSAL
              </span>
            </div>
            <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,42px)] text-[#0B2A6B] leading-tight">
              Request a Custom Proposal
            </h2>
            <p className="font-sans text-[16px] text-[#15151A]/85">
              Fill in your details below and our team will review your requirements.
            </p>
            <div className="w-16 h-[2px] bg-[#A67C37] mt-3 mx-auto sm:mx-0" />
          </div>

          {/* Form Container Card */}
          <div className="bg-[#F7F1E6] border border-[#0B2A6B]/30 p-8 sm:p-12 relative">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-5" role="status" aria-live="polite">
                <div className="w-16 h-16 bg-[#0B2A6B] text-[#EFE6D6] mx-auto flex items-center justify-center border border-[#A67C37]">
                  <CheckCircle2 className="w-9 h-9 text-[#A67C37]" />
                </div>
                <div className="space-y-2 max-w-[580px] mx-auto">
                  <h3 className="font-serif font-bold text-2xl text-[#0B2A6B]">
                    Proposal Request Received
                  </h3>
                  <p className="font-sans text-[15px] sm:text-[16px] text-[#15151A]/90 leading-relaxed">
                    Thank you. Your consultation request has been received. Our team will review your requirements and get back to you.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 bg-[#0B2A6B] hover:bg-[#071C49] text-[#EFE6D6] px-6 py-3 font-sans font-bold text-sm tracking-wider uppercase transition-colors cursor-pointer border border-[#A67C37]"
                  >
                    <RotateCcw className="w-4 h-4 text-[#A67C37]" />
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* 2-Column Grid for Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Field 1: Your Name * */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block font-sans font-bold text-xs uppercase tracking-wider text-[#0B2A6B]"
                    >
                      Your Name <span className="text-[#D62839]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Anand Sharma"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full bg-[#EFE6D6] border ${
                        errors.name ? "border-[#D62839]" : "border-[#0B2A6B]"
                      } px-4 py-3 font-sans text-sm text-[#15151A] rounded-none focus:outline-none focus:ring-2 focus:ring-[#D62839] focus:ring-offset-2 focus:ring-offset-[#EFE6D6] transition-all`}
                    />
                    {errors.name && (
                      <div id="name-error" className="flex items-center gap-1.5 text-xs text-[#D62839] font-medium pt-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Field 2: Corporate Email * */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block font-sans font-bold text-xs uppercase tracking-wider text-[#0B2A6B]"
                    >
                      Corporate Email <span className="text-[#D62839]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full bg-[#EFE6D6] border ${
                        errors.email ? "border-[#D62839]" : "border-[#0B2A6B]"
                      } px-4 py-3 font-sans text-sm text-[#15151A] rounded-none focus:outline-none focus:ring-2 focus:ring-[#D62839] focus:ring-offset-2 focus:ring-offset-[#EFE6D6] transition-all`}
                    />
                    {errors.email && (
                      <div id="email-error" className="flex items-center gap-1.5 text-xs text-[#D62839] font-medium pt-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Field 3: Phone / WhatsApp */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block font-sans font-bold text-xs uppercase tracking-wider text-[#0B2A6B]"
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 / +61..."
                      className="w-full bg-[#EFE6D6] border border-[#0B2A6B] px-4 py-3 font-sans text-sm text-[#15151A] rounded-none focus:outline-none focus:ring-2 focus:ring-[#D62839] focus:ring-offset-2 focus:ring-offset-[#EFE6D6] transition-all"
                    />
                  </div>

                  {/* Field 4: Organization / Company */}
                  <div className="space-y-2">
                    <label
                      htmlFor="organization"
                      className="block font-sans font-bold text-xs uppercase tracking-wider text-[#0B2A6B]"
                    >
                      Organization / Company
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g. Enterprise Ltd."
                      className="w-full bg-[#EFE6D6] border border-[#0B2A6B] px-4 py-3 font-sans text-sm text-[#15151A] rounded-none focus:outline-none focus:ring-2 focus:ring-[#D62839] focus:ring-offset-2 focus:ring-offset-[#EFE6D6] transition-all"
                    />
                  </div>
                </div>

                {/* Field 5: Program / Service of Interest */}
                <div className="space-y-2">
                  <label
                    htmlFor="program"
                    className="block font-sans font-bold text-xs uppercase tracking-wider text-[#0B2A6B]"
                  >
                    Program / Service of Interest
                  </label>
                  <div className="relative">
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full bg-[#EFE6D6] border border-[#0B2A6B] px-4 py-3 font-sans text-sm text-[#15151A] rounded-none focus:outline-none focus:ring-2 focus:ring-[#D62839] focus:ring-offset-2 focus:ring-offset-[#EFE6D6] transition-all cursor-pointer appearance-none"
                    >
                      {CONSULTATION_PROGRAM_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#EFE6D6] text-[#15151A]">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0B2A6B]">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Field 6: How can we help your team? * */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-sans font-bold text-xs uppercase tracking-wider text-[#0B2A6B]"
                  >
                    How can we help your team? <span className="text-[#D62839]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your organization's requirements, goals, team size, or challenges."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full bg-[#EFE6D6] border ${
                      errors.message ? "border-[#D62839]" : "border-[#0B2A6B]"
                    } px-4 py-3 font-sans text-sm text-[#15151A] rounded-none focus:outline-none focus:ring-2 focus:ring-[#D62839] focus:ring-offset-2 focus:ring-offset-[#EFE6D6] transition-all resize-y min-h-[120px]`}
                  />
                  {errors.message && (
                    <div id="message-error" className="flex items-center gap-1.5 text-xs text-[#D62839] font-medium pt-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 bg-[#D62839] text-white font-sans font-bold text-[15px] px-[32px] py-[16px] hover:bg-[#BC1F2F] transition-colors duration-300 cursor-pointer text-center select-none uppercase tracking-wider disabled:opacity-75"
                  >
                    <span>{isSubmitting ? "Submitting..." : "Send Consultation Request"}</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
