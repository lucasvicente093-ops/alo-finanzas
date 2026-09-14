---
name: Alo Finanzas
description: Agenda financiera personal para leer caja, reservas y vencimientos en ARS y USD.
colors:
  ink: "#17241f"
  muted: "#66736c"
  paper: "#f3f6f3"
  surface: "#fff"
  green-950: "#18382e"
  green-800: "#285443"
  green-600: "#3f7a60"
  green-100: "#e3eee7"
  clay: "#b75d42"
  clay-soft: "#f6e7e1"
  amber: "#a86e16"
  amber-soft: "#fff3d9"
  line: "#dfe6e1"
  line-strong: "#c9d3cc"
  focus: "#ef9d4e"
typography:
  headline:
    fontFamily: "Segoe UI Variable, Segoe UI, Arial, sans-serif"
    fontSize: "27px"
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Segoe UI Variable, Segoe UI, Arial, sans-serif"
    fontSize: "16px"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Segoe UI Variable, Segoe UI, Arial, sans-serif"
    fontSize: "15px"
    lineHeight: 1.45
    fontFeature: "tabular-nums"
  label:
    fontFamily: "Segoe UI Variable, Segoe UI, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 650
rounded:
  field: "8px"
  control: "9px"
  navigation: "10px"
  panel: "14px"
  pill: "99px"
spacing:
  control-x: "15px"
  panel: "21px"
  desktop-gutter: "36px"
  mobile-gutter: "14px"
components:
  button-primary:
    backgroundColor: "{colors.green-800}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "9px 15px"
    height: "40px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "9px 15px"
    height: "40px"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "8px 11px"
    height: "42px"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "21px"
---

# Design System: Alo Finanzas

## Overview

**Creative North Star: "Agenda financiera"**

La interfaz se comporta como una agenda de trabajo financiero: reúne caja, vencimientos y registro en una misma vista, con navegación persistente y lectura continua. La identidad está declarada en `index.html` y se apoya en papel frío, verde tinta, arcilla para gastos, tablas continuas, cifras tabulares y divisores finos.

Es una superficie de operación densa pero sobria. La jerarquía proviene de la posición, el tamaño tipográfico, los fondos tonales y las líneas; el color se reserva para navegación, acciones y estados. Los importes permanecen comparables gracias a los números tabulares y a la separación visible entre caja, resultado, reservas y compromisos.

**Key Characteristics:**

- Navegación lateral verde tinta y área de trabajo sobre papel frío.
- Paneles blancos, bordes finos y radios contenidos.
- Datos financieros compactos, alineados y con cifras tabulares.
- Verde para continuidad y resultado favorable; arcilla para egresos o error; ámbar para atención.
- Una sola acción primaria visible en el encabezado de cada sección.

## Colors

La paleta combina verdes apagados con neutrales fríos; arcilla y ámbar aparecen como colores semánticos y no como decoración.

### Primary

- **Verde tinta oscuro** (`green-950`): navegación lateral, selección de moneda y superficies de incorporación.
- **Verde de acción** (`green-800`): botones primarios y acciones de texto.
- **Verde medio** (`green-600`): parte de la escala existente; conservar para extensiones compatibles con el acento principal.
- **Verde lavado** (`green-100`): fondos suaves de éxito, selección o acción secundaria.

### Secondary

- **Arcilla** (`clay`): egresos en gráficos y señalización vinculada a gasto o error.
- **Arcilla suave** (`clay-soft`): fondo de estados de riesgo o vencimiento.
- **Ámbar** (`amber`): texto de advertencia.
- **Ámbar suave** (`amber-soft`): fondo de alertas y avisos de atención.

### Neutral

- **Tinta** (`ink`): texto principal e importes.
- **Texto atenuado** (`muted`): ayudas, subtítulos, metadatos y ejes.
- **Papel frío** (`paper`): fondo general de la aplicación.
- **Superficie** (`surface`): paneles, campos, tablas y controles.
- **Línea** (`line`): divisores internos y bordes de panel.
- **Línea fuerte** (`line-strong`): contorno de campos y controles.
- **Foco cálido** (`focus`): anillo visible de teclado.

**The Semantic Accent Rule.** Usar verde, arcilla y ámbar según el significado ya establecido; no depender solo del color, porque los estados también llevan texto, badges o posición.

## Typography

**Display Font:** no existe una familia de display separada.
**Body Font:** Segoe UI Variable, con Segoe UI, Arial y sans-serif como alternativas.
**Label/Mono Font:** no existe una familia separada; los datos usan la familia general con números tabulares.

