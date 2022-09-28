interface IOptions {
  upperCaseLetter: boolean;
  lowerCaseLetter: boolean;
  numbers: boolean;
  symbols: boolean;
}

export interface InitialState {
  generatedPassword: string;
  characterLenght: number;
  options: IOptions;
  strength: number;
  result: string;
}

export const initialState: InitialState = {
  generatedPassword: "",
  characterLenght: 0,
  options: {
    upperCaseLetter: false,
    lowerCaseLetter: false,
    numbers: false,
    symbols: false,
  },
  strength: 0,
  result: "",
};

export const appReducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case "range": {
      return { ...state, characterLenght: action.payload };
    }
    case "option": {
      return { ...state, options: action.payload };
    }
    case "result": {
      return { ...state, result: action.payload };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
