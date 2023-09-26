import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const CartButton = styled.TouchableOpacity`
  /* border-width: 1px;
  border-color: transparent; */
  flex: 1;
  background-color: #1f1d1d;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const styles = StyleSheet.create({
  floatingCartBtnIcon: {
    color: '#fdf4f4',
    fontWeight: '600',
  },
});
