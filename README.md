# Carideal UI

Prototipo visual mobile-first construido con Next.js, React y TypeScript. El objetivo de este repositorio es maquetar pantallas responsive; la integración funcional se realizará en una etapa posterior.

## Ejecutar el proyecto

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

Para generar canonicals, sitemap y metadatos sociales con el dominio real en
producción, configurar:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## Comandos

```bash
npm run dev     # entorno local
npm run lint    # análisis estático
npm run typecheck # validación de TypeScript
npm run check   # lint y TypeScript
npm run build   # compilación de producción
npm run start   # servir la compilación
```

## Estructura sugerida

```text
src/
├── app/          # rutas, layouts y estilos de cada pantalla
├── components/   # componentes visuales reutilizables
└── data/         # datos mock para las maquetas
public/           # imágenes, iconos y tipografías locales
```

El header y la navegación compartida viven en `NavigationShell`. Los iconos pequeños son SVG locales para evitar descargar una fuente completa. Los estilos generales y tokens viven en `src/app/globals.css`; los detalles específicos de una pantalla deben ir en archivos `*.module.css` junto a ella.
