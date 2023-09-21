import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { technicalTestsReducer } from './state/technical-tests.reducer';
import { collectionReducer } from './state/collection.reducer';
import { TechnicalTestsEffects } from './state/technical-tests.effects';
import { TechnicalTestListComponent } from './technical-test-list/technical-test-list.component';
import { TechnicalTestCollectionComponent } from './technical-test-collection/technical-test-collection.component';
import { TECHNICAL_TESTS_FEATURE, COLLECTION_FEATURE } from './state/technical-tests.selectors';

import { TechnicalTestRoutingModule } from './technical-test-routing.module';


@NgModule({
  declarations: [TechnicalTestListComponent, TechnicalTestCollectionComponent],
  imports: [
    CommonModule,
    TechnicalTestRoutingModule,
    StoreModule.forFeature(TECHNICAL_TESTS_FEATURE, technicalTestsReducer),
    StoreModule.forFeature(COLLECTION_FEATURE, collectionReducer),
    EffectsModule.forFeature([TechnicalTestsEffects]),
  ],
  exports: [TechnicalTestListComponent, TechnicalTestCollectionComponent],
})
export class TechnicalTestModule { }
