import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const VerificationScreen = ({ route }) => {
  const { qrCodeData } = route.params;
  const [verificationResult, setVerificationResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://192.168.109.195:3001/verify-credential', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ hash: qrCodeData }), // Assuming hash is what you need for the request
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data); // Debugging: log the response
        setVerificationResult(data);
        setLoading(false);

        // Show animation for 3 seconds before displaying the result
        setTimeout(() => {
          setShowAnimation(false);
        }, 3000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [qrCodeData]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!verificationResult) {
    return (
      <View style={styles.container}>
        <LottieView
            source={require('../assets/failure.json')}
            autoPlay
            loop={true}
            style={styles.animation}
          />
        <Text style={styles.errorText}>Failed to verify.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {showAnimation ? (
        verificationResult.verified.verified ? (
          <LottieView
            source={require('../assets/verified.json')}
            autoPlay
            loop={false}
            style={styles.animation}
          />
        ) : (
          <LottieView
            source={require('../assets/failure.json')}
            autoPlay
            loop={false}
            style={styles.animation}
          />
        )
      ) : (
        <View style={styles.card}>
          <Text style={styles.heading}>Details</Text>
          <View style={styles.list}>
            <Text style={styles.item}>• Verified: {verificationResult.verified.verified ? 'Yes' : 'No'}</Text>
            <Text style={styles.item}>• Farmer: {verificationResult.verified.farmer}</Text>
            <Text style={styles.item}>• Transporter: {verificationResult.verified.transporter}</Text>
            <Text style={styles.item}>• Weight: {verificationResult.verified.weight}</Text>
          </View>
          <LottieView
            source={require('../assets/verified.json')}
            autoPlay
            loop={false}
            style={styles.animation}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  animation: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  list: {
    paddingLeft: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default VerificationScreen;
