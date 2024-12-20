import React, { useState } from "react";
// import * as React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {WebView} from 'react-native-webview';

function HomeScreen({ navigation }) {
  const defaultImage = require("./assets/images/FB_IMG_1545560289018.jpg");
  return (
    <View style={[styles.contentcenter]}>
      <Text style={styles.heading}>Welcome to My Portfolio</Text>
      <Image source={defaultImage} style={[styles.image]} />
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Resume")}
        >
          <Text style={styles.buttonText}>Resume</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Portfolio")}
        >
          <Text style={styles.buttonText}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Contact")}
        >
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={[styles.contentcenter]}>
      <Text style={styles.heading}>About</Text>
      {/* Text paragraph */}
      <Text style={styles.paragraph}>
        Hey there, Name's Shahid Raza and I'm a Full Stack Web Developer, worked
        @TrakAff as a Laravel backend web developer and currently working as
        Laravel backend web developer @Capitall. I'm proficient in working with
        and implementing backend for web apps using Php, Laravel, MySQL, Ajax,
        JSON, JavaScript, React Js, Node Js, HTML, CSS, jQuery, Bootstrap. And I
        enjoy taking on new challenges. I have 2 years of experience in Backend
        Web Development.
      </Text>
      {/* Navigation button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

function ResumeScreen({ navigation }) {
  return (
    <View style={[styles.contentcenter]}>
      <Text style={styles.heading}>My Resume</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

function PortfolioScreen({ navigation }) {
  const calculaterapp = require("./assets/images/portfolio/project-expertaff1.png");
  return (
    <ScrollView style={styles.containerp}>
      <Text style={styles.headingp}>Portfolio</Text>
      <Text style={styles.paragraphp}>
        Welcome to my portfolio. Here you'll find a collection of projects that
        highlight my expertise in software development and web technologies.
        Each project demonstrates my dedication to creating effective solutions
        and my passion for coding.
      </Text>
      <View style={styles.cardp}>
        <Text style={styles.projectTitlep}>Expertaff</Text>
        <Image source={calculaterapp} style={styles.imagep} />
      </View>

      <TouchableOpacity
        style={styles.buttonp}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonTextp}>Go to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ContactScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Handle form submission (API call, validation, etc.)
    console.log("Form Submitted", { name, email, subject, message });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headingcontact}>Contact Me</Text>

      {/* Address Info */}
      <View style={styles.infoWrap}>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Address</Text>
          <Text>Laxmi Nagar Metro Station, New Delhi</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Call Us</Text>
          <Text>+917488952139</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Email Us</Text>
          <Text>shahidraza7463@gmail.com</Text>
        </View>
      </View>

      {/* Contact Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Subject"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Message"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.buttoncontact} onPress={handleSubmit}>
          <Text style={styles.buttonTextcontact}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={[styles.contentcenter]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#6200ee" },
          headerTintColor: "#fff",
          tabBarStyle: { backgroundColor: "#6200ee" },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#ddd",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Resume" component={ResumeScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Main container
  contentcenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },
  // profile image
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 16,
    borderWidth: 2,
    borderColor: "#6200ee",
  },
  // Headings
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  // Button group
  buttonGroup: {
    width: "100%",
    alignItems: "center",
    marginTop: 16,
  },
  // Button styles
  button: {
    backgroundColor: "#6200ee",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  //* About page
  // Paragraph text
  paragraph: {
    fontSize: 16,
    color: "#555",
    textAlign: "justify",
    lineHeight: 22,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  //* About page end
  //* resume page
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
  },
  sectionTitle: {
    marginVertical: 16,
  },

  paragraphresume: {
    fontSize: 16,
    color: "#555",
    textAlign: "justify",
    lineHeight: 22,
  },
  resumeSection: {
    marginVertical: 16,
  },
  resumeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6200ee",
    marginBottom: 8,
  },
  resumeItem: {
    marginBottom: 16,
  },
  // Resume Item Details
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },
  date: {
    fontSize: 14,
    color: "#777",
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
  emphasis: {
    fontStyle: "italic",
  },
  //* resume page end
  //* contact page
  headingcontact: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 16,
    textAlign: "center",
  },
  infoWrap: {
    marginVertical: 20,
  },
  infoItem: {
    marginBottom: 16,
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  form: {
    marginTop: 16,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    paddingLeft: 12,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  textarea: {
    height: 120,
  },
  buttoncontact: {
    backgroundColor: "#6200ee",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonTextcontact: {
    color: "#fff",
    fontWeight: "bold",
  },
  mapEmbed: {
    marginTop: 32,
  },
  map: {
    width: "100%",
    height: 270,
    borderWidth: 0,
    borderRadius: 8,
  },

  // portfolio page
  containerp: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  headingp: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  paragraphp: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  cardp: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  projectTitlep: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  imagep: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
  },
  buttonp: {
    backgroundColor: "#6200ea",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
    width: "70%",
    alignItems: "center",
  },
  buttonTextp: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default App;
