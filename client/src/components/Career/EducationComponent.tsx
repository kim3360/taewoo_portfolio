import ScrollAnimatedElement from "@/components/ScrollAnimatedElement";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap } from "lucide-react";
import { education } from "@/constants";

export const EducationComponent = () => {
  return (
    <section id="education" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimatedElement type="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Education
            </h2>
          </ScrollAnimatedElement>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <ScrollAnimatedElement
                key={index}
                type="fadeInRight"
                delay={index * 0.1}
              >
                <Card className="border-l-4 border-l-accent">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-accent" />
                          {edu.school}
                        </CardTitle>
                        <CardDescription>{edu.degree}</CardDescription>
                      </div>
                      <Badge variant="outline" className="ml-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
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
