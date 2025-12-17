import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Atendimento = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    fetch('/atendimento/index.html')
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const bodyContent = doc.body.innerHTML;
        setHtmlContent(bodyContent);
      })
      .catch(error => {
        console.error('Error loading HTML:', error);
        setHtmlContent('<p>Erro ao carregar o conteúdo.</p>');
      });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="container px-6 max-w-4xl">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Atendimento;