
import { Heart, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Bella</h3>
            <p className="text-muted-foreground mb-4">
              Moda feminina com elegância e sofisticação para mulheres que valorizam qualidade e estilo.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Vestidos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blusas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Calças</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Acessórios</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Sale</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Atendimento</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Trocas e Devoluções</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Guia de Tamanhos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Frete e Entrega</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contato</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Sobre Nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Carreiras</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Sustentabilidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Bella. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1 mt-4 md:mt-0">
              Feito com <Heart className="h-4 w-4 text-red-500" /> para mulheres incríveis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
