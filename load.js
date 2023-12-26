import * as tf from '@tensorflow/tfjs';

async function loadModel() {
 const model = await tf.loadGraphModel('model.json');
 return model;
}