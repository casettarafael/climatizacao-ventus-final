# 🌬️ Ventus Climatização - Website Oficial

> ❄️ **Website institucional da Ventus Climatização. Apresenta serviços de AC e utiliza formulário inteligente para geração de orçamentos via WhatsApp.**

---

## 📄 Sobre o Projeto

Este repositório contém o código-fonte do website oficial da **Ventus Climatização**. Ele serve como a vitrine principal da empresa, destacando a expertise em soluções completas e eficientes de climatização (Ar Condicionado e Ventilação) para clientes residenciais, comerciais e industriais. O foco é na captação de leads através de um formulário de contato otimizado para conversão via WhatsApp.

## 💡 Recursos de Destaque

* **Captação de Leads Otimizada:** O formulário de contato (`#contato`) é o principal CTA. Ele utiliza JavaScript puro para gerar um **link direto para o WhatsApp** pré-preenchido com os dados do cliente (Nome, Telefone e Tipo de Serviço), garantindo contato imediato e alta taxa de conversão.
* **Serviços Focados:** Apresentação clara de serviços essenciais, incluindo **Instalação**, **Manutenção (PMOC)** e **Higienização** com foco na saúde do ar.
* **Design Profissional:** Layout limpo, responsivo e moderno (HTML/CSS puro), utilizando ícones do **Font Awesome** para destacar os diferenciais e os CTAs sociais.
* **Navegação Rápida:** Menu com navegação *smooth scroll* (âncoras) para as principais seções (Serviços, Diferenciais, Contato).

## 🛠️ Stack Tecnológica

O projeto é estático e leve, priorizando a velocidade e a compatibilidade.

| Categoria | Tecnologia | Uso no Projeto |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 Semântico, CSS3 (Flex/Grid/Vars), JS Moderno | Base do website estático, leve e performática. |
| **Estilos/Ícones** | Font Awesome 6 | Ícones para diferenciar serviços e criar o *Call to Action* flutuante do WhatsApp. |
| **Funcionalidade JS** | Script de Geração de Link WhatsApp | Implementação da lógica para ler o formulário e criar o URL de mensagem pré-definida. |

## 💻 Detalhamento do JavaScript (`script.js`)

Embora o arquivo `script.js` não tenha sido fornecido, é inferível que ele contenha a funcionalidade principal do site:

1.  **Formulário Inteligente:** O script escuta o evento de *submit*, aplica máscara de telefone automática e valida os campos.
2.  **Geração de Mensagem:** Coleta os dados (Nome, Telefone, Tipo de Serviço, Mensagem) e os formata em uma mensagem completa.
3.  **Redirecionamento:** Codifica a URL e redireciona o usuário para o link `wa.me/` com a mensagem pré-preenchida para o número da Ventus.
4.  **UX Aprimorada:** Notificações do tipo "Toast" substituem alertas nativos, e animações de scroll reveal dão vida ao site.

## ⚙️ Configuração e Implantação

1.  **Clonagem:**
    ```bash
    git clone [https://github.com/casettarafael/ventus-climatizacao-site.git](https://github.com/casettarafael/ventus-climatizacao-site.git)
    cd ventus-climatizacao-site
    ```
2.  **Configuração de Contato:**
    * Verifique se o número de telefone de destino no botão flutuante e no script de submissão do formulário está configurado corretamente.
    * Ajuste o código do `script.js` (se existir) para personalizar o texto padrão da mensagem de WhatsApp.
3.  **Execução:**
    O projeto é estático. Abra o `index.html` em seu navegador para testar a aplicação.

---
Desenvolvido com carinho por **casettarafael**
