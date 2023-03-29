import React, { useState, useEffect } from "react"
import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import CustomInput from "./CustomInput"

const VerifyScreen = () => {
    
    const [verifyCode, setVerifyCode] = useState('')
    const [count, setCount] = useState(120)

    useEffect(() => {
        count > 0 && setTimeout(() => {
            setCount(count - 1)
        }, 1000)
    }, [count])
    
    return (
        <View>
            <Text style={styles.header}>Verify Account</Text>
            <View>
                <Text>A verify code is sending to your phonenumber</Text>
                <CustomInput
                    placeholder="Verify code"
                    value={verifyCode}
                    setValue={setVerifyCode}
                />
                <Text>Verify code will expire after {count} seconds</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
})
export default VerifyScreen