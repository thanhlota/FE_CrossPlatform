import { Image, View, StyleSheet, Dimensions } from "react-native";
import React from "react";
const WIDTH_MODAL = Dimensions.get("window").width;
const IMAGE_HEIGHT = 400;
const IMAGE_INSET = 2;
export default PostImage = ({ images }) => {
  if (images)
    switch (images.length) {
      case 1:
        return (
          <View style={styles.Full}>
            <Image defaultSource={require('../assets/default_image.png')}
              source={images[0].url?{ uri: images[0].url }:require('../assets/default_image.png')}
              style={styles.ImageStyle}
            />
          </View>
        );
      case 2:
        return (
          <View style={styles.Full}>
            <View style={styles.LeftHalf}>
              <Image defaultSource={require('../assets/default_image.png')}
                source={images[0].url?{ uri: images[0].url }:require('../assets/default_image.png')}
                style={styles.ImageStyle}
              />
            </View>
            <View style={styles.RightHalf}>
              <Image defaultSource={require('../assets/default_image.png')}
                source={images[1].url?{ uri: images[1].url }:require('../assets/default_image.png')}
                style={styles.ImageStyle}
              />
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.Full}>
            <View style={styles.LeftHalf}>
              <Image defaultSource={require('../assets/default_image.png')}
                source={images[0].url?{ uri: images[0].url }:require('../assets/default_image.png')}
                style={styles.ImageStyle}
              />
            </View>
            <View style={styles.RightHalf}>
              <View style={styles.QuarterTop}>
                <Image defaultSource={require('../assets/default_image.png')}

                  source={images[1].url?{ uri: images[1].url }:require('../assets/default_image.png')}
                  style={styles.ImageStyle}
                />
              </View>
              <View style={styles.QuarterBottom}>
                <Image defaultSource={require('../assets/default_image.png')}

                  source={images[2].url?{ uri: images[2].url }:require('../assets/default_image.png')}
                  style={styles.ImageStyle}
                />
              </View>
            </View>
          </View>
        );
      case 4:
        return (
          <View style={styles.Full}>
            <View style={styles.LeftHalf}>
              <View style={styles.QuarterTop}>
                <Image defaultSource={require('../assets/default_image.png')}

                  source={images[0].url?{ uri: images[0].url }:require('../assets/default_image.png')}
                  style={styles.ImageStyle}
                />
              </View>
              <View style={styles.QuarterBottom}>
                <Image defaultSource={require('../assets/default_image.png')}

                  source={images[3].url?{ uri: images[3].url }:require('../assets/default_image.png')}
                  style={styles.ImageStyle}
                />
              </View>
            </View>
            <View style={styles.RightHalf}>
              <View style={styles.QuarterTop}>
                <Image defaultSource={require('../assets/default_image.png')}

                  source={images[1].url?{ uri: images[1].url }:require('../assets/default_image.png')}
                  style={styles.ImageStyle}
                />
              </View>
              <View style={styles.QuarterBottom}>
                <Image defaultSource={require('../assets/default_image.png')}

                  source={images[2].url?{ uri: images[2].url }:require('../assets/default_image.png')}
                  style={styles.ImageStyle}
                />
              </View>
            </View>
          </View>
        );
      default:
        return;
    }
};
const styles = StyleSheet.create({
  ImageStyle: {
    width: "100%",
    height: "100%",
  },
  Full: {
    flexDirection: "row",
    width: WIDTH_MODAL,
    height: IMAGE_HEIGHT,
  },
  RightHalf: {
    flexDirection: "column",
    width: WIDTH_MODAL / 2 - IMAGE_INSET,
    height: IMAGE_HEIGHT,
    marginLeft: IMAGE_INSET,
  },
  LeftHalf: {
    flexDirection: "column",
    width: WIDTH_MODAL / 2 - IMAGE_INSET,
    height: IMAGE_HEIGHT,
    marginRight: IMAGE_INSET,
  },
  QuarterTop: {
    width: "100%",
    height: IMAGE_HEIGHT / 2 - IMAGE_INSET,
    marginBottom: IMAGE_INSET,
  },
  QuarterBottom: {
    width: "100%",
    height: IMAGE_HEIGHT / 2 - IMAGE_INSET,
    marginTop: IMAGE_INSET,
  },
});
