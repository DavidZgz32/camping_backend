# Camping Backend

Minimal Strapi 5 setup that exposes placeholder collection types for `horarios`, `instalaciones`, `actividades` y `galeria`. The data model is intentionally empty so we can iterate collaboratively alongside the mobile client.

## Requisitos

- Node.js 18.x o superior
- npm 9.x o superior (viene con Node)

## Configuración inicial

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Crea tu archivo de entorno:
   ```bash
   cp .env.example .env
   ```
3. Define las variables pendientes en `.env`. Hasta conectar una base de datos real, deja `DATABASE_CLIENT` vacío o configúralo a `sqlite` para pruebas locales.

## Ejecutar en modo desarrollo

```bash
npm run develop
```

Si no has configurado la base de datos, Strapi mostrará un error de conexión. Ajusta los valores de `DATABASE_*` cuando el equipo de datos habilite la instancia correspondiente.

## Estructura relevante

- `src/api/**`: contiene los tipos de colección vacíos generados para cada dominio solicitado.
- `config/database.ts`: centraliza la configuración de base de datos mediante variables de entorno.
- `.env.example`: guía de variables obligatorias y opcionales.

## Próximos pasos sugeridos

- Elegir el motor de base de datos definitivo y completar las variables en `.env`.
- Modelar atributos para cada colección en `schema.json` según el contenido necesario.
- Añadir políticas, componentes reutilizables y flujos de publicación desde Strapi Studio.

## Linting

Aun sin reglas personalizadas, puedes ejecutar las comprobaciones base de Strapi:

```bash
npm run lint
```

(agregaremos ESLint/Prettier personalizados en la raíz del monorepo para mantener estilo consistente).
