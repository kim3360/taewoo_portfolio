import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TimelineRow } from "@/shared/ui/TimelineRow";
import { profile, activities } from "@/entities/profile";
import { education } from "@/entities/education";
import { getSkillIcon } from "@/entities/skill";
import { scrollToSection } from "@/shared/lib/scrollTo";
import { Marquee, MarqueeItem } from "@/shared/ui/Marquee";
import { HERO_MARQUEE_ITEMS } from "@/entities/site";
import { IdBadge } from "./IdBadge";

const LANDING_SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "React Native", "Tailwind CSS"],
  },
  {
    label: "Tools",
    skills: ["GitHub", "Figma", "Vite", "TanstackQuery"],
  },
] as const;

function LandingSectionHead({ children }: { children: ReactNode }) {
  return <h2 className="landing-section-head">{children}</h2>;
}

export function HomeLanding() {
  return (
    <section id="home" className="landing-screen relative flex flex-col pt-14 md:pt-16">
      <div className="container landing-layout flex-1 flex flex-col min-h-0 py-3 md:py-4 relative z-10">
        <div className="landing-columns flex-1 min-h-0">
          {/* 좌측 */}
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="landing-col landing-col--left min-h-0"
          >
            <h1 className="landing-career-title shrink-0">CAREER</h1>
            <div className="landing-badge-wrap shrink-0">
              <IdBadge />
            </div>
            <section className="landing-about-panel flex-1 min-h-0 flex flex-col">
              <LandingSectionHead>About Me</LandingSectionHead>
              <div className="flex-1 min-h-0 overflow-y-auto landing-panel__scroll">
                <p className="landing-about text-xs md:text-sm text-foreground/85 leading-[1.8] whitespace-pre-line">
                  {profile.aboutFrontend}
                </p>
              </div>
            </section>
          </motion.aside>

          {/* 중앙+우측: Education | Activities + Skills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="landing-col landing-col--split min-h-0"
          >
            <section className="landing-block landing-block--edu">
              <LandingSectionHead>Education</LandingSectionHead>
              <div className="landing-timeline">
                {education.map((edu, i) => (
                  <TimelineRow
                    key={edu.school}
                    compact
                    period={edu.period.replace(" ~ ", " – ")}
                    title={edu.school}
                    subtitle={edu.degree}
                    isLast={i === education.length - 1}
                  />
                ))}
              </div>
            </section>

            <section className="landing-block landing-block--act">
              <LandingSectionHead>Activities</LandingSectionHead>
              <div className="landing-timeline landing-timeline--activities">
                {activities.map((item, i) => (
                  <TimelineRow
                    key={item.title}
                    compact
                    period={item.period}
                    title={item.title}
                    subtitle={item.subtitle}
                    isLast={i === activities.length - 1}
                  />
                ))}
              </div>
            </section>

            <section className="landing-block landing-block--skills">
              <LandingSectionHead>Skills</LandingSectionHead>
              <div className="landing-skills">
                {LANDING_SKILL_GROUPS.map((group) => (
                  <div key={group.label} className="landing-skill-group">
                    <p className="landing-skill-group__label">{group.label}</p>
                    <div className="landing-skill-group__icons">
                      {group.skills.map((skill) => {
                        const { Icon, color } = getSkillIcon(skill);
                        return (
                          <span
                            key={skill}
                            className="landing-skill-icon"
                            title={skill}
                            style={{ color }}
                          >
                            <Icon className="w-5 h-5 md:w-6 md:h-6" />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>

        <footer className="landing-footer shrink-0 pt-3 md:pt-4">
          <div className="landing-footer__marquee border-y border-border/50 py-2.5 marquee-fade -mx-4 md:-mx-6">
            <Marquee speed="slow">
              {HERO_MARQUEE_ITEMS.map((item) => (
                <MarqueeItem
                  key={item}
                  className="text-[10px] italic text-muted-foreground/60 uppercase tracking-wider"
                >
                  {item}
                </MarqueeItem>
              ))}
            </Marquee>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("#skills")}
            className="w-full text-center text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground hover:text-pearl-accent transition-colors py-2"
          >
            ↓ Scroll to explore
          </button>
        </footer>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("#skills")}
        aria-label="기술 스택 보기"
        className="scroll-fab"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
