import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
  height: 20%;
  border-radius: 5px;
  background-color: #3c3836;
  padding: 5px;
  flex-direction: row;
`;

export const CardImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 60%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #b8bb26;
  font-size: 16px;
  font-weight: 600;
  flex-shrink: 1;
  margin-bottom: 5%;
`;

export const Price = styled.Text`
  color: #ebdbb2;
  font-size: 16px;
  font-weight: 600;
`;

export const Offer = styled.Text`
  color: #fe8019;
  font-size: 13px;
  font-weight: 500;
  text-decoration-line: line-through;
`;

export const Favorite = styled.TouchableOpacity`
  width: 10%;
  height: 15%;
  position: absolute;
  top: 2%;
  right: 2%;
`;
