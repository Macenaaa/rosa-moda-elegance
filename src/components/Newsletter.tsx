
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Fique por Dentro
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Seja a primeira a saber sobre novas coleções, ofertas exclusivas e tendências da moda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Seu melhor e-mail"
              className="flex-1"
            />
            <Button>
              Inscrever-se
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Não enviamos spam. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
