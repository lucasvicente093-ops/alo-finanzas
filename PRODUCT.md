# Finanzas personales y emprendimientos

<!-- impeccable:product-schema 1 -->

## Platform
web

## Stack
Delegado por Lucas: priorizar simplicidad. HTML, CSS y JavaScript modular, sin dependencias de producción. Primera versión local, con respaldo JSON y exportación XLSX.

## Users
Lucas administra su dinero personal y varios emprendimientos en Argentina.

## Product Purpose
Registrar cada operación una sola vez y conocer ingresos, gastos, reservas, compromisos y saldo realmente disponible en ARS y USD.

## Operating Context
Uso como aplicación web. El Excel es una exportación del sistema. Sin datos financieros reales aportados; la demostración debe identificarse y estar separada de los datos del usuario.

## Capabilities and Constraints
Movimientos, cuentas, proyectos, distribución configurable, presupuestos, préstamos dados y recibidos, deudas y cuotas, suscripciones, próximos pagos, compras, casa, tareas, objetivos y cierre mensual/anual. Cotización manual y conversión histórica por movimiento. Préstamos y transferencias no son ingresos. Inversión separada de gastos. Reservas no son gastos ni salidas de caja. Persistencia local inicial propuesta; sincronización y hosting pendientes.

## Product Principles
- Una carga por operación, con identificadores estables.
- No sumar monedas distintas sin convertir.
- Mostrar separación entre caja, resultado y dinero reservado.
- Conservar histórico y permitir respaldo recuperable.
