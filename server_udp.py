import socket
import threading

# Function to handle client connections
def handle_client(client_socket, addr):
    print('Connected to:', addr)

    # Receive and process incoming messages from the client
    while True:
        data, client_address = client_socket.recvfrom(1024).decode()
        if not data:
            break
        print('Received from client', addr, ':', data)
        # Process the data or perform any desired operations

    # Close the client socket
    client_socket.close()
    print('Disconnected from:', addr)

# Create a socket object
server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Get the local machine hostname and define a port number
host = '0.0.0.0'
port = 12345

# Bind the socket to a specific address and port
server_socket.bind((host, port))

print('Waiting for incoming connections...')

# Accept and handle client connections
while True:
    data, addr = server_socket.recvfrom(1024)
    # Create a new thread for each client connection
    thread = threading.Thread(target=handle_client, args=(server_socket, addr))
    thread.start()
