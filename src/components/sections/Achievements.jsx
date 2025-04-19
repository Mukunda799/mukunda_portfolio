// src/components/Achievements.js

import React from "react";

const Achievements = () => {
  return (
    <section className="py-10 bg-gray-100" id="achievements">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Achievements & Certifications
        </h2>
        <div className="flex justify-center">
          <img
            src="/images/achievements-certifications.png"
            alt="Achievements and Certifications"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
