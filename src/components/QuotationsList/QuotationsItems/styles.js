import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainContent: {
      width: '95%',
      height: "auto",
      backgroundColor: '#FFC745',
      marginLeft: "3%",
      marginBottom: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10
    },
    contextLeft:{
      width: "36%",
      alignItems: "flex-start",

    },
    logo:{
      width: 40,
      height: 40,
      marginLeft: 2
    },
    boxLogo:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    dayCotation: {
      fontSize: 16,
      paddingLeft: 2,
      color: '#005E5D',
      fontWeight: 'bold'
    },
    contextRight:{
      width: "60%",
      alignItems: "flex-end",
    },
    price:{
      color: '#005E5D',
      fontSize: 18,
      fontWeight: 'bold'

    }

});

export default styles
