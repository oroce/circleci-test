var foo = require('./index');
describe('foo', function() {
  it('should include name', function() {
    foo('bar').should.eql('Hello bar!');
  });

  it('should not print undefined', function() {
    foo().should.eql('Hello !');
  });
});
