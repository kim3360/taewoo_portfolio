import ScrollAnimatedElement from "@/components/ScrollAnimatedElement";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import { projects } from "@/constants";
import { useState } from "react";
import ProjectModal from "@/components/Project/ProjectModal";

export const ProjectComponent = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimatedElement type="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Projects
            </h2>
          </ScrollAnimatedElement>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimatedElement
                key={index}
                type="slideInUp"
                delay={index * 0.1}
              >
                <Card
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-primary/10 h-[500px] "
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {project.period && (
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                      )}
                      {project.teamSize && (
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          <span>{project.teamSize}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isProjectModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
        />
      )}
    </section>
  );
};
