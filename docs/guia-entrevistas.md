# Guía de entrevistas — Ikrame Ibn Hayoun

> Cómo importar en Notion: **Importar → Markdown** y elige este archivo. O crea una página vacía, pega el contenido y Notion lo convierte. Los títulos `##` quedan como bloques; las tablas, como tablas.

Documento para hablar con calma. Cada respuesta está en frases que puedes decir en voz alta. Si no recuerdas un detalle, di la idea grande y el porqué; no inventes.

**Fecha:** agosto 2026 · **Rol que buscas:** backend (APIs, PostgreSQL) remoto o híbrido · **Sitio:** https://ikrame.dev

---

## Índice

1. Cómo usar esta nota (30 segundos antes de una llamada)
2. Pitch de 30 / 60 / 120 segundos
3. Quién soy y qué he hecho hasta ahora
4. Herramientas que no son desarrollo web (CV anterior)
5. Cómo explicar el salto admin → desarrollo
6. Mapa de proyectos (orden para la entrevista)
7. ReckonFlow (backend estrella)
8. import-resolve-cli (Python / Git / PyPI)
9. MyPlaythrough (proyecto final DAW · PERN)
10. Live Event Radar (frontend de ops)
11. Aiba (Electron, local-first)
12. Portfolio ikrame.dev
13. Prácticas DATA CONTROL y Power App de EY
14. Python desde lo básico
15. SQL y PostgreSQL desde lo básico
16. HTTP, REST y APIs
17. Autenticación (JWT, API keys, cookies)
18. Clases, objetos y cómo se ven en mis repos
19. Git, CI y cómo publico código
20. Testing
21. Redis, colas y “lo difícil” (reintentos, dinero, concurrencia)
22. Frontend (lo justo para no quedarte en blanco)
23. Preguntas típicas de RRHH y STAR
24. Lo que no debo vender de más
25. Si no sé la respuesta
26. Preguntas que puedo hacer yo
27. Cheatsheet de una página

---

## 1. Cómo usar esta nota (30 segundos antes de una llamada)

1. Abre el **pitch de 60 segundos**.
2. Ten a mano el **proyecto estrella: ReckonFlow**.
3. Si preguntan por SQL o clases, salta a esas secciones.
4. Si preguntan por el pasado admin, sección 4 y 5: no te disculpes; conéctalo con dinero, procesos y datos.

Frase de anclaje si te pones nerviosa:

> “Te lo cuento con un ejemplo de un proyecto mío, así se ve mejor.”

---

## 2. Pitch de 30 / 60 / 120 segundos

### 30 segundos

> Soy Ikrame, desarrolladora backend en Málaga. Acabo de terminar DAW. Construyo APIs y modelos de datos: FastAPI, Node, PostgreSQL. El proyecto que mejor me representa es ReckonFlow: una API donde un POST reintentado no puede pagar dos veces. Estoy abierta a remoto o híbrido.

### 60 segundos (el de verdad)

> Vengo de administración y contabilidad, así que ya había visto cómo se rompe un proceso cuando el dato no cuadra. Hice DAW, prácticas de desarrollo, y ahora me centro en backend. En ReckonFlow trabajé idempotencia, un ledger de doble partida y conciliación bancaria. En MyPlaythrough, el proyecto final, monté un API Express con JWT y PostgreSQL y se llevó la nota máxima. También publico herramientas: una CLI en PyPI y este portfolio. Busco un equipo de backend donde pueda seguir profundizando en APIs y bases de datos.

### 120 segundos (si dicen “cuéntame más”)

Añade esto al de 60:

> En ReckonFlow el dinero va como string en JSON, no como number, porque los floats redondean mal. Redis guarda la clave de idempotencia con SET NX. La conciliación hace un prefiltro SQL, RapidFuzz y RRF, y al confirmar un match bloqueo la fila con FOR UPDATE. No es un CRUD: es el borde que falla con reintentos y tráfico real. En frontend sí entrego cuando el producto lo necesita — Live Event Radar nació de haber trabajado en activaciones de marca y ver que el stock se enteraba tarde por WhatsApp.

---

## 3. Quién soy y qué he hecho hasta ahora

**Nombre:** Ikrame Ibn Hayoun  
**Sitio:** Málaga (CET)  
**Idiomas:** español nativo, inglés C1 (di “avanzado, no certificado” si preguntan el título), darija nativo  
**Formación:**

- Grado Medio Gestión Administrativa, IES Politécnico Jesús Marín (2022–2024), matrícula de honor
- DAW (desarrollo de aplicaciones web), CESUR Este Málaga (sep 2024 – jun 2026)
- Especialización IA y Big Data: **empieza sep 2026** — formación, no experiencia de producción

**Disponibilidad:** remoto o híbrido.

**Stack que sí has usado de verdad en proyectos:**

