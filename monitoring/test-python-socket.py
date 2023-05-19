import socketio
import json
import psutil
import time
import platform
from datetime import datetime

# Configurações do servidor de destino Socket.IO
server_url = 'http://localhost:3001'  # URL do servidor Socket.IO

# Cria o cliente Socket.IO
sio = socketio.Client()

@sio.event
def connect():
    print('Conectado ao servidor Socket.IO')

@sio.event
def disconnect():
    print('Desconectado do servidor Socket.IO')

def get_system_info():
    # Obtém informações do sistema
    ram_usage = psutil.virtual_memory().percent
    rom_usage = psutil.disk_usage('/').percent
    cpu_temp = None #psutil.sensors_temperatures().get('cpu_thermal', [{}])[0].current
    hostname = platform.node()

    # Cria um dicionário com as informações
    system_info = {
        'ram': ram_usage,
        'rom': rom_usage,
        'cpuTemp': cpu_temp,
        'hostname': hostname
    }

    return system_info

def send_data():
    sio.connect(server_url)
    while True:
        
        # Obtém as informações do sistema
        system_info = get_system_info()
        system_info['createdAt'] = datetime.now().isoformat()

        # Converte as informações para JSON
        json_data = json.dumps(system_info)

        # Envia os dados para o servidor Socket.IO
        sio.emit('system_info', json_data)

        print(f'Dados enviados: {json_data}')

        time.sleep(30)  # Aguarda 30 segundos antes de enviar novamente

# Conecta-se ao servidor Socket.IO


# Executa a função para enviar os dados
send_data()

# Mantém a conexão com o servidor Socket.IO
sio.wait()