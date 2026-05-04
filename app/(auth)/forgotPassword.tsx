import { images } from '@/constants/images';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { MailIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ForgotPassword() {
  const [isTapped, setIsTapped] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View className="flex-1 justify-start items-center relative">
      <Image source={images.bg} className="w-full z-0 absolute" />
      <View className="w-full px-[15px] mt-24">
        <View className="flex justify-center items-center">
          <Image source={images.logo} className="w-16 h-16" />
          <Text className="font-bold text-[26px] text-white mt-5 shadow-sm shadow-slate-800">
            Momentum
          </Text>
          <Text className="font-bold text-[11px] text-[#D589A4]">
            Track, Grow, Achieve
          </Text>
        </View>
        <View className="bg-[#1A1A1A] w-full mt-5 h-[270px] rounded-3xl px-[17px]">
          <View>
            <Text className="text-[#CBCECB] text-center font-bold mt-7 text-[17px]">
              Lost your <Text className="text-[#AA343C]">habit</Text> password?
            </Text>
            <Text className="text-[#6A716D] font-normal text-[12px] mt-2 text-center px-14">
              Don't worry, we've all been there! Let's get you back on track
              with your habit-building journey.
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
                <Text className="text-white font-bold text-base">
                  Send reset link
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-white font-bold text-base">Back to</Text>
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
