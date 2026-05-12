import { Pencil, PlusCircle, Trash } from 'lucide-react-native';
import React from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Habits() {
  const daysBox = 30;
  return (
    <View className="px-4 bg-[#f1f1f1]">
      <Text className="text-3xl font-bold mt-7 text-[#666666]">Habits</Text>
      <View className="mt-3 flex-row items-center justify-center gap-2">
        <TextInput
          placeholder="Search habits..."
          className="bg-white h-[42px] px-3 rounded-full flex-1"
        />
        <TouchableOpacity className="bg-white h-[42px] px-4 py-3 rounded-full flex-row items-center justify-center gap-2">
          <PlusCircle className="ml-2" size={16} color="#666666" />
          <Text className="text-slate-500 font-semibold">Add Habit</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        className="bg-white p-4 mt-4 rounded-2xl mb-40"
        data={[1, 2, 3, 5, 6, 7, 8, 8, 8, 88]}
        renderItem={(item) => (
          <View className="p-4 bg-[#FCF0F0] rounded-xl mt-4 shadow">
            <View className="flex gap-2">
              <View className="flex-row flex-wrap items-center justify-start gap-[1px]">
                {Array.from({ length: daysBox }).map((_, index) => (
                  <View
                    key={index}
                    className="w-4 h-4 bg-[#23BC89] rounded mb-1 shadow-slate-700"
                  />
                ))}
              </View>
              <View className="flex-row items-center gap-2">
                <View className="h-14 w-14 bg-[#F76B6B] rounded-full flex items-center justify-center">
                  <Text className="text-2xl text-white">HT</Text>
                </View>
                <View className="flex items-start justify-center">
                  <Text className="font-bold">Habit Title</Text>
                  <Text className="text-sm text-slate-500">
                    Habit Description
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <TouchableOpacity className="bg-green-500 p-3 rounded-lg">
                    <PlusCircle size={16} color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-amber-500 p-3 rounded-lg">
                    <Pencil size={16} color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-red-500 p-3 rounded-lg">
                    <Trash size={16} color="#ffffff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
