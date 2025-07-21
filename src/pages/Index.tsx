import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Twitter, Users, Zap, TrendingUp, Shield, Headphones, Star, MessageSquare } from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      company: "$BOINK",
      token: "$BOINK",
      role: "Social Media & Community Coordinator",
      achievement: "As a Social Media & Community Coordinator, I supported Boinks Web3 project's grassroots growth by managing Telegram-based community engagement, creating meme content for viral marketing, coordinating raid and shill activities, and helping establish connections with other blockchain communities. My work contributed to user acquisition, brand awareness, and ecosystem expansion.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      company: "@doms4ever",
      token: "$DOMS",
      role: "Content Creator & Community Manager",
      achievement: "Created and curated content, including raid guides, event announcements, and community spotlights, increasing engagement metrics",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      company: "@SOLANADEADS", 
      token: "$DEAD",
      role: "Raid Team Leader",
      achievement: "Led raid teams through Mythic raids, achieving Top 2 on Raidar Trending milestones top 10 guild ranking",
      icon: <Star className="w-5 h-5" />
    },
    {
      company: "@BONKER",
      token: "Community",
      role: "Community Event Host",
      achievement: "Hosted weekly community events, including in-game tournaments and livestreams, increasing member participation",
      icon: <Headphones className="w-5 h-5" />
    },
    {
      company: "$ROTH Ira on Solana",
      token: "$ROTH",
      role: "Recruitment & Training Lead",
      achievement: "Recruited and trained new raiders, establishing onboarding processes that reduced team integration time",
      icon: <Users className="w-5 h-5" />
    },
    {
      company: "@WienerDogeSolana",
      token: "Community",
      role: "Senior Moderator",
      achievement: "Moderated community channels, resolving conflicts and enforcing guidelines to maintain a respectful atmosphere, reducing reported incidents",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const skills = [
    "DeFi Protocol Analysis",
    "Community Management", 
    "Discord Moderation",
    "X (Twitter) Raiding",
    "MEE6 Configuration",
    "Engagement Strategies",
    "NFT Communities",
    "Web3 Education",
    "Event Hosting",
    "Team Leadership"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground font-sans">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent/70 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-primary opacity-60"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-animated opacity-20 animate-gradient-shift bg-300%"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in">
          <div className="mb-12">
            <div className="mt-16 mb-8 animate-slide-up">
              <img 
                src="/lovable-uploads/4957b470-a480-4c82-8f5d-d91d43ea321c.png" 
                alt="Zæňe Avatar" 
                className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full shadow-glow border-2 border-primary/30 hover:scale-110 transition-all duration-500"
              />
            </div>
            <h1 className="text-7xl md:text-9xl font-display font-black mb-6 bg-gradient-text bg-clip-text text-transparent animate-pulse-glow leading-tight">
              Zæňe
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-xl px-6 py-3 bg-gradient-card backdrop-blur-md border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Zap className="w-5 h-5 mr-2 text-primary" />
                DeFi Explorer
              </Badge>
              <Badge variant="secondary" className="text-xl px-6 py-3 bg-gradient-card backdrop-blur-md border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Web3 Enthusiast
              </Badge>
              <Badge variant="secondary" className="text-xl px-6 py-3 bg-gradient-card backdrop-blur-md border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                3+ Years Experience
              </Badge>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-10 leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <span className="text-primary font-medium">Community Moderator</span> • <span className="text-accent font-medium">X Raider</span> • <span className="text-primary font-medium">Web3 Discord Expert</span>
            <br />
            Skilled in engagement & tools like <span className="text-accent font-semibold">MEE6</span>
            <br />
            <span className="text-primary font-medium">NFTs</span> ➠ <span className="text-accent font-medium">Community Growth Strategies Expert</span> • <span className="text-primary font-medium">Shills Spaces 🎙️ Host</span>
          </p>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '1s' }}>
            <p className="text-3xl md:text-4xl font-display font-bold text-transparent bg-gradient-text bg-clip-text mb-10">
              Welcome to My Raid/Mod Job Portfolio
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              I'm thrilled you're checking out my work as a <span className="text-primary font-semibold">Raid/Mod professional</span>. This portfolio showcases my experience in creating <span className="text-accent font-semibold">engaging, inclusive, and well-moderated</span> online communities. From managing <span className="text-primary font-semibold">high-energy raids</span> to ensuring <span className="text-accent font-semibold">safe and fun environments</span>, I bring passion and precision to every project.
            </p>
          </div>

          <Button 
            size="lg" 
            className="mt-12 mb-20 bg-gradient-accent hover:shadow-intense transition-all duration-500 text-xl px-12 py-6 font-display font-semibold animate-slide-up transform hover:scale-105"
            style={{ animationDelay: '1.2s' }}
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-3">
              Explore My Work
              <Zap className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 bg-gradient-text bg-clip-text text-transparent">
              Experience & Past Works 💼
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              A track record of building and growing <span className="text-primary font-semibold">Web3 communities</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card backdrop-blur-xl border-primary/20 hover:shadow-intense transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                        {exp.icon}
                      </div>
                      <Badge variant="outline" className="bg-gradient-card border-accent/40 text-accent font-semibold">{exp.token}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-primary text-xl font-display font-bold group-hover:text-accent transition-colors duration-300">{exp.company}</CardTitle>
                  <CardDescription className="text-accent font-semibold text-lg">
                    {exp.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {exp.achievement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-16 bg-gradient-accent/20 border-accent/30 backdrop-blur-xl hover:shadow-intense transition-all duration-500 animate-slide-up">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-transparent bg-gradient-text bg-clip-text">Outstanding Achievement</h3>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Collaborated with developers and streamers to host events, such as tournaments and Q&A sessions, 
                <span className="font-bold text-transparent bg-gradient-accent bg-clip-text text-2xl md:text-3xl block mt-4"> driving 500+ new community members</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-gradient-primary/30 backdrop-blur-xl relative">
        <div className="absolute inset-0 bg-gradient-animated opacity-10 animate-gradient-shift bg-300%"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-12 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
            Core Skills & Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-lg px-6 py-3 bg-gradient-card backdrop-blur-md border-primary/30 hover:shadow-glow hover:scale-110 transition-all duration-300 cursor-default animate-slide-up font-medium"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-primary/30 backdrop-blur-xl relative">
        <div className="absolute inset-0 bg-gradient-animated opacity-5 animate-gradient-shift bg-300%"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-black text-center mb-8 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
            Zæňe Socials
          </h2>
          
          <p className="text-2xl md:text-3xl text-center mb-16 text-muted-foreground font-light animate-slide-up">
            Ready to elevate your <span className="text-primary font-semibold">Web3 community</span>? Let's collaborate. Contact me here
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="https://t.me/OneZane" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gradient-card backdrop-blur-xl border-primary/20 hover:shadow-intense transition-all duration-500 hover:scale-110 hover:-translate-y-4 animate-slide-up group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <MessageCircle className="w-16 h-16 mx-auto text-primary group-hover:text-accent transition-colors duration-300" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">Telegram</h3>
                  <p className="text-muted-foreground text-lg font-medium">@OneZane</p>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://x.com/ZibsMetax" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gradient-card backdrop-blur-xl border-primary/20 hover:shadow-intense transition-all duration-500 hover:scale-110 hover:-translate-y-4 animate-slide-up group cursor-pointer" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <Twitter className="w-16 h-16 mx-auto text-primary group-hover:text-accent transition-colors duration-300" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">X (Twitter)</h3>
                  <p className="text-accent hover:text-primary transition-colors text-lg font-medium">@ZibsMetax</p>
                </CardContent>
              </Card>
            </a>

            <Card className="bg-gradient-card backdrop-blur-xl border-primary/20 hover:shadow-intense transition-all duration-500 hover:scale-110 hover:-translate-y-4 animate-slide-up group" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Users className="w-16 h-16 mx-auto text-primary group-hover:text-accent transition-colors duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">Discord</h3>
                <p className="text-muted-foreground text-lg font-medium">@zibsmetax</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20 bg-gradient-primary/20 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-lg font-light">
            © 2024 <span className="text-primary font-semibold">Zæňe</span> - Web3 Community Expert & DeFi Explorer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;