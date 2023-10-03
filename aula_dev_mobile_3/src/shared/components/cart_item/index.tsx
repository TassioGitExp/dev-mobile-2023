import {Text, TouchableOpacityProps} from 'react-native';
import {
  AmountButton,
  AmountButtonsView,
  AmountText,
  ButtonText,
  CardContainer,
  CardImage,
  Content,
  DeleteButton,
  DeleteButtonText,
  Details,
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

export function CartItem({...props}) {
  return (
    <CardContainer {...props}>
      <CardImage source={props.image}></CardImage>
      <Details>
        <Title>{props.title}</Title>
        <Offer>R$ {props.offer}</Offer>
        <AmountButtonsView>
          <AmountButton>
            <ButtonText>-</ButtonText>
          </AmountButton>
          <AmountText>1</AmountText>
          <AmountButton>
            <ButtonText>+</ButtonText>
          </AmountButton>
        </AmountButtonsView>
      </Details>
      <Content>
        <DeleteButton>
          <DeleteButtonText>X</DeleteButtonText>
        </DeleteButton>
      </Content>
    </CardContainer>
  );
}
