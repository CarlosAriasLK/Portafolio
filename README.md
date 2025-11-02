# Portafolio Carlos Arias

Un portafolio moderno y profesional desarrollado con las últimas tecnologías web.

## 🚀 Tecnologías

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS v4** - Framework CSS utilitario
- **shadcn/ui** - Componentes de UI reutilizables y personalizables
- **Framer Motion** - Animaciones fluidas y profesionales
- **Lucide React** - Iconos modernos

## ✨ Características

- ✅ Diseño responsive y moderno
- ✅ Animaciones suaves con Framer Motion
- ✅ Componentes reutilizables con shadcn/ui
- ✅ Secciones: Hero, Sobre Mí, Proyectos, Habilidades, Contacto
- ✅ Optimizado para SEO
- ✅ Rendimiento optimizado
- ✅ Modo oscuro compatible

## 📦 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar versión de producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🛠️ Estructura del Proyecto

```
portafolio-carlosarias/
├── src/
│   ├── app/              # App Router de Next.js
│   │   ├── globals.css   # Estilos globales
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Página principal
│   ├── components/       # Componentes React
│   │   ├── ui/           # Componentes shadcn/ui
│   │   ├── Hero.tsx      # Sección hero
│   │   ├── About.tsx     # Sección sobre mí
│   │   ├── Projects.tsx  # Sección proyectos
│   │   ├── Skills.tsx    # Sección habilidades
│   │   └── Contact.tsx   # Sección contacto
│   └── lib/              # Utilidades
├── public/               # Archivos estáticos
└── ...archivos de config
```

## 🎨 Personalización

### Colores y Tema

Los colores se pueden personalizar en `src/app/globals.css` modificando las variables CSS.

### Contenido

Para personalizar el contenido del portafolio:

1. **Hero**: Edita `src/components/Hero.tsx` para cambiar tu nombre y descripción
2. **Proyectos**: Modifica el array `projects` en `src/components/Projects.tsx`
3. **Habilidades**: Actualiza el array `skills` en `src/components/Skills.tsx`
4. **Contacto**: Edita los enlaces sociales en `src/components/Contact.tsx`

## 📝 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm start` - Ejecuta la versión de producción
- `npm run lint` - Ejecuta el linter

## 🚀 Despliegue

El proyecto está listo para ser desplegado en [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Para más detalles sobre el despliegue, consulta la [documentación de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
