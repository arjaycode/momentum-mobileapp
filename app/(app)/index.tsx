import {
  Bell,
  ChartSpline,
  Check,
  Flame,
  ListCheck,
  StickyNote,
} from 'lucide-react-native';
import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function index() {
  const [monthOffset, setMonthOffset] = React.useState(0);
  const today = new Date();
  const displayedDate = new Date(
    today.getFullYear(),
    today.getMonth() + monthOffset,
    1,
  );
  const monthName = displayedDate.toLocaleString('default', { month: 'long' });
  const year = displayedDate.getFullYear();
  const firstDayOfWeek = displayedDate.getDay();
  const daysInMonth = new Date(year, displayedDate.getMonth() + 1, 0).getDate();
  const prevMonthDays = new Date(year, displayedDate.getMonth(), 0).getDate();

  const completedDays = [
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  ];
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const calendarDays = React.useMemo(() => {
    return Array.from({ length: 42 }, (_, index) => {
      const dayNumber = index - firstDayOfWeek + 1;
      const isPrevMonth = dayNumber <= 0;
      const isNextMonth = dayNumber > daysInMonth;
      const label = isPrevMonth
        ? String(prevMonthDays + dayNumber)
        : isNextMonth
          ? String(dayNumber - daysInMonth)
          : String(dayNumber);
      const isCurrentMonth = !isPrevMonth && !isNextMonth;
      const isToday =
        isCurrentMonth &&
        displayedDate.getFullYear() === today.getFullYear() &&
        displayedDate.getMonth() === today.getMonth() &&
        dayNumber === today.getDate();
      const isCompleted = isCurrentMonth && completedDays.includes(dayNumber);
      const type =
        isPrevMonth || isNextMonth
          ? 'inactive'
          : isToday
            ? 'today'
            : isCompleted
              ? 'completed'
              : 'normal';

      return { label, type };
    });
  }, [
    completedDays,
    daysInMonth,
    displayedDate,
    firstDayOfWeek,
    prevMonthDays,
    today,
  ]);

  return (
    <ScrollView className="pb-40">
      <View className="bg-[#F1F1F1] px-4">
        <View className="bg-[#891C41] h-[105px] mt-[30px] rounded-3xl px-4 py-8 flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="bg-[#621d34] p-5 rounded-2xl shadow-md shadow-white">
              <ChartSpline color={'white'} />
            </View>
            <View>
              <Text className="text-sm text-white">Welcome Back!</Text>
              <Text className="text-white font-bold text-[26px]">Marc Kua</Text>
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
        <FlatList
          scrollEnabled={false}
          className="mt-4 pb-7"
          data={[1, 2, 3, 4, 5]} // Sample data for demonstration
          renderItem={(item) => (
            <View className="bg-white rounded-2xl px-4 py-6 shadow-md mt-2 flex-row">
              <View className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#12cc50]">
                <Check color="white" size={'16px'} />
              </View>
              <View className="ml-4">
                <Text className="font-bold text-lg">Morning Run</Text>
                <Text className="text-sm text-gray-500">Completed</Text>
              </View>
              <View className="items-center flex justify-end flex-1">
                <TouchableOpacity className="ml-auto px-4 py-2 rounded-full">
                  <Text className="text-[#1d1d62] text-base">Mark as Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListHeaderComponent={
            <>
              <View className="flex-row items-center justify-between mb-4">
                <View>
                  <Text className="font-bold text-base">Today's Habits</Text>
                </View>
                <View>
                  <Text className="text-sm">2 of 6 completed</Text>
                </View>
              </View>
              <View className="w-full h-2">
                <View className="bg-[#e0e0e0] h-full rounded-full"></View>
                <View
                  className="bg-[#2fd25b] h-full rounded-full absolute top-0 left-0"
                  style={{ width: '33%' }} // Example progress (33%)
                ></View>
              </View>
            </>
          }
          ListFooterComponent={
            <View className="mt-4 pb-20 rounded-2xl">
              <View className="bg-white p-4 shadow-md rounded-2xl">
                <View className="flex-row items-center justify-between mb-4">
                  <Text className="font-bold text-lg">
                    {monthName} {year}
                  </Text>
                  <View className="flex-row items-center justify-between w-1/2">
                    <TouchableOpacity
                      className="p-2"
                      onPress={() => setMonthOffset((prev) => prev - 1)}>
                      <Text className="text-lg font-bold text-slate-600">
                        ‹
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className=" p-2"
                      onPress={() => setMonthOffset((prev) => prev + 1)}>
                      <Text className="text-lg font-bold text-slate-600">
                        ›
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="flex-row mb-3">
                  {weekDays.map((day) => (
                    <Text
                      key={day}
                      className="text-[11px] text-slate-500 text-center"
                      style={{ width: `${100 / 7}%` }}>
                      {day}
                    </Text>
                  ))}
                </View>

                <View className="flex-row flex-wrap items-center">
                  {calendarDays.map((day, index) => {
                    const cellBase =
                      'aspect-square items-center justify-center mb-1 rounded';
                    const cellStyle =
                      day.type === 'inactive'
                        ? 'bg-slate-100'
                        : day.type === 'completed'
                          ? 'bg-[#d8f6e7]'
                          : day.type === 'today'
                            ? 'bg-[#2f6df4]'
                            : 'bg-white';
                    const textStyle =
                      day.type === 'inactive'
                        ? 'text-slate-400'
                        : day.type === 'completed'
                          ? 'text-slate-800 font-semibold'
                          : day.type === 'today'
                            ? 'text-white font-semibold'
                            : 'text-slate-600';

                    return (
                      <View
                        key={`${day.label}-${index}`}
                        className={`${cellBase} ${cellStyle}`}
                        style={{ width: `${100 / 7}%` }}>
                        <Text className={`${textStyle} text-sm`}>
                          {day.label}
                        </Text>
                      </View>
                    );
                  })}
                </View>

                <View className="flex-row justify-between gap-2 mt-4">
                  <View className="flex-row items-center gap-2 bg-[#eef9f1] px-3 py-2 rounded-full">
                    <View className="w-2.5 h-2.5 bg-[#2fd25b]" />
                    <Text className="text-sm text-slate-600">Completed</Text>
                  </View>
                  <View className="flex-row items-center gap-2 bg-[#e7f0ff] px-3 py-2 rounded-full">
                    <View className="w-2.5 h-2.5 bg-[#2f6df4]" />
                    <Text className="text-sm text-slate-600">Today</Text>
                  </View>
                </View>
              </View>
            </View>
          }
        />
      </View>
    </ScrollView>
  );
}
