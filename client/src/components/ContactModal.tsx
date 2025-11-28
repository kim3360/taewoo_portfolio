import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("모든 필드를 입력해주세요");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("유효한 이메일을 입력해주세요");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending email
    setTimeout(() => {
      toast.success("메시지가 전송되었습니다! 곧 연락드리겠습니다.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            연락하기
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              name="name"
              placeholder="이름을 입력해주세요"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">메시지</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="메시지를 입력해주세요"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              취소
            </Button>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "전송 중..." : "전송"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
