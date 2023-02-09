import { StyleSheet, Text, View, Modal, Image, Dimensions, ScrollView, TouchableOpacity, Button, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderDetails from '../details/HeaderDetails'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Data } from '../data/Data';

export default function Cart({ Cancel, data }) {
  // console.log('aaaaaaaa', data.includes(data))
  // console.log(data)
  const [remove, setRemove] = useState(false)

  const [checkPlus, setCheckPlus] = useState(false)

  const [checkMinus, setCheckMinus] = useState(false)

  function onMinus(id) {
    if (data[id].count > 1) {
      setCheckMinus(!checkMinus)
      data[id].count -= 1
    }
  }

  function onPlus(id, idCheck) {
    const find = data.find(x => x.Data.id === idCheck)
    if (data[id].count < find.Data.stock) {
      setCheckPlus(!checkPlus)
      data[id].count += 1
    }
  }

  function onRemove(id) {
    // console.log([data[0].Data])
    alert.apply("successfully deleted")
    data.splice(id, 1)
  }

  useEffect(() => {

  }, [remove])

  const dataInCart = data[0]?.Data

  return (
    <>
      <Modal animationType="fade" >
        <ScrollView>
          <HeaderDetails onCancel={Cancel} />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            {dataInCart !== undefined ?
              <>
                {data.map((item, i) => (
                  <View key={item.Data.id} style={[Styles.container, Styles.row]} >
                    <View>
                      <Image
                        style={Styles.imagesMain}
                        source={{
                          uri: item.Data.thumbnail
                        }}
                      />
                    </View>
                    <View style={Styles.details}>
                      <Text>{item.Data.title}</Text>
                      <Text>
                        ฿ {item.Data.price}
                      </Text>
                      <View style={[Styles.row]}>
                        <View style={[Styles.row, { borderWidth: 1 }]}>
                          <View style={{ width: 33 }}>
                            <Button title='-' onPress={() => onMinus(i, item.count)} />
                          </View>
                          {/* <TouchableOpacity style={{ borderWidth: 0.5, paddingTop: 2, paddingLeft: 2 }}
                          onPress={() => onMinus(i, item.count)}
                        >
                          <AntDesign name="minus" size={24} color="black" />
                        </TouchableOpacity> */}
                          <Text style={{ padding: 5, paddingHorizontal: 15 }}>
                            {item.count}
                          </Text>
                          <View style={{ width: 33 }}>
                            <Button title='+' onPress={() => onPlus(i, item.Data.id)} />
                          </View>
                          {/* <TouchableOpacity style={{ borderWidth: 0.5, paddingTop: 2, paddingLeft: 2 }}
                          onPress={() => onPlus(i, item.Data.id)}
                        >
                          <AntDesign name="plus" size={24} color="black" />
                        </TouchableOpacity> */}
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', right: 25, top: 33 }}
                      onPress={() => [onRemove(i), setRemove(!remove)]}
                    >
                      <Entypo name="trash" size={35} color="black" />
                    </TouchableOpacity>
                  </View>
                ))}
              </>
              :
              <>
                <View style={{ alignItems: 'center', flex: 1 }}>
                  <Text style={{ fontSize: 30, flex: 1 }}>No Product !!</Text>
                  <Image
                    style={{ width: 300, height: 250 }}
                    source={{
                      uri: "https://static.vecteezy.com/system/resources/previews/005/073/073/non_2x/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
                    }}
                  />
                </View>
              </>
            }
          </KeyboardAvoidingView>
        </ScrollView>
      </Modal>
    </>
  )
}

const width = Dimensions.get("window").width;

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  imagesMain: {
    width: width / 2.5,
    height: 80,
    borderRadius: 10,
  },
  details: {
    marginLeft: 10,
  }
})
