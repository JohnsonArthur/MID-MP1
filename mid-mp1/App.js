
import React, {useState} from 'react'
import { Button, TextInput, StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';

export default function App () {


const [enteredGoalText, setEnteredGoalText ] = useState('');

const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler (enteredText) {

    setEnteredGoalText(enteredText);

  }
  function addGoalHandler() {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals, 
    { text: enteredGoalText, color: getRandomColor() },
  ]);
  setEnteredGoalText('');
}

function getRandomColor() {
  const colors = [ '#ff4000', '#bfff00', '#00ffbf', '#4000ff', '#ff00bf', '#ff0040', '#00ff00', '#ac5353' ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

  return (

      <View style={styles.appContainer}> 
        <View style= {styles.inputContainer}>
          <TextInput style= {styles.textInput} placeholder='My Goal' onChangeText={goalInputHandler} value={enteredGoalText} /> 
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
            
        <FlatList  
  data={courseGoals} 
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={[styles.goalsContainer, {backgroundColor: item.color}]}>
      <Text>{item.text}</Text>
    </View>
  )}
/>
      </View>
  );

}


const styles = StyleSheet.create({

appContainer: {
  paddingTop: 50,
  paddingHorizontal: 10,
},

inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 24,
  borderBottomWidth: 1,
},

textInput: {
 borderWidth: 1,
 width: '70%',
 marginRight: 8,
 padding: 8,

},
goalsContainer: {
  backgroundColor: 'magenta',
  borderColor: 'black',
  textAlign: 'center',
  padding: '10px',
},
});