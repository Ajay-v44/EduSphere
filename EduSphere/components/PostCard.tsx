import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Posts } from '@/types/post';
// Props interface
interface PostCardProps {
  items: Posts;
}
const PostCard: React.FC<PostCardProps> = ({ items }) => {
  return (
    <View className='border-2 max-w-[25rem] border-white rounded-md  m-3  mb-10'>
      <Link href={{
        pathname: '/post/[id]',
        params: { id: `${items?.id}` },
      }} className='' >
        <AntDesign name="arrowsalt" size={24} color="white" className='text-right' />
      </Link>
      <View className='flex justify-center items-center '>
        <Image source={{ uri: `${items?.imageUrl}` }} width={180} height={100} className='mx-10 my-5 rounded-md object-fill' />
        <Text className='text-green-200 capitalize px-10 text-xl'>{items?.title}</Text>
        <Text className='text-justify text-sm text-white pb-3 px-3 truncate'>{items.shortDescription}</Text>
        <View className='flex-row gap-4 py-3'>
          <Text className='text-xs text-left text-green-200 capitalize'>Posted By - {items.createdBy}</Text>
          <Text className='text-xs text-left text-blue-200'>Posted On -{items.createdAt}</Text>
        </View>
      </View>
    </View>
  )
}

export default PostCard