import { getAddTodoButton, getTodos } from '../support/app.po';

describe('TodoApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should(t => expect(t.length).greaterThan(1));
    getAddTodoButton().click();
    getTodos().should(t => expect(t.length).greaterThan(2));
  });
});