import qrcode
from flask import send_file

class qr():
    def generate(url):
        qr_code = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr_code.add_data(url)
        qr_code.make(fit=True)

        # Create an image object of the QR code
        qr_image = qr_code.make_image(fill_color="black", back_color="white")

        save_path = "/home/qr.png"
        qr_image.save(save_path)

        # Return the file as a response
        return send_file(save_path, as_attachment=True)