import socket

# Create a socket object
client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Get the server IP address and port number
host = socket.gethostname()
port = 12345

# Send messages to the server
while True:
    message = input('Enter a message to send: ')
    client_socket.sendto(message.encode(), (host, port))
    if message.lower() == 'exit':
        break

# Close the connection
client_socket.close()
