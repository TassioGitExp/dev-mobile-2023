import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../styles/profile.style';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const [containerSize, setContainerSize] = React.useState<number>();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={styles.icon}
        onLayout={layoutEvent =>
          setContainerSize(layoutEvent.nativeEvent.layout.width * 0.6)
        }>
        <Icon name={'user'} size={containerSize} color={'#1f1d1d'}></Icon>
      </View>
      <View>
        <Text style={styles.userInfo}>Username</Text>
        <Text style={styles.userHandle}>@user12345</Text>
      </View>
      <View style={styles.userSettings}>
        <TouchableOpacity style={styles.userSettingsButton}>
          <Text style={styles.userSettingsButtonText}>Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userSettingsButton}
          onPress={() => navigation.navigate('Cart', {id: null})}>
          <Text style={styles.userSettingsButtonText}>Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userSettingsButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.userSettingsButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
