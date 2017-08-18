
describe('React RTE', function(){

  it('i cannot simply type', function () {

    cy
        .visit('https://react-rte.org/demo')
        .get('[contenteditable]').eq(0).type('I am typing')
        .get('textarea').eq(0).contains('I am typing')
  });


})
