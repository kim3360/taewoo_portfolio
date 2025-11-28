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
} from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Sass",
    ],
    tools: [
      "Git",
      "GitHub",
      "Figma",
      "VS Code",
      "Webpack",
      "Vite",
      "npm",
      "pnpm",
    ],
    additional: [
      "Responsive Design",
      "RESTful API",
      "GraphQL",
      "Performance Optimization",
      "SEO",
      "Accessibility",
    ],
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "현대적인 UI/UX를 갖춘 전자상거래 플랫폼. React와 TypeScript로 구축하여 장바구니, 결제, 사용자 인증 기능을 구현했습니다.",
      image: "../assets/project-1.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
      link: "#",
      liveDemo: "https://example.com/ecommerce",
      github: "https://github.com/example/ecommerce",
      details:
        "이 프로젝트는 완전한 전자상거래 플랫폼으로, 상품 검색, 장바구니 관리, 결제 처리, 주문 추적 등의 기능을 포함합니다. Redux를 사용한 상태 관리와 Stripe API를 통한 결제 처리가 구현되어 있습니다.",
    },
    {
      title: "Task Management App",
      description:
        "직관적인 드래그 앤 드롭 인터페이스를 갖춘 태스크 관리 애플리케이션. 실시간 동기화와 팀 협업 기능을 제공합니다.",
      image: "../assets/project-2.png",
      tags: ["Next.js", "React", "Framer Motion", "Firebase"],
      link: "#",
      liveDemo: "https://example.com/taskapp",
      github: "https://github.com/example/taskapp",
      details:
        "Framer Motion을 활용한 부드러운 드래그 앤 드롭 애니메이션과 Firebase Realtime Database를 통한 실시간 동기화가 특징입니다. 팀 멤버 초대, 권한 관리, 알림 기능 등이 포함되어 있습니다.",
    },
  ];

  const experiences = [
    {
      title: "시니어 프론트엔드 개발자",
      company: "테크 스타트업",
      period: "2022.03 - 현재",
      description:
        "React 기반 웹 애플리케이션 개발 및 팀 리딩. 성능 최적화로 로딩 속도 40% 개선, 컴포넌트 라이브러리 구축으로 개발 생산성 향상.",
    },
    {
      title: "프론트엔드 개발자",
      company: "디지털 에이전시",
      period: "2020.01 - 2022.02",
      description:
        "다양한 클라이언트 프로젝트의 프론트엔드 개발 담당. 반응형 웹사이트 및 랜딩 페이지 제작, 크로스 브라우저 호환성 확보.",
    },
    {
      title: "주니어 웹 개발자",
      company: "IT 솔루션 기업",
      period: "2018.06 - 2019.12",
      description:
        "웹 애플리케이션 유지보수 및 신규 기능 개발. HTML, CSS, JavaScript를 활용한 UI 구현 및 API 연동 작업.",
    },
  ];

  const education = [
    {
      school: "대학교",
      degree: "컴퓨터공학 학사",
      period: "2014.03 - 2018.02",
      description:
        "웹 개발, 데이터베이스, 알고리즘 등 컴퓨터과학 기초 학습. 캡스톤 프로젝트로 React 기반 웹 애플리케이션 개발.",
    },
    {
      school: "온라인 교육 플랫폼",
      degree: "Advanced React & TypeScript",
      period: "2021.06 - 2021.09",
      description:
        "React 고급 패턴, TypeScript 심화, 성능 최적화 등을 학습. 실무 프로젝트 기반 교육 이수.",
    },
    {
      school: "개발자 부트캠프",
      degree: "Full Stack Web Development",
      period: "2017.09 - 2018.02",
      description:
        "HTML, CSS, JavaScript, Node.js, MongoDB 등 풀스택 개발 기술 습득. 4개의 실무 프로젝트 완료.",
    },
  ];

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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimatedElement type="fadeInLeft">
                <div className="space-y-6">
                  <img
                    src="../assets/about-illustration.png"
                    alt="Developer Workspace"
                    className="rounded-lg w-full"
                  />
                </div>
              </ScrollAnimatedElement>
              <ScrollAnimatedElement type="fadeInRight">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    안녕하세요! 저는{" "}
                    <span className="text-foreground font-semibold">
                      5년 이상의 경력
                    </span>
                    을 가진 프론트엔드 개발자입니다. 사용자 중심의 인터페이스를
                    설계하고 구현하는 것에 열정을 가지고 있습니다.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    React와 TypeScript를 주력으로 사용하며, 성능 최적화와
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
      <section id="skills" className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimatedElement type="fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                Skills
              </h2>
            </ScrollAnimatedElement>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimatedElement type="scale" delay={0}>
                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Frontend</CardTitle>
                    <CardDescription>핵심 프론트엔드 기술</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement type="scale" delay={0.1}>
                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Tools</CardTitle>
                    <CardDescription>개발 도구 및 플랫폼</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement type="scale" delay={0.2}>
                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Additional</CardTitle>
                    <CardDescription>추가 기술 및 역량</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.additional.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ScrollAnimatedElement
                  key={index}
                  type="slideInUp"
                  delay={index * 0.1}
                >
                  <Card
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-primary/10"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                            {edu.degree}
                          </CardTitle>
                          <CardDescription>{edu.school}</CardDescription>
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
