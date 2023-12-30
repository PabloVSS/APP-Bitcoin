import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function CurrentPrince() {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrince}>R$5444,34</Text>
      <Text style={styles.textPrince}>Última cotação</Text>
    </View>
  )
}