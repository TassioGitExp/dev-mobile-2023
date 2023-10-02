import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const CardContainer = styled.TouchableOpacity`
  width: 95%;
  height: auto;
  border-radius: 12px;
  background-color: #dedcdc;
  padding: 5px;
  flex-direction: row;
  margin-top: 10px;
`;

export const CardImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 60%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #433c3c;
  font-size: 18px;
  font-weight: 600;
  flex-shrink: 1;
  margin-bottom: 2%;
`;

export const Offer = styled.Text`
  color: #1f1d1d;
  font-size: 34px;
  font-weight: 800;
`;

export const Price = styled.Text`
  color: #d6333e;
  font-size: 18px;
  font-weight: 500;
  text-decoration-line: line-through;
`;

export const Favorite = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  border-width: 2px;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 2px;
  margin: 0px;
  top: 2%;
  right: 2%;
  background-color: #424242;
`;
