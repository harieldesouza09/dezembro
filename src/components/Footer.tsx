import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="font-display text-2xl font-bold text-foreground">
                SCORPIONS
              </span>
              <span className="text-sm text-muted-foreground font-light tracking-widest">
                MÓVEIS
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Fabricação e comércio de móveis de alta qualidade. 
              Transformando ambientes com design exclusivo e 
              acabamento premium desde 2010.
            </p>
            <p className="text-sm text-muted-foreground">
              CNPJ: 72.200.843/0001-42
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="/#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Scorpions Comercio de Moveis LTDA. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              R. Francisco Derosso, 4190 - Xaxim, Curitiba - PR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
