import socket
import threading

# Function to handle client connections
def handle_client(client_socket, addr):
    print('Connected to:', addr)

    # Receive and process incoming messages from the client
    while True:
        data = client_socket.recv(1024).decode()
        if not data:
            break
        print('Received from client', addr, ':', data)
        # Process the data or perform any desired operations

    # Close the client connection
    client_socket.close()
    print('Disconnected from:', addr)

# Create a socket object
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Get the local machine hostname and define a port number
host = socket.gethostname()
port = 12345

# Bind the socket to a specific address and port
print(host)
server_socket.bind((host, port))

# Wait for client connections
server_socket.listen(5)
print('Waiting for incoming connections...')

# Accept and handle client connections
while True:
    client_socket, addr = server_socket.accept()
    # Create a new thread for each client connection
    thread = threading.Thread(target=handle_client, args=(client_socket, addr))
    thread.start()