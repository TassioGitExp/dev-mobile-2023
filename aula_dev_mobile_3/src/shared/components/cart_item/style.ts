import {StripeLogo} from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  /* border-width: 4px; */
  border-color: blue;
  flex-direction: row;
`;

export const AmountButtonsView = styled.View`
  flex: 1;
  max-height: 38%;
  width: 100%;
  bottom: -10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border-width: 4px; */
  padding: 4px;
  background-color: white;
  border-radius: 50px;
`;

export const AmountButton = styled.TouchableOpacity`
  flex: 1;
  max-width: 22px;
  max-height: 22px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  color: white;
`;

export const AmountText = styled.Text`
  flex: 1;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  color: black;
  font-size: 18px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const DeleteButton = styled.TouchableOpacity`
  flex: 1;
  max-width: 60px;
  height: 60px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  color: white;
`;

export const DeleteButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 42px;
  font-weight: 200;
`;

export const Details = styled.View`
  flex: 1;
  justify-content: flex-start;
  flex-grow: 1;
  flex-direction: column;
  /* left: -70%; */
  padding-left: 1%;
  /* border-width: 4px; */
  border-color: blue;
`;

export const CardContainer = styled.TouchableOpacity`
  width: 95%;
  height: 130px;
  border-radius: 12px;
  border-width: 4px;
  border-color: #dedcdc;
  background-color: #dedcdc;
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CardImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  /* border: 4px solid blue; */
  width: 60%;
  height: 100%;
  flex: 1;
  /* left: -40%; */
  padding: 0px;
  margin: 0px;
`;

export const Title = styled.Text`
  color: #433c3c;
  font-size: 18px;
  font-weight: 500;
  flex-shrink: 1;
  margin-bottom: 2%;
  justify-content: space-between;
`;

export const Offer = styled.Text`
  color: #1f1d1d;
  font-size: 18px;
  font-weight: 700;
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
