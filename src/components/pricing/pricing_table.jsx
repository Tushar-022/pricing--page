import React, { useState } from 'react';
import Confetti from 'react-confetti';

function PricingTab(props) {
  return (
    <div className={`h-full ${props.popular ? 'dark' : ''}`} p-4>
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-slate-100 text-black border- dark:border-slate-900 shadow shadow-slate-950/5">
        {props.popular && (
          <div className="absolute top-0 right-0 mx-auto -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-blue-500 text-black rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-black dark:text-black font-semibold mb-1">{props.planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-black dark:text-black font-bold text-3xl">$</span>
            <span className="text-black dark:text-black font-bold text-4xl">{props.yearly ? props.price.yearly : props.price.monthly}</span>
            <span className="text-black font-medium">/mo</span>
          </div>
          <div className="text-sm text-black mb-5">{props.planDescription}</div>
          <a
  className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-black shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
  href="#0"
>
  {props.planName === 'Free' ? 'GetStarted' : 'Subscribe'}
</a>

        </div>
        <div className="text-slate-900 dark:text-black font-medium mb-3">Includes:</div>
        <ul className="text- dark:text-black text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); // State to toggle confetti

  const handleToggle = () => {
    setIsAnnual((prevState) => !prevState); // Toggle between monthly and yearly
    setShowConfetti(true); // Trigger confetti animation when switching
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000); // Hide confetti after 3 seconds
  };

  return (
    <div >
      {/* Pricing toggle */}
      <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
        <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
          <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
            <span className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-full' : 'translate-x-0'}`}></span>
          </span>
          <button className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-100 dark:focus-visible:ring-slate-200 transition-colors duration-100 ease-in-out ${isAnnual ? 'text-white' : 'text-slate-200 dark:text-slate-300'}`} onClick={handleToggle} aria-pressed={isAnnual}>Monthly</button>
          <button className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-100 dark:focus-visible:ring-slate-200 transition-colors duration-100 ease-in-out ${isAnnual ? 'text-slate-300 dark:text-slate-200' : 'text-white'}`} onClick={handleToggle} aria-pressed={!isAnnual}>Yearly</button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 lg:px-5">
  <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 items-start lg:max-w-none">

     {/* Pricing tab 1 */}
     <PricingTab
          yearly={isAnnual}
          planName="Free"
          price={{ yearly: 0, monthly: 0 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            '20 message credits/month',
            '1 chatbot',
            '400,000 characters/chatbot',
            'Limit to 10 links to train on',
            'Embed on unlimited websites',
            'Upload multiple files',
            'View conversation history',
            'Capture leads'
          ]}
        />

         {/* Pricing tab 2 */}
         <PricingTab
          yearly={isAnnual}
          planName="Hobby"
          price={{ yearly: 190, monthly: 19 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            '2,500 message credits/month',
            '2 chatbots',
            '12,000,000 characters/chatbot',
            'Unlimited links to train on',
            'Embed on unlimited websites',
            'Upload multiple files',
            'Escalate to human',
            'View conversation history',
            'Chatbot analytics',
            'Capture leads',
            'API access',
            'Zapier integration',
            'Slack integration',
            'WordPress integration',
            'WhatsApp integration',
            'Messenger integration'
          ]}
        />
         {/* Pricing tab 3 */}
         <PricingTab
          yearly={isAnnual}
          popular={true}
          planName="Standard"
          price={{ yearly: 49, monthly: 55 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            '20,000 message credits/month',
            '5 chatbots',
            '15,000,000 characters/chatbot',
            'Unlimited links to train on',
            'Embed on unlimited websites',
            'Upload multiple files',
            'Escalate to human',
            'View conversation history',
            'Chatbot analytics',
            'Capture leads',
            'API access',
            'Zapier integration',
            'Slack integration',
            'WordPress integration',
            'WhatsApp integration',
            'Messenger integration',
            'Option to Choose GPT-4',
            'Image capabilities'
          ]}
        />

         {/* Pricing tab 4 */}
         <PricingTab
          yearly={isAnnual}
          planName="Unlimited"
          price={{ yearly: 3990, monthly: 399 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            '40,000 message credits/month',
            '20 chatbots',
            '20,000,000 characters/chatbot',
            'Unlimited links to train on',
            'Embed on unlimited websites',
            'Upload multiple files',
            'Escalate to human',
            'View conversation history',
            'Chatbot analytics',
            'Capture leads',
            'API access',
            'Zapier integration',
            'Slack integration',
            'WordPress integration',
            'WhatsApp integration',
            'Messenger integration',
            'Option to Choose GPT-4',
            'Image capabilities',
            'Remove "Powered by Elephant.ai"'
          ]}
        />
    </div>
    </div>

      {/* Render Confetti component when showConfetti is true */}
      {showConfetti && <Confetti />}
    </div>
  );
}
