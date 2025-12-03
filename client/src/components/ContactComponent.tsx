import ScrollAnimatedElement from "@/components/ScrollAnimatedElement";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export const ContactComponent = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
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
      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};
