import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

const OnBoardingSlider = () => {
  const swiperRef = useRef(null);
  const navigation = useNavigation();
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }
  };
  const handleSlideChange = (index) => {
    if (index == 2) {
      setTimeout(() => {
        navigation.replace("Login");
      }, 1000);
    }
  };
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        ref={swiperRef}
        dotStyle={styles.dot}
        activeDotStyle={styles.dot}
        onIndexChanged={handleSlideChange}
      >
        <View style={[styles.slide, styles.slide_1]}>
          <Image
            source={require("../../assets/onboarding_1.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Welcome to ToDo</Text>
          <Text style={styles.text2}>
            The simplest and most powerful way to manage your tasks and projects
          </Text>
        </View>
        <View style={[styles.slide, styles.slide_2]}>
          <Image
            source={require("../../assets/onboarding_2.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Explore our features.</Text>
        </View>
        <View style={[styles.slide, styles.slide_3]}>
          <Image
            source={require("../../assets/onboarding_3.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Get started now!</Text>
        </View>
      </Swiper>
      <View>
        <Pressable
          style={styles.skipbtn}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.buttonText2}>SKIP</Text>
        </Pressable>
        <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingSlider;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  wrapper: {
    position: "relative",
  },
  dot: {
    bottom: 100,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#333",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  text2: {
    color: "#333",
    fontSize: 18,
    fontWeight: "normal",
    marginTop: 20,
    margin: 30,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  slide_1: {
    backgroundColor: "#95C1E4",
  },
  slide_2: {
    backgroundColor: "#A5E286",
  },
  slide_3: {
    backgroundColor: "#F9A9AC",
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#121619",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  skipbtn: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText2: {
    color: "#000",
    fontSize: 18,
  },
});
