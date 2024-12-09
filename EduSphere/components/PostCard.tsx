import { View, Text, Image, TouchableOpacity, Alert, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Link, router, usePathname } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Posts } from '@/types/post';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { collection, deleteDoc, getDocs, query, where, doc as getDocRef } from 'firebase/firestore';
import { db } from '@/initialize-firebase';
import { deleteFromClodinary } from '@/helpers/deleteFromClodinary';
// Props interface
interface PostCardProps {
  items: Posts;
}
const PostCard: React.FC<PostCardProps> = ({ items }) => {
  const pathname = usePathname(); // Get the current route
  const [loading, setLoading] = useState<boolean>(false)
  const deleteItem = async () => {
    try {
      Alert.alert(
        'Remove Post',
        'Do You Want To Remove The Post.',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK', onPress: async () => {
              setLoading(true)
              const postsCollection = collection(db, "posts"); // Reference to the 'posts' collection 
              const q = query(postsCollection, where("id", "==", items.id)); // Query to match the inner 'id'
              const querySnapshot = await getDocs(q);
              if (!querySnapshot.empty) {
                const docSnapshot = querySnapshot.docs[0]; // Get the first document (if multiple exist)
                const docData = docSnapshot.data();
                let response
                // delte cloudinary image
                const imageUrl = docData.imageUrl;
                if (imageUrl) {
                  const publicId = imageUrl
                    .split("/")
                    .slice(-2) // Get the last two segments (folder name and file name)
                    .join("/")
                    .split(".")[0]; // Remove the file extension
                  console.log(`Extracted Cloudinary Public ID: ${publicId}`);
                  response = await deleteFromClodinary(publicId)
                }
                if (response) {
                  const docRef = getDocRef(db, "posts", docSnapshot.id); // Create a document reference using its ID
                  await deleteDoc(docRef); // Delete the document
                  ToastAndroid.show(`Post deleted successfully.`, ToastAndroid.LONG);
                  setLoading(false)
                  router.push("/viewarticles/viewposts")
                }
                setLoading(false)
                throw new Error('Something Went Wrong');
              } else {
                ToastAndroid.show("No matching Post found.", ToastAndroid.SHORT);
              }
            }
          },
        ],
        { cancelable: false }
      );
    } catch (err) {
      console.log(err)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  return (
    <View className='border-2 max-w-[25rem] border-white rounded-md  m-3  mb-10'>
      <View className='flex  flex-row justify-between'>
        {pathname === "/viewarticles/viewposts" &&
          <>
            {loading ? <ActivityIndicator /> :
              <TouchableOpacity onPress={deleteItem}>
                <MaterialCommunityIcons name="delete-variant" size={24} color="red" />
              </TouchableOpacity>
            }
          </>
        }
        <Link href={{
          pathname: '/post/[id]',
          params: { id: `${items?.id}` },
        }} className='' >
          <AntDesign name="arrowsalt" size={24} color="white" className='text-right' />
        </Link>
      </View>
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