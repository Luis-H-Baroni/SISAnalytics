import socket
import json
import psutil
import time
import platform

# Configurações do servidor de destino
host = 'localhost'  # Endereço IP do ouvinte
port = 3000  # Porta do ouvinte

def get_system_info():
    # Obtém informações do sistema
    ram_usage = psutil.virtual_memory().percent
    rom_usage = psutil.disk_usage('/').percent
    cpu_temp = None
    if 'cpu-thermal' in psutil.sensors_temperatures():
        cpu_temp = psutil.sensors_temperatures()['cpu-thermal'][0].current
    hostname = platform.node()

    # Cria um dicionário com as informações
    system_info = {
        'RAM': ram_usage,
        'ROM': rom_usage,
        'CPU Temperature': cpu_temp,
        'Hostname': hostname
    }

    return system_info

def send_data():
    while True:
        # Obtém as informações do sistema
        system_info = get_system_info()

        # Converte as informações para JSON
        json_data = json.dumps(system_info)

        # Cria um socket e envia o JSON para o servidor
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.connect((host, port))
                s.sendall(json_data.encode())
                print(f"Dados enviados: {json_data}")
            except ConnectionRefusedError:
                print("Erro ao conectar-se ao servidor")

        time.sleep(30)  # Aguarda 30 segundos antes de enviar novamente

# Executa a função para enviar os dados
send_data()