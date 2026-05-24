import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Users, Link as LinkIcon, FileDown } from "lucide-react";
import { getSkillIcon } from "@/entities/skill/lib/skillIcons";
import { Button } from "@/shared/ui/button";
import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string[];
    tags: string[];
    link: string;
    liveDemo?: string;
    github?: string;
    details?: string;
    period?: string;
    teamSize?: string;
    members?: string;
    logo?: string;
    pdf?: string;
  } | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

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
              <div className=" static top-0 flex items-center justify-between p-6 border-b border-border bg-card/95 backdrop-blur-sm z-10">
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
                  {project.image && project.image.length > 0 && (
                    <div className="space-y-4">
                      {/* 메인 이미지 - 모바일 프레임 */}
                      <div className="relative">
                        <style>{`
                          .project-swiper .swiper-pagination-bullet {
                            background: rgba(156, 163, 175, 0.5) !important;
                            opacity: 1;
                          }
                          .project-swiper .swiper-pagination-bullet-active {
                            background: blue !important;
                          }
                        `}</style>
                        {project.image.length === 1 ? (
                          // 이미지가 1개일 때는 일반 이미지로 표시
                          <div className="flex justify-center items-center">
                            {/* 스크린 */}
                            <div className="relative w-full max-w-[760px] aspect-[760/469] overflow-hidden rounded-lg shadow-inner">
                              <img
                                src={project.image[0]}
                                alt={`${project.title} - 이미지`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        ) : (
                          // 이미지가 여러 개일 때는 Swiper 사용
                          <>
                            {project.image.length > 1 && (
                              <>
                                <button
                                  ref={prevRef}
                                  className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white shadow-lg backdrop-blur hover:bg-primary transition-all flex items-center justify-center"
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                  ref={nextRef}
                                  className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white shadow-lg backdrop-blur hover:bg-primary transition-all flex items-center justify-center"
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </button>
                              </>
                            )}

                            <Swiper
                              modules={[
                                Navigation,
                                Pagination,
                                Autoplay,
                                Thumbs,
                              ]}
                              loop={project.image.length > 3}
                              autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                              }}
                              navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                              }}
                              onBeforeInit={(swiper) => {
                                if (
                                  swiper.params.navigation &&
                                  typeof swiper.params.navigation !== "boolean"
                                ) {
                                  swiper.params.navigation.prevEl =
                                    prevRef.current;
                                  swiper.params.navigation.nextEl =
                                    nextRef.current;
                                }
                              }}
                              pagination={
                                project.image.length > 3
                                  ? { clickable: true, dynamicBullets: true }
                                  : false
                              }
                              thumbs={{ swiper: thumbsSwiper }}
                              breakpoints={{
                                320: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                640: {
                                  slidesPerView: 2,
                                  spaceBetween: 15,
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 20,
                                },
                              }}
                              className="project-swiper rounded-3xl overflow-visible h-[480px]"
                            >
                              {project.image.map((img, index) => (
                                <SwiperSlide key={index}>
                                  <div className="flex justify-center items-center">
                                    <div className="relative w-[200px] h-[430px] rounded-[2rem] overflow-hidden bg-black shadow-inner">
                                      <img
                                        src={img}
                                        alt={`${project.title} - 이미지 ${index + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </>
                        )}
                      </div>
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
                    {project.members && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                          참여인원
                        </h4>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm">{project.members}</span>
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
                    {project.liveDemo ? (
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
                    ) : (
                      <div className="flex-1">
                        <Button
                          disabled
                          className="w-full bg-primary/50 hover:bg-primary/50 cursor-not-allowed opacity-60"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          라이브 데모
                        </Button>
                      </div>
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