- Python, FastAPI, Pydantic, SQLAlchemy, Alembic, pytest
- Node.js, Express, JWT, bcrypt
- PostgreSQL, SQL parametrizado, índices, CHECK, FKs
- Redis (idempotencia, rate limit, guest book)
- React, Vite, Next.js, TypeScript, Tailwind, Framer Motion
- Git, GitHub Actions, Docker, Vercel, Render, Neon, Upstash
- Electron (Aiba)

**Cómo decirlo:**

> “Backend primero. Frontend cuando el producto necesita una UI. No me presento como full-stack en España; el rol que busco es APIs y datos.”

---

## 4. Herramientas que no son desarrollo web (CV anterior)

Esto sale si preguntan “qué has hecho además de programar” o “por qué admin”. No las cuelgues como skills de ingeniería. Cuélgalas como **contexto de negocio**.

### Contabilidad y dinero

- **SAGE** (Sylvis): asientos de cobros, pagos, comisiones, facturas de compra/venta.
- **Excel:** costes de vehículos e importaciones, conciliaciones.
- **Odoo / Factorial:** procesos de empresa (RRHH, contabilidad).
- **Looker:** vistas de reporting.
- **DELSOL** (NOMINASOL, FACTUSOL, CONTASOL): ofimática de pymes.

**Puente a backend:**

> “En SAGE y en Excel ya veía asientos: debe y haber. En ReckonFlow eso es un ledger de doble partida: cada movimiento son dos líneas que suman cero. Si alguien edita el pasado, se rompe la historia; por eso el ledger es append-only.”

### RRHH y operaciones

- **Factorial:** altas, bajas, contratos, nóminas, finiquitos.
- **Evergiving:** donaciones y llamadas (Conciencia Fundraising).
- **Asana, Notion, Slack, Drive, Outlook:** coordinación.
- **Microsoft Office** avanzado.

**Puente:**

> “Un alta en Factorial es un flujo con estados y reglas. En una API eso son transiciones: pending → approved → paid. No dejo que un estado salte a otro sin pasar por el servicio.”

### Eventos y retail

- Azafato / brand ambassador (EC Azafatas, Noria de Málaga, IMFE).
- Inventario de stand a final de día.

**Puente:**

> “Live Event Radar sale de ahí: el stock se enteraba por WhatsApp cuando ya era tarde. El dashboard enseña qué zona se vacía ahora.”

### EY (ene 2025 – mar 2026)

- Executive Assistant: visitas de cliente, Concur, Outlook, Teams, SharePoint.
- **Power App** de la rifa de Navidad CNS: registro y asignación de números en un sitio, no por email.

**Cómo decirlo:**

> “No es un backend, es Power Platform. Pero el problema era el mismo: un proceso repartido en chats. Lo concentré en una app con datos estructurados.”

---

## 5. Cómo explicar el salto admin → desarrollo

No digas “me aburrí”. Di **continuidad**.

> “En admin veía el síntoma: facturas que no cuadran, donaciones mal seguidas, stock que se entera tarde. En DAW aprendí a construir el sistema que evita ese síntoma. ReckonFlow es literalmente conciliar banco y gasto, que es lo que ya había hecho a mano. Ahora lo hago con API, Postgres y reglas que no se pueden saltar.”

Si preguntan si “vienes de un bootcamp”:

> “No. Es un ciclo superior DAW, EQF 5, equivalente a un HND. Dos años, proyecto final con nota máxima, prácticas en DATA CONTROL montando Moodle y tocando la base de datos.”

---

## 6. Mapa de proyectos (orden para la entrevista)

Si te dejan elegir, este es el orden. Backend primero.

| # | Proyecto | Tipo | Una frase |
| --- | --- | --- | --- |
| 1 | **ReckonFlow** | API Python | Viajes de empresa: ledger, idempotencia, conciliación. |
| 2 | **import-resolve-cli** | CLI Python en PyPI | Resuelve conflictos de imports en Git, sin dependencias. |
| 3 | **MyPlaythrough** | Full-stack PERN | Proyecto final DAW: biblioteca de juegos + comunidad. |
| 4 | **Portfolio** | React + APIs Vercel | Sitio en producción: contacto, guest book, i18n. |
| 5 | **Live Event Radar** | Frontend Next.js | Dashboard de stock en un evento, sin backend obligatorio. |
| 6 | **Aiba** | Electron | Widget Windows local-first: plan / focus / unwind. |

Repos públicos: https://github.com/ikrame-ih (7 repos). Todos los de la tabla son públicos.

---

## 7. ReckonFlow (backend estrella)

**Repo:** https://github.com/ikrame-ih/reckon-flow  
**Docs:** https://ikrame-ih.github.io/reckon-flow/  
**Demo:** https://reckon-flow.onrender.com/docs (Render gratis duerme: el primer hit puede tardar ~50 s — dilo tú antes de que piensen que está caído)

### Qué es, en una frase

> “Una API sin interfaz para viajes de empresa: pides un viaje, lo aprueban, registras gastos, subes el extracto del banco y el sistema te sugiere qué línea casa con qué gasto. Está hecha para que un POST reintentado no pague dos veces.”

