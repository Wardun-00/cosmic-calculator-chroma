
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "UI/UX Design", level: 70 },
        { name: "Agile/Scrum", level: 75 },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{category.category}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
