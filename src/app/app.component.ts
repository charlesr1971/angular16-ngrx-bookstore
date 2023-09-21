import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectTechnicalTestCollection, selectTechnicalTests } from './state/technical-tests.selectors';
import { AddTechnicalTest, RemoveTechnicalTest, RetrievedTechnicalTestList } from './state/technical-tests.actions';
import { GoogleTechnicalTestsService } from './technical-test-list/technical-tests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Classical Music';

  technicalTests$ = this.store.select(selectTechnicalTests);
  technicalTestCollection$ = this.store.select(selectTechnicalTestCollection);

  onAdd(technicalTestId: string) {
    /* 
    
    OLD PARADIGM:

    this.store.dispatch(new AddTechnicalTest({ technicalTestId }));
    */
    this.store.dispatch(AddTechnicalTest({ technicalTestId }));
  }

  onRemove(technicalTestId: string) {
    /* 
    
    OLD PARADIGM:

    this.store.dispatch(new RemoveTechnicalTest({ technicalTestId }));
    */
    this.store.dispatch(RemoveTechnicalTest({ technicalTestId }));
  }

  constructor(private technicalTestsService: GoogleTechnicalTestsService, private store: Store) {
    console.log('AppComponent: constructor()');
  }

  ngOnInit() {
    console.log('AppComponent: ngOnInit()');
    this.technicalTestsService
      .getTechnicalTests(this.title)
      .subscribe((technicalTests) => {
        /* 

        OLD PARADIGM:

        return this.store.dispatch(new RetrievedTechnicalTestList({ technicalTests }));
        */
        return this.store.dispatch(RetrievedTechnicalTestList({ technicalTests }));
      }
    );
  }
}
