import React, { useState, FormEvent } from 'react';
import { IoMdClose, IoMdAlert } from 'react-icons/io';

const ContactForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [isMessageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const [isFirstNameTouched, setFirstNameTouched] = useState(false);
    const [isLastNameTouched, setLastNameTouched] = useState(false);
    const [isEmailTouched, setEmailTouched] = useState(false);
    const [isSubjectTouched, setSubjectTouched] = useState(false);
    const [isMessageTouched, setMessageTouched] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Mark all fields as touched
        setFirstNameTouched(true);
        setLastNameTouched(true);
        setEmailTouched(true);
        setSubjectTouched(true);
        setMessageTouched(true);

        // Validate inputs
        if (!firstName || !lastName || !email || !subject || !message) {
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
            body: JSON.stringify({ name: `${firstName} ${lastName}`, email, subject, message }),
        });

        if (response.ok) {
            console.log(`SUCCESS.\nNAME: ${firstName} ${lastName}\nEMAIL: ${email}\nSUBJECT: ${subject}\nMESSAGE: ${message}`);
            setMessageSent(true);
            // Clear user inputs
            setFirstName('');
            setLastName('');
            setEmail('');
            setSubject('');
            setMessage('');
            resetTouchedStates();
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

    const resetTouchedStates = () => {
        setFirstNameTouched(false);
        setLastNameTouched(false);
        setEmailTouched(false);
        setSubjectTouched(false);
        setMessageTouched(false);
    }

    const closeMessage = () => {
        setMessageSent(false);
        setErrorMessage('');
    }

    // Determine input classes based on error and touched states
    const inputClasses = (hasError: boolean, isTouched: boolean) => {
        if (!isTouched) return 'border-gray-700'; // Default border color
        return hasError 
            ? 'border-red-500 shadow-[0_0_10px_0_rgba(239,68,68,0.5)]' // Red border with centered glow
            : 'border-green-500 shadow-[0_0_10px_0_rgba(34,197,94,0.5)]'; // Green border with centered glow
    };

    const textareaClasses = (hasError: boolean, isTouched: boolean) => {
        if (!isTouched) return 'border-gray-700'; // Default border color
        return hasError 
            ? 'border-red-500 shadow-[0_0_10px_0_rgba(239,68,68,0.5)]' // Red border with centered glow
            : 'border-green-500 shadow-[0_0_10px_0_rgba(34,197,94,0.5)]'; // Green border with centered glow
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex items-center justify-center">
                <div className="flex-col md:w-1/2 sm:w-5/6 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <div className="flex justify-center">
                        <div className="flex flex-row w-5/6 mt-4 space-x-4">
                            <div className="flex flex-col w-1/2">
                                <label className="font-bold dark:text-white text-black text-xl mb-2" htmlFor="firstName">
                                    First Name:
                                </label>
                                <input
                                    id="firstName"
                                    className={`dark:text-white text-black w-full outline-0 mb-1 h-12 bg-gray-200 rounded-lg p-3 dark:bg-[#191919] border-2 ${inputClasses(!firstName, isFirstNameTouched)}`}
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                        setFirstNameTouched(true);
                                    }}
                                    onBlur={() => setFirstNameTouched(true)}
                                    required
                                />
                                {!firstName && isFirstNameTouched && (
                                    <div className="text-red-500 mb-2 font-bold flex items-center">
                                        <IoMdAlert className="mr-1" /> This field is required.
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label className="font-bold dark:text-white text-black text-xl mb-2" htmlFor="lastName">
                                    Last Name:
                                </label>
                                <input
                                    id="lastName"
                                    className={`dark:text-white text-black w-full outline-0 mb-1 h-12 bg-gray-200 rounded-lg p-3 dark:bg-[#191919] border-2 ${inputClasses(!lastName, isLastNameTouched)}`}
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                        setLastNameTouched(true);
                                    }}
                                    onBlur={() => setLastNameTouched(true)}
                                    required
                                />
                                {!lastName && isLastNameTouched && (
                                    <div className="text-red-500 mb-2 flex items-center">
                                        <IoMdAlert className="mr-1" /> This field is required.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4">
                            <label className="font-bold dark:text-white text-black text-xl mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                id="email"
                                className={`dark:text-white text-black w-full outline-0 mb-1 h-12 bg-gray-200 rounded-lg p-3 dark:bg-[#191919] border-2 ${inputClasses(!!emailError || !email, isEmailTouched)}`}
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailTouched(true);
                                    if (validateEmail(e.target.value)) {
                                        setEmailError('');
                                    } else {
                                        setEmailError('Invalid email address.');
                                    }
                                }}
                                onBlur={() => setEmailTouched(true)}
                                required
                            />
                            {(emailError || (!email && isEmailTouched)) && (
                                <div className="text-red-500 mb-2 flex items-center">
                                    <IoMdAlert className="mr-1" /> {email ? emailError : 'This field is required.'}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4">
                            <label className="font-bold dark:text-white text-black text-xl mb-2" htmlFor="subject">
                                Subject:
                            </label>
                            <input
                                id="subject"
                                className={`dark:text-white text-black w-full outline-0 mb-1 h-12 bg-gray-200 rounded-lg p-3 dark:bg-[#191919] border-2 ${inputClasses(!subject, isSubjectTouched)}`}
                                type="text"
                                value={subject}
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                    setSubjectTouched(true);
                                }}
                                onBlur={() => setSubjectTouched(true)}
                                required
                            />
                            {!subject && isSubjectTouched && (
                                <div className="text-red-500 mb-2 flex items-center">
                                    <IoMdAlert className="mr-1" /> This field is required.
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4">
                            <label className="font-bold dark:text-white text-black text-xl mb-2" htmlFor="message">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                className={`dark:text-white text-black w-full outline-0 h-32 bg-gray-200 rounded-lg p-3 dark:bg-[#191919] border-2 ${textareaClasses(!message, isMessageTouched)}`}
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    setMessageTouched(true);
                                }}
                                onBlur={() => setMessageTouched(true)}
                                required
                            ></textarea>
                            {!message && isMessageTouched && (
                                <div className="text-red-500 mb-2 flex items-center">
                                    <IoMdAlert className="mr-1" /> This field is required.
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="mt-6 mb-4 h-14 w-2/3 lg:w-2/3 bg-blue-800 text-white rounded-lg text-lg font-bold hover:bg-blue-900 transition-all duration-300"
                            type="submit"
                        >
                            Submit
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