import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacidade = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="container px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Política de <span className="text-gradient-gold">Privacidade</span>
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Scorpions Comercio de Moveis LTDA está comprometida em proteger sua privacidade. 
                Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos 
                suas informações pessoais quando você visita nosso site ou utiliza nossos serviços, 
                em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">2. Dados que Coletamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos coletar as seguintes informações pessoais:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Endereço de entrega</li>
                <li>CPF/CNPJ (para fins de faturamento)</li>
                <li>Informações sobre preferências de produtos</li>
                <li>Dados de navegação no site (cookies)</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">3. Como Utilizamos seus Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos suas informações pessoais para:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Processar e responder solicitações de orçamento</li>
                <li>Fabricar e entregar os produtos adquiridos</li>
                <li>Enviar comunicações sobre pedidos e serviços</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Enviar comunicações de marketing (com seu consentimento)</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">4. Base Legal para Tratamento</h2>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento de dados pessoais é realizado com base nas seguintes hipóteses 
                legais previstas na LGPD:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Execução de contrato ou procedimentos preliminares</li>
                <li>Consentimento do titular</li>
                <li>Cumprimento de obrigação legal ou regulatória</li>
                <li>Legítimo interesse do controlador</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">5. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos compartilhar suas informações com:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Prestadores de serviços de entrega e logística</li>
                <li>Instituições financeiras para processamento de pagamentos</li>
                <li>Autoridades governamentais quando exigido por lei</li>
                <li>Parceiros comerciais (apenas com seu consentimento explícito)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Não vendemos ou alugamos suas informações pessoais a terceiros.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">6. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para 
                proteger suas informações pessoais contra acesso não autorizado, alteração, 
                divulgação ou destruição. Isso inclui criptografia de dados, controles de 
                acesso e treinamento de funcionários.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">7. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conforme a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Confirmação da existência de tratamento de dados</li>
                <li>Acesso aos dados pessoais</li>
                <li>Correção de dados incompletos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade dos dados</li>
                <li>Eliminação dos dados tratados com consentimento</li>
                <li>Revogação do consentimento</li>
                <li>Informação sobre compartilhamento de dados</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso site utiliza cookies para melhorar sua experiência de navegação. 
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo que 
                nos ajudam a entender como você utiliza nosso site. Você pode configurar 
                seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">9. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos suas informações pessoais pelo tempo necessário para cumprir as 
                finalidades para as quais foram coletadas, incluindo obrigações legais, 
                contábeis ou de comunicação. Após esse período, os dados são eliminados 
                ou anonimizados de forma segura.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">10. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer 
                alterações serão publicadas nesta página com a data de atualização. 
                Recomendamos que você revise esta política regularmente.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
              <h2 className="font-display text-2xl font-bold">11. Contato do Encarregado (DPO)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                entre em contato com nosso Encarregado de Proteção de Dados:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Empresa:</strong> Scorpions Comercio de Moveis LTDA</li>
                <li><strong className="text-foreground">CNPJ:</strong> 72.200.843/0001-42</li>
                <li><strong className="text-foreground">Endereço:</strong> R. Francisco Derosso, 4190 - Xaxim, Curitiba - PR, 81830-285</li>
                <li><strong className="text-foreground">E-mail:</strong> privacidade@scorpionsmoveis.com.br</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacidade;