La tipografía es de sistema, compacta y funcional. Los títulos usan tracking negativo para concentrar la jerarquía; etiquetas y cabeceras de tabla recurren a peso, mayúsculas y espaciado para separar metadatos de contenido.

### Hierarchy

- **Headline:** encabezado de página, compacto y con tracking negativo; baja a `21px` en móvil.
- **Drawer title:** título del formulario lateral (`23px`).
- **Section title:** encabezado de panel (`16px`) y títulos de incorporación (`22px`).
- **Metric:** importes principales entre `20px` y `25px`; bajan a `22px` en los KPI móviles.
- **Body:** texto general con interlínea `1.45`; baja a `14px` en pantallas estrechas.
- **Label:** etiquetas de formulario y métricas (`12px`, peso `650`); cabeceras de tabla y contextos usan entre `10px` y `10.5px`, mayúsculas y tracking amplio.

**The Tabular Money Rule.** Todo el documento hereda cifras tabulares para que importes, cuotas y porcentajes se comparen sin saltos de ancho.

## Layout

En escritorio, una barra lateral fija de `252px` ocupa toda la altura. El contenido comienza a su derecha, usa `36px` de separación horizontal, un máximo de `1760px` y un encabezado de al menos `108px`. La vista general combina cuatro KPI continuos con una grilla principal de proporción aproximada `1.65 / 1`; los paneles usan `21px` de relleno y `18px` de separación recurrente.

A `1120px`, los KPI pasan de cuatro a dos columnas, la grilla del dashboard se vuelve una sola columna y las estadísticas de proyecto bajan de seis a tres columnas. A `820px`, la navegación se transforma en un drawer lateral de hasta `292px` o `86vw`, aparece un scrim, el contenido pierde el margen lateral y usa `20px` de gutter; se ocultan el subtítulo de página y el control de cotización. A `620px`, el gutter baja a `14px`, los KPI se apilan, formularios y porcentajes pasan a una columna, las estadísticas y resúmenes usan dos columnas, las acciones del onboarding ocupan todo el ancho y el drawer de edición toma `100vw`.

Las tablas conservan columnas sin quiebre y se desplazan horizontalmente dentro de `.table-wrap`; no se reordenan como tarjetas. Los filtros se envuelven en pantallas medias y forman una grilla de dos columnas en móvil, con el selector de moneda ocupando la fila completa.

**The Continuous Table Rule.** Mantener las filas dentro de una tabla continua con divisores finos y scroll horizontal cuando falte espacio.

## Elevation & Depth

El sistema es plano por defecto. Paneles, KPI, resúmenes y tablas se separan mediante fondo blanco, líneas y cambios tonales. La sombra se reserva para elementos que flotan: el drawer lateral, los toast y el pequeño relieve del botón primario.

### Shadow Vocabulary

- **Overlay ambient:** la sombra global `--shadow` se usa en los toast.
- **Drawer lateral:** sombra amplia hacia la izquierda para separar el formulario modal del contenido.
- **Primary press line:** una sombra vertical mínima bajo el botón primario.

**The Flat Surface Rule.** Una superficie en reposo se delimita con borde o tono; la sombra indica superposición o acción.

## Shapes

Los paneles principales y grupos de KPI usan esquinas suavemente redondeadas (`panel`). Campos, botones y cajas de fecha usan radios menores (`field` y `control`), y la navegación usa un radio intermedio (`navigation`). Los badges son píldoras completas (`pill`). Los gráficos de barras horizontales son la excepción recta: sus tracks no llevan radio, mientras las muestras de leyenda sí terminan redondeadas.

Los bordes son de un píxel y alternan entre `line` para separación interna y `line-strong` para controles interactivos. Los iconos son SVG lineales, sin relleno, con extremos y uniones redondeados.

## Components

### Navigation

- La barra lateral fija contiene marca, navegación vertical desplazable y estado de almacenamiento anclado al pie.
- Cada ítem mide al menos `43px`, combina icono, etiqueta e indicador lateral de `3px`.
- Hover y activo usan fondos verdes más claros; el activo añade peso `600`, texto blanco, `aria-current="page"` e indicador arcilla.
- En móvil se abre con botón de `44px`, scrim y sincronización de `aria-expanded`, `aria-hidden` e `inert`; Escape la cierra y devuelve el foco.

### Buttons

- **Primary:** verde de acción, texto blanco, radio de control, altura mínima `40px` y peso `600`; oscurece en hover.
- **Secondary:** superficie blanca con borde fuerte; refuerza borde y fondo en hover.
- **Text:** fondo transparente y texto verde; recibe un lavado verde en hover.
- **Danger:** texto arcilla oscuro y borde arcilla suave; la variante de texto elimina el borde.
- **Icon controls:** cuadrados de `42px`, elevados a `44px` en móvil para el menú y la acción nueva.
- Todos los botones deshabilitados reducen opacidad y cambian el cursor.

