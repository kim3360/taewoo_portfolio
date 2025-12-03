import ScrollAnimatedElement from "@/components/ScrollAnimatedElement";
import { skills } from "@/constants";
import { getSkillIcon } from "@/lib/skillIcons";

export const SkillComponent = () => {
  return (
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
                            <p className="text-center font-medium text-sm ">
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
  );
};
{
  /* Skills Section */
}
