import ScrollAnimatedElement from "@/components/ScrollAnimatedElement";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";
import { experiences } from "@/constants";

export const ExperienceComponent = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimatedElement type="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Experience
            </h2>
          </ScrollAnimatedElement>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ScrollAnimatedElement
                key={index}
                type="fadeInLeft"
                delay={index * 0.1}
              >
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="ml-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
