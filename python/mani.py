import os
import cv2
import mediapipe as mp
from datetime import datetime

# Inizializza il modulo MediaPipe per il rilevamento delle mani
mp_hands = mp.solutions.hands
hands = mp_hands.Hands()

# Inizializza la webcam
cap = cv2.VideoCapture(0)  # 0 indica la webcam predefinita

while True:
    # Cattura il frame
    ret, frame = cap.read()

    if not ret:
        break

    # Ottieni le dimensioni del frame
    h, w, _ = frame.shape
    # Converti il frame in RGB (MediaPipe utilizza l'input RGB)
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Rileva le mani nel frame RGB
    results = hands.process(rgb_frame)

    is_left_fingers_raised = [False] * 5
    is_right_fingers_raised = [False] * 5
    if results.multi_hand_landmarks:
        for landmarks in results.multi_hand_landmarks:
            if results.multi_handedness:
                handness = results.multi_handedness[0].classification[0]
                if handness.label == "Left":
                    finger_landmarks = [
                        landmarks.landmark[mp_hands.HandLandmark.THUMB_TIP],
                        landmarks.landmark[mp_hands.HandLandmark.INDEX_FINGER_TIP],
                        landmarks.landmark[mp_hands.HandLandmark.MIDDLE_FINGER_TIP],
                        landmarks.landmark[mp_hands.HandLandmark.RING_FINGER_TIP],
                        landmarks.landmark[mp_hands.HandLandmark.PINKY_TIP]
                    ]
                    is_fingers_raised = is_left_fingers_raised
                else:
                    finger_landmarks = [
                        landmarks.landmark[mp_hands.HandLandmark.THUMB_TIP],
                        landmarks.landmark[mp_hands.HandLandmark.INDEX_FINGER_TIP],
                        landmarks.landmark[mp_hands.HandLandmark.MIDDLE_FINGER_TIP],
                        landmarks.landmark[mp_hands.HandLandmark.RING_FINGER_TIP],
                        landmarks.landmark[mp_hands.HandLandmark.PINKY_TIP]
                    ]
                    is_fingers_raised = is_right_fingers_raised

                # Calcola le distanze tra i landmarks delle dita
                for i, finger_landmark in enumerate(finger_landmarks):
                    thumb_landmark = finger_landmarks[0]
                    vertical_distance = thumb_landmark.y - finger_landmark.y

                    # Imposta il dito come sollevato se la distanza è sufficientemente grande
                    if vertical_distance > 0.15:
                        is_fingers_raised[i] = True
            connections = mp_hands.HAND_CONNECTIONS
            for connection in connections:
                x0, y0 = int(landmarks.landmark[connection[0]].x * w), int(landmarks.landmark[connection[0]].y * h)
                x1, y1 = int(landmarks.landmark[connection[1]].x * w), int(landmarks.landmark[connection[1]].y * h)
                cv2.line(frame, (x0, y0), (x1, y1), (0, 0, 255), 2)

            for i, landmark in enumerate(landmarks.landmark):
                x, y = int(landmark.x * w), int(landmark.y * h)
                # Disegna il pallino con un contorno
                cv2.circle(frame, (x, y), 5, (0, 255, 0), -1)  # Colore interno (fill)
                cv2.circle(frame, (x, y), 5, (0, 0, 255), 2)  # Colore contorno
                #Aggiungi il numero del landmark all'interno del pallino
                #cv2.putText(frame, str(i), (x - 10, y + 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)
                thumb_landmark = landmarks.landmark[mp_hands.HandLandmark.THUMB_TIP]
                middle_finger_landmark = landmarks.landmark[mp_hands.HandLandmark.MIDDLE_FINGER_TIP]
                vertical_distance = thumb_landmark.y - middle_finger_landmark.y

    cv2.imshow('Hand Detection', frame)
    finger_status = "Finger Status: "
    for is_raised in is_left_fingers_raised + is_right_fingers_raised:
        finger_status += "1" if is_raised else "0"
        print(finger_status)
    cv2.putText(frame, finger_status, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

cap.release()
cv2.destroyAllWindows()