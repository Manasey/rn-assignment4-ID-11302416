// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', icon: require('../assets/facebook.png') },
    { title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'New York, US', icon: require('../assets/google.png') },
    { title: 'Full Stack Developer', company: 'Amazon', salary: '$140,000', location: 'New York, US', icon: require('../assets/amazon.png') },
    { title: 'UX Designer', company: 'Microsoft', salary: '$150,000', location: 'San Francisco, US', icon: require('../assets/apple.png') },
    { title: 'Backend Developer', company: 'Apple', salary: '$100,000', location: 'New York, US', icon: require('../assets/microsoft.png') },
    { title: 'DevOps Engineer', company: 'Twitter', salary: '$290,000', location: 'Miami, US', icon: require('../assets/netflix.png') },
    { title: 'Data Scientist', company: 'Netflix', salary: '$370,000', location: 'New York, US', icon: require('../assets/spotify.png') },
    { title: 'Frontend Developer', company: 'Spotify', salary: '$190,000', location: 'San Francisco, US', icon: require('../assets/twitter.png') }
  ];

  const popularJobs = [
    { title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', icon: require('../assets/burgerking.png') },
    { title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Miami, US', icon: require('../assets/beats.png') },
    { title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', icon: require('../assets/facebook.png') },
    { title: 'Software Developer', company: 'Microsoft', salary: '$80,100/y', location: 'New York, US', icon: require('../assets/microsoft.png') },
    { title: 'UX Designer', company: 'Google', salary: '$80,000/y', location: 'New York, US', icon: require('../assets/google.png') },
    { title: 'Backend Developer', company: 'Amazon', salary: '$90,000/y', location: 'Seattle, US', icon: require('../assets/amazon.png') },
    { title: 'Full Stack Developer', company: 'Spotify', salary: '$82,000/y', location: 'Miami, US', icon: require('../assets/spotify.png') },
    { title: 'Data Scientist', company: 'Netflix', salary: '$100,000/y', location: 'Miami, US', icon: require('../assets/netflix.png') }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userEmail}>{email}</Text>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>🔍</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <ScrollView horizontal style={styles.horizontalScroll}>
        {featuredJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      {popularJobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f5f5f5', flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  userName: { fontSize: 24, fontWeight: 'bold' },
  userEmail: { fontSize: 16, color: '#777' },
  profileImage: { width: 50, height: 50, borderRadius: 25, borderColor: '#ddd', borderWidth: 1 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  searchInput: { flex: 1, height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, backgroundColor: '#fff' },
  filterButton: { marginLeft: 10, padding: 10, backgroundColor: '#0276b1', borderRadius: 5 },
  filterButtonText: { color: '#fff', fontSize: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  horizontalScroll: { marginBottom: 20 },
});

export default HomeScreen;