### Por qué existe

Los demos CRUD no enseñan lo que se rompe en finanzas: reintentos, redondeo, dos personas reclamando la misma línea, un recibo que intenta “convencer” al modelo.

### Stack real

Python 3.12 · FastAPI · SQLAlchemy 2 async · Alembic · PostgreSQL (Neon) · Redis (Upstash) · Pydantic · RapidFuzz · Groq o stub · Ruff · mypy · pytest · MkDocs · Render

### Arquitectura (dilo así)

> “El cliente llega al middleware de idempotencia en Redis. Si la clave es nueva, sigue a los routers de FastAPI, luego a servicios, luego a Postgres. Subir un recibo no espera al LLM: responde 202 y extrae en background. La conciliación filtra en SQL, compara textos con RapidFuzz, opcionalmente embeddings, y fusiona rankings con RRF.”

### Piezas de dominio

1. **Viajes y aprobaciones:** pending / approved / paid / rejected.
2. **Ledger de doble partida, append-only.** No se editan filas viejas; se corrige con un asiento inverso.
3. **Dinero:** JSON string (`"120.50"`), en Python `Decimal`, en Postgres `NUMERIC(15,4)`.
4. **Recibos:** upload → 202 → Groq o stub → JSON con schema cerrado (`extra="forbid"`).
5. **Banco:** CSV con `external_id` para no importar dos veces la misma línea.
6. **Conciliación:** prefiltro SQL → RapidFuzz → embeddings → RRF (k=60) → confirmar con `SELECT … FOR UPDATE`.

### Decisiones que te van a preguntar (ensáyalas)

**¿Por qué el dinero es string y no number?**  
> “En JSON, 120.50 a menudo se vuelve float. Los floats no sirven para dinero: 0.1 + 0.2 no es 0.3. El API habla en strings, Python usa Decimal, la base NUMERIC.”

**¿Qué es idempotencia?**  
> “Hacer lo mismo una o diez veces deja el mismo resultado. Si el cliente hace POST, se corta la red y reintenta, no quiero dos gastos. Redis hace SET de la Idempotency-Key solo si no existía (NX) y caduca en 24 h (EX). El primero gana; el segundo recibe la respuesta cacheada.”

**¿Qué pasa si Redis se cae?**  
> “Fail-open: dejo pasar la petición y lo registro. Prefiero disponibilidad a bloquear todos los writes. Está escrito en un ADR. No lo vendo como perfecto; es un trade-off consciente.”

**¿Por qué no JWT de usuarios?**  
> “De momento es una API key compartida en las rutas de finanzas. No hay tenants ni roles. Para un portfolio era el alcance correcto; el siguiente paso sería OIDC y ownership. También está en un ADR.”

**¿Por qué BackgroundTasks y no Celery?**  
> “El extract del recibo no puede bloquear el HTTP. FastAPI BackgroundTasks vale para el demo. Si esto fuera producción de verdad, usaría una cola durable: si el proceso muere, el job se pierde.”

**¿Qué es RRF?**  
> “Reciprocal Rank Fusion. Tengo dos rankings (texto difuso y embeddings) que no están en la misma escala. No los promedio. Por cada candidato sumo 1/(k + posición), con k=60. Gana quien sale bien en varios rankings.”

**¿Qué es FOR UPDATE?**  
> “Un candado de fila en SQL. Cuando confirmo que este gasto casa con esta línea de banco, bloqueo esas filas hasta terminar la transacción. Así dos peticiones no se quedan con el mismo gasto.”

**¿Por qué no confías en el LLM?**  
> “El texto del recibo puede traer prompt injection. El modelo solo rellena campos de un schema. extra=forbid: si manda un campo raro, se rechaza. El modelo no aprueba ni paga.”

### Clases (SQLAlchemy)

Ejemplo real: `LedgerTransaction` agrupa líneas; `LedgerEntry` es un debe o un haber, nunca los dos.

En la base hay un CHECK: `(debit > 0 AND credit = 0) OR (credit > 0 AND debit = 0)`. Eso es una regla de negocio **en la base**, no solo en Python.

### Fases en las que lo construiste

0. layout, health, CI  
1. Decimal + ledger + Alembic  
2. viajes, gastos, CSV banco  
3. Redis idempotencia  
4. 202 + extracción  
5. matching + FOR UPDATE  
6. OpenAPI, seed, deploy, API key  

Si preguntan “por dónde empezarías un sistema así”:

> “Primero el dinero y el ledger. Si eso no cuadra, el resto es teatro. Luego el flujo de negocio. Luego los bordes: reintentos, jobs, matching.”

### Limitaciones (dilo tú, queda mejor)

- Auth simple (API key).
- Jobs no durables.
- Embeddings en local son un stub determinista.
- Recibos en disco (en PaaS gratis se pierden al reiniciar).
- Rate limit: Redis, con fallback en memoria.

