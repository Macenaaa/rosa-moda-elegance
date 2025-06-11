
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vestido Midi Floral",
    price: "R$ 299,90",
    originalPrice: "R$ 399,90",
    image: "👗",
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Blusa de Seda Premium",
    price: "R$ 199,90",
    image: "👚",
    isNew: false,
    isSale: false
  },
  {
    id: 3,
    name: "Calça Wide Leg",
    price: "R$ 249,90",
    image: "👖",
    isNew: true,
    isSale: false
  },
  {
    id: 4,
    name: "Bolsa Estruturada",
    price: "R$ 179,90",
    originalPrice: "R$ 229,90",
    image: "👜",
    isNew: false,
    isSale: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peças selecionadas especialmente para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center relative">
                  <div className="text-8xl">{product.image}</div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        Novo
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
                        Sale
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="h-8 w-8">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">Ver Todos os Produtos</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
