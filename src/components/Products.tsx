import { ArrowRight } from "lucide-react";
import diningImage from "@/assets/furniture-dining.jpg";
import bedroomImage from "@/assets/furniture-bedroom.jpg";
import officeImage from "@/assets/furniture-office.jpg";

const products = [
  {
    id: 1,
    title: "Sala de Jantar",
    description: "Mesas e cadeiras que elevam suas refeições a momentos inesquecíveis.",
    image: diningImage,
  },
  {
    id: 2,
    title: "Quartos",
    description: "Conforto e elegância para seu refúgio pessoal.",
    image: bedroomImage,
  },
  {
    id: 3,
    title: "Home Office",
    description: "Produtividade com estilo e sofisticação.",
    image: officeImage,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-24 lg:py-32 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Nossos Produtos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Coleções <span className="text-gradient-gold">Exclusivas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada peça é cuidadosamente projetada e fabricada para atender aos mais 
            altos padrões de qualidade e design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                  <span>Ver mais</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
