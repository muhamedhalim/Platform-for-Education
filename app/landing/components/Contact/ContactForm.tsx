"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const message = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`;
    const whatsappUrl = `https://wa.me/01114922929?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0e0e0e] w-full border border-[#222] rounded-2xl p-6 md:p-8 max-w-2xl mx-auto space-y-6"
      noValidate
    >
      <div>
        <label htmlFor="name" className="block mb-2 font-semibold text-blue-300">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full bg-black border ${errors.name ? 'border-blue-200' : 'border-gray-800'} rounded-full px-6 py-3 focus:ring-2 focus:ring-blue-400`}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name && <p id="name-error" className="mt-1 text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-semibold text-blue-300">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full bg-black border ${errors.email ? 'border-red-500' : 'border-gray-800'} rounded-full px-6 py-3 focus:ring-2 focus:ring-blue-400`}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email && <p id="email-error" className="mt-1 text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block mb-2 font-semibold text-blue-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full bg-black border border-gray-600 rounded-full px-6 py-3 focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-semibold text-blue-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-black border border-gray-600 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full bg-blue-50 hover:bg-blue-600 text-black font-semibold py-3 rounded-full transition ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
