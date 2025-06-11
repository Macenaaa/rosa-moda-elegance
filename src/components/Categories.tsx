
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Vestidos",
    description: "Elegância para todos os momentos",
    emoji: "👗",
    color: "from-pink-100 to-rose-100"
  },
  {
    name: "Blusas",
    description: "Versatilidade e conforto",
    emoji: "👚",
    color: "from-purple-100 to-pink-100"
  },
  {
    name: "Calças",
    description: "Estilo moderno e sofisticado",
    emoji: "👖",
    color: "from-blue-100 to-purple-100"
  },
  {
    name: "Acessórios",
    description: "O toque final perfeito",
    emoji: "👜",
    color: "from-rose-100 to-pink-100"
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossas Categorias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre exatamente o que você procura em nossa seleção cuidadosamente curada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`aspect-square bg-gradient-to-br ${category.color} rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-transform group-hover:scale-105`}>
                <div className="text-6xl mb-4">{category.emoji}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button variant="outline" size="sm">
                  Ver Mais
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
