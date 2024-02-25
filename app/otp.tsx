import { useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform, Linking, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";

const Page = () => {
    const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const router = useRouter();
    const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;


    const openLink = () => {
        Linking.openURL('https://www.wikipedia.org/')
    };

    const sendOTP = async () => {

    };

    const trySignIn = async () => {

    }


    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>

            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.background,
        gap: 20,
    },
    description: {
        fontSize: 14,
        color: Colors.gray,
    },
})

export default Page;
