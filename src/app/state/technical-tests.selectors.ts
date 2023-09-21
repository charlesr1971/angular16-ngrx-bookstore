import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TechnicalTest } from '../app.model';

export const TECHNICAL_TESTS_FEATURE = 'technicalTests';
export const COLLECTION_FEATURE = 'collection';

export const selectTechnicalTests =
  createFeatureSelector<ReadonlyArray<TechnicalTest>>(TECHNICAL_TESTS_FEATURE);

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>(COLLECTION_FEATURE);

export const selectTechnicalTestCollection = createSelector(
  selectTechnicalTests,
  selectCollectionState,
  (technicalTests, collection) => {
    return collection.map((id) => technicalTests.find((technicalTest) => technicalTest.id === id)!);
  }
);
