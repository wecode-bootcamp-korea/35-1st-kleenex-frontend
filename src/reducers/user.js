const initialState = {
  isCheckbox: false,
};

export const CHECKBOX = 'CHECKBOX';
export const UN_CHECKBOX = 'UN_CHECKBOX';

export const loginChecked = () => {
  return {
    type: CHECKBOX,
  };
};

export const loginUnChecked = () => {
  return {
    type: UN_CHECKBOX,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECKBOX: {
      return {
        ...state,
        isCheckbox: true,
      };
    }
    case UN_CHECKBOX: {
      return {
        ...state,
        isCheckbox: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