### Cómo lo demuestras en 60 s en /docs

1. GET `/api/v1/accounts` → CASH, TRAVEL  
2. GET `/api/v1/expenses` → un id  
3. GET suggestions de conciliación  
4. Menciona que las rutas de finanzas piden `X-API-Key` en producción  

---

## 8. import-resolve-cli

**Repo:** https://github.com/ikrame-ih/import-resolve-cli  
**PyPI:** https://pypi.org/project/import-resolve-cli/  
Python 3.9+, **cero dependencias de runtime**.

### Qué es

> “Una CLI que resuelve conflictos de merge que solo tocan líneas import de Python. Git deja los marcadores; yo parseo ambos lados, deduplico, ordeno y reescribo el bloque si es seguro. Si hay código de verdad en el conflicto, no lo toco.”

### Por qué no usas isort/ruff en el conflicto

> “isort y ruff fallan mientras los marcadores de Git siguen en el archivo. checkout --ours tira los imports del otro lado. Esta herramienta solo ataca el caso aburrido y frecuente: dos ramas añadieron imports distintos.”

### Seguridad (esto queda muy bien)

- Solo reescribe si **todas** las líneas no vacías son `import` / `from` o comentario.
- El bloque fusionado tiene que pasar `ast.parse`.
- Escritura atómica: tempfile + `os.replace` (si peta a mitad, no dejas el archivo a medias).
- Respeta LF/CRLF y BOM UTF-8.
- Omite binarios, no UTF-8, y archivos > 5 MB.
- Sin red.

### Merge driver

`--install-hook` registra un merge driver **solo en ese repo** (`.git/config` + `.git/info/attributes`), nada global.

### Módulos (cómo está organizado)

- `cli.py` — argumentos, códigos de salida (0 ok, 1 quedan conflictos, 2 uso mal)
- `parser.py` — marcadores `<<<<<<<` / `=======` / `>>>>>>>`
- `resolver.py` — fusión y sort
- `files.py` — I/O atómico
- `hook.py` — install/uninstall

**Clase vs módulo:** aquí no hace falta una jerarquía de clases. Son funciones y módulos. Eso también es una decisión:

> “Para un parser de archivos, composición de funciones es más claro que una jerarquía. Uso clases donde hay estado e identidad, como en el ledger.”

---

## 9. MyPlaythrough (proyecto final DAW)

**Repo:** https://github.com/ikrame-ih/my-playthrough  
**Demo:** https://my-playthrough.vercel.app (cuenta demo de solo lectura)  
**Docs:** https://ikrame-ih.github.io/my-playthrough/  
**Nota:** máxima.

### Qué es

> “Un gestor de biblioteca de juegos con comunidad: colección, follows, recomendaciones, hilos, LFG y panel admin. PERN: Postgres, Express, React, Node. Auth JWT.”

### Arquitectura

```
Navegador (React + Vite)
        → API Express
              → PostgreSQL
              → proxy Steam / RAWG (las API keys no salen al cliente)
```

Producción: Vercel (SPA) + Render (API) + Neon (Postgres). En local: Docker Compose para Postgres + API.

### Auth (frases listas)

> “La contraseña no se guarda en claro: bcrypt. El login devuelve un JWT firmado con HS256. Las rutas protegidas exigen Bearer. El rol user/admin está en la base con un CHECK. El token en el cliente vive en localStorage: es simple y es un trade-off; un atacante XSS podría leerlo. Por eso sanitizo input y pongo Helmet y CSP.”

### SQL que sí usaste (esto te van a preguntar)

Tablas reales: `usuarios`, `catalogo_juegos`, `juegos`, `juego_comentarios` (hilos con `parent_id`), votos, `usuario_seguimientos`, recomendaciones, `lfg_publicaciones`.

Conceptos que puedes nombrar con ejemplo:

| Concepto | Dónde está |
| --- | --- |
| PRIMARY KEY / SERIAL | `id SERIAL PRIMARY KEY` |
| UNIQUE | email; índice único de nombre en minúsculas |
| FOREIGN KEY | `juegos.usuario_id → usuarios.id` |
| ON DELETE CASCADE | si borro al usuario, se van sus fichas |
| ON DELETE SET NULL | si borro el catálogo, la ficha queda sin `catalogo_id` |
| CHECK | rol solo `user` o `admin`; voto solo -1 o 1; no seguirte a ti misma |
| UNIQUE compuesto | un usuario no tiene dos fichas del mismo juego de catálogo |
| Índice parcial | unique de (usuario, catalogo) `WHERE catalogo_id IS NOT NULL` |
| Índice para listados | LFG activo + fecha DESC |

**Triggers:** en este schema **no hay triggers**. Si preguntan:

> “No usé triggers. Las reglas viven en CHECK, en FKs y en el servicio Express. Un trigger valdría para auditoría automática (‘cuando se inserte un voto, escribe en log’). Aquí no lo necesitaba y añade magia difícil de testear.”

**SQL injection:**

