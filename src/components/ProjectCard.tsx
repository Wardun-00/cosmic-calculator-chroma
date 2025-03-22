
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  demoLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        {demoLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </a>
          </Button>
        )}
        {githubLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
