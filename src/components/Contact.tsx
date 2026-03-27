import React, { useState } from 'react';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function Contact() {
    // New states for better User Experience (UX)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "1d1aa7bf-2764-47b4-af4c-3d4ad06022ae");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await response.json();
            if (result.success) {
                setSubmitStatus('success');
                (event.target as HTMLFormElement).reset(); // Clear the form after success
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000); // Hide the message after 5 seconds
        }
    }

    return (
        <div className="text-black flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white min-h-screen px-4 py-12 sm:px-12 lg:px-32 sm:py-16 gap-12 lg:gap-8" id='contact'>
            
            {/* Left Section - Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 text-left"
            >
                {/* Adjusted text sizing for mobile */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
                    Let's Chat.<br />
                    Tell me about your<br /> project.<br />
                    <span className="text-lg sm:text-xl text-blue-700 mt-2 block">Let's Build Something Together :</span>
                </h1>

                {/* Removed extra side padding for better mobile alignment */}
                <div className="flex flex-col gap-6 mt-8">
                    <div className="flex items-center gap-4">
                        <IoMailOutline className="text-blue-700 flex-shrink-0" size={30} />
                        <div>
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p className="text-gray-600 break-all">sonigaurav2021@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <IoLocationOutline className="text-blue-700 flex-shrink-0" size={30} />
                        <div>
                            <h3 className="text-lg font-semibold">Location</h3>
                            <p className="text-gray-600">Bhilai, Chhattisgarh, India</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Section - Contact Form */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                /* Reduced padding on mobile (p-4), kept original on larger screens (sm:p-8) */
                className="bg-white w-full lg:w-1/2 p-4 sm:p-8 rounded-xl border-gray-100"
            >
                <h2 className="text-2xl font-semibold mb-6 text-left">
                    Send me a message 🚀
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Full name*" 
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition duration-200"
                            required 
                        />
                    </div>

                    <div>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email address*" 
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition duration-200"
                            required 
                        />
                    </div>

                    <div>
                        <input 
                            type="text" 
                            name="subject"
                            placeholder="Subject" 
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition duration-200"
                        />
                    </div>

                    <div>
                        <textarea 
                            name="message"
                            placeholder="Tell us more about your project*" 
                            className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 resize-none transition duration-200"
                            required 
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full text-white font-semibold py-3 rounded-lg transition duration-300 ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-900'}`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send message'}
                    </button>

                    {/* Dynamic Status Messages */}
                    {submitStatus === 'success' && (
                        <p className="text-green-600 text-center font-medium mt-2">Message sent successfully! I'll be in touch soon.</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="text-red-600 text-center font-medium mt-2">Something went wrong. Please try again.</p>
                    )}
                </form>
            </motion.div>
        </div>
    );
}