> “No concateno strings. Uso placeholders `$1, $2` con el driver `pg`.”

### Seguridad que puedes listar sin exagerar

JWT · bcrypt · validación en servidor · queries parametrizadas · rate limit · sanitización de texto · Helmet · CORS cerrado · body 50 KB · cuenta demo que no escala a admin · proxy de portadas con allowlist (anti-SSRF)

### Lo que aprendiste (cierre de DAW)

> “Diseñar API por módulos, JWT y roles, esquema relacional, validar antes de escribir, Docker, y desplegar un stack partido en tres servicios.”

---

## 10. Live Event Radar

**Repo:** https://github.com/ikrame-ih/live-event-radar  
**Demo:** https://live-event-radar.vercel.app  

### Qué es

> “Un dashboard de operaciones para un evento: qué zona se queda sin stock. Nació de trabajar de azafata y ver que el problema llegaba por WhatsApp. Es frontend: el feed por defecto es un simulador. Se puede enchufar un WebSocket.”

### Ideas técnicas (aunque sea frontend, suenan a sistemas)

- **Ring buffer** de 10k eventos: lista circular. Cuando está llena, el nuevo pisa al más viejo. La memoria no crece. Los coordinadores miran lo reciente, no 8 horas de historia.
- **Zustand:** un store compartido por `/` y `/dashboard`.
- **Dos mapas:** SVG para “qué zona está roja”; Leaflet para el recinto.
- **Web Worker** solo para throughput de una ventana; el resto en el hilo principal.
- **Minutes to empty** es una heurística (ritmo de ~60 s), no un modelo de ML. Diló.
- Tests: Vitest + Playwright (desktop/tablet/móvil).

### Frase si dicen “esto no es backend”

> “Correcto: es un cliente de un stream. El contrato de eventos y el buffer ya están pensados para un backend después: feed autenticado, agregación por recinto. No finjo que hay un API que no existe.”

---

## 11. Aiba

**Repo:** https://github.com/ikrame-ih/aiba-widget  

> “Widget de Windows que empecé como un regalo. Planificar el día, un bloque de focus y desconectar. Todo en JSON local. Sin cuenta y sin nube.”

**Arquitectura:** UI React → preload IPC → proceso main de Electron → JSON + overlay de focus.

**Por qué preload:**

> “En Electron el proceso main tiene acceso al disco. El renderer no debe tenerlo crudo. El preload es un puente corto y controlado: la UI pide ‘guarda esto’, main lo escribe.”

---

## 12. Portfolio (ikrame.dev)

**Repo:** https://github.com/ikrame-ih/dev-portfolio  

React 19 + Vite + Tailwind. APIs serverless en Vercel.

- **Contacto:** Resend, honeypot, rate limit, el formulario tiene que haber estado abierto un mínimo de tiempo (`startedAt`).
- **Guest book:** un lazo por visitante, cookie HttpOnly, Redis (Upstash), distancia mínima entre lazos.
- **i18n** EN/ES.
- **CLI** en la esquina (atajo T): no es una shell real; navega el sitio.

Si preguntan por seguridad del portfolio:

> “El contacto escapa HTML, recorta campos, limita por IP. El guest book no deja apilar lazos del mismo visitante. Sin Redis en producción el rate limit responde 503, no se queda abierto.”

---

## 13. Prácticas DATA CONTROL y Power App

**DATA CONTROL (mar–jun 2026):** Moodle (plataforma de aprendizaje), consultas y estructura de base de datos, CSS/UI para que no se viera “de plantilla”.

> “Fue un intern de producto interno: levantar, estructurar contenido y mantener datos coherentes con la app. No es ReckonFlow, pero es el mismo músculo: datos, pantallas, que no se rompa el día a día.”

**EY Power App:** rifa — un número, un nombre, un email. Sustituye el caos de Teams.

---

## 14. Python desde lo básico

Habla como si se lo explicaras a alguien listo que no programa. Luego enseña el detalle.

### Qué es Python aquí

Lenguaje. En ReckonFlow y en la CLI es el de servidor o de herramienta, no el del navegador.

### Tipos que usas

- `int`, `str`, `bool`, `list`, `dict`
- `Decimal` para dinero (nunca `float` para euros)
- `None` cuando no hay valor

### Función

Un bloque con nombre que recibe datos y puede devolver un resultado.

```python
def suma(a, b):
    return a + b
```

### Clase

Una plantilla. El **objeto** es una instancia. En ReckonFlow, `LedgerEntry` es la plantilla de una línea del libro.

```python
class LedgerEntry:
    def __init__(self, debit, credit):
        self.debit = debit
        self.credit = credit
```

`self` es “esta instancia”. `__init__` se ejecuta al crear el objeto.

**Cuándo clase y cuándo no:** estado + identidad + reglas → clase (un asiento, un usuario). Transformar un archivo de texto → funciones (import-resolve).

### Módulo y paquete

