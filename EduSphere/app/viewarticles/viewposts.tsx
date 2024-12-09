import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import { Posts } from '@/types/post'
import PostCard from '@/components/PostCard'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/initialize-firebase'
import { userStore } from '@/zustand/store'

const viewposts = () => {
  const UserId = userStore((state: any) => (state.userId));
  const [posts, setPosts] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    async function fetchMyPosts() {
      try {
        setLoading(true)
        const post = collection(db, "posts");
        const q = query(post, where("userId", "==", UserId))
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchMyPosts()
  }, [])
  return (
    <View className='bg-black w-full h-full'>
      <NavBar />
      <View className='mt-5'>
        <Text className='text-white px-5 text-xl underline underline-offset-1'>My Posts</Text>
        <View className='flex items-center justify-center'>
          {loading ? <ActivityIndicator size={100} color="white" /> :
            <FlatList
              data={posts}
              renderItem={({ item }) => {
                return <PostCard key={item.id} items={item} />
              }}
            />
          }
        </View>
      </View>
    </View>
  )
}

export default viewposts