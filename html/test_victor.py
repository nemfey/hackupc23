import http.server
import socketserver
import socket
import threading

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Servidor en el puerto:", PORT)
    httpd.serve_forever()