import http.server
import socketserver
import socket
import threading

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("192.168.56.1", PORT), Handler) as httpd:
    print("Servidor en el puerto:", PORT)
    httpd.serve_forever()
