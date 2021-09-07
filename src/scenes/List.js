/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from '../../styles/style.js';
import {
 // widthPercentageToDP as wp,
 // heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Table, Row, Rows} from 'react-native-table-component';
/* import bgImage from '../../assets/images/background.png'; */

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['No', 'Type', 'Object', 'Location', 'Time'],
      tableData: [
        ['1', 'pickup', 'JovMar', 'Косте Јовановића 24, 11000 Градска општина Вождовац, Serbia', '2020-09-10 07:37'],
        ['2', 'pickup', 'DraPap', 'Краља Владимира 12, 11040 Градска општина Вождовац, Serbia', '2020-09-10 07:37'],
        ['3', 'pickup', 'GabRak', 'Есад Пашина 12, 11000 Градска општина Вождовац, Serbia', '2020-09-10 07:38'],
        ['4', 'pickup', 'AniVuj', 'Борисављевићева 27, 11000 Градска општина Вождовац, Serbia', '2020-09-10 07:39'],
        ['5', 'pickup', 'SloBoj', 'Борисављевићева 48, 11040 Градска општина Вождовац, Serbia', '2020-09-10 07:39'],
        ['6', 'dropoff', 'AniVuj', 'Стефана Првовенчаног, 11040 Градска општина Вождовац, Serbia', '2020-09-10 07:41'],
        ['7', 'dropoff', 'DraPap', 'Стефана Првовенчаног, 11040 Градска општина Вождовац, Serbia', '2020-09-10 07:41'],
        ['8', 'dropoff', 'GabRak', 'Стефана Првовенчаног, 11040 Градска општина Вождовац, Serbia', '2020-09-10 07:41'],
        ['9', 'dropoff', 'JovMar', 'Стефана Првовенчаног, 11040 Градска општина Вождовац, Serbia', '2020-09-10 07:41'],
        ['10', 'dropoff', 'SloBoj', 'Стефана Првовенчаног, 11040 Градска општина Вождовац, Serbia', '2020-09-10 07:41'],
      ],
    };
  }
  render() {
    const state = this.state;
    return (
        <ScrollView>
          <View >
       {/*  <ImageBackground source= {bgImage}  style={ [styles.imageBackground]} > */}
        <Table borderStyle={{borderBottomWidth: 2 , borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={{height: 40, backgroundColor: '#f1f8ff'}} textStyle={styles.normalHeadlines}/>
          <Rows data={state.tableData} textStyle={styles.normalBodyCopy}/>
        </Table>
        {/* </ImageBackground> */}
        </View>
        </ScrollView>
    );
  }
}
export default List;
