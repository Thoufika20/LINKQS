import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Clock, Sparkles, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: form.name.trim(), 
            email: form.email.trim(), 
            message: form.message.trim() 
          }
        ]);

      if (error) throw error;

      toast({ 
        title: "Message sent!", 
        description: "We've received your project details and will get back to you soon." 
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({ 
        title: "Error sending message", 
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  const perks = [
    { icon: Clock, title: "24-hour response", desc: "We reply to every inquiry within one business day." },
    { icon: Sparkles, title: "Free discovery call", desc: "30-min strategy session — no commitment required." },
    { icon: Mail, title: "Direct line", desc: "Talk straight with engineers, not sales reps." },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[160px]" />

      <div className="container relative mx-auto px-5 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-5">
            <MessageSquare size={14} className="text-primary" />
            <span className="text-caption font-semibold tracking-[0.25em] uppercase text-primary">
              Let's Talk
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-[-0.01em] leading-[1.2] sm:leading-tight">
            Have an idea?{" "}
            <span className="gradient-text">Let's build it.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Tell us where you are. We'll show you how to get where you want to be.
          </p>
        </div>

        {/* Two-column layout: perks left, form right */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left — perks */}
          <aside className="lg:col-span-2 space-y-5">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass rounded-2xl p-6 sm:p-7 card-shadow transition-all duration-300 hover:-translate-y-1 hover:elevated-shadow"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-primary-foreground mb-4 shadow-lg">
                  <Icon size={22} />
                </div>
                <h3 className="text-foreground mb-1.5">{title}</h3>
                <p className="text-caption text-muted-foreground">{desc}</p>
              </div>
            ))}
          </aside>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-3xl p-7 sm:p-10 elevated-shadow space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-caption mb-2 block font-semibold text-foreground/85">
                  Your name
                </label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-10 sm:h-12 bg-card/60 border-border/60 focus:border-primary/50 text-sm"
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-caption mb-2 block font-semibold text-foreground/85">
                  Work email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-10 sm:h-12 bg-card/60 border-border/60 focus:border-primary/50 text-sm"
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-caption mb-2 block font-semibold text-foreground/85">
                Project details
              </label>
              <Textarea
                id="message"
                placeholder="Briefly tell us what you're building, your timeline, and goals..."
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-card/60 border-border/60 focus:border-primary/50 resize-none text-sm"
                maxLength={1000}
              />
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full h-10 sm:h-16 text-sm sm:text-lg" disabled={loading}>
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </Button>
            <p className="text-center text-caption text-muted-foreground">
              🔒 Your info is safe. We never share your details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
