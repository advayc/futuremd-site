import React, { useState, FormEvent } from 'react';
import { IoMdClose } from 'react-icons/io';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isMessageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Validate inputs
        if (!name || !email || !subject || !message) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        // Validate email
        if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
            return;
        } else {
            setEmailError('');
        }

        // Send email using Nodemailer
        const response = await fetch('/api/contact/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        });

        if (response.ok) {
            console.log(`SUCCESS.\nNAME: ${name}\nEMAIL: ${email}\nSUBJECT: ${subject}\nMESSAGE: ${message}`);
            setMessageSent(true);
            // Clear user inputs
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            console.log('ERROR OCCURRED');
            setErrorMessage('Error sending message. Please try again.');
        }
    }

    const validateEmail = (email: string) => {
        // Use a regex to validate the email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const closeMessage = () => {
        setMessageSent(false);
        setErrorMessage('');
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex items-center justify-center">
                <div className="flex-col border-2 border-[#3C55B7] rounded-lg w-3/4 p-8 shadow hover:shadow-lgshadow-md mt-12">
                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4">
                            <label className="font-bold dark:text-white text-black text-xl mb-2" htmlFor="name">
                                Name:
                            </label>
                            <input
                                id="name"
                                className="dark:text-white text-black w-full outline-0 mb-4 h-12 bg-gray-200 rounded-lg border-2 border-gray-700 dark:bg-[#191919] p-3"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4">
                            <label className="font-bold dark:text-white text-black text-xl mb-2" htmlFor="email">
                                Email:
                            </label>
                            {emailError && (
                                <div className="text-red-500 mb-2">
                                    {emailError}
                                </div>
                            )}
                            <input
                                id="email"
                                className="dark:text-white text-black w-full outline-0 mb-4 h-12 bg-gray-200 rounded-lg border-2 border-gray-700 dark:bg-[#191919] p-3"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4">
                            <label className="font-bold dark:text-white text-black text-xl mb-2" htmlFor="subject">
                        Subject:
                            </label>
                            <input
                                id="subject"
                                className="dark:text-white text-black w-full outline-0 mb-4 h-12 bg-gray-200 rounded-lg border-2 border-gray-700 dark:bg-[#191919] p-3"
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4">
                            <label className="font-bold dark:text-white text-black text-xl mb-2" htmlFor="message">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                className="dark:text-white text-black w-full outline-0 h-32 bg-gray-200 rounded-lg border-2 border-gray-700 dark:bg-[#191919] p-3"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="mt-6 mb-4 h-14 w-1/3 lg:w-2/3 bg-blue-800 text-white rounded-lg text-lg font-bold hover:bg-blue-900 transition-all duration-300"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </form>
            {isMessageSent && (
                <div className="fixed bottom-4 left-4 w-full max-w-md p-4 bg-green-500 text-white rounded-lg shadow-lg flex items-center justify-between">
                    <span>Message sent successfully!</span>
                    <button onClick={closeMessage} className="text-white">
                        <IoMdClose size={24} />
                    </button>
                </div>
            )}
            {errorMessage && (
                <div className="fixed bottom-4 left-4 w-full max-w-md p-4 bg-red-500 text-white rounded-lg shadow-lg flex items-center justify-between">
                    <span>{errorMessage}</span>
                    <button onClick={() => setErrorMessage('')} className="text-white">
                        <IoMdClose size={24} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default ContactForm;
