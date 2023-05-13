# import socket

# HOST = '192.168.62.1'
# PORT = 8001

# # Create a socket object
# client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# # Connect the socket to the server's IP address and port
# client_socket.connect((HOST, PORT))

# # Send data to the server
# data = 'Hello, server!'
# client_socket.send(data.encode())

# # Receive data from the server
# response = client_socket.recv(1024).decode()
# print(response)

# # Close the socket connection
# client_socket.close()

import webbrowser
import socket

url = "http://192.168.126.1:8000/menu.html"

webbrowser.open(url)

# # Create a socket object
# client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# # Get the server IP address and port number
# host = socket.gethostname()
# port = 12345

# # Connect to the server
# client_socket.connect((host, port))
# print('Connected to server')

# # Send messages to the server
# while True:
#     message = input('Enter a message to send: ')
#     client_socket.send(message.encode())
#     if message.lower() == 'exit':
#         break

# # Close the connection
# client_socket.close()