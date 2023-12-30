import { Platform, StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice'
import HistoyGraphic from './src/components/HistoyGraphic'
import QuantionsList from './src/components/QuotationsList';
import QuantionsItems from './src/components/QuotationsList/QuotationsItems';
import { useState, useEffect } from 'react';

function addZero(number){
  if(number <= 9){
    return "0" + number
  }else{
    return number
  }

}


function url(qtdDays){
  const date = new Date()
  const listLastDays = qtdDays
  const end_date = 
  `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
    date.setDate(date.getDate() - listLastDays)
  const start_date =  
  `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

async function getListCoins(url){

  let response = await fetch(url)
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi
  const queryCoinsList = Object.keys(selectListQuotations).map((key)=>{
    return{
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    }
  })
  let data = queryCoinsList.reverse()
  return data
}

async function getPriceCoinsGraphic(url){

  let responseG = await fetch(url)
  let returnApiG = await responseG.json()
  let selectListQuotationsG = returnApiG.bpi
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key)=>{
    return{
      valor: selectListQuotationsG[key]
    }
  })
  let dataG = queryCoinsListG
  return dataG
}

export default function App() {
  const [coinsList, setCoinsList] = useState([])
  const [coinsGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)


  function updateDay(number){
    setDays(number)
    setUpdateData(true)
  }

  useEffect(() => {
      getListCoins(url(days)).then((data) => {
        setCoinsList(data)
      })

      getPriceCoinsGraphic(url(days)).then((dataG) => {
          setCoinsGraphicList(dataG)
      })

      if(updateData){
        setUpdateData(false)
      }

  },[updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
      backgroundColor='#FFC745'
      barStyle="light-content"
      />
      <CurrentPrice />
      <HistoyGraphic />
      <QuantionsList filterDay={updateDay} listTransaction={coinsList}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#005E5D',
    paddingTop: Platform.OS === 'android' ? 40: 0
  },
});
