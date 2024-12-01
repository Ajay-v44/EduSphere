import { View, Text, Image } from 'react-native'
import React from 'react'

interface PostCardData {
  id: number;
  tittle: string;
  shortDescription: string;
  imageUrl: string;
}

const PostCard = ({ items }: PostCardData) => {

  return (
    <View className='border-2 max-w-[25rem] border-red-200 rounded-md bg-red-400 flex justify-center items-center m-3  mb-10'>
      <Image source={{ uri: `${items.imageUrl}` }} style={{ width: 100, height: 100 }} className='mx-10 my-5 rounded-md object-fill' />
      <Text className='text-green-200 capitalize px-10 text-xl'>{items.tittle}</Text>
      <Text className='text-justify text-sm text-white pb-3 px-3 truncate'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium magni provident explicabo quas quisquam eos blanditiis hic nobis recusandae sed. In porro magni totam minima repudiandae blanditiis dolores inventore veritatis.</Text>
      <View className='flex-row gap-4 py-3'>
        <Text className='text-xs text-left text-green-200'>Posted By -Ajay</Text>
        <Text className='text-xs text-left text-blue-200'>Posted On -24/04/2024</Text>
      </View>
    </View>
  )
}

export default PostCard