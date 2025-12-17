import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Termos = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="container px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Termos de <span className="text-gradient-gold">Uso</span>
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar o site da Scorpions Comercio de Moveis LTDA, você concorda 
                em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não 
                concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">2. Descrição dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Scorpions Móveis oferece serviços de fabricação e comercialização de móveis. 
                Nosso site apresenta informações sobre nossos produtos, serviços e permite que 
                os clientes entrem em contato para solicitar orçamentos.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">3. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo presente neste site, incluindo textos, imagens, logotipos, 
                designs e demais materiais, são de propriedade exclusiva da Scorpions Comercio 
                de Moveis LTDA ou de seus licenciadores. É proibida a reprodução, distribuição 
                ou modificação de qualquer conteúdo sem autorização prévia por escrito.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">4. Orçamentos e Preços</h2>
              <p className="text-muted-foreground leading-relaxed">
                Os orçamentos fornecidos são válidos pelo prazo informado no momento da 
                solicitação. Os preços podem variar de acordo com especificações do projeto, 
                materiais escolhidos e condições de mercado. Todos os valores são apresentados 
                em Reais (BRL) e podem estar sujeitos a impostos adicionais.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">5. Garantia dos Produtos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossos móveis possuem garantia contra defeitos de fabricação conforme 
                estabelecido no Código de Defesa do Consumidor. A garantia não cobre danos 
                causados por mau uso, negligência, modificações não autorizadas ou desgaste 
                natural dos materiais.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">6. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Scorpions Móveis não será responsável por quaisquer danos diretos, indiretos, 
                incidentais ou consequentes decorrentes do uso ou impossibilidade de uso de 
                nossos serviços ou produtos, exceto nos casos previstos em lei.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">7. Modificações dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                As alterações entrarão em vigor imediatamente após sua publicação no site. 
                O uso continuado de nossos serviços após tais modificações constitui sua 
                aceitação dos novos termos.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">8. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes termos são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa será submetida à jurisdição exclusiva dos tribunais da 
                cidade de Curitiba, Estado do Paraná.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Empresa:</strong> Scorpions Comercio de Moveis LTDA</li>
                <li><strong className="text-foreground">CNPJ:</strong> 72.200.843/0001-42</li>
                <li><strong className="text-foreground">Endereço:</strong> R. Francisco Derosso, 4190 - Xaxim, Curitiba - PR, 81830-285</li>
                <li><strong className="text-foreground">E-mail:</strong> contato@scorpionsmoveis.com.br</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Termos;
