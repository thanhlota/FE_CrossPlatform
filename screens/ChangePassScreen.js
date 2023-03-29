import React, { useState } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList, TextInput, Alert } from 'react-native'
import axios from 'axios';

import { FONTS, SIZES } from '../constants';

const ChangePassScreen = () => {
    const [password1, onChange1] = useState("");
    const [password2, onChange2] = useState("");

    var checkUserPassword = (password) => {
        var regex = /^[A-Za-z\d]{6,10}$/;
        return regex.test(password);
    }

    const changePassword = async () => {
        if (password1 == "" || password2 == "") {
            Alert.alert(
                "Lỗi nhập liệu",
                "Bạn cần phải nhập đầy đủ thông tin",
                {
                    text: "OK",
                    style: "cancel"
                }
            )
            return
        }
        if (password1 == password2) {
            Alert.alert(
                "Lỗi nhập liệu",
                "Mật khẩu cũ và mật khẩu mới cần phải khác nhau",
                {
                    text: "OK",
                    style: "cancel"
                }
            )
            return
        }

        if (!checkUserPassword(password1) || !checkUserPassword(password2)) {
            Alert.alert(
                "Lỗi dữ liệu",
                "Mật khẩu chứa 6 ~ 10 ký tự, không chứa ký tự đặc biệt",
                {
                    text: "OK",
                    style: "cancel"
                }
            )
            return
        }

        try {
            const res = await axios.post(
                `${BaseURL}/user/change_password`,
                {},
                {
                    params:{
                        token: token,
                        password: password1,
                        new_password: password2
                    }
                }
            )
            console.log(res)
        } catch (error) {
            console.log(JSON.stringify(error.message))
        }
    }

    return (
        <View style={{
            backgroundColor: "white",
            flex: 1,
        }}>
            <View style={{
                margin: 10,
            }}>
                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.medium,
                }}>Nhập mật khẩu hiện tại</Text>
                <TextInput
                    text={password1}
                    onChangeText={onChange1}
                    placeholder="Old password"
                    secureTextEntry={true}
                    style={{
                        padding: 10,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#DDDDDD",
                        margin: 10,
                        marginRight: 10,
                    }}
                />
            </View>
            <View style={{
                marginHorizontal: 10,
            }}>
                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.medium,
                }}>Nhập mật khẩu mới</Text>
                <TextInput
                    text={password2}
                    onChangeText={onChange2}
                    placeholder="New password"
                    secureTextEntry={true}
                    style={{
                        padding: 10,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#DDDDDD",
                        margin: 10,
                        marginRight: 10,
                    }}
                />
            </View>
            <TouchableOpacity
                onPress={changePassword}
                style={{
                    backgroundColor: "#1877f2",
                    height: 40,
                    margin: 10,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center"

                }}>
                <Text style={{ color: "white", fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>Đổi mật khẩu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChangePassScreen