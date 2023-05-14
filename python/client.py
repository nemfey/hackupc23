import socket

# Create a socket object
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Get the server IP address and port number
host = "192.168.62.1"
#host = "192.168.137.1"
#host = "LAPTOP-2ET10V5G"
port = 12345

# Connect to the server
client_socket.connect((host, port))
print('Connected to server')

# Send messages to the server
while True:
    message = input('Enter a message to send: ')
    client_socket.send(message.encode())
    if message.lower() == 'exit':
        break

# Close the connection
client_socket.close()