import React from 'react'
import { Text, View, StyleSheet, Modal, Button, Image, TouchableWithoutFeedback, TextInput, Pressable, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-modern-datepicker'
import { FONTS, SIZES } from '../constants';

const MyDatePicker = ({ date, setSelectedDate }) => {
    const [open, setOpen] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.dateView}>
                <View style={styles.inputContainer}>
                    <TextInput
                        editable={false}
                        style={styles.date}>
                        {date}
                    </TextInput>
                </View>
                <Pressable style={styles.icon} onPress={() => setOpen(!open)}>
                    <Image source={require('../assets/icons/calendar.png')} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
                </Pressable>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={open}
                onRequestClose={() => setOpen(!open)}>
                <View style={styles.modal}>
                    <View
                        style={{
                            margin: 10,
                            borderColor: "#DDDDDD",
                            borderWidth: 1
                        }}>

                        <DatePicker
                            onSelectedChange={date => setSelectedDate(date)}
                            mode="calendar" />

                    </View>
                    <TouchableOpacity
                    onPress={() => setOpen(!open)}
                        style={{
                            position: "absolute",
                            backgroundColor: "#3B71F3",
                            height: 30,
                            width: 80,
                            bottom: 0,
                            right: 0,
                            margin: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 8
                        }}>
                        <Text
                            style={{
                                fontFamily: FONTS.medium,
                                fontSize: SIZES.small,
                                color: "white"
                            }}>Xác nhận</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: '5%'
    },
    button: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    dateView: {
        flexDirection: 'row'
    },
    icon: {
        height: 30,
        width: 25,
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
    },
    date: {
        fontSize: 17,
        alignSelf: 'center',
        color: '#000000'
    },
    inputContainer: {
        backgroundcolor: 'white',
        width: '89%',
        height: 50,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    modal: {
        marginVertical: '45%',
        borderColor: '#EEEEEE',
        borderWidth: StyleSheet.hairlineWidth
    },
})

export default MyDatePicker;