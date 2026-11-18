# Super Kit de Atividades Infantis – Página de Vendas

Site estático (HTML + CSS + JS), sem build.

## Estrutura
- `index.html` – página de vendas
- `assets/css/style.css` – estilos
- `assets/js/main.js` – botão fixo no celular e ano do rodapé
- `assets/img/` – imagens do kit
- `assets/previews/` – prévias das páginas dos PDFs
- `vercel.json` – configuração do Vercel

## Subir no GitHub e publicar no Vercel
```bash
git init
git add .
git commit -m "Página de vendas Super Kit de Atividades Infantis"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```
No Vercel: **Add New → Project → importe o repositório**. Framework: *Other*, sem build command e sem output directory. Clique em **Deploy**.

## Trocar o link de checkout
Procure por `pay.hotmart.com` em `index.html` e substitua (aparece em todos os botões).
