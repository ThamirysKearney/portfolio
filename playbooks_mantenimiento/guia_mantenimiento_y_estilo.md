# 🚀 Guía Maestra: Mantenimiento y Evolución de tu Portafolio

¡Hola! Como tu mentor, he preparado esta "receta" detallada para que entiendas perfectamente cómo funciona tu web, qué archivos puedes limpiar y cómo llevar el diseño al siguiente nivel. Sigue estos pasos como si fueran los de una receta de cocina profesional.

---

## 🏗️ 1. Entendiendo la Estructura (El Mapa)

Tu portafolio está organizado para ser escalable y limpio. Aquí tienes qué hace cada ingrediente principal:

| Archivo / Carpeta | Propósito | ¿Por qué es importante? |
| :--- | :--- | :--- |
| **`index.html`** | El corazón de tu web. | Es el archivo que carga el navegador. Contiene la estructura (HTML) y el contenido. |
| **`styles/globals.css`** | El "traje" de tu web. | Define los colores, fuentes y el diseño visual actual (responsive, modo oscuro). |
| **`scripts/i18n.js`** | El traductor. | Permite que tu web cambie de idioma (ES, EN, PT) dinámicamente. |
| **`scripts/main.js`** | El motor lógico. | Renderiza tus proyectos y habilidades automáticamente a partir de datos. |
| **`assets/`** | El almacén de archivos. | Aquí guardamos el PDF de tu CV y pronto tus imágenes de proyectos. |

---

## 📄 2. La "Magia" del CV y su Descarga

En nuestra sesión anterior, configuramos un sistema de descarga robusto. Funciona así:

### ¿Qué hicimos exactamente?
1.  **Estandarización**: Creamos un archivo maestro en `assets/cv.pdf`. No importa cuántas versiones hagas, el nombre en la web siempre buscará ese archivo.
2.  **Atributo `download`**: En el `index.html`, los botones tienen `download="Thamirys_Kearney_CV.pdf"`. Esto le dice al navegador: "No abras el PDF, descárgalo directamente con este nombre bonito".
3.  **Backup (`cv.html`)**: Creamos esta página como un "seguro". Si alguien intenta ir a `/cv.html`, se activa un pequeño código (JavaScript) que inicia la descarga automáticamente y muestra un mensaje profesional.

### 💡 Cómo actualizar tu CV correctamente:
Cuando tengas una nueva versión de tu CV (ej. `CV_Marzo_2026.pdf`):
1.  **No cambies el código**.
2.  Simplemente **copia tu PDF nuevo** a la carpeta `assets/`.
3.  **Renómbralo** exactamente como `cv.pdf` (borrando el viejo).
4.  ¡Listo! La web se actualizará automáticamente sin tocar ni una línea de código.

---

## 🧹 3. Limpieza de Primavera (Archivos que sobran)

Tienes varios archivos que son "restos de obra" de versiones anteriores. Eliminarlos hará que tu proyecto sea más profesional y fácil de manejar.

**Archivos recomendados para eliminar:**
*   `styles.css` (El viejo, ahora usamos `styles/globals.css`).
*   `script.js` (El viejo, ahora usamos `scripts/main.js`).
*   `roadmap.html` y `roadmap_script.js` (Si no los estás usando activamente).
*   PDFs sueltos en la raíz (`THAMIRYS_CV_KEARNEY.pdf`, etc.) – ya están en `assets/`.

### 💻 Comando para limpiar (Copia y pega en tu terminal de Git Bash):
```bash
# Este comando elimina los archivos viejos de forma definitiva.
rm "styles.css" "script.js" "THAMIRYS_CV_KEARNEY.pdf" "THAMIRYS_CV_KEARNEY (1).pdf" "cv thaa.pdf"
```

---

## 🎨 4. Receta para un Diseño "Premium"

Aquí tienes los códigos que puedes añadir a tu `styles/globals.css` para darle un toque increíble.

