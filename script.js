
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list .nav-link');
    const orcamentoForm = document.getElementById('orcamentoForm');
    const whatsappNumber = '5511916598620'; // Seu número de WhatsApp

    // Máscara de Telefone
    const phoneInput = document.getElementById('telefone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }

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
            if (nome === "" || telefone === "" || servico === "Selecione..." || servico === "") {
                showNotification("🚨 Por favor, preencha Nome, Telefone e Serviço.", "error");
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
            showNotification("✅ Redirecionando para o WhatsApp...", "success");
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

    // Sistema de Notificação (Toast)
    function showNotification(message, type = 'info') {
        const existingToast = document.querySelector('.toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Força reflow para animação
        toast.offsetHeight;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
});