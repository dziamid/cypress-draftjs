
describe('React RTE', function(){

  it('should be possible to type in editor', function(){

    cy
        .visit('https://react-rte.org/demo')
        .get('[contenteditable]').eq(0).type('I am typing')
  })

})
