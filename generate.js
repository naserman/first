async function predict(model, imgElement) {
 const img = tf.browser.fromPixels(imgElement).toFloat();
 const resized = tf.image.resizeBilinear(img, [224, 224]);
 const t4D = resized.expandDims(0);
 const normalized = t4D.div(tf.scalar(255));
 const output = await model.executeAsync(normalized);
 const predictions = await output[0].data();
 return predictions;
}