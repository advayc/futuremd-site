import React, { useState, useEffect, FormEvent, useRef } from 'react';
import { IoMdClose, IoMdAlert } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';

const ContactForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [isMessageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const [isFirstNameTouched, setFirstNameTouched] = useState(false);
    const [isLastNameTouched, setLastNameTouched] = useState(false);
    const [isEmailTouched, setEmailTouched] = useState(false);
    const [isSubjectTouched, setSubjectTouched] = useState(false);
    const [isMessageTouched, setMessageTouched] = useState(false);

    const [wordCount, setWordCount] = useState(500);

    const inputs = useRef<(HTMLInputElement | HTMLTextAreaElement | null)[]>([]);

    const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            const nextIndex = (index + 1) % inputs.current.length;
            inputs.current[nextIndex]?.focus();
        }
    };

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

        // Validate message length
        if (wordCount < 0) {
            setMessageError('Message exceeds the maximum word limit of 500.');
            return;
        } else {
            setMessageError('');
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
            setWordCount(500);
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
        return hasError || (!message && isTouched)
            ? 'border-red-500 shadow-[0_0_10px_0_rgba(239,68,68,0.5)]' // Red border with centered glow
            : 'border-green-500 shadow-[0_0_10px_0_rgba(34,197,94,0.5)]'; // Green border with centered glow
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setMessage(value);
        setMessageTouched(true);

        // Count words and update wordCount
        const words = value.trim().split(/\s+/).length;
        setWordCount(500 - words);
    };

    // Automatically close the success message after 3 seconds with a fade-out effect
    useEffect(() => {
        if (isMessageSent) {
            const timer = setTimeout(() => {
                setMessageSent(false);
            }, 4000); // Total duration for message visibility

            const fadeOutTimer = setTimeout(() => {
                const messageElement = document.getElementById('success-message');
                if (messageElement) {
                    messageElement.style.opacity = '0';
                }
            }, 3000); // Start fading out after 3 seconds

            return () => {
                clearTimeout(timer);
                clearTimeout(fadeOutTimer);
            };
        }
    }, [isMessageSent]);

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex items-center justify-center">
                <div className="flex-col md:w-1/2 sm:w-5/6 p-8 mt-10 transition-shadow duration-300 dark:shadow-[0_0_100px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_100px_rgba(255,255,255,0.2)] shadow-[0_0_250px_rgba(0,0,0,0.2)] hover:shadow-[0_0_550px_rgba(0,0,0,0.3)]">
                    <div className="flex justify-center mt-2">
                        <div className="flex flex-row w-5/6 mt-4 space-x-10">
                            <div className="flex flex-col w-1/2">
                                <label className="font-bold dark:text-white text-black sm:text-lg md:text-xl mb-2" htmlFor="firstName">
                                    First Name:
                                </label>
                                <input
                                    id="firstName"
                                    className={`dark:text-white text-black w-full outline-0 mb-1 h-12 bg-gray-200 rounded-md p-3 dark:bg-[#191919] border-2 ${inputClasses(!firstName, isFirstNameTouched)}`}
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                        setFirstNameTouched(true);
                                    }}
                                    onBlur={() => setFirstNameTouched(true)}
                                    onKeyDown={(e) => handleKeyDown(e, 0)}
                                    ref={(el) => { inputs.current[0] = el; }}
                                    required
                                />
                                {!firstName && isFirstNameTouched && (
                                    <div className="text-red-500 mb-2 flex items-center">
                                        <IoMdAlert className="mr-1" /> This field is required.
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label className="font-bold dark:text-white text-black sm:text-lg md:text-xl mb-2" htmlFor="lastName">
                                    Last Name:
                                </label>
                                <input
                                    id="lastName"
                                    className={`dark:text-white text-black w-full outline-0 mb-1 h-12 bg-gray-200 rounded-md p-3 dark:bg-[#191919] border-2 ${inputClasses(!lastName, isLastNameTouched)}`}
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                        setLastNameTouched(true);
                                    }}
                                    onBlur={() => setLastNameTouched(true)}
                                    onKeyDown={(e) => handleKeyDown(e, 1)}
                                    ref={(el) => { inputs.current[1] = el; }}
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
                            <label className="font-bold dark:text-white text-black sm:text-lg md:text-xl mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                id="email"
                                className={`dark:text-white text-black w-full outline-0 mb-1 h-12 bg-gray-200 rounded-md p-3 dark:bg-[#191919] border-2 ${inputClasses(!validateEmail(email), isEmailTouched)}`}
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailTouched(true);
                                    setEmailError(validateEmail(e.target.value) ? '' : 'Invalid email address.');
                                }}
                                onBlur={() => setEmailTouched(true)}
                                onKeyDown={(e) => handleKeyDown(e, 2)}
                                ref={(el) => { inputs.current[2] = el; }}
                                required
                            />
                            {emailError && isEmailTouched && (
                                <div className="text-red-500 mb-2 flex items-center">
                                    <IoMdAlert className="mr-1" /> {emailError}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4">
                            <label className="font-bold dark:text-white text-black sm:text-lg md:text-xl mb-2" htmlFor="subject">
                                Subject:
                            </label>
                            <input
                                id="subject"
                                className={`dark:text-white text-black w-full outline-0 mb-1 h-12 bg-gray-200 rounded-md p-3 dark:bg-[#191919] border-2 ${inputClasses(!subject, isSubjectTouched)}`}
                                type="text"
                                value={subject}
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                    setSubjectTouched(true);
                                }}
                                onBlur={() => setSubjectTouched(true)}
                                onKeyDown={(e) => handleKeyDown(e, 3)}
                                ref={(el) => { inputs.current[3] = el; }}
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
                            <div className="flex justify-between items-center mb-2">
                            <label
                                className="font-bold dark:text-white text-black sm:text-lg md:text-xl"
                                htmlFor="message"
                            >
                                Message:
                            </label>
                            <div className="flex items-center text-gray-500 ml-2">
                                {wordCount < 0 ? (
                                <span className="text-red-500">
                                    {wordCount}
                                </span>
                                ) : (
                                `${wordCount}`
                                )}
                            </div>
                            </div>
                            <div className="flex items-start">
                            <textarea
                                id="message"
                                className={`dark:text-white text-black w-full outline-0 mb-1 p-3 bg-gray-200 rounded-md dark:bg-[#191919] border-2 ${textareaClasses(
                                wordCount < 0,
                                isMessageTouched
                                )}`}
                                rows={8}
                                value={message}
                                onChange={handleMessageChange}
                                onBlur={() => setMessageTouched(true)}
                                onKeyDown={(e) => handleKeyDown(e, 4)}
                                ref={(el) => {
                                inputs.current[4] = el;
                                }}
                                required
                            />
                            </div>
                            {messageError && (
                            <div className="text-red-500 mb-2 flex items-center">
                                <IoMdAlert className="mr-1" /> {messageError}
                            </div>
                            )}
                            {!message && isMessageTouched && (
                                <div className="text-red-500 mb-2 flex items-center">
                                    <IoMdAlert className="mr-1" /> This field is required.
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="mt-10 mb-4 h-14 w-2/3 lg:w-2/3 relative rounded-md px-4 py-2 sm:text-lg md:text-xl font-medium text-white transition-all bg-blue-500 hover:bg-blue-800"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            {isMessageSent && (
                <div 
                    id="success-message"
                    className="fixed bottom-4 left-4 w-full max-w-md p-4 bg-green-500 text-white rounded-md shadow-lg flex items-center justify-between transition-opacity duration-1000"
                    style={{ opacity: 1 }}
                >
                    <FaCheck className="mr-2" size={20} />
                    <span>Message sent successfully!</span>
                    <button onClick={closeMessage} className="text-white">
                        <IoMdClose size={24} />
                    </button>
                </div>
            )}
            {errorMessage && (
                <div className="fixed bottom-4 left-4 w-full max-w-md p-4 bg-red-500 text-white rounded-md shadow-lg flex items-center justify-between">
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