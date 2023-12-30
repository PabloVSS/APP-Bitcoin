import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export default function QuantionsItems(props) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image 
          source={require("../../../img/bitcoin.png")}
          style={styles.logo}
          />
          <Text style={styles.dayCotation}>{props.data}</Text>
        </View>
      </View>
        <View style={styles.contextRight}>
          <Text style={styles.price}>
          {props.valor}
          </Text>
        </View>    
        </View>
  )
}