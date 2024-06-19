Jobizz App
Introduction
Jobizz is a mobile application designed to streamline the job search process for users. With a simple and intuitive interface, the app features a login screen and a home screen that showcases job listings in various categories.

Components Overview
1. LoginScreen
The LoginScreen component allows users to log in by entering their name and email. Upon successful login, users are navigated to the HomeScreen.

Purpose: Collects user credentials and navigates to the HomeScreen.
Key Elements:
Text inputs for name and email.
Login button that triggers navigation.
Social media login icons for alternative login options.
javascript
Copy code
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [name, setName] = useState('David Paa Kwesi Kanda');
  const [email, setEmail] = useState('kandapaanation@gmail.com');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (name && email) {
      navigation.navigate('Home', { name, email });
    } else {
      alert('Please enter both name and email');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Jobizz</Text>
      <Text style={styles.welcomeText}>Welcome Back 👋</Text>
      <Text style={styles.subText}>Let’s log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialContainer}>
        <Image
          style={styles.socialIcon}
          source={require('../assets/apple.png')}
        />
        <Image
          style={styles.socialIcon}
          source={require('../assets/google.png')}
        />
        <Image
          style={styles.socialIcon}
          source={require('../assets/facebook.png')}
        />
      </View>
      <Text style={styles.registerText}>
        Haven’t an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0276b1',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e1e1e',
  },
  subText: {
    fontSize: 16,
    color: '#777777',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0276b1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#777777',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  registerText: {
    fontSize: 16,
    color: '#777777',
  },
  registerLink: {
    color: '#0276b1',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
2. HomeScreen
The HomeScreen component displays the user's information and lists job opportunities in two categories: featured jobs and popular jobs.

Purpose: Displays job listings and user details.
Key Elements:
User information (name and email).
Search bar for job searches.
Scrollable lists for featured and popular jobs.
javascript
Copy code
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', icon: require('../assets/facebook.png') },
    { title: 'UX Designer', company: 'Google', salary: '$160,000', location: 'New York, US', icon: require('../assets/google.png') },
    { title: 'Frontend Developer', company: 'Amazon', salary: '$140,000', location: 'Seattle, US', icon: require('../assets/amazon.png') },
    { title: 'Product Manager', company: 'Apple', salary: '$120,000', location: 'San Francisco, US', icon: require('../assets/apple.png') },
    { title: 'Backend Developer', company: 'Microsoft', salary: '$100,000', location: 'Redmond, US', icon: require('../assets/microsoft.png') },
    { title: 'Data Scientist', company: 'Netflix', salary: '$190,000', location: 'Los Gatos, US', icon: require('../assets/netflix.png') },
    { title: 'DevOps Engineer', company: 'Spotify', salary: '$170,000', location: 'Stockholm, Sweden', icon: require('../assets/spotify.png') },
    { title: 'Full Stack Developer', company: 'Twitter', salary: '$130,000', location: 'San Francisco, US', icon: require('../assets/twitter.png') }
  ];

  const popularJobs = [
    { title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', icon: require('../assets/burgerking.png') },
    { title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', icon: require('../assets/beats.png') },
    { title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', icon: require('../assets/facebook.png') },
    { title: 'Software Developer', company: 'Microsoft', salary: '$90,000/y', location: 'New York, US', icon: require('../assets/microsoft.png') },
    { title: 'UX Designer', company: 'Google', salary: '$70,000/y', location: 'New York, US', icon: require('../assets/google.png') },
    { title: 'Backend Developer', company: 'Amazon', salary: '$94,000/y', location: 'Seattle, US', icon: require('../assets/amazon.png') },
    { title: 'Full Stack Developer', company: 'Spotify', salary: '$102,000/y', location: 'Stockholm, Sweden', icon: require('../assets/spotify.png') },
    { title: 'Data Scientist', company: 'Netflix', salary: '$99,000/y', location: 'San Francisco, US', icon: require('../assets/netflix.png') }
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
  container: { padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  userName: { fontSize: 18, fontWeight: 'bold' },
  userEmail: { color: '#777' },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  searchContainer: { flexDirection: 'row', marginBottom: 16 },
  searchInput: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, paddingHorizontal: 16 },
  filterButton: { marginLeft: 8, padding: 12, backgroundColor: '#0276b1', borderRadius: 8 },
  filterButtonText: { color: '#fff' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  horizontalScroll: { flexDirection: 'row', marginBottom: 16 }
});

export default HomeScreen;
3. JobCard
The JobCard component is a reusable card that displays job details such as title, company, salary, and location, along with the company logo.

Purpose: Provides a consistent UI for displaying job details.
Key Elements:
Job title, company name, salary, and location.
Company logo.
javascript
Copy code
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ job }) => {
  return (
    <View style={styles.card}>
      <Image source={job.icon} style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 16, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginBottom: 16 },
  icon: { width: 50, height: 50, borderRadius: 8, marginRight: 16 },
  info: { justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold' },
  company: { color: '#777' },
  salary: { color: '#0276b1', fontWeight: 'bold' },
  location: { color: '#777' }
});

export default JobCard;
Getting Started
Prerequisites
Node.js and npm installed.
React Native environment set up.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/jobizz.git
Navigate to the project directory:
bash
Copy code
cd jobizz
Install the dependencies:
bash
Copy code
npm install
Running the App
Start the development server:

bash
Copy code
npm start
Run the app on your device or emulator:

bash
Copy code
npx react-native run-android  # for Android
npx react-native run-ios      # for iOS
Screenshots
Login Screen

Home Screen

Job Card

Project Structure
assets: Contains image assets used in the app.
components: Contains reusable components like JobCard.
screens: Contains screen components like LoginScreen and HomeScreen.
App.js: Main entry point of the application.
Conclusion
Jobizz aims to simplify the job search process with a clean interface and easy navigation. The app provides users with quick access to job listings and detailed information about each job.

For any questions or contributions, please feel free to contact us at yourcontactinfo@example.com.