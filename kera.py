# Convert a Keras model to TensorFlow.js format
import tensorflowjs as tfjs

# Assuming 'model' is your Keras model
tfjs.converters.save_keras_model(model, 'keras_model')