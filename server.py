from fastapi import FastAPI,UploadFile,File
import uvicorn
from PIL import Image


import numpy as np
from io import BytesIO
import tensorflow as tf 
import cv2 as cv


# T0-Do download :
# pillow
# opencv

app=FastAPI()

model=tf.keras.models.load_model('model_v1.h5')
# model=keras.models.load_model('../objects/model_final.keras')
# classes=['Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy']
labels = ['Cardiomegaly', 
          'Emphysema', 
          'Effusion', 
          'Hernia', 
          'Infiltration', 
          'Mass', 
          'Nodule', 
          'Atelectasis',
          'Pneumothorax',
          'Pleural_Thickening', 
          'Pneumonia', 
          'Fibrosis', 
          'Edema', 
          'Consolidation']



# def get_image(data) :
#     image=np.array(Image.open(BytesIO(data)))
#     return image

def get_image(data):
    # Open the image from bytes
    image = Image.open(BytesIO(data))
    
    # Convert to RGB format if image is not in RGB mode
    if image.mode != 'RGB':
        image = image.convert('RGB')
    
    # Convert the image to a NumPy array
    image_np = np.array(image)
    
    return image_np


@app.post("/predict")
async def predict(file:UploadFile):
    image=get_image(await file.read())
    print(image.shape)
    image=cv.resize(image,(1024, 1024))
    batch_img=np.expand_dims(image/255, 0)
    predictions=model.predict(batch_img)[0]
    print(predictions)
    predictions=[f'{i*100}' for i in predictions]
    a=tuple(zip(labels,predictions[0]))
    response=dict(sorted(a,key=lambda x :x[1],reverse=True))
    print(response)
    return response
    # maxval=np.max(predictions[0])
    # label=labels[np.argmax(predictions[0])]
    # print( {'label':label,'probab':maxval})
    # return {'label':label,'probab':str(maxval)}
    
    # return response
    
print("hishsivisv")

@app.get("/home")
async def home():
    return "hello this is the start of the potato leaf disease project"

if __name__=='__main__':
    uvicorn.run(app,host='localhost',port=8000)