import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '10%',
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
});
