import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, SplashScreen, useRouter } from 'expo-router'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../initialize-firebase'
import NavBar from '@/components/NavBar';
import { userStore } from '@/zustand/store';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const App = () => {
  const router = useRouter()
  const UserId = userStore((state: any) => (state.userId));

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/authentication/login")
    } else {
      if (user?.uid !== UserId) {
        userStore.getState().addUserId(String(user?.uid), String(user?.displayName))
      }
      router.push('./(tabs)/home')
    }
  });
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
    opacity.value = withTiming(1, { duration: 1500, easing: Easing.linear });
  }, []);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));
  return (
    <View className=' w-full h-full text-white bg-black'>
      <View className='w-full h-full flex justify-center items-center'>
        <Animated.View style={[styles.logoContainer, animatedStyle]}>
          <Image source={require('../assets/images/mainsplash.png')} width={100} height={100} />
          <Text style={styles.logoText}>🚀 EduSphere 📚</Text>
          {/* <Text style={styles.descText} className='pt-10'>Empowering learners with innovative, personalized, and accessible education solutions. Transform your learning journey with EduSphere! 🌟</Text> */}
        </Animated.View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75,
  },
  logoText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  descText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App