
cap = cv2.VideoCapture(0)  # 0 indica la telecamera predefinita (solitamente la webcam integrata)

# Controlla se la telecamera è stata aperta con successo
if not cap.isOpened():
    print("Errore: Impossibile accedere alla telecamera.")
    exit()

# Ciclo principale per la cattura video in tempo reale
while True:
    # Leggi un frame dalla telecamera
    ret, frame = cap.read()

    # Verifica se la lettura del frame è avvenuta con successo
    if not ret:
        print("Errore nella lettura del frame.")
        break

    # Mostra il frame catturato
    cv2.imshow('Camera', frame)
cap.release()
cv2.destroyAllWindows()
