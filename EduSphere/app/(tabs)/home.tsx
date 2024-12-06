import { View, Text, FlatList, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import PostCard from '@/components/PostCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/initialize-firebase'

const Home = () => {
    const [posts, setPosts] = useState<any>([])
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "posts"));
                const posts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPosts(posts)
            } catch (err) {
                console.log(err)
            }
        }
        fetchPost();
    }, [])

    return (
        <View className='w-full h-full bg-black'>
            <NavBar />
            <Text className="text-red-600 px-10 text-2xl md:text-3xl lg:text-4xl ">Posts</Text>
            <View className=' mt-5 flex justify-center items-center'>
                {posts.length === 0 ?
                    <View className='bg-white rounded-full m-10'>
                        <Image source={require('../../assets/images/no-posts.png')} className='max-w-lg'/>
                    </View>
                    :
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => {
                            return <PostCard key={item.id} items={item} />
                        }}
                    />
                }
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 10, // Add some padding for better spacing
        gap: 10,
        width: "100%",
        height: "100%"
    },
});