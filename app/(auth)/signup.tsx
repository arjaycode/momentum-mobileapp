import api from '@/constants/api';
import { images } from '@/constants/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import { EyeClosed, EyeIcon, LockIcon, MailIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const registerUser = async () => {
    if (formData.password !== formData.password_confirmation) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await api.post('/register', formData);
      const { access_token } = response.data;

      await AsyncStorage.setItem('user_token', access_token);

      Alert.alert('Success', 'Account created successfully!');
      router.push('/(app)');
    } catch (error: any) {
      if (error.response) {
        Alert.alert('Error', JSON.stringify(error.response.data.errors));
      } else {
        Alert.alert('Error', 'Registration failed. Check your connection.');
      }
    }
  };

  return (
    <View className="flex-1 justify-center items-center relative">
      <Image source={images.bg} className="w-full z-0 absolute" />
      <View className="w-full px-[15px]">
        <View className="flex justify-center items-center">
          <Image source={images.logo} className="w-16 h-16" />
          <Text className="font-bold text-[26px] text-white mt-5 shadow-sm shadow-slate-800">
            Momentum
          </Text>
          <Text className="font-bold text-[11px] text-[#D589A4]">
            Track, Grow, Achieve
          </Text>
        </View>
        <View className="bg-[#1A1A1A] w-full mt-5 h-[496px] rounded-3xl px-[17px]">
          <View>
            <Text className="text-[#CBCECB] text-center font-bold mt-7 text-[17px]">
              Welcome
            </Text>
            <Text className="text-[#6A716D] font-normal text-[12px] mt-2 text-center">
              Create your account
            </Text>
          </View>
          <View className="mt-[30px] flex-row gap-4 justify-between">
            <View className="flex-1">
              <Text className="font-normal text-base text-[#707571]">
                First Name
              </Text>
              <TextInput
                placeholder="John"
                placeholderTextColor="#4B4F4B"
                onChangeText={(text) => handleInputChange('first_name', text)}
                className="bg-[#0E0E0E] rounded-lg mt-1 font-bold text-base pl-4 text-white border border-[#292929] h-12 relative"
              />
            </View>
            <View className="flex-1">
              <Text className="font-normal text-base text-[#707571]">
                Last Name
              </Text>
              <TextInput
                placeholder="Doe"
                placeholderTextColor="#4B4F4B"
                onChangeText={(text) => handleInputChange('last_name', text)}
                className="bg-[#0E0E0E] rounded-lg mt-1 font-bold text-base pl-4 text-white border border-[#292929] h-12 relative"
              />
            </View>
          </View>
          <View className="mt-[9px]">
            <Text className="font-normal text-base text-[#707571]">Email</Text>
            <TextInput
              placeholder="you@example.com"
              placeholderTextColor="#4B4F4B"
              onChangeText={(text) => handleInputChange('email', text)}
              className="bg-[#0E0E0E] rounded-lg mt-1 font-bold text-base pl-11 text-white border border-[#292929] h-12 relative"
            />
            <MailIcon
              color="#4B4F4B"
              style={{ position: 'absolute', left: 8, top: 30 }}
            />
          </View>
          <View className="mt-[9px]">
            <Text className="font-normal text-base text-[#707571]">
              Password
            </Text>
            <TextInput
              placeholder="Enter your password..."
              placeholderTextColor="#4B4F4B"
              secureTextEntry={!showPassword}
              onChangeText={(text) => handleInputChange('password', text)}
              className="bg-[#0E0E0E] rounded-lg mt-1 font-bold text-base pl-11 text-white border border-[#292929] h-12 relative align-middle"
            />
            <LockIcon
              color="#4B4F4B"
              style={{ position: 'absolute', left: 8, top: 30 }}
            />
            <View
              className="absolute top-[30px] right-[10px]"
              onTouchStart={() => setShowPassword(true)}
              onTouchEnd={() => setShowPassword(false)}>
              {showPassword ? (
                <EyeClosed color="#4B4F4B" />
              ) : (
                <EyeIcon color="#4B4F4B" />
              )}
            </View>
          </View>
          <View className="mt-[9px]">
            <Text className="font-normal text-base text-[#707571]">
              Confirm Password
            </Text>
            <TextInput
              placeholder="Confirm your password..."
              placeholderTextColor="#4B4F4B"
              secureTextEntry={!showPassword}
              className="bg-[#0E0E0E] rounded-lg mt-1 font-bold text-base pl-11 text-white border border-[#292929] h-12 relative align-middle"
              onChangeText={(text) =>
                handleInputChange('password_confirmation', text)
              }
            />
            <LockIcon
              color="#4B4F4B"
              style={{ position: 'absolute', left: 8, top: 30 }}
            />
            <View
              className="absolute top-[30px] right-[10px]"
              onTouchStart={() => setShowPassword(true)}
              onTouchEnd={() => setShowPassword(false)}>
              {showPassword ? (
                <EyeClosed color="#4B4F4B" />
              ) : (
                <EyeIcon color="#4B4F4B" />
              )}
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={registerUser}
              className="w-full h-12 rounded-lg mt-6 justify-center items-center">
              <LinearGradient
                colors={['#E82D47', '#EE592E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text className="text-white font-bold text-base">
                  Create Account
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-white font-bold text-base">
            Already have an account?
          </Text>
          <Link
            href="/"
            className="text-[#0E0E0E] font-bold text-base underline ml-2">
            Sign In
          </Link>
        </View>
      </View>
    </View>
  );
}
