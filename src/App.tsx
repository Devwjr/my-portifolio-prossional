import { Github, Linkedin, ExternalLink, Mail, Phone, Menu, X, Download } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "JSONPlaceholder + Spring + Angular",
    description: "Aplicação full stack com backend Spring Boot que centraliza chamadas à API JSONPlaceholder e frontend Angular para consultar e gerenciar posts, usuários e tarefas.",
    tech: ["Java 21", "Spring Boot", "RestClient", "Angular", "TypeScript", "RxJS"],
    github: "https://github.com/Devwjr/jsonplaceholder-spring-angular",
    preview: "https://github.com/Devwjr/jsonplaceholder-spring-angular"
  },
  {
    title: "Processamento de vendas com threads em Java",
    description: "Lê arquivos CSV de lojas, valida vendas e consolida faturamento por loja e produto. O processamento paralelo gera relatórios com tratamento de erros e testes de integração.",
    tech: ["Java 17+", "Maven", "ExecutorService", "Callable/Future", "JUnit 5"],
    github: "https://github.com/Devwjr/projeto-threads-em-java",
    preview: "https://github.com/Devwjr/projeto-threads-em-java"
  },
]

const skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
  { name: "JUnit 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" },
  { name: "RxJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#sobre" className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
            Portfólio
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm text-white/70 hover:text-orange-400 transition-colors">Sobre</a>
            <a href="#skills" className="text-sm text-white/70 hover:text-orange-400 transition-colors">Habilidades</a>
            <a href="#projetos" className="text-sm text-white/70 hover:text-orange-400 transition-colors">Projetos</a>
            <a href="#contatos" className="text-sm text-white/70 hover:text-orange-400 transition-colors">Contatos</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="text-white/70 hover:text-white hover:bg-white/10">
              <a href="https://github.com/Devwjr" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-white/70 hover:text-white hover:bg-white/10">
              <a href="https://linkedin.com/in/wesley-junior" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <>
          <button aria-label="Fechar menu" className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setMenuOpen(false)} />
          <nav id="mobile-navigation" className="fixed left-4 right-4 top-[4.5rem] z-50 rounded-2xl border border-white/10 bg-[#111]/[.98] p-3 shadow-2xl shadow-black/50 md:hidden" aria-label="Navegação móvel">
            <div className="flex flex-col">
              {[["#sobre", "Sobre"], ["#skills", "Habilidades"], ["#projetos", "Projetos"], ["#contatos", "Contatos"]].map(([href, label]) => (
                <a key={href} href={href} className="rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-orange-500/10 hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400" onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
            </div>
            <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
              <a className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-sm text-white/80 hover:bg-white/10" href="https://github.com/Devwjr" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" />GitHub</a>
              <a className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-sm text-white/80 hover:bg-white/10" href="https://linkedin.com/in/wesley-junior" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a>
            </div>
          </nav>
        </>
      )}

      <section id="sobre" className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-slide-up">
                Wesley
              </h1>
              <p className="text-xl md:text-2xl text-white/60 mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
                Desenvolvedor <span className="text-orange-400">Java Full Stack</span>
              </p>
              
              <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                  <a href="/curriculo-java.pdf" download>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10">
                  <a href="mailto:wesley.7996450@gmail.com">
                    Entrar em contato
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <h2 className="text-2xl font-bold mb-6">Sobre mim</h2>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-3xl">
              <p className="text-white/70 leading-relaxed mb-4">
                Sou desenvolvedor Full Stack com foco em <strong className="text-orange-400">Java</strong>, APIs REST e aplicações web.
              </p>
              <p className="text-white/70 leading-relaxed">
                Tenho experiência prática com <span className="text-orange-400">Spring Boot</span>, <span className="text-orange-400">Angular</span>, integração HTTP com RestClient e processamento concorrente com pools de threads. Também estudo POO, testes automatizados e organização de código em camadas.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                Cursando Análise e Desenvolvimento de Sistemas na Estácio de Sá, com conclusão prevista para 2027. Inglês intermediário para leitura técnica e documentação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-orange-500">Habilidades</span>
          </h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-orange-500/20 transition-colors">
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                </div>
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Meus <span className="text-orange-500">Projetos</span>
          </h2>
          <p className="text-white/50 text-center mb-12">Projetos desenvolvidos durante minha jornada de aprendizado</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 text-white hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-orange-400 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-white/60">{project.description}</CardDescription>
                </CardHeader>
                <div className="px-6 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded bg-white/10 text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <CardFooter className="gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild className="border-white/20 text-white hover:bg-white/10 hover:border-orange-500/50 flex-1">
                    <a href={project.preview} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Acessar projeto
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild className="bg-white/10 text-white hover:bg-white/20 flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Repositório
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contatos" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-orange-500">Contatos</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="mailto:wesley.7996450@gmail.com" className="group">
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-xl bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <Mail className="h-8 w-8 text-orange-400" />
                </div>
                <div className="text-center">
                  <p className="text-white/70 text-sm">E-mail</p>
                  <p className="text-white text-sm">wesley.7996450@gmail.com</p>
                </div>
              </div>
            </a>

            <a href="https://wa.me/553298560219" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone className="h-8 w-8 text-green-400" />
                </div>
                <div className="text-center">
                  <p className="text-white/70 text-sm">WhatsApp</p>
                  <p className="text-white text-sm">(32) 9856-0219</p>
                </div>
              </div>
            </a>

            <a href="https://linkedin.com/in/wesley-junior" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Linkedin className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-center">
                  <p className="text-white/70 text-sm">LinkedIn</p>
                  <p className="text-white text-sm">@wesley-junior</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/Devwjr" target="_blank" className="group">
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-white/70 text-sm">GitHub</p>
                  <p className="text-white text-sm">@Devwjr</p>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                  <a href="/curriculo-java.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10">
              <a href="mailto:wesley.7996450@gmail.com">
                <Mail className="h-4 w-4" />
                Entrar em contato
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-white/40 text-sm">
          <p>© 2026 Wesley. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
