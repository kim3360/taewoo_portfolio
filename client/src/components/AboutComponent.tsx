import ScrollAnimatedElement from "@/components/ScrollAnimatedElement";
import { Code2, Palette, Smartphone } from "lucide-react";

export const AboutComponent = () => {
  return (
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
              <div className=" ">
                <img
                  src="../assets/aboutme.jpeg"
                  alt="Developer Workspace"
                  className="rounded-lg  "
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
                  React와 TypeScript를 주력으로 학습하며, 성능 최적화와 접근성을
                  고려한 웹 애플리케이션 개발을 지향합니다. 새로운 기술을 배우고
                  적용하는 것을 즐기며, 팀과의 협업을 통해 더 나은 결과물을
                  만들어내는 것을 중요하게 생각합니다.
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
  );
};
