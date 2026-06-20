export const Achievements = () => {
  const stats = [
    {
      number: "10+",
      label: "Projects Built",
    },
    {
      number: "5+",
      label: "Technologies Learned",
    },
    {
      number: "100%",
      label: "Responsive Design",
    },
    {
      number: "24/7",
      label: "Learning Mindset",
    },
  ];

  return (
    <section className="py-32" id="achievements">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 text-center border border-primary/20"
            >
              <h3 className="text-5xl font-bold text-primary">
                {item.number}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};