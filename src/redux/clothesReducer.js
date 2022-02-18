let InitialState = {
    types: [

    ],
    brands: [

    ],
    clothes: [
      
    ],
    selectedType: {},
    selectedBrand: {}
}


const clothesReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_TYPES': {
            return {
                ...state,
                types: action.types
            }
        }
        case 'SELECT_TYPE': {
            return {
                ...state,
                selectedType: action.selectedType

            }
        }
        case 'SELECT_BRAND': {
            return {
                ...state,
                selectedBrand: action.selectedBrand

            }
        }
        case 'SET_BRANDS': {
            return {
                ...state,
                brands: action.brands
            }
        }
        case 'SET_CLOTHES': {
            return {
                ...state,
                clothes: action.clothes
            }
        }
        default: return {
            ...state
        }
    }
}

export default clothesReducer;