import ScrollAnimatedElement from "@/components/ScrollAnimatedElement";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export const MainComponent = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
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
              기능적인 웹 애플리케이션을 만듭니다. 사용자의 니즈를 이해하고 그에
              맞는 솔루션을 제공하는 것이 저의 목표입니다.
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
                  0+
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  5+
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  5+
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
  );
};
