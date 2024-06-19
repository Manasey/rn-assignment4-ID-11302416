import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ job }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={job.icon} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imageContainer: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  company: {
    fontSize: 14,
    color: '#777',
  },
  salary: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default JobCard;

