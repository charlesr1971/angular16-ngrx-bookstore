import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { technicalTestsReducer } from './state/technical-tests.reducer';
import { collectionReducer } from './state/collection.reducer';
import { TechnicalTestsEffects } from './state/technical-tests.effects';

import { TechnicalTestListComponent } from './technical-test-list/technical-test-list.component';
import { TechnicalTestCollectionComponent } from './technical-test-collection/technical-test-collection.component';
import { AppComponent } from './app.component';
import { TECHNICAL_TESTS_FEATURE, COLLECTION_FEATURE } from './state/technical-tests.selectors';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(TECHNICAL_TESTS_FEATURE, technicalTestsReducer),
    StoreModule.forFeature(COLLECTION_FEATURE, collectionReducer),
    HttpClientModule,
    EffectsModule.forRoot([TechnicalTestsEffects]),
  ],
  declarations: [AppComponent, TechnicalTestListComponent, TechnicalTestCollectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
