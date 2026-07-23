# ZYRON — Site Institucional

Site oficial da ZYRON, empresa de tecnologia especializada em produtos digitais, sistemas web, sites, Landing Pages, aplicativos, automações e integrações para empresas.

**Site oficial:** https://zyrondigital.com.br

## Tecnologias

- HTML5 semântico
- CSS3
- JavaScript puro
- Vercel

O site institucional não utiliza frameworks JavaScript ou CSS. A proposta é manter uma base leve, rápida e simples de publicar.

## Estrutura

- `index.html`: apresentação institucional e principais soluções
- `sobre.html`: posicionamento, princípios e forma de trabalho
- `servicos.html`: projetos desenvolvidos sob medida
- `produtos.html`: ZYRON Delivery, sistemas e soluções estruturadas
- `landing-pages.html`: catálogo de Landing Pages
- `mesh-conect.html`: parceria estratégica de marketing
- `contato.html`: canais comerciais e solicitação de orçamento
- `css/style.css`: identidade visual e responsividade
- `js/script.js`: interações compartilhadas
- `assets/`: imagens e elementos de marca

## Execução local

Por ser um site estático, basta servir a pasta por HTTP. Um exemplo com Python:

```bash
python -m http.server 4173
```

Depois, acesse `http://localhost:4173`.

## Publicação

O repositório é conectado à Vercel. O arquivo `vercel.json` mantém URLs limpas, redirecionamentos, cache de assets e headers básicos de segurança.

Antes de publicar:

1. Revise as alterações e o status do Git.
2. Teste todas as páginas em desktop e mobile.
3. Verifique links, console, SEO e acessibilidade.
4. Confirme que nenhum arquivo sensível foi incluído.
5. Faça commit e push somente após aprovação.

## Boas práticas

- Preserve a identidade visual existente.
- Mantenha Serviços e Produtos com posicionamentos distintos.
- Não anuncie integrações, planos ou funcionalidades sem confirmação.
- Use o domínio oficial em canonical e metadados sociais.
- Otimize imagens antes de adicionar novos assets.
- Nunca versione `.env`, credenciais ou dados de clientes.
