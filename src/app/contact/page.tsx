"use client"
import React from 'react';

const Contact: React.FC = () => {
  const [result, setResult] = React.useState("Submit");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "86bbbc1b-2f0d-437b-938f-526cefcd6c30");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("submitting succesfully.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/[0.96]">
      {/* Title */}
      <div className="flex flex-col py-8 items-center justify-center text-center">
        <p className='text-neutral-400'>Contact with me</p>
        <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Get in touch</h2>
        <p className="mt-8 text-neutral-400">I'd love to hear from you! if you have any question, comments or feedback, please use the form below.</p>
      </div>
      {/* End Title */}
      <div className="md:mx-24 px-4 md:py-10">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={sendMessage}>
              <div className="space-y-4">
                {/* Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="input-name"
                    name="name"
                    className="peer p-4 block w-full bg-black border rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-10 disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="input-name"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Name
                  </label>
                </div>
                {/* End Input */}

                {/* Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="input-email"
                    name="email"
                    className="peer p-4 block w-full bg-black border rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="input-email"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Email
                  </label>
                </div>
                {/* End Input */}

                {/* Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="input-phone"
                    name="phone"
                    className="peer p-4 block w-full bg-black border rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Phone"
                    required
                  />
                  <label
                    htmlFor="input-phone"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Phone
                  </label>
                </div>
                {/* End Input */}

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="textarea"
                    className="peer p-4 block w-full bg-black border rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="This is a textarea placeholder"
                    required
                  />
                  <label
                    htmlFor="message"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Tell us about your project
                  </label>
                </div>
                {/* End Textarea */}
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">All fields are required</p>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 duration-100"
              >
                {result}
              </button>
            </form>
          </div>
          {/* End Col */}

          <div className="space-y-14">
            {/* Item */}
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Our address:</h4>
                <address className="mt-1 text-neutral-400 text-sm not-italic">
                  Gujrat, Ahmedabad
                  <br />
                  India
                </address>
              </div>
            </div>
            {/* End Item */}

            {/* Item */}
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Email us:</h4>
                <a className="mt-1 text-neutral-400 text-sm" href="mailto:raushanmehta2184@gmail.com" target="_blank" rel="noopener noreferrer">
                  raushanmehta2184@gmail.com
                </a>
              </div>
            </div>
            {/* End Item */}

            {/* Item */}
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">I am looking for Job</h4>
                <p className="mt-1 text-neutral-400">
                  We're thrilled to announce that we're expanding our team and looking for talented individuals like you to join us.
                </p>
              </div>
            </div>
            {/* End Item */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default Contact;
