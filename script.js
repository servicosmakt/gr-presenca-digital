const WHATSAPP_NUMBER = "31975321051";

const WA_MESSAGES = {
  general: "Olá! Conheci a GR Presença Digital pelo site e gostaria de saber mais sobre como colocar meu negócio no digital.",
  pacote1: "Olá! Conheci a GR Presença Digital pelo site e tenho interesse no pacote Presença Digital. Gostaria de saber mais.",
  pacote2: "Olá! Conheci a GR Presença Digital pelo site e tenho interesse no pacote Presença + Site. Gostaria de saber mais.",
  pacote3: "Olá! Conheci a GR Presença Digital pelo site e tenho interesse no pacote Presença + Divulgação. Gostaria de saber mais.",
  crm: "Olá! Vi no site o anúncio do CRM para Profissionais da Beleza e Autônomos e gostaria de entrar no grupo de lançamento para garantir minha vaga entre os 10 primeiros com preço especial!"
};

function triggerWhatsApp(msgKey) {
  const text = WA_MESSAGES[msgKey] || WA_MESSAGES.general;
  const encodedMsg = encodeURIComponent(text);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function switchTab(index) {
  const buttons = document.querySelectorAll('.showcase-tab-btn');
  const panels = document.querySelectorAll('.showcase-panel');

  buttons.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  panels.forEach((panel, idx) => {
    if (idx === index) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}

const LEGAL_CONTENT = {
  privacidade: `
    <h3>Política de Privacidade</h3>
    <p>A <strong>GR Presença Digital</strong> valoriza a sua privacidade. Esta política descreve como coletamos, usamos e protegemos as informações fornecidas por você ao utilizar nosso site e serviços.</p>
    <p><strong>1. Coleta de Dados:</strong> Coletamos informações de contato (como nome e WhatsApp) apenas quando fornecidas voluntariamente por você através de nossos botões de atendimento ou solicitações de orçamento.</p>
    <p><strong>2. Uso das Informações:</strong> Seus dados são utilizados exclusivamente para responder a suas solicitações, prestar consultoria digital e realizar o atendimento dos serviços contratados.</p>
    <p><strong>3. Segurança:</strong> Adotamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado.</p>
  `,
  termos: `
    <h3>Termos de Uso</h3>
    <p>Bem-vindo à <strong>GR Presença Digital</strong>. Ao acessar nosso site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.</p>
    <p><strong>1. Propriedade Intelectual:</strong> Todo o conteúdo presente neste site (textos, marcas, design, layout e logotipos) é de propriedade exclusiva da GR Presença Digital.</p>
    <p><strong>2. Uso dos Serviços:</strong> Nossos serviços de criação de sites, Google Perfil e links para bio são prestados conforme escopo acordado individualmente com cada cliente.</p>
    <p><strong>3. Alterações:</strong> Reservamo-nos o direito de modificar estes termos a qualquer momento, entrando em vigor imediatamente após a publicação.</p>
  `,
  cookies: `
    <h3>Política de Cookies</h3>
    <p>Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência em nosso site e analisar o tráfego de navegação.</p>
    <p><strong>1. O que são cookies:</strong> Pequenos arquivos armazenados no seu navegador para lembrar preferências e otimizar o funcionamento da página.</p>
    <p><strong>2. Gestão de Cookies:</strong> Você pode configurar seu navegador para recusar cookies a qualquer momento, embora isso possa afetar algumas funcionalidades do site.</p>
  `
};

function openLegalModal(type) {
  const modal = document.getElementById('legalModal');
  const body = document.getElementById('legalModalBody');
  if (modal && body) {
    body.innerHTML = LEGAL_CONTENT[type] || '<p>Informação indisponível.</p>';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeLegalModal() {
  const modal = document.getElementById('legalModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-wa-general").forEach(el => {
    el.addEventListener("click", (e) => { e.preventDefault(); triggerWhatsApp("general"); });
  });
  document.querySelectorAll(".js-wa-p1").forEach(el => {
    el.addEventListener("click", (e) => { e.preventDefault(); triggerWhatsApp("pacote1"); });
  });
  document.querySelectorAll(".js-wa-p2").forEach(el => {
    el.addEventListener("click", (e) => { e.preventDefault(); triggerWhatsApp("pacote2"); });
  });
  document.querySelectorAll(".js-wa-p3").forEach(el => {
    el.addEventListener("click", (e) => { e.preventDefault(); triggerWhatsApp("pacote3"); });
  });
  document.querySelectorAll(".js-wa-crm").forEach(el => {
    el.addEventListener("click", (e) => { e.preventDefault(); triggerWhatsApp("crm"); });
  });

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.toggle("open");
      hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!mobileDrawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        mobileDrawer.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (mobileDrawer.classList.contains("open")) {
          mobileDrawer.classList.remove("open");
          hamburgerBtn.setAttribute("aria-expanded", "false");
        }
        closeLegalModal();
      }
    });
  }

  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }, { passive: true });
  }
});
