import { images } from '@/constants/images';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { EyeClosed, EyeIcon, LockIcon, MailIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [isTapped, setIsTapped] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
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
              Welcome Back!
            </Text>
            <Text className="text-[#6A716D] font-normal text-[12px] mt-2 text-center">
              Sign in your account
            </Text>
          </View>
          <View className="mt-[30px]">
            <Text className="font-normal text-base text-[#707571]">Email</Text>
            <TextInput
              placeholder="you@example.com"
              placeholderTextColor="#4B4F4B"
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
              secureTextEntry={!isTapped}
              className="bg-[#0E0E0E] rounded-lg mt-1 font-bold text-base pl-11 text-white border border-[#292929] h-12 relative align-middle"
            />
            <LockIcon
              color="#4B4F4B"
              style={{ position: 'absolute', left: 8, top: 30 }}
            />
            <View
              className="absolute top-[30px] right-[10px]"
              onTouchStart={() => setIsTapped(true)}
              onTouchEnd={() => setIsTapped(false)}>
              {isTapped ? (
                <EyeClosed color="#4B4F4B" />
              ) : (
                <EyeIcon color="#4B4F4B" />
              )}
            </View>
          </View>
          <View className="flex-row items-center mt-4">
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              style={{ width: 18, height: 18 }}
              color={isChecked ? '#757876' : undefined}
            />
            <Text className="text-[#6A716D] font-normal text-base ml-2">
              Remember me
            </Text>
            <View className="flex-1 items-end">
              <Link
                href="/forgotPassword"
                className="text-[#B62234] font-bold text-base">
                Forgot Password?
              </Link>
            </View>
          </View>
          <View>
            <TouchableOpacity className="w-full h-12 rounded-lg mt-6 justify-center items-center">
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
                <Text className="text-white font-bold text-base">Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-content items-center mt-6 mb-6">
            <View className="flex-1 border-t-[1px] border-[#6A716D] mx-4"></View>
            <Text className="text-sm text-[#6A716D] font-bold">
              or continue with
            </Text>
            <View className="flex-1 border-t-[0.5px] border-[#6A716D] mx-4"></View>
          </View>
          <View>
            <TouchableOpacity className="w-full h-12 rounded-lg justify-center items-center border border-[#292929] flex-row">
              <Image source={images.google} className="w-5 h-5 mr-2" />
              <Text className="text-white font-bold text-base">
                Sign in with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-white font-bold text-base">
            Don't have an account?
          </Text>
          <Link
            href="/signup"
            className="text-[#0E0E0E] font-bold text-base underline ml-2">
            Sign Up
          </Link>
        </View>
      </View>
    </View>
  );
}
