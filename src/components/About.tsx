import React from "react";
import { BookOpen, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center pt-16 bg-[url('/src/assets/bgSatu.jpg')] bg-cover bg-no-repeat bg-center bg-fixed relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-900 before:to-emerald-950 before:opacity-90 before:-z-10"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              alt="Working at desk"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Who I Am
            </h3>
            <p className="text-gray-100 mb-6 drop-shadow-sm">
              I'm a passionate developer with over 1 years of experience in
              creating web applications. I love turning complex problems into
              simple, beautiful, and intuitive solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary">Education</h4>
                  <p className="text-gray-100 drop-shadow-sm">
                    Business Information Sistem at State Polytechnic of Malang
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Award className="text-green-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary">Experience</h4>
                  <p className="text-gray-100 drop-shadow-sm">
                    1 years in web development
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Heart className="text-purple-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary">Passion</h4>
                  <p className="text-gray-100 drop-shadow-sm">
                    Creating web applications and API Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default About;
