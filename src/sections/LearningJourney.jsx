export const LearningJourney = () => {
  const journey = [
    {
      year: "2025",
      title: "Started Frontend Development",
      description: "Learned HTML, CSS and built responsive websites.",
    },
    {
      year: "2025",
      title: "JavaScript Fundamentals",
      description:
       "Built interactive web projects and learned DOM manipulation.",
    },
    {
      year: "2026",
      title: "React & Modern UI",
      description:
        "Developed single-page applications using React and Tailwind CSS.",
    },
    {
      year: "2026",
      title: "Real World Projects",
      description:
         "Created portfolio websites, API-based applications and frontend projects.",
    },
  ];

  return (
    <section className="py-32" id="lerningjourney">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          My Learning Journey
        </h2>

        <div className="max-w-4xl mx-auto">
          {journey.map((item, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl mb-6 border border-primary/20"
            >
              <span className="text-primary font-bold">{item.year}</span>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-muted-foreground mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};