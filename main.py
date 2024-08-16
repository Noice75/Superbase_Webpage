import http.server
import socketserver
import mimetypes
import brotli

PORT = 8000

class BrotliHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.endswith(".br"):
            self.send_response(200)
            self.send_header("Content-Encoding", "br")
            self.send_header("Content-Type", self.guess_type(self.path))
            self.end_headers()
            with open(self.path.lstrip('/'), 'rb') as f:
                self.wfile.write(f.read())
        else:
            super().do_GET()

    def guess_type(self, path):
        """Guesses the MIME type based on file extension."""
        mime_type, _ = mimetypes.guess_type(path)
        return mime_type or 'application/octet-stream'

Handler = BrotliHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()
