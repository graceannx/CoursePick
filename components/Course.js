import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Object } from 'react-native';
import { getCourseNumber, getCourseTerm, hasConflict, terms } from '../utils/course';


const Course = ({course, isSelected,isDisabled, select}) => (
    <TouchableOpacity style={styles[isSelected ? 'courseButtonSelected' : isDisabled ? 
      'courseButtonDisabled' : 'courseButton']}
      onPress={() => select(course)}
    >
      <Text style={styles.courseText}>
        {`CS ${getCourseNumber(course)}\n${course.meets}`}
      </Text>
    </TouchableOpacity>
  );


const CourseButtonBase = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 60,
  padding: 10,
  minWidth: 90,
  maxWidth: 90,
};

const styles = StyleSheet.create({
  courseButtonDisabled: {
    ...CourseButtonBase,
    backgroundColor: '#d3d3d3',
  },
  courseButton: {
    ...CourseButtonBase,
    backgroundColor: '#66b0ff',
  },

  courseButtonSelected: {
    ...CourseButtonBase,
    backgroundColor: '#004a99',

  },
  courseText:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});
export default Course;