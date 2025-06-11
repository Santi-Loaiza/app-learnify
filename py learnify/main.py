import io
import requests
from fastapi import FastAPI
from fastapi.responses import StreamingResponse

# Usa un backend que no requiere GUI
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

app = FastAPI()

API_URL = "http://localhost:3000/usuarios"

@app.get("/grafico/usuarios-por-tipo")
def usuarios_por_tipo():
    response = requests.get(API_URL)
    response.raise_for_status()
    data = response.json()

    tipos = {}
    for usuario in data:
        tipo = usuario.get("tipoUsuario", "Desconocido")
        tipos[tipo] = tipos.get(tipo, 0) + 1

    categorias = list(tipos.keys())
    cantidades = list(tipos.values())

    plt.figure(figsize=(8, 5))
    bars = plt.bar(categorias, cantidades, color=['#FFADAD', '#9BF6FF', '#BDB2FF','#CAFFBF'])
    plt.title("Users Control")
    plt.xlabel("Tipo de Usuario")
    plt.ylabel("Cantidad")
    plt.ylim(0, max(cantidades) + 1)
    for bar in bars:
        yval = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2, yval + 0.1, int(yval), ha='center', va='bottom')
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    plt.close()
    buf.seek(0)
    return StreamingResponse(buf, media_type="image/png")

## Nuevo endpoint
API_URL_Matriculas = "http://localhost:3000/matriculas"

@app.get("/grafico/matriculas-por-genero")
def matriculas_por_genero():
    try:
        response = requests.get(API_URL_Matriculas)
        data = response.json()
    except Exception as e:
        return {"error": f"No se pudo obtener datos de la API: {e}"}

    if isinstance(data, dict):
        matriculas = data.get("matriculas", [])
    elif isinstance(data, list):
        matriculas = data
    else:
        return {"error": "Formato de datos inesperado desde la API"}

    conteo = {}
    for m in matriculas:
        genero = m.get("genero", "No especificado")
        conteo[genero] = conteo.get(genero, 0) + 1

    etiquetas = list(conteo.keys())
    cantidades = list(conteo.values())

    plt.figure(figsize=(6, 6))
    plt.pie(cantidades, labels=etiquetas, autopct='%1.1f%%', startangle=90)
    plt.title("Matrículas por Género")
    plt.axis("equal")

    buffer = io.BytesIO()
    plt.savefig(buffer, format="png")
    plt.close()
    buffer.seek(0)

    return StreamingResponse(buffer, media_type="image/png")