Un `.py` es un módulo. Una carpeta con varios módulos es un paquete (`reckonflow.models`, `import_resolve`).

### Entorno virtual / uv

Las librerías no se instalan “al Python del sistema” a ciegas. `uv sync` instala lo que declara el proyecto, reproducible.

### Async

`async def` + `await`: “esto puede esperar a la base sin bloquear el resto”. SQLAlchemy 2 async en ReckonFlow: varias peticiones HTTP pueden estar esperando a Postgres a la vez.

### Pydantic

Valida lo que entra y sale del API. Si el cliente manda mal el dinero, ni llega al servicio.

### Extra forbid

Si el JSON trae un campo no declarado, error. El LLM no cuela claves raras.

---

## 15. SQL y PostgreSQL desde lo básico

### Tabla, fila, columna

Una hoja de cálculo seria: columnas con tipo, filas con datos. `usuarios` tiene email, hash, rol.

### PRIMARY KEY

Identificador único de la fila. Suele ser `id`.

### SERIAL / IDENTITY

La base asigna el siguiente número sola.

### FOREIGN KEY

“Esta columna apunta a una fila de otra tabla.” `juegos.usuario_id` tiene que existir en `usuarios`.

### UNIQUE

No puede repetirse. Email único. Nombre de usuario único ignorando mayúsculas: índice en `LOWER(TRIM(nombre))`.

### NOT NULL

Obligatorio.

### CHECK

Regla en la fila. Rol solo `user` o `admin`. En el ledger: o debe o haber, no ambos.

### INDEX

Un índice adelanta las búsquedas (como el índice de un libro). Acelera lecturas; un poco más lento al escribir. Se pone en columnas que filtras mucho (`destinatario_id`, `activo`).

### JOIN

Combinar tablas. “Juegos con el nombre de su usuario.”

### Transacción

Varias sentencias que se confirman juntas o se deshacen juntas. El ledger: o se insertan las dos líneas, o ninguna. Si no, el libro no cuadra.

### ON DELETE CASCADE / SET NULL / RESTRICT

- CASCADE: borro el padre, se van los hijos (fichas del usuario).
- SET NULL: borro el catálogo, la ficha sigue sin ese enlace.
- RESTRICT (ReckonFlow ledger): no puedes borrar una transacción si tiene líneas — la historia no se tira.

### FOR UPDATE

Candado de fila hasta el COMMIT. Conciliación.

### NUMERIC vs FLOAT

NUMERIC(15,4) guarda decimales exactos. FLOAT es binario y redondea mal. Dinero → NUMERIC.

### TIMESTAMP vs TIMESTAMPTZ

Con zona horaria (`TIMESTAMPTZ`) no te pelean Málaga y UTC. En MyPlaythrough comentarios usan timestamptz.

### Consultas parametrizadas

`WHERE email = $1` — el valor viaja aparte. Concatenar `WHERE email = '" + input + "'` es SQL injection.

### Migración (Alembic)

Un archivo versionado que cambia el schema. `alembic upgrade head` aplica lo pendiente. No editas la base a mano en producción.

### Trigger (teoría, porque te lo pueden preguntar)

Un trigger es código **en la base** que se dispara al INSERT/UPDATE/DELETE. Ejemplo: “al insertar un voto, copia una fila a `auditoria`”.

Tú **no los usaste**. Alternativa que sí usaste: CHECK + lógica en el servicio. Frase:

> “Un trigger es útil para auditoría o para mantener un cache. También es más opaco. Preferí reglas visibles en SQLAlchemy/Express y tests. Si el equipo ya vive en Postgres, un trigger de auditoría es razonable.”

### EXPLAIN (si tiran por rendimiento)

> “EXPLAIN enseña si Postgres usa el índice o barre la tabla. Si una lista de LFG va lenta, miro el índice `(activo, created_at DESC)`.”

---

## 16. HTTP, REST y APIs

### Cliente y servidor

El navegador o otra API pide; tu servidor responde.

### Método

- GET: leer, no cambia nada (en teoría)
- POST: crear
- PUT/PATCH: actualizar
- DELETE: borrar

### Códigos que usas de verdad

- 200 ok
- 202 aceptado, sigue en background (recibos)
- 400 petición mal formada
- 401/403 auth
- 404 no está
- 409 conflicto (lazo demasiado cerca; o recurso ya existe)
- 429 demasiadas peticiones
- 503 el servicio auxiliar no está (Redis)

### REST

Recursos con URL (`/api/v1/expenses/12`), JSON, códigos HTTP. No es el único estilo; es el que usas.

### Idempotencia HTTP

GET es idempotente por naturaleza. POST no, **a menos que** tú lo hagas (Idempotency-Key).

### Headers que salen en conversación

- `Authorization: Bearer …` (JWT)
- `X-API-Key` (ReckonFlow)
- `Idempotency-Key`
- `Content-Type: application/json`

### OpenAPI / Swagger / Scalar

Un contrato generado. En ReckonFlow `/docs` es la demo. “La documentación es la API.”

