import {TouchableOpacityProps} from 'react-native';
import {
  CardContainer,
  CardImage,
  Content,
  Favorite,
  Offer,
  Price,
  Title,
} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

interface CardProps extends TouchableOpacityProps {}

export function Card({...props}: CardProps) {
  return (
    <CardContainer {...props}>
      <CardImage
        source={require('aula_dev_mobile_3/src/assets/mesa.jpeg')}></CardImage>
      <Content>
        <Title>Produto</Title>
        <Price>$10,01</Price>
        <Offer>$12,34</Offer>
        <Favorite>
          <Icon name={'times'} size={16} color="#fdf4f4"></Icon>
        </Favorite>
      </Content>
    </CardContainer>
  );
}
