import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
{
  icon: Code2,
  title: "Frontend Development",
  description: "Building responsive and modern websites using React and Tailwind CSS."
},
{
  icon: Rocket,
  title: "Fast Learning",
  description: "Continuously learning new technologies and improving development skills."
},
{
  icon: Users,
  title: "Problem Solving",
  description: "Enjoy solving coding challenges and creating real-world projects."
},
{
  icon: Lightbulb,
  title: "Creative Design",
  description: "Focused on creating clean and user-friendly interfaces."
}
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
               interactive web experiences.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate Frontend Developer currently focused on learning and building modern web applications using HTML, CSS, JavaScript, React, and Tailwind CSS.
              </p>
              <p>
             I have built responsive websites and frontend projects using HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy creating clean user interfaces and improving user experience.
              </p>
              <p>
                When I'm not coding, you'll find me learning new technologies, building personal projects, and improving my frontend development skills.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
            "My goal is to become a skilled frontend developer and build websites that are fast, responsive, and user-friendly."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
