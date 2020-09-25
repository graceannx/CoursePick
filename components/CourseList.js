import Course from './Course';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';

const CourseList = ({courses}) => (
    <ScrollView>
    <View style={styles.courseList}>
      {courses.map(course => <Course key={course.id} course={course} />) }
    </View>
    </ScrollView>
  );
const getCourseNumber = course => (
    course.id.slice(1)
  )
  
  const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    });
export default CourseList;