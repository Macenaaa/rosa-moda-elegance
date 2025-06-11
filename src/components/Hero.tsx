
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Elegância
              <span className="text-primary block">Feminina</span>
              Redefinida
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
              Descubra nossa coleção exclusiva de roupas femininas que combinam 
              sofisticação, conforto e estilo contemporâneo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Explorar Coleção
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Lookbook
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">👗</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