### Inputs / Fields

- Campos blancos de `42px`, borde fuerte, radio de campo y relleno `8px 11px`; los campos del drawer suben a `44px`.
- Las etiquetas permanecen visibles sobre el control. Los campos obligatorios añaden un asterisco oculto a tecnologías de asistencia.
- Textareas crecen verticalmente. Los sufijos porcentuales comparten borde y recortan los radios internos.
- Los errores de formulario aparecen en un bloque con `role="alert"`; el foco global usa un contorno cálido de `3px` y offset de `2px`.

### Cards / Containers

- Los paneles son superficies blancas con borde fino, radio de panel y relleno de panel.
- Los KPI forman una sola superficie segmentada por divisores, con el dinero disponible sobre un fondo verde lavado.
- Los resúmenes usan la misma construcción continua y una grilla automática con celdas de al menos `180px`.
- El onboarding invierte la paleta: fondo verde oscuro, texto claro y acción primaria arcilla clara.

### Tables

- Cabeceras sobre fondo neutral claro, mayúsculas, tracking amplio y texto atenuado.
- Filas de `12px` con divisores horizontales; el hover añade un cambio tonal mínimo.
- Los importes usan peso `700`; la información secundaria baja a `10.5px`.
- El contenedor absorbe el padding lateral del panel para que la tabla llegue a sus bordes visuales.

### Charts and Progress

- El gráfico de líneas usa SVG responsive, texto de eje pequeño y la misma fuente del sistema.
- Ingresos se trazan en verde y gastos en arcilla; la leyenda repite color y etiqueta.
- Las barras comparativas usan tracks de `6px` y valores coloreados; el progreso nativo también mide `6px` y siempre lleva `aria-label` contextual.

### Badges and Status

- Los badges son píldoras compactas de al menos `23px`, texto de `10px` y peso `700`.
- Neutral usa gris verdoso; warning usa ámbar; danger usa arcilla; success usa verde.
- Alertas globales usan ámbar, el modo demo usa una franja verde, los toast normales usan verde oscuro y los de error arcilla oscura.
- Los estados vacíos aparecen como bloque centrado con icono, título, explicación y, cuando aplica, una acción primaria. Las tablas vacías y paneles sin datos usan texto atenuado centrado.

### Drawer

- El formulario se abre como diálogo nativo pegado a la derecha, hasta `700px` en escritorio y a ancho completo en móvil.
- Encabezado y acciones son sticky; el fondo modal oscurece el contenido y la sombra lateral comunica superposición.
- El primer campo recibe foco al abrir. El cierre tiene etiqueta accesible y el diálogo referencia su título con `aria-labelledby`.

### Accessibility and Motion

- Conservar el enlace “Saltar al contenido”, landmarks semánticos, encabezados, `scope="col"`, regiones de estado y etiquetas accesibles de iconos.
- El anillo de foco global debe permanecer visible. No eliminarlo ni sustituirlo por un cambio de color solo.
- Los controles táctiles principales llegan a `44px` en móvil.
- Con `prefers-reduced-motion: reduce`, se desactivan transiciones y scroll suave.

## Do's and Don'ts

### Do:

- **Do** conservar la dirección de agenda financiera: navegación, resumen, evolución y vencimientos deben sentirse parte del mismo registro.
- **Do** usar papel, superficies blancas, tinta verde y divisores finos como estructura principal.
- **Do** mantener números tabulares y monedas explícitas; ARS y USD no se presentan como una sola cifra sin conversión.
- **Do** conservar la jerarquía semántica de verde, arcilla y ámbar con etiquetas textuales.
- **Do** extender los componentes existentes mediante los radios `field`, `control`, `navigation`, `panel` y `pill`.
- **Do** verificar cada extensión en los tres quiebres existentes: `1120px`, `820px` y `620px`.
- **Do** preservar foco visible, navegación por teclado, labels y reducción de movimiento.

### Don't:

- **Don't** convertir paneles y tablas continuas en una colección de tarjetas independientes sin evidencia en el sistema.
- **Don't** añadir sombras a superficies en reposo; se reservan para overlays y acciones elevadas.
- **Don't** usar arcilla o ámbar como acento decorativo indiferenciado.
- **Don't** ocultar columnas críticas en móvil; mantener la tabla desplazable cuando no quepa.
- **Don't** introducir otra familia tipográfica, iconos rellenos o radios fuera de la gramática existente sin revisar el sistema completo.
- **Don't** comunicar éxito, riesgo, vencimiento o selección únicamente por color.
