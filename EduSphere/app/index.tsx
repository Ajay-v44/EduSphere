import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Redirect, useRouter } from 'expo-router'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../initialize-firebase'
import NavBar from '@/components/NavBar';
import { userStore } from '@/zustand/store';

const App = () => {
  const router = useRouter()
  const UserId = userStore((state: any) => (state.userId));
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/authentication/login")
    } else {
      if (user?.uid !== UserId) {
        userStore.getState().addUserId(String(user?.uid))
      }
      router.push('./(tabs)/home')
    }
    
  });
  return (
    <View className=' w-full h-full text-white bg-black'>
      <NavBar />
      <Text className='text-white'>Welcome</Text>
    </View>
  )
}

export default App