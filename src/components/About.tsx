import { Shield, Truck, Palette, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantia de Qualidade",
    description: "Todos os nossos móveis passam por rigoroso controle de qualidade.",
  },
  {
    icon: Palette,
    title: "Design Exclusivo",
    description: "Peças únicas desenvolvidas por designers especializados.",
  },
  {
    icon: Truck,
    title: "Entrega Segura",
    description: "Transporte especializado para garantir a integridade das peças.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Mais de uma década de tradição e compromisso com nossos clientes.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Tradição em
              <br />
              <span className="text-gradient-gold">Mobiliário Premium</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Scorpions Móveis é uma empresa de fabricação e comércio de móveis 
              sediada em Curitiba, Paraná. Com mais de uma década de experiência no 
              mercado, nos especializamos em criar peças que combinam funcionalidade, 
              durabilidade e design contemporâneo.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nossa missão é transformar ambientes através de móveis que refletem 
              a personalidade e o estilo de vida de nossos clientes, sempre com 
              materiais de primeira linha e acabamento impecável.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="font-display text-4xl font-bold text-primary">10+</span>
                <p className="text-muted-foreground text-sm">Anos de Experiência</p>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="font-display text-4xl font-bold text-primary">1000+</span>
                <p className="text-muted-foreground text-sm">Projetos Realizados</p>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="font-display text-4xl font-bold text-primary">100%</span>
                <p className="text-muted-foreground text-sm">Satisfação</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-8 rounded-2xl hover-lift border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
