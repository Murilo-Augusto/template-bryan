import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, Foundation, Ionicons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image}
          source={require('./src/sol.jpg')}
        />
      </View>
      <TouchableOpacity style={styles.esfera} onPress={ () => {
        let today=new Date();
        let h=today.getHours();
        let m=today.getMinutes();
        let s=today.getSeconds();
        alert(h+":"+m+":"+s)
        
        } }> 
        <Text style={styles.esferaTextPorcentagem} > 75% </Text>
        <Text style={styles.esferaText} > Today </Text>
      </TouchableOpacity>

      <View style={styles.flex} >
        <View style={styles.square} >
          <MaterialIcons name="watch-later" size={90} color="black" />
        </View>
        <View style={styles.square} >
          <Foundation name="shopping-bag" size={90} color="black" />
        </View>
        </View>
      <View style={styles.flex2} >
        <View style={styles.square} >
          <Ionicons name="checkbox" size={65} color="black" />
        </View>
        <View style={styles.square} >
          <Ionicons name="warning-outline" size={90} color="black" />
        </View>
      </View>

      <View style={styles.bolinhasConteiner}>
        <View style={styles.bolinha} ></View>
        <View style={styles.bolinha2} ></View>
        <View style={styles.bolinha} ></View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
  },
  header: {
    height: '30%',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    zIndex: -1
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  esfera: {
    width: 250,
    height: 250,
    borderRadius: 200,
    backgroundColor: '#FFF',
    zIndex: 1,
    marginTop: -125,
    marginLeft: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  esferaTextPorcentagem: {
    fontSize: 70,
    fontWeight: 'bold',
    margin: 0
  },
  esferaText: {
    color: '#858585',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 0
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  },
  flex2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: '#717171',
    width: 125,
    height: 125,
    borderRadius: 25,
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  bolinhasConteiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bolinha: {
    marginTop: -40,
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#000',
    marginRight: 5,
    marginLeft: 5,
  },
  bolinha2: {
    marginTop: -40,
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#000'
  },
});