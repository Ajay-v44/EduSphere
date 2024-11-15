import { View, Text, Image } from 'react-native'
import React from 'react'

interface PostCardData {
  id: number;
  tittle: string;
  shortDescription: string;
  imageUrl: string;
}

const PostCard=({items}:PostCardData) => {

  return (
    <View className='w-1/2 h-1/2  border-2 border-red-400 b rounded-full bg-white ' style={{backgroundColor:"white",width:"70%",height:"30%"}}>
      <Image source={{uri:`${items.imageUrl}`}} style={{width: 70, height: 80}} />
      <Text className='text-black'>{items.tittle}</Text>
    </View>
  )
}

export default PostCard