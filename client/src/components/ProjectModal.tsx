import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Users, Link as LinkIcon, FileDown } from "lucide-react";
import { getSkillIcon } from "@/pages/Home";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    liveDemo?: string;
    github?: string;
    details?: string;
    period?: string;
    teamSize?: string;
    logo?: string;
    pdf?: string;
  } | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-card border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card/95 backdrop-blur-sm z-10">
                <div className="flex items-center gap-4">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="w-12 h-12 rounded-lg object-contain"
                    />
                  )}
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto flex-1">
                <div className="p-6 space-y-6">
                  {/* 프로젝트 설명 */}

                  {/* 이미지 */}
                  {project.image && (
                    <div className="relative overflow-hidden rounded-lg aspect-video bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      프로젝트 설명
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* 기술 스택 */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">기술 스택</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => {
                        const { Icon, color } = getSkillIcon(tag);
                        return (
                          <div
                            key={tag}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
                          >
                            <Icon className="w-5 h-5" style={{ color }} />
                            <span className="text-sm font-medium">{tag}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 참여인원, 기간, 관련 링크 */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {project.teamSize && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                          참여인원
                        </h4>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm">{project.teamSize}</span>
                        </div>
                      </div>
                    )}
                    {project.period && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                          기간
                        </h4>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm">{project.period}</span>
                        </div>
                      </div>
                    )}
                    {project.pdf && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                          PDF 파일
                        </h4>
                        <div className="flex items-center gap-2">
                          <FileDown className="w-4 h-4 text-primary" />
                          <a
                            href={project.pdf}
                            download
                            className="text-sm text-primary hover:underline"
                          >
                            PDF 다운로드
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 상세 내용 */}
                  {project.details && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">상세 내용</h3>
                      <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                          {project.details}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          라이브 데모
                        </Button>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
