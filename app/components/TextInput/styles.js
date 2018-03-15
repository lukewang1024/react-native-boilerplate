import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    marginBottom: 11,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: INPUT_HEIGHT,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {},
  input: {},
  border: {},
});
