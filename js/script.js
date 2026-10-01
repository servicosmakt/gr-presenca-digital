/* ============================================================
   CONFIGURAÇÃO CENTRAL DO WHATSAPP E SEO LOCAL
   Substitua os valores abaixo quando as informações estiverem prontas.
   ============================================================ */
const WHATSAPP_NUMBER = "31975321051";
const BUSINESS_CITY = "Belo Horizonte";
const BUSINESS_STATE = "Minas Gerais";

// Mensagens oficiais padronizadas com encodeURIComponent
const WA_MESSAGES = {
  general: "Olá! Conheci a GR Presença Digital pelo site e gostaria de saber mais sobre os serviços.",
  pacote1: "Olá! Conheci a GR Presença Digital pelo site e tenho interesse no pacote Presença Digital. Gostaria de saber mais.",
  pacote2: "Olá! Conheci a GR Presença Digital pelo site e tenho interesse no pacote Presença + Site. Gostaria de saber mais.",
  pacote3: "Olá! Conheci a GR Presença Digital pelo site e tenho interesse no pacote Presença + Divulgação. Gostaria de saber mais."
};

/**
 * Gera URL do WhatsApp e abre em nova aba
 * @param {string} msgKey
 */
function triggerWhatsApp(msgKey) {
  const text = WA_MESSAGES[msgKey] || WA_MESSAGES.general;
  const encodedMsg = encodeURIComponent(text);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Associa eventos de clique nos botões
document.addEventListener("DOMContentLoaded", () => {
  // Botões gerais
  document.querySelectorAll(".js-wa-general").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      triggerWhatsApp("general");
    });
  });

  // Botões de pacotes
  document.querySelectorAll(".js-wa-p1").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      triggerWhatsApp("pacote1");
    });
  });

  document.querySelectorAll(".js-wa-p2").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      triggerWhatsApp("pacote2");
    });
  });

  document.querySelectorAll(".js-wa-p3").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      triggerWhatsApp("pacote3");
    });
  });

  // Menu mobile hambúrguer
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Fechar menu mobile ao clicar em qualquer link
    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Fechar com ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
        mobileDrawer.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Efeito de sombra sutil no header ao rolar
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Abas de demonstrações visuais (Exemplos)
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");

      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
});
      }
  });
});
