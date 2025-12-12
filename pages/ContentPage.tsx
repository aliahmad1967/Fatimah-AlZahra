import { motion } from "framer-motion";
import React from "react";
import { ContentSection } from "../data/detailedContent";

interface ContentPageProps {
  data: ContentSection;
}

export const ContentPage: React.FC<ContentPageProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-10"
    >
      {/* Header */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-amiri font-bold text-fatima-teal mb-6 leading-tight"
        >
          {data.title}
        </motion.h1>
        <div className="w-32 h-1 bg-fatima-gold mx-auto rounded-full"></div>
      </div>

      {/* Content Body */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-fatima-gold/10">
          <div className="prose prose-lg md:prose-xl prose-stone max-w-none font-kufi">
            {/* We will render the content safely. 
              Since we are using simple string replacement for newlines in a basic implementation, 
              we can map the content to paragraphs or use a markdown renderer if available (which we didn't add to package.json yet).
              For now, we will handle basic line breaks and simple formatting manually or assume basic whitespace handling
              But wait, I added react-markdown to my mental plan but not to package.json.
              To avoid errors, I should implement a simple renderer or add the package.
              Let's use a simple split and render for now to be safe without extra deps, or just whitespace-pre-wrap.
            */}
            <div className="whitespace-pre-wrap leading-loose text-fatima-dark/90">
              {data.content.split("\n").map((line, i) => {
                // Simple parsing for headers and bullets
                if (line.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-2xl font-bold text-fatima-teal mt-8 mb-4 font-amiri"
                    >
                      {line.replace("### ", "")}
                    </h3>
                  );
                }
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <strong
                      key={i}
                      className="block text-xl text-fatima-teal mt-6 mb-2"
                    >
                      {line.replace(/\*\*/g, "")}
                    </strong>
                  );
                }
                // Bold starting line (e.g. numbered list with bold)
                const boldMatch = line.match(/^\d+\.\s\*\*(.*?)\*\*(.*)/);
                if (boldMatch) {
                  return (
                    <p key={i} className="mb-4">
                      <span className="font-bold text-fatima-accent">
                        {boldMatch[1]}
                      </span>
                      {boldMatch[2]}
                    </p>
                  );
                }
                const bulletBoldMatch = line.match(/^\*\s\*\*(.*?)\*\*(.*)/);
                if (bulletBoldMatch) {
                  return (
                    <p
                      key={i}
                      className="mb-4 list-item list-inside marker:text-fatima-gold"
                    >
                      <span className="font-bold text-fatima-teal">
                        {bulletBoldMatch[1]}
                      </span>
                      {bulletBoldMatch[2]}
                    </p>
                  );
                }

                if (line.startsWith("* ")) {
                  return (
                    <li
                      key={i}
                      className="list-disc list-inside marker:text-fatima-gold mb-2"
                    >
                      {line.replace("* ", "")}
                    </li>
                  );
                }

                if (line.trim() === "") return <br key={i} />;

                return (
                  <p key={i} className="mb-4">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
