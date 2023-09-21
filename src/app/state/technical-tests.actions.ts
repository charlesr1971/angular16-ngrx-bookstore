/*

OLD PARADIGM:

import { Action } from '@ngrx/store';
import { TechnicalTest } from '../app.model';

export const ADD_TECHNICAL_TEST = '[Technical Tests] Add Technical Test';
export const REMOVE_TECHNICAL_TEST = '[Technical Tests] Remove Technical Test';
export const RETRIEVED_TECHNICAL_TEST_LIST = '[Technical Tests API] Retrieved Technical Test List';

export class AddTechnicalTest implements Action {
  readonly type = ADD_TECHNICAL_TEST;
  constructor(public payload: { technicalTestId: string }) {}
}

export class RemoveTechnicalTest implements Action {
  readonly type = REMOVE_TECHNICAL_TEST;
  constructor(public payload: { technicalTestId: string }) {}
}

export class RetrievedTechnicalTestList implements Action {
  readonly type = RETRIEVED_TECHNICAL_TEST_LIST;
  constructor(public payload: { technicalTests: ReadonlyArray<TechnicalTest> }) {}
}

export type TechnicalTestsActions = AddTechnicalTest | RemoveTechnicalTest;
export type TechnicalTestsApiActions = RetrievedTechnicalTestList; */

import { createAction, props} from '@ngrx/store';
import { TechnicalTest } from '../app.model';

export const ADD_TECHNICAL_TEST = '[Technical Tests] Add Technical Test';
export const REMOVE_TECHNICAL_TEST = '[Technical Tests] Remove Technical Test';
export const RETRIEVED_TECHNICAL_TEST_LIST = '[Technical Tests API] Retrieved Technical Test List';

export const AddTechnicalTest = createAction(ADD_TECHNICAL_TEST, props<{ technicalTestId: string }>());
export const RemoveTechnicalTest = createAction(REMOVE_TECHNICAL_TEST, props<{ technicalTestId: string }>());
export const RetrievedTechnicalTestList = createAction(RETRIEVED_TECHNICAL_TEST_LIST, props<{ technicalTests: ReadonlyArray<TechnicalTest> }>());