---

## 17. Autenticación

### Contraseña

Nunca en claro. bcrypt (u otro hash lento). Login compara hash.

### JWT

Un token firmado. El servidor no tiene que guardar la sesión en memoria. El cliente lo manda en cada petición. Si se filtra, vale hasta que caduca. Por eso caducidad y HTTPS.

### API key

Un secreto compartido. Más simple. Vale para una API de máquina a máquina o un portfolio. No identifica a un usuario concreto.

### Cookie HttpOnly

El JS del navegador no la lee. En el guest book, `ik_visitor` identifica al firmante sin exponer el id a scripts.

### CORS

El navegador bloquea que `midominio.com` llame a `api.com` si api no lo permite. En MyPlaythrough `CORS_ORIGIN` es la lista blanca.

---

## 18. Clases, objetos y cómo se ven en mis repos

### En una frase

> “Una clase describe un tipo de cosa. El objeto es una cosa concreta. En el ledger, LedgerTransaction es el asiento; cada LedgerEntry es una línea de ese asiento.”

### Relación (ORM)

`relationship` en SQLAlchemy: `transaction.entries` son las líneas. No hace falta JOIN a mano para navegar.

### Herencia

`class LedgerEntry(Base)`: Base trae el mapeo a tabla. No hace falta una jerarquía profunda.

### Dataclass / Pydantic vs ORM

- **Pydantic schema:** lo que entra/sale por HTTP.
- **SQLAlchemy model:** lo que se guarda.
- No mezclar: el API no expone la fila cruda si no quieres.

### En JavaScript (MyPlaythrough / portfolio)

A menudo funciones y módulos, no clases. Express usa funciones middleware. React usa funciones componente. Eso no es “menos OOP”; es el estilo del ecosistema.

---

## 19. Git, CI y cómo publico código

### Git en una frase

> “Git guarda instantáneas. Una rama es una línea de trabajo. Un commit es un punto al que puedo volver. GitHub es la copia remota.”

### Conflicto de merge

Dos ramas tocaron las mismas líneas. import-resolve-cli automatiza el caso “solo imports”.

### CI (GitHub Actions)

En cada push: linter, tests, a veces build. ReckonFlow: ruff, mypy, Alembic contra Postgres, pytest, pip-audit, docs. MyPlaythrough: Vitest. import-resolve: pytest + mypy + ruff + release a PyPI.

**Por qué CI:**

> “No confío en que ‘en mi máquina funciona’. La máquina de CI es la verdad.”

### Docker

Una receta del entorno. `docker compose up` levanta Postgres + API. Evita “instálate Postgres 14 a mano y reza.”

### Deploy que conoces

- Vercel: frontend y el portfolio
- Render: APIs (duermen en free)
- Neon: Postgres
- Upstash: Redis
- PyPI: la CLI

---

## 20. Testing

> “Un test es un programa que comprueba otro programa. Lo corro en cada cambio para no romper lo que ya iba.”

- **pytest** (ReckonFlow, CLI)
- **Vitest** (MyPlaythrough, Live Event Radar, Aiba, a veces el portfolio)
- **Playwright** (clics reales en el navegador)
- **Evals** de recibos en ReckonFlow: fixtures, no “a ver qué dice el modelo hoy”

Pirámide simple: muchos tests rápidos de reglas (dinero, parser); menos tests de API; unos pocos E2E.

---

## 21. Redis, colas y “lo difícil”

### Redis

Almacén en memoria, muy rápido, datos simples (claves). No sustituye a Postgres. En tus proyectos:

- Idempotencia (ReckonFlow)
- Rate limit
- Guest book (lista de lazos)

### SET NX EX

Una sola operación atómica: “escribe esta clave solo si no existe, y que caduque.” Perfecto para “yo llego primero.”

### Cola / background job

Trabajo que no cabe en la petición HTTP. Recibos: 202 + BackgroundTasks. Limitación: si el proceso muere, adiós. Producción seria: Redis queue / arq / Celery.

### Concurrencia

Dos peticiones a la vez. FOR UPDATE + transacciones. Sin eso, doble pago o doble match.

### Rate limit

Techo de peticiones por IP y ventana de tiempo. Evita que un script te llene Redis o el buzón.

---

## 22. Frontend (lo justo)

No hace falta una masterclass. Sí estas frases:

- **React:** la UI es un árbol de componentes que se vuelven a pintar cuando cambia el estado.
- **SPA:** una sola página; el JS cambia lo que ves (portfolio, MyPlaythrough).
- **Next.js:** React con rutas y deploy fácil; Live Event Radar.
- **Estado:** Zustand = almacén global pequeño. localStorage = persiste en el navegador (token, idioma).
- **TypeScript:** JavaScript con tipos. El compilador te avisa antes de ejecutar.
- **Accesibilidad:** skip link, teclado, `aria-label`, reduced motion. El portfolio y Live Event Radar lo tienen en cuenta.

---

