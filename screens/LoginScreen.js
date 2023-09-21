import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import ListIcon from '../assets/list.svg';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleLogin = async () => {};
  const handleJoin = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log('user', user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <ListIcon />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonOutLine]}
          onPress={handleJoin}
        >
          <Text style={styles.buttonOutLineText}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: { width: '80%', marginTop: 15 },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },

  buttonContainer: {
    width: '50%',
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'black',
    width: '100%,',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  buttonOutLine: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonOutLineText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
});
