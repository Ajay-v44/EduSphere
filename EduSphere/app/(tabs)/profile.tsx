import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';
const Profile = () => {
  return (
    <View className='bg-black w-full h-full p-5'>
      <TouchableOpacity onPress={() => { }}>
        <FontAwesome name="pencil-square-o" size={24} color="white" />
      </TouchableOpacity>
      <View className='flex justify-center items-center'>
        <View className=' rounded-full bg-gray-600 flex justify-center items-center w-36 h-36'>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' }} width={100} height={100} className='object-contain' />
        </View>
        <View className='mt-5'>
          <Text className='text-slate-100 text-2xl font-bold text-center'>Ajay V</Text>
          <Text className='text-red-300 pt-5 text-justify text-sm '>Love With technolagies</Text>
        </View>
        <View className='mt-10 flex justify-center items-center'>
          <TouchableOpacity onPress={() => { router.push("/createarticles/post") }} className='flex flex-row justify-between items-center border-t-2 border-t-red-100 border-b-2 border-b-red-100 w-full p-5 m-3'>
            <MaterialIcons name="post-add" size={24} color="grey" />
            <Text className='text-white '>Create Post</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { router.push("/viewarticles/viewposts") }} className='flex flex-row justify-between items-center border-t-2 border-t-red-100 border-b-2 border-b-red-100 w-full p-5 m-3'>
            <Ionicons name="image-outline" size={24} color="grey" />
            <Text className='text-white '>View My Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex flex-row justify-between items-center border-t-2 border-t-red-100 border-b-2 border-b-red-100 w-full p-5 m-3'>
            <MaterialIcons name="add-alarm" size={24} color="grey" />
            <Text className='text-white '>Set Remainder</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex flex-row justify-between items-center border-t-2 border-t-red-100 border-b-2 border-b-red-100 w-full p-5 m-3'>
            <Entypo name="bookmarks" size={24} color="grey" />
            <Text className='text-white '>My Resources</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Profile