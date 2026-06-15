import { useState } from 'react';
import { Phone, MapPin, MessageCircle, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SectionHeading from '@/components/SectionHeading';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and email are required.",
        variant: "destructive",
      });
      return;
    }

    // Construct WhatsApp message
    const message = encodeURIComponent(
      `Hello Al Jazyah Trading!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service || 'Not specified'}\n\nMessage: ${formData.message || 'I would like to request a quote.'}`
    );

    window.open(`https://wa.me/971507000913?text=${message}`, '_blank');

    toast({
      title: "Opening WhatsApp",
      description: "Your inquiry is being sent via WhatsApp.",
    });

    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-luxury relative z-10">
        <SectionHeading
          subtitle="Get In Touch"
          title="Let's Create Your Green Sanctuary"
          rightElement={
            <div className="hidden md:block self-end mb-2">
              <p className="text-muted-foreground max-w-sm text-right">
                Ready to transform your space? Reach out for a free consultation and quote.
              </p>
            </div>
          }
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col h-full space-y-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">Visit Us</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Mina Irani Market<br />
                    Abu Dhabi, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">Call Us</h4>
                  <div className="space-y-1">
                    <a
                      href="tel:+971507000913"
                      className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      +971 50 700 0913
                    </a>
                    <a
                      href="tel:+971506914302"
                      className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      +971 50 691 4302
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">WhatsApp</h4>
                  <a
                    href="https://wa.me/971507000913"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed - Flex grow to fill height */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-border/20 flex-1 min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.7!2d54.3773!3d24.4539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMina%20Irani%20Market!5e0!3m2!1sen!2sae!4v1600000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Jazyah Trading Location"
                className="grayscale hover:grayscale-0 transition-all duration-500 w-full h-full"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="luxury-card p-8 md:p-10">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Your Name *"
                  aria-label="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted/30 border-transparent focus:bg-white transition-all h-12 rounded-xl"
                  maxLength={100}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Phone Number *"
                  aria-label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-muted/30 border-transparent focus:bg-white transition-all h-12 rounded-xl"
                  maxLength={20}
                />
                <Input
                  placeholder="Email Address *"
                  aria-label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/30 border-transparent focus:bg-white transition-all h-12 rounded-xl"
                  maxLength={255}
                />
              </div>
              <div>
                <select
                  value={formData.service}
                  aria-label="Select Service Required"
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-12 px-3 rounded-xl border-transparent bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:bg-white transition-all"
                >
                  <option value="">Select Service Required</option>
                  <option value="soft-landscaping">Soft Landscaping</option>
                  <option value="hard-landscaping">Hard Landscaping</option>
                  <option value="irrigation">Irrigation Systems</option>
                  <option value="water-features">Water Features</option>
                  <option value="indoor-plants">Indoor Plants Supply</option>
                  <option value="maintenance">Garden Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  aria-label="Tell us about your project"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted/30 border-transparent focus:bg-white transition-all min-h-[150px] rounded-xl resize-none"
                  maxLength={1000}
                />
              </div>
              <Button type="submit" className="w-full rounded-xl py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                <Send className="w-4 h-4 mr-2" />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
