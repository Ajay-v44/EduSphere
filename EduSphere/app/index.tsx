import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { auth } from '../initialize-firebase'

const App = () => {
  const router = useRouter()
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/authentication/login")
    }
  });
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <View className='flex justify-center items-center w-full h-full bg-black text-white'>
      <Text className='text-red-500' >App</Text>
      <TouchableOpacity onPress={() => {
        router.push("/authentication/login")
      }}>
        <Text className='text-white' >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout} className=' m-10 bg-red-400'>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App