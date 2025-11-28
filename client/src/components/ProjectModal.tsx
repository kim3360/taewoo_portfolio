import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
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
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card/95 backdrop-blur-sm">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">개요</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Details */}
                {project.details && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">상세 정보</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.details}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">기술 스택</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        라이브 데모
                      </Button>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
