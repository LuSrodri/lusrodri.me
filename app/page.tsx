import Image from "next/image";

const projects = [
  {
    name: "Logus Desenvolvimento",
    url: "https://logus.cloud",
    description: "Criando e otimizando sites para profissionais e empresas de alta performance.",
  },
  {
    name: "educando.app",
    url: "https://educando.app",
    description: "Plataforma de aprendizado interativo e personalizado.",
  },
  {
    name: "I Hate Background",
    url: "https://ihatebackground.com",
    description: "Remova fundos de imagens em segundos com IA.",
  },
  {
    name: "Goodbye Watermark",
    url: "https://goodbyewatermark.com",
    description: "Remova marcas d'água de imagens facilmente usando inteligência artificial.",
  },
];

const games = [
  {
    name: "Check Before Click",
    url: "https://checkbefore.click",
    description: "Treine o seu raciocínio lógico e tempo de reação identificando cores em sequência em tempo real.",
  },
];

const socials = [
  {
    name: "X",
    url: "https://x.com/olusrodri",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/heylucasrodrigues",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/lusrodri",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/lucas-santos-rodrigues",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group project-card relative overflow-hidden rounded-2xl p-8 glass opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-tufts opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-cool group-hover:text-tufts transition-colors duration-300">
            {project.name}
          </h3>
          <ArrowIcon />
        </div>
        <p className="text-eerie/60 leading-relaxed">{project.description}</p>
      </div>
    </a>
  );
}

function GameCard({
  game,
  index,
}: {
  game: (typeof games)[0];
  index: number;
}) {
  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group project-card relative overflow-hidden rounded-2xl p-8 glass opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-tufts opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-tufts/10 text-tufts rounded-full">
            Game
          </span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-cool group-hover:text-tufts transition-colors duration-300">
            {game.name}
          </h3>
          <ArrowIcon />
        </div>
        <p className="text-eerie/60 leading-relaxed">{game.description}</p>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-jordy/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-tufts/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <main className="relative min-h-screen">
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full mx-auto text-center">
            <div className="mb-10 opacity-0 animate-scale-in">
              <Image
                src="/lusrodri-logo.png"
                alt="Lucas Rodrigues"
                width={120}
                height={120}
                className="mx-auto animate-float"
                priority
              />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in delay-200 text-cool">
              Lucas Santos Rodrigues
            </h1>

            <p className="text-lg sm:text-xl text-eerie/60 max-w-xl mx-auto mb-12 opacity-0 animate-fade-in delay-300">
              Engenheiro de Software fascinado por tecnologias.
            </p>

            <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-in delay-400">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-eerie/40 hover:text-tufts"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-16 opacity-0 animate-fade-in delay-500">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm text-eerie/40 hover:text-tufts transition-colors duration-300"
              >
                <span>Ver projetos</span>
                <svg
                  className="w-4 h-4 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-cool mb-4 opacity-0 animate-fade-in">
              Projetos
            </h2>
            <p className="text-eerie/50 mb-12 opacity-0 animate-fade-in delay-100">
              Algumas das coisas que construi.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="games" className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-cool mb-4 opacity-0 animate-fade-in">
              Games
            </h2>
            <p className="text-eerie/50 mb-12 opacity-0 animate-fade-in delay-100">
              Projetos interativos, educacionais e divertidos.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {games.map((game, index) => (
                <GameCard key={game.name} game={game} index={index} />
              ))}
            </div>
          </div>
        </section>

        <footer className="px-6 py-16 border-t border-cool/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/lusrodri-logo.png"
                  alt="Lucas Rodrigues"
                  width={32}
                  height={32}
                />
                <span className="text-eerie/50 text-sm">
                  {new Date().getFullYear()} Lucas Rodrigues
                </span>
              </div>

              <div className="flex items-center gap-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon text-eerie/40 hover:text-tufts"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