### A. Efecto Glassmorphism (Cristal)
Para que tus tarjetas de proyectos se vean modernas y translúcidas:

```css
/* Busca .project-card y añade esto o reemplaza el fondo */
.project-card {
    background: rgba(15, 23, 42, 0.6); /* Azul muy oscuro con transparencia */
    backdrop-filter: blur(10px); /* El efecto de desenfoque */
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
```

### B. Animación de Entrada "Fade In"
Para que los elementos aparezcan suavemente al cargar:

```css
/* Añade esto al final de globals.css */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

main > section {
    animation: fadeInUp 0.8s ease-out forwards;
}
```

### C. Tipografía Elegante
Asegúrate de que estás usando 'Outfit' o 'Inter' de Google Fonts. En tu `index.html` ya tienes 'Inter', pero puedes probar 'Outfit' para un look más moderno:

1.  Cámbialo en el `<head>` de `index.html`.
2.  Usa `font-family: 'Outfit', sans-serif;` en el `body`.

---

---

## ✅ 5. Lo que ya has cambiado (Tu progreso actual)

¡Buen trabajo! He revisado tus archivos y he visto que ya has dado los primeros pasos con éxito:

1.  **Limpieza realizada**: Ya no están los archivos duplicados como `styles.css` o `script.js`. Tu carpeta está mucho más organizada.
2.  **Efecto Crystal (Glassmorphism)**: Ya has aplicado el código a tus `.project-card`. Ahora tienen ese fondo translúcido y el borde sutil.
3.  **Animaciones**: Has añadido `fadeInUp` al final de tu archivo CSS. Esto hace que las secciones de tu web no aparezcan de golpe, sino que "suban" suavemente al cargar.

---

## 👨‍🍳 6. Recetario Avanzado (Diseño)

Aquí tienes más mejoras para que las apliques manualmente. He añadido comentarios detallados dentro de cada bloque de código para que sepas exactamente qué hace cada línea.

### A. Botones con "Brillo Fugaz"
```css
/* Brillo animado para botones primarios */
.btn-primary {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.btn-primary::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -100%;
    width: 50%;
    height: 200%;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: rotate(25deg);
    transition: 0.7s;
}

.btn-primary:hover::after {
    left: 120%;
}
```

### B. Mejora del Menú (Sticky Glass)
```css
header.glass {
    background: rgba(3, 7, 18, 0.8);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
```

---

## 🛠️ 7. Soluciones Interactivas (Ya implementadas)

¡Buenas noticias! He aplicado estos códigos directamente en tus archivos para que ya funcionen, pero aquí tienes la "receta" por si quieres modificarlos de nuevo en el futuro.

### 1. Arreglar la Impresión (PDF) 📄
**Archivo:** `styles/globals.css`
```css
@media print {
    header, main, footer, aside, .overlay, #navbar {
        display: none !important;
    }
    #cv-print-area {
        display: block !important;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        color: #000 !important;
        background: #fff !important;
        visibility: visible !important;
    }
    #cv-print-area * {
        visibility: visible !important;
        color: #000 !important;
    }
}
```

### 2. Botón "Send Email" y LinkedIn 🔗
**Archivo:** `index.html`
```html
<a href="mailto:thamirys.kearney@gmail.com" class="btn btn-outline" style="justify-content: center;">Send Email</a>
<a href="https://www.linkedin.com/in/thamirys-kearney-0a7a7331/" target="_blank" class="btn btn-outline" style="justify-content: center;">LinkedIn Profile</a>
```

