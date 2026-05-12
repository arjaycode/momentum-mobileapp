import {
  Bell,
  ChartSpline,
  Flame,
  ListCheck,
  StickyNote,
} from 'lucide-react-native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

export default function index() {
  return (
    <View className="bg-[#F1F1F1] px-4">
      <FlatList
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={
          <>
            <View className="bg-[#891C41] h-[105px] mt-[30px] rounded-3xl px-4 py-8 flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <View className="bg-[#621d34] p-5 rounded-2xl shadow-md shadow-white">
                  <ChartSpline color={'white'} />
                </View>
                <View>
                  <Text className="text-sm text-white">Welcome Back!</Text>
                  <Text className="text-white font-bold text-[26px]">
                    Marc Kua
                  </Text>
                </View>
              </View>
              <View className="p-4 bg-[#c9879e] rounded-full shadow-md shadow-white">
                <Bell color="#F1F1F1" size={'24px'} />
              </View>
            </View>

            <View className="mt-4 flex flex-row gap-4">
              <View className="bg-white rounded-2xl px-4 py-2 shadow-md flex-1">
                <View className="flex-row gap-2 items-center justify-between">
                  <Text className="flex-1 text-sm font-semibold text-[#891C41] mt-4">
                    Completion Rate
                  </Text>
                  <View className="bg-[#2f96d2] rounded-2xl mt-2 p-4 shadow-md shadow-white">
                    <ChartSpline color={'#ffffff'} size={'14px'} />
                  </View>
                </View>
                <View className="flex-row items-center justify-start">
                  <Text className="font-bold text-3xl">30%</Text>
                </View>
              </View>

              <View className="bg-white rounded-2xl px-4 py-2 shadow-md flex-1">
                <View className="flex-row gap-2 items-center justify-between">
                  <Text className="flex-1 text-sm font-semibold text-[#891C41] mt-4">
                    Habits
                  </Text>
                  <View className="bg-[#33d1a9] rounded-2xl mt-2 p-4 shadow-md shadow-white">
                    <ListCheck color={'#ffffff'} size={'14px'} />
                  </View>
                </View>
                <View className="flex-row items-center justify-start">
                  <Text className="font-bold text-3xl">5</Text>
                </View>
              </View>
            </View>
            <View className="mt-4 flex flex-row gap-4">
              <View className="bg-white rounded-2xl px-4 py-2 shadow-md flex-1">
                <View className="flex-row gap-2 items-center justify-between">
                  <Text className="flex-1 text-sm font-semibold text-[#891C41] mt-4">
                    Streak
                  </Text>
                  <View className="bg-[#e58964] rounded-2xl mt-2 p-4 shadow-md shadow-white">
                    <Flame color={'#ffffff'} size={'14px'} />
                  </View>
                </View>
                <View className="flex-row items-center justify-start">
                  <Text className="font-bold text-3xl">
                    2 <Text className="text-slate-500">days</Text>
                  </Text>
                </View>
              </View>

              <View className="bg-white rounded-2xl px-4 py-2 shadow-md flex-1">
                <View className="flex-row gap-2 items-center justify-between">
                  <Text className="flex-1 text-sm font-semibold text-[#891C41] mt-4">
                    Notes
                  </Text>
                  <View className="bg-[#9f36d8] rounded-2xl mt-2 p-4 shadow-md shadow-white">
                    <StickyNote color={'#ffffff'} size={'14px'} />
                  </View>
                </View>
                <View className="flex-row items-center justify-start">
                  <Text className="font-bold text-3xl">3</Text>
                </View>
              </View>
            </View>
          </>
        }
        ListFooterComponent={
          <View>
            <Text>End of Page</Text>
          </View>
        }
      />
    </View>
  );
}
