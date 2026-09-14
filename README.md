# Alo Finanzas

Aplicación web local para administrar finanzas personales y emprendimientos en ARS y USD. Los datos se guardan en el navegador. La aplicación permite descargar un respaldo JSON y exportar una instantánea de 21 hojas en formato Excel.

## Abrir la aplicación

Con Node.js disponible, ejecutá:

```powershell
node server.mjs
```

Después abrí `http://127.0.0.1:4173`.

## Primer uso

1. Entrá a **Configuración** e ingresá la cotización actual del dólar.
2. Creá las cuentas con el saldo anterior al primer movimiento.
3. Agregá emprendimientos, objetivos, préstamos, deudas y suscripciones según corresponda.
4. Registrá cada operación una sola vez desde **Nuevo movimiento**.
5. Descargá respaldos JSON frecuentes. El almacenamiento del navegador es local al dispositivo y puede borrarse si se eliminan sus datos.

La vista de demostración usa datos ficticios y no modifica los datos guardados.

## Comprobaciones

```powershell
node --test tests/*.test.mjs
```


## Acceso

La versión publicada solicita usuario y contraseña. La contraseña no se guarda en texto plano en el repositorio. La sesión dura hasta cerrar la pestaña y se bloquean temporalmente los intentos repetidos.
