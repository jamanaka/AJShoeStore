"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // For animations

// Example icon (Globe). You can replace with your own icon component or image.
function GlobeIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2.25c5.108 0 9.25 4.142 9.25 9.25s-4.142 9.25-9.25 9.25-9.25-4.142-9.25-9.25 4.142-9.25 9.25-9.25z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12h19.5M12 2.25c2.77 2.75 4.583 6.53 4.583 9.25s-1.813 6.5-4.583 9.25M12 2.25c-2.77 2.75-4.583 6.53-4.583 9.25s1.813 6.5 4.583 9.25"
      />
    </svg>
  );
}

// Your FAQ data
const faqsData = [
  {
    id: "faq-1",
    question: "How do I find the right shoe size?",
    answer:
      "We provide a detailed size chart on our product pages. You can also check our 'Size Guide' in the footer.",
  },
  {
    id: "faq-2",
    question: "What is your return policy?",
    answer:
      "You can return or exchange shoes within 30 days, provided they are in their original condition.",
  },
  {
    id: "faq-3",
    question: "Do you offer free shipping?",
    answer:
      "We offer free shipping on all orders over $100. Otherwise, a flat shipping fee applies.",
  },
  {
    id: "faq-4",
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you’ll receive an email with tracking information.",
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and other popular payment options.",
  },
  {
    id: "faq-6",
    question: "Are your shoes genuine and authentic?",
    answer:
      "Yes, all our products are 100% authentic and sourced directly from reputable brands.",
  },
  {
    id: "faq-7",
    question: "Do you offer discounts or promotions?",
    answer:
      "We regularly offer seasonal discounts. Subscribe to our newsletter to stay updated.",
  },
  {
    id: "faq-8",
    question: "Can I cancel my order after it’s placed?",
    answer:
      "Yes, you can cancel an order before it ships. Contact our support for assistance.",
  },
  {
    id: "faq-9",
    question: "How can I contact customer support?",
    answer:
      "Reach us via the Contact page, email, or live chat for quick assistance.",
  },
  {
    id: "faq-10",
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship within the US and Canada. We’re working on expanding to more regions soon.",
  },
];

const FAQ = () => {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Show More/Less state
  const [showAll, setShowAll] = useState(false);

  // Filter FAQs by searchQuery
  const filteredFaqs = faqsData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine how many items to display
  const visibleFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 5);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 lg:py-16 flex flex-col lg:flex-row gap-8">
      {/* Card-like container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg z-40 p-6 flex-1"
      >
        {/* Heading with icon */}
        <div className="flex items-center mb-4 space-x-2">
          <GlobeIcon className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for a question or keyword..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowAll(false); // optional reset
            }}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Accordion */}
        <Accordion type="multiple" collapsible>
          {visibleFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem
                value={faq.id}
                className="border-b last:border-none border-gray-200"
              >
                <AccordionTrigger
                  className="flex justify-between items-center py-3 px-0 text-left text-gray-800 font-semibold 
                             hover:text-gray-900 transition-colors
                             w-full focus:outline-none focus:ring-0
                             [&[data-state=open]>svg]:rotate-45
                             [&>svg]:transition-transform [&>svg]:duration-300"
                >
                  {faq.question}
                  {/* Plus sign (transforms to "x" or rotates on open, if desired) */}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 5v14m-7-7h14"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Show More/Less Button */}
        {filteredFaqs.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-blue-500 hover:text-blue-700 transition-colors"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:block flex-1"
      >
        <Image
          src="/faq.jpg"
          alt="FAQ"
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default FAQ;