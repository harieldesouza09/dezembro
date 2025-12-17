import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-furniture.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#produtos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sala de estar luxuosa com móveis elegantes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-20">
        <div className="max-w-3xl">
          <div className="opacity-0 animate-fade-up stagger-1" style={{ animationFillMode: 'forwards' }}>
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Fabricação & Comércio de Móveis
            </span>
          </div>
          
          <h1 className="opacity-0 animate-fade-up stagger-2 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8" style={{ animationFillMode: 'forwards' }}>
            Móveis que
            <br />
            <span className="text-gradient-gold">Transformam</span>
            <br />
            Ambientes
          </h1>

          <p className="opacity-0 animate-fade-up stagger-3 text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed" style={{ animationFillMode: 'forwards' }}>
            Há mais de uma década criando peças exclusivas que combinam 
            design sofisticado, qualidade excepcional e atenção aos detalhes.
          </p>

          <div className="opacity-0 animate-fade-up stagger-4 flex flex-col sm:flex-row gap-4" style={{ animationFillMode: 'forwards' }}>
            <Button variant="gold" size="xl" onClick={scrollToContact}>
              Solicitar Orçamento
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToProducts}>
              Ver Catálogo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={scrollToProducts}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
