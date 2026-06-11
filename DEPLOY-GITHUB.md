# Deploy no GitHub Pages - Ohana Lifestyle

## Pré-requisitos

1. Ter uma conta no GitHub
2. Ter o Git instalado no seu computador
3. Node.js 18+ instalado (para build local)

---

## Passo a Passo

### 1. Criar repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `ohana-lifestyle` (ou o nome que preferir)
3. Deixe como **Public** (necessário para GitHub Pages gratuito)
4. Clique em **Create repository**

### 2. Preparar o projeto localmente

Baixe os arquivos do projeto (ZIP disponível na interface) e extraia no seu computador.

Abra o terminal na pasta do projeto e execute:

```bash
# Instalar dependências
npm install

# Fazer o build do projeto
npm run build:github
```

Isso vai gerar uma pasta `dist/public` com os arquivos estáticos prontos para deploy.

### 3. Configurar GitHub Pages

**Opção A - Deploy manual (mais simples):**

```bash
# Inicializar git no projeto
git init
git add .
git commit -m "Ohana Lifestyle - Landing Page"

# Conectar ao repositório remoto
git remote add origin https://github.com/SEU-USUARIO/ohana-lifestyle.git
git branch -M main
git push -u origin main
```

Depois:
1. Vá em **Settings > Pages** no repositório
2. Em "Source", selecione **GitHub Actions**
3. O workflow já está configurado no projeto (`.github/workflows/deploy.yml`)

**Opção B - Usando gh-pages (automático):**

```bash
# Instalar gh-pages
npm install -D gh-pages

# Deploy direto
npx gh-pages -d dist/public
```

Depois:
1. Vá em **Settings > Pages** no repositório
2. Em "Source", selecione **Deploy from a branch**
3. Selecione branch `gh-pages` e pasta `/ (root)`

### 4. Acessar seu site

Após o deploy, seu site estará disponível em:
```
https://SEU-USUARIO.github.io/ohana-lifestyle/
```

---

## Atualizando o conteúdo

Para adicionar novas publicações do Instagram:

1. Edite o arquivo `client/src/pages/Home.tsx`
2. Adicione novos itens no array `instagramPosts`:

```tsx
{
  id: '16',
  code: 'CODIGO_DO_POST',  // O código que aparece na URL do Instagram
  title: 'Nome do Produto',
  instagramUrl: 'https://www.instagram.com/p/CODIGO_DO_POST/',
  shopeeUrl: 'SEU_LINK_SHOPEE_AQUI',
},
```

3. Execute `npm run build:github` novamente
4. Faça commit e push para o GitHub

---

## Domínio personalizado (opcional)

Se quiser usar um domínio próprio (ex: `ohanalifestyle.com.br`):

1. Vá em **Settings > Pages > Custom domain**
2. Digite seu domínio
3. Configure os DNS do seu domínio:
   - Tipo A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Ou CNAME: `SEU-USUARIO.github.io`

---

## Notas importantes

- As publicações do Instagram são carregadas via embed (iframe), então sempre mostrarão o conteúdo atualizado
- O logo e assets estáticos são servidos pelo CDN do projeto
- O site é totalmente responsivo (funciona em celular, tablet e desktop)
- Não há backend necessário - é 100% estático
