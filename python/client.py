import socket

# Create a socket object
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Get the server IP address and port number
host = socket.gethostname()
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