import { white, black } from '../../colors';

export default {
  Card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderColor: white,
    backgroundColor: white,
    shadowOpacity: 0.18,
    shadowOffset: {
      width: 0, height: 1,
    },
    shadowColor: black,
    shadowRadius: 4,
    elevation: 4,
    overflow: 'hidden',
    justifyContent: 'space-between',

    Body: {
      backgroundColor: 'transparent',
      paddingVertical: 5,
      paddingHorizontal: 5,
    },

    Footer: {
      backgroundColor: 'transparent',
      paddingVertical: 5,
      paddingHorizontal: 5,
    },
  },
  'Card[rounded=true]': {
    borderRadius: 2,
  },
  'Card[rounded=false]': {
    borderRadius: 0,
  },
};
