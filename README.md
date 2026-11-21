# tizi.iriarte · Landing

Landing de Tiziano Iriarte, en Next.js (App Router).

## Estructura

```
app/
  layout.jsx    → <html>, metadatos (title, description, Open Graph), precarga de fuentes
  page.jsx      → todo el contenido de la página (textos en arrays al principio del archivo)
  Effects.jsx   → animaciones del cliente: aparición al hacer scroll y números que cuentan
  globals.css   → estilos, fuentes y texturas
public/assets/  → imágenes y fuentes (.woff)
```

Para editar textos, casos o métricas, cambiá los arrays (`SEGMENTOS`, `PRINCIPIOS`, `FASES`, `CASOS`, `CAPACIDADES`) al principio de `app/page.jsx`.

## Correr en local

Requiere [Node.js](https://nodejs.org) 18.18 o superior.

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Deploy en Vercel

1. Subí esta carpeta a un repositorio de GitHub.
2. En https://vercel.com/new importá el repositorio.
3. Vercel detecta Next.js solo: dejá la configuración por defecto y tocá **Deploy**.
