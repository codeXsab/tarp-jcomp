from sharpness_detect import sharpness_detect
from objectdetect import ObjectDetector
from flask import Flask
from flask import request
from flask import jsonify
import cv2
import numpy as np
import time
import multiprocessing
from playsound import playsound
from gtts import gTTS
from time import time
from ocr import OCR


app = Flask(__name__)


@app.route('/script1', methods=['POST'])
def script1():

    if(request.method == 'POST'):

        print('post app')
        req = request.json
        name = req['name']
        threshold = req['slider']
        accent = req['accent']
        flag = req['flag']
        print(name)
        print(threshold)
        print(accent)
        print(flag)

        # PANDA (write code here)
        language = 'en'
        # Create a new VideoCapture object
        cam = cv2.VideoCapture(0)

        # Initialise variables to store current time difference as well as previous time call value
        previous = time.time()
        delta = 0
        img_counter = 0

        # Keep looping
        while True:
            # Get the current time, increase delta and update the previous variable
            current = time.time()
            delta += current - previous
            previous = current
            # Show the image and keep streaming
            _, img = cam.read()
            cv2.imshow("Frame", img)
            cv2.waitKey(1)
            # Check if 3 (or some other value) seconds passed
            if delta > 5:
                img_name = "opencv_frame_{}.png".format(img_counter)
                cv2.imwrite(img_name, img)
                print("{} written!".format(img_name))
                mySharpness = sharpness_detect(img)
                sharpnessValue = mySharpness.getSharpness()
                print(sharpnessValue)
                colorValue = mySharpness.getColorfullness()
                print(colorValue)
                if sharpnessValue+colorValue < 40:
                    speech1 = gTTS(
                        text="Warning. Object is too close. Please move away", lang=language, slow=False)
                    speech1.save("speech1.mp3")
                    playsound('speech1.mp3')
                myObjectDetect = ObjectDetector(img)
                objectValues = myObjectDetect.return_objects()
                print(objectValues)

                if objectValues is not None:
                    speech = gTTS(text=objectValues, lang=language, slow=False)
                    speech.save("object.mp3")
                    playsound('object.mp3')
                img_counter += 1
                delta = 0

    return jsonify(status="200")


@app.route('/script2', methods=['POST'])
def script2():
    if(request.method == 'POST'):
        print('post app')
        req = request.json
        nameOutput = req['name']
        volumeOutput = req['volume']
        languageOutput = req['language']
        accentOutput = req['accent']
        print(nameOutput)
        print(volumeOutput)
        print(languageOutput)
        print(accentOutput)

        # SHEFFY (write code here)
        if (accentOutput == 'English (Australia)'):
            accentOutput = "com.au"
        if (accentOutput == 'English (United Kingdom)'):
            accentOutput = "co.uk"
        if (accentOutput == 'English (United States)'):
            accentOutput = "com"
        if (accentOutput == 'English (India)'):
            accentOutput = "co.in"
        if (accentOutput == 'Hindi (India)'):
            accentOutput = "Hindi"

        if (languageOutput == 'English'):
            languageOutput = "en"
        if (languageOutput == 'Hindi'):
            languageOutput = "hi"

        
        # Create a new VideoCapture object
        cam = cv2.VideoCapture(0)

        # Initialise variables to store current time difference as well as previous time call value
        previous = time()
        delta = 0
        img_counter=0

        # Keep looping
        while img_counter<1:
            # Get the current time, increase delta and update the previous variable
            current = time()
            delta += current - previous
            previous = current
            # Show the image and keep streaming
            _, img = cam.read()
            cv2.imshow("Frame", img)
            cv2.waitKey(1)
            # Check if 3 (or some other value) seconds passed
            if delta > 10:
                img_name = "opencv_frame_{}.png".format(img_counter)


                cv2.imwrite(img_name, img)

                print("{} written!".format(img_name))
                myOCR=OCR(img_name, accentOutput, languageOutput, nameOutput)
                OCRValue=myOCR.ocr_core()
                print(OCRValue)
                img_counter += 1
                delta = 0



        return jsonify(status="200")