## 23. Preguntas típicas de RRHH y STAR

STAR = Situación, Tarea, Acción, Resultado. Una historia, no un ensayo.

### “Háblame de ti”

Pitch de 60 segundos. Punto.

### “¿Por qué backend?”

> “Porque el fallo caro está en los datos y en los bordes: reintentos, dinero, permisos. La UI se ve; el API es lo que no se puede deshacer. Me gusta esa responsabilidad. El admin me enseñó el síntoma; el backend es el sistema.”

### “¿Por qué esta empresa?”

Investiga 10 minutos: producto, stack, si tienen APIs. Conecta **una** cosa tuya: “vi que trabajáis pagos / viajes / datos; ReckonFlow es mi forma de acercarme a ese tipo de invariantes.”

### “¿Cuál es tu mayor debilidad?”

> “Me puedo ir al detalle. Lo controlo acotando el alcance: ADRs, ‘esto queda fuera’. En ReckonFlow dejé auth simple a propósito y lo escribí.”

### “Cuéntame un conflicto o un bug difícil”

Live Event Radar: los números del KPI saltaban de ancho y movían el layout. Solución: `tabular-nums`.  
O: seis `setInterval` distintos para ‘ahora’. Los unifiqué en un solo reloj.

ReckonFlow: floats vs dinero — decisión de diseño, no un bug de última hora.

### “¿Dónde te ves en 3 años?”

> “Backend sólida en un equipo: APIs, Postgres, observabilidad. La especialización de IA la usaré como lectora de datos, no como titular de Spark en producción el mes que viene.”

### “¿Tienes otras ofertas?”

Sé honesta y breve. No inventes presiones.

---

## 24. Lo que no debo vender de más

Di esto si sacan TensorFlow, Kubernetes, Kafka, SageMaker:

> “Eso está en el panel de formación: la especialización de IA empieza en septiembre 2026. No es stack con el que haya entregado en producción. Con lo que sí he entregado es FastAPI, Express, Postgres, Redis, tests y CI.”

No digas “full-stack ninja”. No digas que Live Event Radar tiene un backend que no tiene. No digas que el LLM “decide pagos”.

---

## 25. Si no sé la respuesta

Plantilla:

> “Así no lo he implementado. La idea es [X]. En ReckonFlow / MyPlaythrough me acerqué así: [analogía]. Si tuviera que hacerlo mañana, empezaría por [doc / prueba / constraint en SQL].”

Ejemplos:

- **Triggers:** “No los usé; usé CHECK y el servicio. Un trigger de auditoría tendría sentido.”
- **Kafka:** “No lo he operado. Es un log de eventos para muchos consumidores. Mi ring buffer es una versión en memoria de ‘solo me importa lo reciente’.”
- **Kubernetes:** “No lo he desplegado. Mis deploys son Vercel/Render. Sé qué problema resuelve (orquestar contenedores); no finjo un clúster.”

---

## 26. Preguntas que puedo hacer yo

Elige 2 o 3:

- ¿Cómo es el primer mes de una persona de backend aquí?
- ¿La API es el producto o hay un monolito con UI?
- ¿Postgres es la fuente de verdad? ¿Hay cola?
- ¿Cómo probáis pagos / writes peligrosos?
- ¿Guardáis ADRs o las decisiones viven en PRs?
- ¿El on-call entra en este rol?

---

## 27. Cheatsheet de una página

**Pitch:** backend Málaga, DAW 2026, ReckonFlow = POST que no paga dos veces.

**Dinero:** string JSON → Decimal → NUMERIC. Nunca float.

**Idempotencia:** Redis SET NX EX + respuesta cacheada. Redis down → fail-open.

**Ledger:** doble partida, append-only, CHECK debe XOR haber, RESTRICT al borrar.

**Match:** SQL prefiltro → RapidFuzz → RRF → FOR UPDATE.

**LLM:** schema forbid, 202, no ejecuta acciones.

**MyPlaythrough:** JWT + bcrypt + SQL `$1` + FKs + CHECK + rate limit.

**CLI:** stdlib, ast.parse, write atómico, no toca conflictos con lógica.

**Radar:** ring buffer 10k, Zustand, worker solo para throughput, heurística no ML.

**Aiba:** Electron preload, JSON local, sin nube.

**Admin:** SAGE/Excel/Factorial = procesos y asientos; ahora son estados de API.

**IA panel:** coursework sep 2026.

**Demo ReckonFlow:** avisa del cold start de Render (~50 s).

---

### Enlaces rápidos

- Portfolio: https://ikrame.dev
- ReckonFlow docs: https://ikrame-ih.github.io/reckon-flow/
- ReckonFlow API: https://reckon-flow.onrender.com/docs
- MyPlaythrough: https://my-playthrough.vercel.app
- Live Event Radar: https://live-event-radar.vercel.app
- GitHub: https://github.com/ikrame-ih
- LinkedIn: https://www.linkedin.com/in/ikrame-ih/
)
