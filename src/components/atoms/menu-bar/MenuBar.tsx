import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MenuBar = () => {
  return (
    <View
      style={[
        styles.menuBarContainer,
        Platform.OS === 'android' && {marginTop: 10},
      ]}>
      <TouchableOpacity>
        <Image source={require('../../../assets/icons/menu.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>Hello, Faiz</Text>
      <TouchableOpacity>
        <Image
          style={styles.filter}
          source={require('../../../assets/icons/notification.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  menuBarContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 29,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  filter: {width: 20, height: 23},
});
