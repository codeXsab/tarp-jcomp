import cv2
import imutils
from imutils import build_montages
from imutils import paths
import numpy as np
import argparse


class sharpness_detect:
    def _init_(self, image):
        self.img = image

    def getSharpness(self):
        img = cv2.cvtColor(self.img, cv2.COLOR_BGR2GRAY)
        lap = cv2.Laplacian(img, cv2.CV_16S)
        mean, stddev = cv2.meanStdDev(lap)
        return stddev[0, 0]

    def getColorfullness(self):
        # split the image into its respective RGB components
        (B, G, R) = cv2.split(self.img.astype("float"))
        # compute rg = R - G
        rg = np.absolute(R - G)
        # compute yb = 0.5 * (R + G) - B
        yb = np.absolute(0.5 * (R + G) - B)
        # compute the mean and standard deviation of both `rg` and `yb`
        (rbMean, rbStd) = (np.mean(rg), np.std(rg))
        (ybMean, ybStd) = (np.mean(yb), np.std(yb))
        # combine the mean and standard deviations
        stdRoot = np.sqrt((rbStd * 2) + (ybStd * 2))
        meanRoot = np.sqrt((rbMean * 2) + (ybMean * 2))
        # derive the "colorfulness" metric and return it
        return stdRoot + (0.3 * meanRoot)
