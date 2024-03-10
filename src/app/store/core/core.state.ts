import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddName, GetName } from './core.actions';
import { patch } from '@ngxs/store/operators';

//define the interface
export interface CoreStateModel {
    name: string
}

//Utilizing the interface
@State<CoreStateModel>({
  name: 'Core',
  defaults: {
    name: ''
  }
})
@Injectable({
    providedIn: 'root',
})


export class CoreState {
//Maping actions to a reducer AddName
    @Action(AddName)
    AddName(ctx: StateContext<CoreState>, action: AddName) {
        const state = ctx.getState();
        // ctx.setState(
        //     state,
        //     name: action.name
        // );
        ctx.patchState({
            name: action.name
        } as Partial<CoreState>);
    }
//Get the name value
    @Action(GetName)
    GetName(ctx: StateContext<CoreState>) {
        const state = ctx.getState();
        console.log("state: ",state);
    }
}