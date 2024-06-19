import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  // Initialize the state with your name and email
  const [name, setName] = useState('Emmanuel Opoku Effah');
  const [email, setEmail] = useState('eeopoku001@st.ug.edu.gh');
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
