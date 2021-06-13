import calculatorReducers from '../reducers/calculatorReducers'

describe('Calculator Reducers',() => {

    it('adds correctly', () => {
        let state = {
            output: 100
        };
        let action = {type:"ADD_INPUTS", output: 500};
        state = calculatorReducers(state, action);
        expect (state.output).toEqual(500);
    });

    it('delete correctly', () => {
        let state = {
            output:100
        };
        state = calculatorReducers(state,{type:"SUBTRACT_INPUTS", output:50});
        //Créer le expect
    });

});
