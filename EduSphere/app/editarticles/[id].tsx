import { View, Text, ActivityIndicator, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import { router, useLocalSearchParams } from 'expo-router';
import { db } from '@/initialize-firebase';
import { Posts } from '@/types/post';
import { collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
import Images from '@/constants/Images';


const EditArcticles = () => {
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({
    title: "",
    shortDescription: "",
    description1: "",
    description2: ""
  })
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
          setData({
            ...data,
            title: post.title,
            shortDescription: post.shortDescription,
            description1: String(post.description1),
            description2: String(post.description2),
          })
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

  const updatePosts = async () => {
    try {
      setLoading(true)
      const postsCollection = collection(db, "posts");
      const q = query(postsCollection, where("id", "==", id));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.error(`No document found with id field equal to ${id}`);
        return;
      }

      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value !== undefined && value !== null && value !== "")
      );

      if (Object.keys(filteredData).length === 0) {
        ToastAndroid.show("No valid fields to update.", ToastAndroid.LONG);
        return;
      }

      querySnapshot.forEach(async (docSnapshot) => {
        const docRef = docSnapshot.ref;
        await updateDoc(docRef, filteredData);
        ToastAndroid.show(`Sucessfully updated.`, ToastAndroid.LONG);
        router.push("/viewarticles/viewposts")
      });

      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }
  return (
    <View className='w-full h-full bg-black'>
      <NavBar />
      <View className='m-5'>
        <View className='flex justify-center items-center'>
          <Text className='text-white text-2xl'>CreatePosts</Text>
          <View className='mt-5 w-full flex justify-between items-center gap-4'>
            <TextInput className='bg-white text-black rounded-md border-2 border-red-100 w-full' placeholder='Enter Title' onChangeText={(value) => {
              setData({
                ...data,
                title: value
              })
            }} value={data.title} />
            <TextInput className='bg-white text-black rounded-md border-2 border-red-100 w-full' placeholder='Enter short dsecription' onChangeText={(value) => {
              setData({
                ...data,
                shortDescription: value
              })
            }} value={data.shortDescription} />
          </View>
        </View>
        <View>
          <TextInput
            multiline={true}
            numberOfLines={14}
            placeholder="Enter what's on your mind."
            style={styles.textArea}
            textAlignVertical="top"
            onChangeText={(value) => {
              setData({
                ...data,
                description1: value
              })
            }} value={data.description1}
          />
          <TextInput
            multiline={true}
            numberOfLines={14}
            placeholder="Enter what's on your mind."
            style={styles.textArea}
            textAlignVertical="top"
            onChangeText={(value) => {
              setData({
                ...data,
                description2: value
              })
            }} value={data.description2}
          />
        </View>
        <TouchableOpacity onPress={updatePosts} className='bg-green-300 mt-2 h-20 flex justify-center items-center rounded-lg border-2 border-white' disabled={loading}>
          {loading ? <ActivityIndicator /> :
            <Text className='text-center text-white font-bold'>Update Post</Text>
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditArcticles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: "100%"
  },
  textArea: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ffcccc',
    padding: 10,
    fontSize: 16,
    height: 200, // Explicit height
    marginTop: 5
  },
});