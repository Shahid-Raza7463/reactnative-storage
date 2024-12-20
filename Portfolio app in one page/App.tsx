import React, {useState} from 'react';
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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {WebView} from 'react-native-webview';

function HomeScreen({navigation}) {
  const defaultImage = require('./assets/images/FB_IMG_1545560289018.jpg');
  return (
    <View style={[styles.contentcenter]}>
      <Text style={styles.heading}>Welcome to My Portfolio</Text>
      <Image source={defaultImage} style={[styles.image]} />
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Resume')}>
          <Text style={styles.buttonText}>Resume</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Portfolio')}>
          <Text style={styles.buttonText}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// function AboutScreen({navigation}) {
//   return (
//     <View style={[styles.contentcenter]}>
//       <Text style={styles.heading}>About Me</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Home')}>
//         <Text style={styles.buttonText}>Go to Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

function AboutScreen({navigation}) {
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
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

// function ResumeScreen({navigation}) {
//   return (
//     <View style={[styles.contentcenter]}>
//       <Text style={styles.heading}>My Resume</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Home')}>
//         <Text style={styles.buttonText}>Go to Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

function ResumeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionTitle}>
        <Text style={styles.heading}>Resume</Text>
        <Text style={styles.paragraphresume}>
          Passionate and experienced Backend Web Developer with a solid
          foundation in full-stack development. Skilled in a variety of
          technologies, from PHP and Laravel to React and Node.js, I am driven
          to build innovative web solutions that meet and exceed client
          expectations. My journey in web development has been marked by a
          commitment to continuous learning and adapting to the latest industry
          trends. Below is a summary of my professional experience, education,
          skills, and certifications.
        </Text>
      </View>

      <View style={styles.container}>
        {/* Objective */}
        <View style={styles.resumeSection}>
          <Text style={styles.resumeTitle}>Objective</Text>
          <Text style={styles.paragraph}>
            Experienced Backend Web Developer with a passion for developing
            innovative web applications. Skilled in full-stack development,
            including front-end and back-end technologies. Seeking to use my
            skills and experience to contribute to a dynamic web development
            team.
          </Text>
        </View>

        {/* Education */}
        <View style={styles.resumeSection}>
          <Text style={styles.resumeTitle}>Education</Text>
          <View style={styles.resumeItem}>
            <Text style={styles.subTitle}>
              Master of Computer Applications (MCA)
            </Text>
            <Text style={styles.date}>2023 - 2025</Text>
            <Text style={styles.text}>
              <Text style={styles.emphasis}>
                Chandigarh University, Punjab.
              </Text>{' '}
              Grade: 7.30 CGPA
            </Text>
          </View>

          <View style={styles.resumeItem}>
            <Text style={styles.subTitle}>
              Bachelor of Computer Applications (BCA)
            </Text>
            <Text style={styles.date}>2019 - 2022</Text>
            <Text style={styles.text}>
              <Text style={styles.emphasis}>
                International School of Management, Patna
              </Text>
              , affiliated with Aryabhatta Knowledge University
            </Text>
            <Text style={styles.text}>Grade: 7.48 CGPA</Text>
          </View>

          <View style={styles.resumeItem}>
            <Text style={styles.subTitle}>Intermediate in Science</Text>
            <Text style={styles.date}>2017 - 2019</Text>
            <Text style={styles.text}>
              <Text style={styles.emphasis}>
                Saryu High School, Sursand, Sitamarhi
              </Text>
              , affiliated with Bihar School Examination Board
            </Text>
            <Text style={styles.text}>Percentage: 71.8%</Text>
          </View>

          <View style={styles.resumeItem}>
            <Text style={styles.subTitle}>Matriculation (10th)</Text>
            <Text style={styles.date}>2016 - 2017</Text>
            <Text style={styles.text}>
              <Text style={styles.emphasis}>
                Saryu High School, Sursand, Sitamarhi
              </Text>
              , affiliated with Bihar School Examination Board
            </Text>
            <Text style={styles.text}>Percentage: 64.2%</Text>
          </View>
        </View>

        {/* Technical Skills */}
        <View style={styles.resumeSection}>
          <Text style={styles.resumeTitle}>Technical Skills</Text>
          <Text style={styles.paragraph}>
            Programming Languages, Tools & Technologies, and Frameworks &
            Libraries: PHP, Laravel, MySQL, AJAX, JSON, JavaScript, React.js,
            Node.js, HTML, CSS, jQuery, Bootstrap, Git, and C Programming.
          </Text>
        </View>

        {/* Professional Experience */}
        <View style={styles.resumeSection}>
          <Text style={styles.resumeTitle}>Professional Experience</Text>
          <View style={styles.resumeItem}>
            <Text style={styles.subTitle}>Laravel Backend Web Developer</Text>
            <Text style={styles.date}>29-09-2023 - Present</Text>
            <Text style={styles.text}>
              <Text style={styles.emphasis}>
                Capitall India Private Limited, New Delhi
              </Text>
            </Text>
            <Text style={styles.paragraph}>
              - Developed the VSA Data Room.{'\n'}- Developed Balance
              Confirmation project.{'\n'}- Acquired basic knowledge in React.js,
              Node.js, and React Native.{'\n'}- Collaborated with clients to
              deliver successful projects based on their specifications.{'\n'}-
              Gained valuable experience in software testing.
            </Text>
          </View>

          <View style={styles.resumeItem}>
            <Text style={styles.subTitle}>
              Laravel Backend Web Developer Intern
            </Text>
            <Text style={styles.date}>01-03-2023 - 26-09-2023</Text>
            <Text style={styles.text}>
              <Text style={styles.emphasis}>
                TrakAff - Affiliate Tracking Software, New Delhi
              </Text>
            </Text>
            <Text style={styles.paragraph}>
              - Developed the Dynamic Expertaff web application projects.{'\n'}-
              Developed the Dynamic Linktester web application projects.{'\n'}-
              Gained expertise in PHP, Laravel, MySQL, AJAX, JSON, JavaScript.
            </Text>
          </View>
        </View>

        {/* Certifications & Training */}
        <View style={styles.resumeSection}>
          <Text style={styles.resumeTitle}>Certifications & Training</Text>
          <Text style={styles.paragraph}>
            - Certificate of Appreciation for Frontend Web Development - Issued
            by DevTown, 2022.{'\n'}- Certificate of Completion in Frontend Web
            Development Bootcamp - Issued by DevTown, 2022.{'\n'}- Masterclass
            on JavaScript Bootcamp - Issued by Scaler Academy, 2022.{'\n'}-
            Certificate of Completion in PHP Language - Issued by Great
            Learning, 2023.
          </Text>
        </View>
      </View>
      <View style={[styles.contentcenter]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function PortfolioScreen({navigation}) {
  const calculaterapp = require('./assets/images/portfolio/project-expertaff1.png');
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
      {/* <TouchableOpacity
        style={styles.cardp}
        onPress={() => navigation.navigate('CalculatorDetails')}>
        <Text style={styles.projectTitlep}>Calculator</Text>
        <Image source={calculaterapp} style={styles.imagep} />
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.buttonp}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonTextp}>Go to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// function CalculatorDetailsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Calculator App</Text>
//       <Text style={styles.description}>
//         This is my first application that I created. I used technologies like:
//       </Text>
//       <Text style={styles.technology}>- React Native</Text>
//       <Text style={styles.technology}>- Node.js</Text>
//       <Text style={styles.technology}>- CSS</Text>
//     </View>
//   );
// }

// function CalculatorDetailsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Calculator App</Text>
//       <Text style={styles.description}>
//         This is my first application that I created. I used technologies like:
//       </Text>
//       <Text style={styles.technology}>- React Native</Text>
//       <Text style={styles.technology}>- Node.js</Text>
//       <Text style={styles.technology}>- CSS</Text>
//     </View>
//   );
// }

function ContactScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission (API call, validation, etc.)
    console.log('Form Submitted', {name, email, subject, message});
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

      {/* Google Map Embed */}
      {/* <View style={styles.mapEmbed}>
        <Text>Location on Map:</Text>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.974898484312!2d77.27280758321282!3d28.630514405676287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad2277af7d%3A0xe68dd5cbcfe7d692!2sLaxmi%20Nagar%20Metro%20Station!5e0!3m2!1sen!2sus!4v1725388219908!5m2!1sen!2sus"
          style={styles.map}
          allowFullScreen
          loading="lazy"></iframe>
      </View> */}
      {/* <View style={styles.containermap}>
        <Text>Location on Map:</Text>
        <WebView
          source={{
            uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.974898484312!2d77.27280758321282!3d28.630514405676287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad2277af7d%3A0xe68dd5cbcfe7d692!2sLaxmi%20Nagar%20Metro%20Station!5e0!3m2!1sen!2sus!4v1725388219908!5m2!1sen!2sus',
          }}
          style={styles.mapstyle}
        />
      </View> */}
    </ScrollView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={[styles.contentcenter]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

// // Create a Stack Navigator for Portfolio
// const Stack = createStackNavigator();

// function PortfolioStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Portfolio"
//         component={PortfolioScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="CalculatorDetails"
//         component={CalculatorDetailsScreen}
//         options={{title: 'Calculator Details'}}
//       />
//     </Stack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#6200ee'},
          headerTintColor: '#fff',
          tabBarStyle: {backgroundColor: '#6200ee'},
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ddd',
        }}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  // profile image
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 16,
    borderWidth: 2,
    borderColor: '#6200ee',
  },
  // Headings
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  // Button group
  buttonGroup: {
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  // Button styles
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  //* About page
  // Paragraph text
  paragraph: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    lineHeight: 22,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  //* About page end
  //* resume page
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    marginVertical: 16,
  },

  paragraphresume: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    lineHeight: 22,
  },
  resumeSection: {
    marginVertical: 16,
  },
  resumeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 8,
  },
  resumeItem: {
    marginBottom: 16,
  },
  // Resume Item Details
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  emphasis: {
    fontStyle: 'italic',
  },
  //* resume page end
  //* contact page
  headingcontact: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 16,
    textAlign: 'center',
  },
  infoWrap: {
    marginVertical: 20,
  },
  infoItem: {
    marginBottom: 16,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  form: {
    marginTop: 16,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    paddingLeft: 12,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textarea: {
    height: 120,
  },
  buttoncontact: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonTextcontact: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mapEmbed: {
    marginTop: 32,
  },
  map: {
    width: '100%',
    height: 270,
    borderWidth: 0,
    borderRadius: 8,
  },

  // map
  // containermap: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 10,
  // },
  // mapstyle: {
  //   width: '100%',
  //   height: 300, // Adjust this value based on your design
  // },

  // portfolio page
  containerp: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  headingp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraphp: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  cardp: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 3},
    elevation: 4,
  },
  projectTitlep: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  imagep: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  buttonp: {
    backgroundColor: '#6200ea',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    width: '70%',
    alignItems: 'center',
  },
  buttonTextp: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
