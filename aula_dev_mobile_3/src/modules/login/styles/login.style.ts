import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 'auto',
    flex: 1,
    alignItems: 'center',
    margin: 12,
    padding: 4,
    borderRadius: 12,
    backgroundColor: 'white',
    gap: 12,
  },
  textstyle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonstyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 8,
    width: '90%',
  },
  buttontext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  formstyle: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 4,
    width: '90%',
  },
});

export default styles;
