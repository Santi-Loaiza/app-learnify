# 📖 APP-Learnify

**APP-Learnify** Es una aplicacion web educativa enfocada al aprendizaje virtual con el objetivo de facilitar la comunicación y el manejo de material educativo entre docentes y estudiantes.

---

## 📌 Descripción

Esta app permite registrar, visualizar y actualizar el estado de los las actividades academicas por medio de todas sus funciones.

Ideal para los instituciones educativas que requieran un area administrativa y centralizada para gestionar sus entornos de educación digital.

---

## 🛠️ Tecnologías utilizadas

- **React JS** – Biblioteca principal para la interfaz de usuario  
- **JSON-Server** – Simulación de API REST con datos en formato JSON  
- **React Router DOM** – Ruteo dinámico entre vistas   
- **Fetch API** – Alternativa para peticiones HTTP  
- **SweetAlert2** – Alertas modernas y estilizadas  
- **Font Awesome** – Iconografía para una interfaz más visual  
- **CSS** – Estilos personalizados  
- **HTML** – Estructura base del proyecto

---

## 🎨 Paleta de colores

- Melon: #FFADAD

- Sunset: #FFD6A5

- Cream: #FDFFB6

- Tea Green: #CAFFBF

- Electric Blue: #9BF6FF

- Jordy Blue: #A0C4FF

- Periwinkle: #BDB2FF

- Mauve: #FFC6FF

- White: #FFFFFF



---

## 🔤 Tipografías

- **Lato** – Títulos  
- **Roboto** – Contenido general

---

## 🚀 Ejecución del proyecto

El proyecto se ejecuta con dos servicios en paralelo:

- **Backend**: JSON-Server (http://localhost:3000)  
- **Frontend**: Vite + React (http://localhost:5173)

---

## 💾 Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

```bash
# 1. Clona el repositorio
git clone https://github.com/Santi-Loaiza/app-learnify
cd app-learnify

# 2. Instala las dependencias del frontend
npm install

# 3. Inicia el servidor JSON (backend simulado)
npm run back

# 4. En una nueva terminal, inicia el frontend con Vite
npm run dev
```

## 🧩 Modelo de datos (NoSQL)

```bash
{
  "usuarios": [
    {
      "id": "1",
      "tipo_usuario": "administrador",
      "nombre": "Santiago Loaiza Madrid",
      "usuario": "admin1",
      "contrasena": "admin1",
      "datos_personales": {
        "fecha_nacimiento": "21-01-2006",
        "direccion": "calle 3 #41 63",
        "telefono": "302 7982156"
      }
    }
],
  "materias": [
    {
      "nombre": "Matematicas",
      "docente": "Miguel Angel Aristizabal",
      "aula": "201",
      "progreso": 25,
      "color": "#FFADAD",
      "imagen": "https://cdn.pixabay.com/photo/2016/11/29/01/16/abacus-1866497_1280.jpg",
      "id": "fd06"
    }
],
"matriculas": [
    {
      "id": "1",
      "nombre": "Santiago",
      "apellidos": "Loaiza Madrid",
      "tipoIdentificacion": "Cedula de Ciudadania",
      "correo": "santiagoloaizamadrid@gmail.com",
      "identificacion": "1033180121",
      "edad": 18,
      "genero": "Masculino",
      "curso": "11A",
      "fechaMatricula": "2025-02-05"
    },
}
```

## 📫 Autores
Desarrollado por:
 - Santiago Loaiza Madrid CC. 1033180121
 - Mariana Osorio Granado TI. 
 - Juan Carlos Caro Muriel
 - Ximena Martinez Soto

📕📎 ¡Gracias por visitar nuestro proyecto!
