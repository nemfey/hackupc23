# import http.server
# import socketserver
# import socket
# import threading

# # Configuración del servidor web
# PORT_WEB = 8000
# Handler = http.server.SimpleHTTPRequestHandler

# # Configuración del servidor de sockets
# PORT_SOCKET = 8000
# server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# host = '192.168.62.1'
# server_socket.bind((host, PORT_SOCKET))
# server_socket.listen(5)
# print('Servidor socket escuchando en {}:{}'.format(host, PORT_SOCKET))

# # Función para manejar conexiones de clientes
# def handle_client(client_socket, addr):
#     print('Cliente conectado desde {}:{}'.format(addr[0], addr[1]))

#     # Recibir y procesar mensajes entrantes del cliente
#     while True:
#         data = client_socket.recv(1024)
#         if not data:
#             break
#         # Guardar los datos recibidos en un archivo
#         with open('datos_recibidos.txt', 'ab') as f:
#             f.write(data)

#     # Cerrar la conexión con el cliente
#     client_socket.close()
#     print('Cliente desconectado desde {}:{}'.format(addr[0], addr[1]))

# # Función para iniciar el servidor de sockets
# def start_socket_server():
#     while True:
#         client_socket, addr = server_socket.accept()
#         # Crear un nuevo hilo para cada conexión de cliente
#         thread = threading.Thread(target=handle_client, args=(client_socket, addr))
#         thread.start()

# # Crear un hilo para el servidor de sockets
# socket_thread = threading.Thread(target=start_socket_server)
# socket_thread.start()

# # Iniciar el servidor web
# with socketserver.TCPServer((host, PORT_WEB), Handler) as httpd:
#     print("Servidor web en http://{}:{}/index.html".format("192.168.62.1", PORT_WEB))
#     httpd.serve_forever()

import http.server
import socketserver
import socket
import threading

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("192.168.126.1", PORT), Handler) as httpd:
    print("Servidor en el puerto:", PORT)
    httpd.serve_forever()

# # Function to handle client connections
# def handle_client(client_socket, addr):
#     print('Connected to:', addr)

#     # Receive and process incoming messages from the client
#     while True:
#         data = client_socket.recv(1024).decode()
#         if not data:
#             break
#         print('Received from client', addr, ':', data)
#         # Process the data or perform any desired operations

#     # Close the client connection
#     client_socket.close()
#     print('Disconnected from:', addr)

# # Create a socket object
# server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# # Get the local machine hostname and define a port number
# host = socket.gethostname()
# port = 12345

# # Bind the socket to a specific address and port
# server_socket.bind((host, port))

# # Wait for client connections
# server_socket.listen(5)
# print('Waiting for incoming connections...')

# # Accept and handle client connections
# while True:
#     client_socket, addr = server_socket.accept()
#     # Create a new thread for each client connection
#     thread = threading.Thread(target=handle_client, args=(client_socket, addr))
#     thread.start()