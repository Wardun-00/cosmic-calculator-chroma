
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">About Me</h2>
      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Hello! I'm [Your Name], a passionate full-stack developer with a keen eye for creating
                beautiful, functional, and user-friendly websites and applications. 
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I began my journey in web development when I was in college, fascinated by how 
                technology could be used to solve real-world problems. Since then, I've worked on 
                numerous projects, constantly learning and improving my skills.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                When I'm not coding, you can find me hiking in the mountains, reading a good book, 
                or experimenting with new recipes in the kitchen.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 text-xs font-medium mr-3">
                    Location
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    New York, NY
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 text-xs font-medium mr-3">
                    Experience
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    5+ years in web development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 text-xs font-medium mr-3">
                    Education
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    BSc in Computer Science
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 text-xs font-medium mr-3">
                    Interests
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    AI, Open Source, UI/UX Design
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMe;
