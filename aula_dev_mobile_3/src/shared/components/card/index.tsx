import {Text, TouchableOpacityProps} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';

interface CardProps extends TouchableOpacityProps {
  title: string;
  price: string;
  offer: string;
  image: string;
}

export function Card({...props}) {
  return (
    <CardContainer {...props}>
      <CardImage source={props.image}></CardImage>
      <Content>
        <Title>{props.title}</Title>
        <Offer>R$ {props.offer}</Offer>
        <Price>R$ {props.price}</Price>
        <Favorite>
          <Icon name={'heart'} size={14} color="#fdf4f4" solid></Icon>
        </Favorite>
      </Content>
    </CardContainer>
  );
}
