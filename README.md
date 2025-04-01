# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

Basic dependicies that are used 
1) Zustand - for state management in overall application
2) React-native-async-storage - To save the user information in the local storage
3) Expo-Router - for navigation
4) expo-router tabs and Stack - for displaying the pages in a Stack View.

deploying of the application
1) npm install --global eas-cli
2) eas build:configure
3) eas build --platform android
