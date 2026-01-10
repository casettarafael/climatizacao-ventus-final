
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list .nav-link');
    const orcamentoForm = document.getElementById('orcamentoForm');
    const whatsappNumber = '5511916598620'; // Seu número de WhatsApp

    // Efeito de sombra no header ao rolar
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Toggle do menu mobile
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // Fechar menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    // Lógica para enviar o orçamento via WhatsApp
    if (orcamentoForm) {
        orcamentoForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const servicoElement = document.getElementById('servico');
            const servico = servicoElement.options[servicoElement.selectedIndex].text;
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação simples
            if (nome === "" || telefone === "" || servico === "Selecione...") {
                alert("🚨 Por favor, preencha seu Nome, Telefone e o Tipo de Serviço para enviar o orçamento.");
                return;
            }

            let textoMensagem = `*🚀 NOVO ORÇAMENTO VIA SITE - Ventus Climatização*\n\n`;
            textoMensagem += `*👤 Cliente:* ${nome}\n`;
            if (email) {
                textoMensagem += `*📧 E-mail:* ${email}\n`;
            }
            textoMensagem += `*📱 Contato (Cliente):* ${telefone}\n`;
            textoMensagem += `*🛠️ Serviço Solicitado:* ${servico}\n`;
            
            if (mensagem) {
                textoMensagem += `*📝 Detalhes:* ${mensagem}\n`;
            } else {
                textoMensagem += `*📝 Detalhes:* Nenhuma observação adicional foi fornecida.\n`;
            }

            const urlEncodedMessage = encodeURIComponent(textoMensagem);
            const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${urlEncodedMessage}`;

            window.open(whatsappLink, '_blank');
        });
    }

    // Animação de Scroll (Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(section => {
        observer.observe(section);
    });
});