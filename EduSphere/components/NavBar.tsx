import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';
import AntDesign from '@expo/vector-icons/AntDesign';
import { auth } from '../initialize-firebase'
import { router } from 'expo-router';
const NavBar = () => {
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (e) {
            console.error(e);
        }

    };
    return (
        <View className='mt-3'>
            <View className='m-5 flex flex-row items-center justify-between'>
                <TouchableOpacity onPress={() => {
                    router.push("/(tabs)/home")
                }}>
                    <Text className='text-5xl text-white font-extrabold'>Edusphere</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={logout}>
                    <AntDesign name="logout" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavBar