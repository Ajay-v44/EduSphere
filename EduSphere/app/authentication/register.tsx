import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/initialize-firebase';
const Regiter = () => {
    const router = useRouter()
    const [userName, setUserName] = useState<string | null>()
    const [email, setEmail] = useState<string | null>()
    const [password, setPassword] = useState<string | null>();
    const [loading, setLoading] = useState<boolean>(false)
    const handleOnClick = async () => {
        try {
            setLoading(true)
            if (email && password !== null) {
                const result = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(result.user, {
                    displayName: userName,
                });
                ToastAndroid.show('Account Created Successfully.', ToastAndroid.LONG)
                router.navigate("/index")
            }
            else {
                ToastAndroid.show('Null Values Are Not Allowed. ', ToastAndroid.LONG)
            }
        } catch (err) {
            // ToastAndroid.show('Oops Somwthing Went Wrong Try Again.. ', ToastAndroid.SHORT)
            alert(JSON.stringify(err?.code))
        } finally {
            setLoading(false)
        }
    }
    return (
        <View className='w-full h-full'>
            <View className='mt-20 m-5'>
                <Text className='text-5xl font-bold'>Register User</Text>
                <Text className='text-gray-400 font-light'>Enter Your Details to Register</Text>
            </View>
            <View className='m-5'>
                <View className='m-5'>
                    <View className='ml-5 '>
                        <AntDesign name="user" className='relative top-20 right-10 h-20 w-10 text-center bg-red-300 pt-7' size={24} color="black" />
                        <TextInput
                            value={userName}
                            onChangeText={setUserName}
                            className='w-45 h-20 bg-violet-50'
                            placeholder='Enter Your Name'
                        />
                    </View>
                </View>
                <View className='m-5'>
                    <View className='ml-5 '>
                        <MaterialCommunityIcons className=' relative top-20 right-10 h-20 w-10 text-center bg-red-300 pt-7' name="email-fast-outline" size={24} color="black" />
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            className='w-45 h-20 bg-violet-50'
                            placeholder='Enter Your Email'
                        />
                    </View>
                </View>
                <View className='m-5'>
                    <View className='ml-5 '>
                        <MaterialIcons className=' relative top-20 right-10 h-20 w-10 text-center bg-red-300 pt-7' name="password" size={24} color="black" />
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            className='w-45 h-20 bg-violet-50'
                            placeholder='Enter Your Password'
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View className='mt-10 flex items-center justify-center'>
                    <TouchableOpacity
                        onPress={handleOnClick}
                        className='bg-violet-400 w-72  h-20 rounded-md flex items-center justify-center' disabled={loading}>
                        <Text className=' text-white text-xl'>{loading ? <ActivityIndicator /> : 'Register'}</Text>
                    </TouchableOpacity>
                </View>
                <View className='mt-3 flex flex-row justify-center'>
                    <Text className='text-center pr-3'>Already have an account ?</Text>
                    <TouchableOpacity onPress={() => {
                        router.push("/authentication/login")
                    }} ><Text className='underline'>Login</Text></TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default Regiter