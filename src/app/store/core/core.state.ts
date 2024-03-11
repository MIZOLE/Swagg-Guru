import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { trackNav, getNav } from './core.actions';
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

    name: string | undefined;
//Maping actions to a reducer AddName
@Action(trackNav)
AddName(ctx: StateContext<CoreState>, action: trackNav) {
    
    ctx.patchState({
        name: action.name
    });
}
//Get the name value
    @Action(getNav)
    GetName(ctx: StateContext<CoreState>) {
        const state = ctx.getState();
        console.log("state: ",state);
    }
}