### 3. Botón de GitHub Repos 💻
**Archivo:** `scripts/main.js`
```javascript
// Reemplaza la función fetchGitHubStats por esta:
async function fetchGitHubStats() {
    try {
        const response = await fetch('https://api.github.com/users/ThamirysKearney');
        const data = await response.json();
        if (data.public_repos) {
            const container = document.querySelector('.hero-actions');
            const ghBtn = document.createElement('a');
            ghBtn.className = 'btn btn-outline'; 
            ghBtn.href = 'https://github.com/ThamirysKearney';
            ghBtn.target = '_blank';
            ghBtn.innerHTML = `📊 Repos: ${data.public_repos}`;
            container.appendChild(ghBtn);
        }
    } catch (err) {
        console.error('GitHub API failed', err);
    }
}
```

---

## 💡 ¿Cómo seguir?

1.  **Prueba la impresión**: Con el CSS actualizado, verás que el PDF sale perfecto.
2.  **Enlaces**: Copia los nuevos enlaces de HTML.
3.  **Botón dinámico**: Actualiza el JS para que GitHub se vea profesional.

---

## 🎨 8. Unificando el Estilo de los Botones

Para que todos tus botones transversales (Descargar, Contacto, GitHub) se vean igual de importantes que el de "View Projects", usaremos la clase `btn-primary`.

### Paso 1: Cambiar el estilo en el HTML
**Archivo:** `index.html` (dentro de la sección `#hero` y el `#recruiter-panel`)
Busca los botones que tienen `btn-outline` y cámbialos a `btn-primary`. Debe quedar así:

```html
<!-- En la sección Hero -->
<a href="assets/cv.pdf" download="Thamirys_Kearney_CV.pdf" class="btn btn-primary" data-i18n="hero.cta.download">Download CV</a>

<!-- En el panel Recruiter -->
<a href="mailto:thamirys.kearney@gmail.com" class="btn btn-primary" style="justify-content: center;">Send Email</a>
```

### Paso 2: Asegurar el botón de GitHub
**Archivo:** `scripts/main.js` (en la función `fetchGitHubStats`)
Asegúrate de que la línea donde creas el botón sea esta:
```javascript
ghBtn.className = 'btn btn-primary'; // Antes decía btn-outline
```

---

## ⚡ 9. Barras de Habilidades Animadas e Infinitas

Queremos que las barras de progreso se muevan del 0% al 100% cíclicamente y tengan un brillo especial.

**Archivo:** `styles/globals.css`
Añade este código al final del archivo. Reemplazará el comportamiento estático por uno dinámico:

```css
/* 1. Definimos la animación de carga infinita */
@keyframes loadingBar {
    0% { width: 0%; opacity: 0.3; }
    50% { width: 100%; opacity: 1; }
    100% { width: 0%; opacity: 0.3; }
}

/* 2. Aplicamos la animación a todas las barras */
.skill-progress {
    width: 0%; /* Empezamos en 0 */
    animation: loadingBar 3s ease-in-out infinite; /* 3 segundos por ciclo, infinito */
    position: relative;
    box-shadow: 0 0 15px var(--primary-glow); /* Efecto de iluminación/glow */
}

/* 3. Añadimos un destello que recorre la barra */
.skill-progress::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 30px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: shine 1.5s infinite;
}

@keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
}
```

---

## ✍️ 10. Cómo cambiar tus textos (Bio y About)

Para cambiar tus textos biográficos, no editamos el HTML directamente, sino el archivo de traducciones para que se actualice en todos los idiomas (o al menos en inglés).

**Archivo:** `data/translations.json`
Busca la sección `"en": { ... }` y actualiza estas llaves:

```json
"hero.description": "Business-minded Junior Data Analyst with over 5 years of experience in Business Administration. I bridge the gap between complex raw data and strategic business decisions.",
"about.description": "I believe data is useless without context. My background in business management helps me to see the 'why' behind the numbers. I´m specializing in identifying patterns that lead to efficiency gains and revenue growth.",
```

> [!TIP]
> **Para eliminar PostgreSQL**: Abre `scripts/main.js`, busca la variable `SKILLS_DATA` y simplemente borra la palabra "PostgreSQL" del primer elemento.

¡Dime si quieres que yo aplique estos cambios por ti para que queden perfectos!
