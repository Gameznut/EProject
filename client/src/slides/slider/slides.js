// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.generateSlides = void 0;
// /**
//  * Return an array with objects containing data of sample images.
//  *
//  * @param length - Optional. A number of slides.
//  * @param sig    - Optional. The signature for getting a different image.
//  *
//  * @return An array with objects for sample images.
//  */
function generateSlides(length, sig) {
  if (length === void 0) {
    length = 10;
  }
  if (sig === void 0) {
    sig = 0;
  }
  return Array.from({ length: length }).map(function (value, index) {
    index = sig || index;
    return {
      src: "https://source.unsplash.com/random/800x450?sig=" + index,
      alt: "Image " + index,
    };
  });
}
exports.generateSlides = generateSlides;
