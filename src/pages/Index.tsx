import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Twitter, Users, Zap, TrendingUp, Shield, Headphones, Star } from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
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
    <div className="min-h-screen bg-gradient-hero text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-primary opacity-50"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Hey 👋 am Zæňe
            </h1>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                DeFi Explorer
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Web3 Enthusiast
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                3+ Years Experience
              </Badge>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Community Moderator • X Raider • Web3 Discord Expert
            <br />
            Skilled in engagement & tools like MEE6
            <br />
            NFTs ➠ Community Growth Strategies Expert • Shills Spaces 🎙️ Host
          </p>

          <div className="space-y-4">
            <p className="text-2xl font-semibold text-primary mb-8">
              Welcome to My Raid/Mod Job Portfolio
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm thrilled you're checking out my work as a Raid/Mod professional. This portfolio showcases my experience in creating engaging, inclusive, and well-moderated online communities. From managing high-energy raids to ensuring safe and fun environments, I bring passion and precision to every project.
            </p>
          </div>

          <Button 
            size="lg" 
            className="mt-8 bg-gradient-accent hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
          </Button>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & Past Works 💼
            </h2>
            <p className="text-xl text-muted-foreground">
              A track record of building and growing Web3 communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {exp.icon}
                      <Badge variant="outline">{exp.token}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-primary">{exp.company}</CardTitle>
                  <CardDescription className="text-accent font-semibold">
                    {exp.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.achievement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-accent/10 border-accent/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-accent">Outstanding Achievement</h3>
              <p className="text-lg">
                Collaborated with developers and streamers to host events, such as tournaments and Q&A sessions, 
                <span className="font-bold text-primary"> driving 500+ new community members</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Core Skills & Expertise</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-primary p-12 rounded-2xl shadow-card">
            <h2 className="text-4xl font-bold mb-6">Time to Work</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Ready to elevate your Web3 community? Let's collaborate!
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 mb-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              DM 📥 to hire Me
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Zæňe Socials</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Telegram</h3>
                <p className="text-muted-foreground">@OneZane</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Twitter className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">X (Twitter)</h3>
                <a 
                  href="http://x.com/ZibsMetax" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors"
                >
                  @ZibsMetax
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Discord</h3>
                <p className="text-muted-foreground">@zibsmetax</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Zæňe - Web3 Community Expert & DeFi Explorer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;