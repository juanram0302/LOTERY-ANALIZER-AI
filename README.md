# 🎯 Analizador Pro RD

Analizador de Loterías Dominicanas con motor multi-método e integración con IA Claude.

## Funcionalidades

- **Parser inteligente** - Pega resultados directo de quinielasrd.com (formato un número por línea)
- **Motor de 10 métodos** - Frecuencia, quemados, volteos, contra-tendencia, ciclos, retrasados, pares, posición, correlación
- **Predicciones** - Quiniela, Pale y Tripleta con alternativas para Gana Más, New York 3:30 y Lotería Nacional
- **Calculadora de riesgo** - Distribución inteligente de bankroll (50% quiniela, 30% pale, 20% tripleta)
- **Auto-Datos con IA** - Busca resultados históricos automáticamente usando Claude API + web search
- **Análisis IA** - Envía datos a Claude para análisis profundo de patrones
- **PWA** - Instálalo en tu iPhone como app nativa
- **Almacenamiento local** - Tus datos persisten entre sesiones

## Instalación

```bash
# Clonar repo
git clone https://github.com/TU-USUARIO/loterias-rd.git
cd loterias-rd

# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build
```

## Deploy en GitHub Pages (GRATIS)

### Opción 1: Vercel (Recomendado - más fácil)
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu GitHub
3. Importa el repo `loterias-rd`
4. Deploy automático ✅
5. Te da una URL tipo `loterias-rd.vercel.app`

### Opción 2: GitHub Pages
1. En `vite.config.js` cambia `base: './'` por `base: '/loterias-rd/'`
2. Ejecuta `npm run build`
3. Sube la carpeta `dist` a la rama `gh-pages`
4. En Settings > Pages, selecciona la rama `gh-pages`

### Opción 3: Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `dist` al dashboard
3. Listo ✅

## Instalar como App en iPhone

1. Abre la URL de tu deploy en **Safari** (NO Chrome)
2. Toca el botón de **Compartir** (cuadrado con flecha)
3. Selecciona **"Añadir a pantalla de inicio"**
4. Dale un nombre y toca **Añadir**
5. La app aparece en tu home screen como app nativa 🎯

## API Key de Claude (Opcional)

Para las funciones de IA (análisis profundo y auto-datos):
1. Ve a [console.anthropic.com](https://console.anthropic.com)
2. Crea una API key
3. Ingrésala en la pestaña "IA" de la app
4. Se guarda automáticamente en tu dispositivo

## Estructura

```
loterias-rd/
├── index.html          # Entry point HTML con PWA meta tags
├── package.json        # Dependencias
├── vite.config.js      # Config Vite + PWA plugin
├── public/
│   ├── icon-192.png    # Ícono PWA 192x192
│   └── icon-512.png    # Ícono PWA 512x512
└── src/
    ├── main.jsx        # React entry
    └── App.jsx         # App completa (motor + UI)
```

## Cómo usar

1. **Pega resultados** de quinielasrd.com en el campo de texto
2. **Procesar** - Detecta loterías y números automáticamente
3. **Analizar** - Ejecuta 10 métodos de análisis
4. **Predicciones** - Ve quiniela, pale y tripleta recomendadas
5. **Calculadora** - Ingresa tu bankroll para distribución inteligente
6. **Auto-Datos** - Busca datos históricos con IA (requiere API key)

## Disclaimer

Las loterías son 100% azar. Este es un análisis estadístico para entretenimiento. Juega responsable.
