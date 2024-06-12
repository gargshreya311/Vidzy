import { StatusBar } from 'expo-status-bar';
import {  Image, ScrollView, Text, View } from 'react-native';
import {Redirect,router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider'

export default function App() {

  const{isLoading,isLoggedIn}=useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home "/>
  return (
    <SafeAreaView className="bg-black h-full">
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View className="w-full justify-center items-center min-h-[85vh] px-4">
        <Image
          source={images.logo}
          className="w-[150px] h-[104px]"
          resizeMode="contain"
        />
        <Image
           source={images.cards}
           className="max-w-[380px] w-full h-[300px]"
           resizeMode="contain"
        />

        <View className="relative mt-5">
           <Text className="text-3xl text-white font-bold text-center">
           Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Vidzy</Text>
           </Text>
           <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-4 -right-8"
              resizeMode="contain"
           />
        </View>

        <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Vidzy
          </Text>
          <CustomButton
             title="Continue with Email"
             handlePress={()=> router.push('/sign-in')}
             containerStyles="w-full mt-7"
          />
      </View>
    </ScrollView>

    <StatusBar backgroundColor="#161622" style="light"/>
  </SafeAreaView>
  
  );
}

