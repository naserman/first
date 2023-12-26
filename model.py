import tensorflow as tf
from tensorflow import keras

# Load the saved Keras model
model = keras.models.load_model('keras_model')

# Save the Keras model as a TensorFlow.js model
converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

with open('model.tflite', 'wb') as f:
 f.write(tflite_model)