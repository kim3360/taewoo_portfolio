import Navigation from "@/components/Navigation";

import { MainComponent } from "@/components/MainComponent";
import { AboutComponent } from "@/components/AboutComponent";
import { SkillComponent } from "@/components/SkillComponent";
import { ProjectComponent } from "@/components/Project/ProjectComponent";
import { ExperienceComponent } from "@/components/Career/ExperienceComponent";
import { EducationComponent } from "@/components/Career/EducationComponent";
import { ContactComponent } from "@/components/ContactComponent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <MainComponent />

      <AboutComponent />

      <SkillComponent />

      <ProjectComponent />

      <ExperienceComponent />

      <EducationComponent />

      <ContactComponent />
    </div>
  );
}
