import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ScrollAnimatedElement from "@/components/ScrollAnimatedElement";
import ProjectModal from "@/components/ProjectModal";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Smartphone,
  Briefcase,
  GraduationCap,
  Calendar,
  Code,
  FileCode,
  Layers,
  Box,
  Settings,
  Zap,
  Globe,
  Rocket,
  GitBranch,
  Terminal,
  Package,
  Monitor,
  Smartphone as SmartphoneIcon,
  Gauge,
  Search,
  Cloud,
  Workflow,
  Figma,
  Slack,
  FileText,
  Book,
  Clock,
  Users,
} from "lucide-react";
import { skills, projects, experiences, education } from "@/constants";
import {
  SiReact,
  SiReactrouter,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiZod,
  SiReactquery,
  SiStorybook,
  SiGit,
  SiGithub,
  SiFigma,
  SiSlack,
  SiWebpack,
  SiVite,
  SiNpm,
  SiPnpm,
  SiYarn,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

// 스킬 아이콘과 색상 매핑
export const getSkillIcon = (skill: string) => {
  const iconMap: Record<
    string,
    {
      Icon: React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
      }>;
      color: string;
    }
  > = {
    // Frontend
    React: { Icon: SiReact, color: "#61DAFB" },
    "React Native": { Icon: SiReact, color: "#61DAFB" },
    TypeScript: { Icon: SiTypescript, color: "#3178C6" },
    JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
    HTML5: { Icon: SiHtml5, color: "#E34F26" },
    CSS3: { Icon: SiCss3, color: "#1572B6" },
    "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
    Zustand: { Icon: Box, color: "#764ABC" },
    ZOD: { Icon: SiZod, color: "#3E63DD" },
    "TanstackQuery(ReactQuery)": { Icon: SiReactquery, color: "#FF4154" },
    Storybook: { Icon: SiStorybook, color: "#FF4785" },
    "React-Router-Dom v6": { Icon: SiReactrouter, color: "#CA4245" },
    // Tools
    Git: { Icon: FaGitAlt, color: "#F05032" },
    GitHub: { Icon: SiGithub, color: "#181717" },
    Figma: { Icon: SiFigma, color: "#F24E1E" },
    Slack: { Icon: SiSlack, color: "#4A154B" },
    "VS Code": { Icon: Code2, color: "#007ACC" },
    Cursor: { Icon: Terminal, color: "#000000" },
    Webpack: { Icon: SiWebpack, color: "#8DD6F9" },
    Vite: { Icon: SiVite, color: "#646CFF" },
    npm: { Icon: SiNpm, color: "#CB3837" },
    pnpm: { Icon: SiPnpm, color: "#F69220" },
    yarn: { Icon: SiYarn, color: "#2C8EBB" },
    Postman: { Icon: SiPostman, color: "#FF6C37" },
    // Additional
    "Responsive Design": { Icon: Monitor, color: "#6366F1" },
    "RESTful API": { Icon: Globe, color: "#3B82F6" },
    "Performance Optimization": { Icon: Gauge, color: "#10B981" },
    SEO: { Icon: Search, color: "#8B5CF6" },
    SSE: { Icon: Cloud, color: "#06B6D4" },
    Vercel: { Icon: SiVercel, color: "#000000" },
    "CI/CD": { Icon: Workflow, color: "#7C3AED" },
  };

  return iconMap[skill] || { Icon: Code2, color: "#6366F1" };
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6 mt-8">
            <ScrollAnimatedElement type="fadeInUp" delay={0}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-muted-foreground">안녕하세요</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  프론트엔드 개발자
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  김태우
                </span>
                <span className="text-muted-foreground">입니다</span>
              </h1>
            </ScrollAnimatedElement>
            <ScrollAnimatedElement type="fadeInUp" delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-6">
                React, TypeScript, 그리고 모던 웹 기술을 활용하여 아름답고
                기능적인 웹 애플리케이션을 만듭니다. 사용자의 니즈를 이해하고
                그에 맞는 솔루션을 제공하는 것이 저의 목표입니다.
              </p>
            </ScrollAnimatedElement>
            <ScrollAnimatedElement type="fadeInUp" delay={0.2}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                  className="bg-primary hover:bg-primary/90"
                >
                  프로젝트 보기
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("#contact")}
                >
                  연락하기
                </Button>
              </div>
            </ScrollAnimatedElement>
            <ScrollAnimatedElement type="fadeInUp" delay={0.3}>
              <div className="flex items-center justify-center gap-4 pt-8">
                <a
                  href="https://github.com/kim3360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a> */}
                <a
                  href="mailto:rlaxkd1226@naver.com"
                  className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement type="fadeInUp" delay={0.4}>
              <div className="grid grid-cols-3 gap-6 pt-12 mt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    5+
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Years Experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    20+
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Projects Completed
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Happy Clients
                  </p>
                </div>
              </div>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimatedElement type="fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                About Me
              </h2>
            </ScrollAnimatedElement>
            <div className="grid md:grid-cols-2 gap-5 items-center">
              <ScrollAnimatedElement type="fadeInLeft">
                <div className="ml-15">
                  <img
                    src="../assets/aboutme.jpeg"
                    alt="Developer Workspace"
                    className="rounded-lg w-[400px] h-[500px]"
                  />
                </div>
              </ScrollAnimatedElement>
              <ScrollAnimatedElement type="fadeInRight">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    안녕하세요! 저는{" "}
                    <span className="text-foreground font-semibold">
                      프론트엔드 개발자
                    </span>
                    가 되기 위해 꾸준히 학습하고 있는 신입 개발자입니다. 사용자
                    중심의 인터페이스를 설계하고 구현하는 것에 열정을 가지고
                    있으며, 끊임없이 성장하고자 합니다.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    React와 TypeScript를 주력으로 학습하며, 성능 최적화와
                    접근성을 고려한 웹 애플리케이션 개발을 지향합니다. 새로운
                    기술을 배우고 적용하는 것을 즐기며, 팀과의 협업을 통해 더
                    나은 결과물을 만들어내는 것을 중요하게 생각합니다.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <Code2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Clean Code</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <Palette className="w-8 h-8 mx-auto mb-2 text-accent" />
                      <p className="text-sm font-medium">UI/UX Design</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <Smartphone className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Responsive</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 ">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimatedElement type="fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Skills
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                제가 사용하는 기술 스택입니다
              </p>
            </ScrollAnimatedElement>

            <div className="space-y-12">
              {/* Frontend Skills */}
              <ScrollAnimatedElement type="fadeInUp" delay={0}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    <h3 className="text-2xl font-bold">Frontend</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.frontend.map((skill) => {
                      const { Icon, color } = getSkillIcon(skill);
                      return (
                        <div
                          key={skill}
                          className="group relative rounded-lg border border-border hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                          <div className="absolute inset-[2px] rounded-lg bg-card"></div>
                          <div className="relative p-4">
                            <div className="flex items-center gap-3 relative z-10">
                              <Icon
                                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                                style={{ color }}
                              />
                              <p className="text-center font-medium text-sm">
                                {skill}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollAnimatedElement>

              {/* Tools */}
              <ScrollAnimatedElement type="fadeInUp" delay={0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                    <h3 className="text-2xl font-bold">Tools</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.tools.map((skill) => {
                      const { Icon, color } = getSkillIcon(skill);
                      return (
                        <div
                          key={skill}
                          className="group relative rounded-lg border border-border hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                          <div className="absolute inset-[2px] rounded-lg bg-card"></div>
                          <div className="relative p-4">
                            <div className="flex items-center gap-2 relative z-10">
                              <Icon
                                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                                style={{ color }}
                              />
                              <p className="text-center font-medium text-sm">
                                {skill}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollAnimatedElement>

              {/* Additional Skills */}
              <ScrollAnimatedElement type="fadeInUp" delay={0.2}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
                    <h3 className="text-2xl font-bold">Additional</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.additional.map((skill) => {
                      const { Icon, color } = getSkillIcon(skill);
                      return (
                        <div
                          key={skill}
                          className="group relative rounded-lg border border-border hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                          <div className="absolute inset-[2px] rounded-lg bg-card"></div>
                          <div className="relative p-4">
                            <div className="flex items-center gap-3 relative z-10">
                              <Icon
                                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                                style={{ color }}
                              />
                              <p className="text-center font-medium text-sm">
                                {skill}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollAnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
      </section>

      {/* Experience Section */}
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

      {/* Education Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimatedElement type="fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                새로운 프로젝트나 협업 기회에 대해 이야기 나누고 싶으시다면
                언제든지 연락주세요!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  이메일 보내기
                </button>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-primary/20 rounded-lg transition-colors border border-border"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-primary/20 rounded-lg transition-colors border border-border"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {isProjectModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
        />
      )}

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
