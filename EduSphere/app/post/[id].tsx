import { View, Text, Image, StyleSheet, StatusBar, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import NavBar from '@/components/NavBar';
import Images from '@/constants/Images';
import { Posts } from '@/types/post';
import { db } from '@/initialize-firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
const Post = () => {
    const { id } = useLocalSearchParams();
    const [posts, setPosts] = useState<Posts>()
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true)
                const postsCollection = collection(db, "posts"); // Reference to the 'posts' collection 
                const q = query(postsCollection, where("id", "==", id)); // Query to match the inner 'id'
                const querySnapshot = await getDocs(q); // Execute the query
                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0]; // Access the first document
                    const post: Posts = { fid: doc.id, ...doc.data() as Posts };
                    setPosts(post)
                } else {
                    alert("No documents match the specified id!");
                    router.push("/(tabs)/home")
                }
            } catch (err) {
                console.log(err)
                alert("Error Fetching Posts Details.Please Try Again.");
                router.push("/(tabs)/home")
            }
            finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [])
    return (
        <ScrollView className="bg-black w-full h-full">
            <NavBar />
            {loading ? <ActivityIndicator size={100} color="white" /> :
                <>
                    <View className="m-5">
                        <Text className="text-white text-center capitalize text-3xl  underline underline-offset-1">
                            {posts?.title}
                        </Text>
                        <Text className="text-justify text-white p-3 mt-2 text-2xl leading-6 ">
                            {posts?.shortDescription}
                        </Text>
                        <Text className="text-justify text-white p-3 mt-2 italic text-xl">
                            {posts?.description1}
                        </Text>
                        <Text className="text-justify text-white p-3 mt-2 italic text-xl">
                            {posts?.description2}
                        </Text>
                    </View>
                    {/* Horizontal Scroll for Images */}
                    <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row' }}>
                        <Image
                            source={{ uri: `${posts?.imageUrl}` }}
                            style={{ width: 150, height: 150 }}
                            className="mx-10 my-5 rounded-md object-fill"
                        />
                        <Image
                            source={{ uri: `${posts?.imageUrl}` }}
                            style={{ width: 150, height: 150 }}
                            className="mx-10 my-5 rounded-md object-fill"
                        />
                        <Image
                            source={{ uri: posts?.imageUrl ? `${posts.imageUrl}` : `${Images.ImageUrl}` }}
                            style={{ width: 150, height: 150 }}
                            className="mx-10 my-5 rounded-md object-fill"
                        />
                    </ScrollView>
                </>
            }
        </ScrollView>
    )
}

export default Post