import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '10%',
  },
  itemAmount: {
    // backgroundColor: 'blue',
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 18,
  },
  emptyCartText: {
    color: '#8f8f8f',
    fontSize: 42,
    textAlign: 'center',
    fontWeight: '800',
  },
  emptyCartIcon: {
    color: '#8f8f8f',
    textAlign: 'center',
    fontWeight: '800',
  },
  backToStoreBtn: {
    flex: 1,
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f1d1d',
    width: '60%',
    maxHeight: 50,
    borderRadius: 12,
  },
  backToStoreBtnText: {
    color: '#fdf4f4',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#dedcdc',
  },
  footerBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    maxHeight: '65%',
    width: '70%',
    borderRadius: 16,
  },
  footerBtnText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
