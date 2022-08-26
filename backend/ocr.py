
from gtts import gTTS
from playsound import playsound

try:
    from PIL import Image
except ImportError:
    import Image
import pytesseract


class OCR:
    def __init__(self, filename, accent, languageOutput, nameOutput):
        self.filename = filename
        self.accent = accent
        self.language = languageOutput
        self.name = nameOutput

    # language = "en"

    def ocr_core(self):
        """
        This function will handle the core OCR processing of images.
        """
        language = self.language
        accent = self.accent
        filename = self.filename
        name = self.name
        # We'll use Pillow's Image class to open the image and pytesseract to detect the string in the image
        text = pytesseract.image_to_string(
            Image.open(self.filename), lang=language)
        speech = gTTS(text="hello world", lang=language, tld=accent, slow=False)
        speech.save("text.mp3")

        playsound("text.mp3")
        return text
