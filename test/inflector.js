describe('inflector', function() {
  it('works out of the box', function() {
    expect(_.pluralize('word')).to.equal('words');
  });
  describe('#resetInflections', function() {
    it('resets the default inflections', function() {
      _.plural('haxor', 'hax0rs!');
      expect(_.pluralize('haxor')).to.equal('hax0rs!');
      _.resetInflections();
      expect(_.pluralize('haxor')).to.equal('haxors');
    });
  });
  describe('default inflections', function() {
    it('has pluralization rules', function() {
      var words = [
        ['rose', 'roses'],
        ['axis', 'axes'],
        ['virus', 'viri'],
        ['alias', 'aliases'],
        ['bus', 'buses'],
        ['tomato', 'tomatoes'],
        ['datum', 'data'],
        ['analysis', 'analyses'],
        ['life', 'lives'],
        ['leaf', 'leaves'],
        ['loaf', 'loaves'],
        ['thief', 'thieves'],
        ['hive', 'hives'],
        ['soliloquy', 'soliloquies'],
        ['wish', 'wishes'],
        ['vertex', 'vertices'],
        ['mouse', 'mice'],
        ['ox', 'oxen'],
        ['quiz', 'quizzes']
      ];
      _(words).each(function(word) {
        expect(_.pluralize(word[0])).to.equal(word[1]);
      });
    });
    it('has singularization rules', function() {
      var words = [
        ['roses', 'rose'],
        ['news', 'news'],
        ['data', 'datum'],
        ['analyses', 'analysis'],
        ['hives', 'hive'],
        ['soliloquies', 'soliloquy'],
        ['series', 'series'],
        ['movies', 'movie'],
        ['wishes', 'wish'],
        ['mice', 'mouse'],
        ['buses', 'bus'],
        ['shoes', 'shoe'],
        ['crises', 'crisis'],
        ['viri', 'virus'],
        ['statuses', 'status'],
        ['oxen', 'ox'],
        ['vertices', 'vertex'],
        ['quizzes', 'quiz'],
        ['databases', 'database']
      ];
      _(words).each(function(word) {
        expect(_.singularize(word[0])).to.equal(word[1]);
      });
    });
    it('has irregular rules', function() {
      var words = [
        ['person', 'people'],
        ['man', 'men'],
        ['child', 'children'],
        ['sex', 'sexes'],
        ['move', 'moves'],
        ['cow', 'kine']
      ];
      _(words).each(function(word) {
        expect(_.pluralize(word[0])).to.equal(word[1]);
        expect(_.singularize(word[1])).to.equal(word[0]);
      });
    });
    it('has uncountable rules', function() {
      var words = [
        'equipment',
        'information',
        'rice',
        'money',
        'species',
        'series',
        'fish',
        'sheep',
        'jeans'
      ];
      _(words).each(function(word) {
        expect(_.pluralize(word)).to.equal(word);
        expect(_.singularize(word)).to.equal(word);
      });
    });
  });
});
