describe( 'initial load', function( )
{
  it( 'works out of the box', function( )
  {
    expect( _.pluralize( 'word' )).to.equal( 'words' );
  } );
} );

describe( 'underscore.inflector', function( )
{
  beforeEach( function( )
  {
    _.resetInflections( );
  } );

  describe( 'gsub', function( )
  {
    describe( 'with a regex', function( )
    {
      it( 'replaces one instance of the match', function( )
      {
        expect( _.gsub( 'word', /wo/, 'ne' ) ).to.equal( 'nerd' );
      } );

      it( 'replaces two instances of the match', function( )
      {
        expect( _.gsub( 'word word', /wo/, 'ne' ) ).to.equal( 'nerd nerd' );
      } );

      it( 'returns null if no match', function( )
      {
        expect( _.gsub( 'word', /zz/, 'ne' ) ).to.be.null;
      } );
    } );

    describe( 'with a string', function( )
    {
      it( 'replaces one instance of the match', function( )
      {
        expect( _.gsub( 'word', 'wo', 'ne' ) ).to.equal( 'nerd' );
      } );

      it( 'replaces two instances of the match', function( )
      {
        expect( _.gsub( 'word word', 'wo', 'ne' ) ).to.equal( 'nerd nerd' );
      } );

      it( 'returns null if no match', function( )
      {
        expect( _.gsub( 'word', 'zz', 'ne' ) ).to.be.null;
      } );
    } );
  } );

  describe( 'pluralize', function( )
  {
    it( 'pluralizes the given noun', function( )
    {
      expect( _.pluralize( 'post' ) ).to.equal( 'posts' );
    } );

    it( 'returns the same word if it cannot be pluralized', function( )
    {
      expect( _.pluralize( 'posts' ) ).to.equal( 'posts' );
    } );

    describe( 'with a number', function( )
    {
      it( 'pluralizes the word if not 1', function( )
      {
        expect( _.pluralize( 'post', 0 ) ).to.equal( 'posts' );
      } );

      it( 'pluralizes the word if not "1"', function( )
      {
        expect( _.pluralize( 'post', '0' ) ).to.equal( 'posts' );
      } );

      it( 'pluralizes the word if non-1 float', function( )
      {
        expect( _.pluralize( 'post', 1.5 ) ).to.equal( 'posts' );
      } );

      it( 'singularizes the word if 1', function( )
      {
        expect( _.pluralize( 'posts', 1 ) ).to.equal( 'post' );
      } );

      it( 'singularizes the word if "1"', function( )
      {
        expect( _.pluralize( 'posts', '1' ) ).to.equal( 'post' );
      } );

      describe( 'and true', function( )
      {
        it( 'includes the word with the plural', function( )
        {
          expect( _.pluralize( 'post', 0, true ) ).to.equal( '0 posts' );
        } );

        it( 'includes the word with non-1 float', function( )
        {
          expect( _.pluralize( 'post', '1.3', true ) ).to.equal( '1.3 posts' );
        } );

        it( 'includes the word with the singular', function( )
        {
          expect( _.pluralize( 'post', 1, true ) ).to.equal( '1 post' );
        } );
      } );
    } );
  } );

  describe( 'plural', function( )
  {
    it( 'adds a new pluralization rule by explict string', function( )
    {
      _.plural( 'axis', 'axes' );

      expect( _.pluralize( 'axis' ) ).to.equal( 'axes' );
    } );

    it( 'adds a new pluralization rule by regex', function( )
    {
      _.plural( /(ax)is$/i, '$1es' );

      expect( _.pluralize( 'axis' ) ).to.equal( 'axes' );
    } );
  } );

  describe( 'singularize', function( )
  {
    it( 'singularizes the given noun', function( )
    {
      expect( _.singularize( 'posts' ) ).to.equal( 'post' );
    } );

    it( 'returns the same word if it cannot be singularized', function( )
    {
      expect( _.singularize( 'post' ) ).to.equal( 'post' );
    } );

    it( 'singularizes a word that contains an irregular', function( )
    {
      expect( _.singularize( 'comments' ) ).to.equal( 'comment' );
    } );
  } );

  describe( 'singular', function( )
  {
    it( 'adds a new singularization rule by explicit string', function( )
    {
      _.singular( 'data', 'datum' );

      expect( _.singularize( 'data' ) ).to.equal( 'datum' );
    } );

    it( 'adds a new singularization rule by regex', function( )
    {
      _.singular( /(t)a$/i, '$1um' );

      expect( _.singularize( 'data' ) ).to.equal( 'datum' );
    } );
  } );

  describe( 'irregular', function( )
  {
    it( 'adds a rule to pluralize the special case', function( )
    {
      _.irregular( 'haxor', 'hax0rs!' );

      expect( _.pluralize( 'haxor' ) ).to.equal( 'hax0rs!' );
    } );

    it( 'adds a rule to singularize the special case', function( )
    {
      _.irregular( 'hax0r!', 'haxors' );

      expect( _.singularize( 'haxors' ) ).to.equal( 'hax0r!' );
    } );
  } );

  describe( 'uncountable', function( )
  {
    it( 'notes the word as a special case in pluralization', function( )
    {
      _.uncountable( 'asdf' );

      expect( _.pluralize( 'asdf' ) ).to.equal( 'asdf' );
    } );

    it( 'notes the word as a special case in singularization', function( )
    {
      _.uncountable( 'asdf' );

      expect( _.singularize( 'asdf' ) ).to.equal( 'asdf' );
    } );
  } );

  describe( 'ordinalize', function( )
  {
    it( 'returns a stirng that is not a number or string', function( ) {
      expect( _.ordinalize( 'hello' ) ).to.equal( 'hello' );
    } );

    it( 'ordinalizes a number', function( ) {
      expect( _.ordinalize( 4 ) ).to.equal( '4th' );
    } );

    it( 'ordinalizes a number string', function( ) {
      expect( _.ordinalize( '4' ) ).to.equal( '4th' );
    } );

    it( 'ordinalizes 0 to "0th"', function( ) {
      expect( _.ordinalize( 0 ) ).to.equal( '0th' );
    } );

    it( 'ordinalizes 1 to "1st"', function( ) {
      expect( _.ordinalize( 1 ) ).to.equal( '1st' );
    } );

    it( 'ordinalizes 2 to "2nd', function( ) {
      expect( _.ordinalize( 2 ) ).to.equal( '2nd' );
    } );

    it( 'ordinalizes 3 to "3rd"', function( ) {
      expect( _.ordinalize( 3 ) ).to.equal( '3rd' );
    } );

    it( 'ordinalizes 11 to "11th"', function( ) {
      expect( _.ordinalize( 11 ) ).to.equal( '11th' );
    });

    it( 'ordinalizes 12 to "12th"', function( ) {
      expect( _.ordinalize( 12 ) ).to.equal( '12th' );
    } );

    it( 'ordinalizes 13 to "13th"', function( ) {
      expect( _.ordinalize( 13 ) ).to.equal( '13th' );
    } );

    it( 'ordinalizes 1003 to "1003rd"', function( ) {
      expect( _.ordinalize( 1003 ) ).to.equal( '1003rd' );
    } );

    it( 'ordinalizes -11 to "-11th', function( ) {
      expect( _.ordinalize( -11 ) ).to.equal( '-11th' );
    } );

    it( 'ordinalizes -11 to "-11th', function( ) {
      expect( _.ordinalize( -1021 ) ).to.equal( '-1021st' );
    } );
  } );

  describe( 'titleize', function( ) {

    it( 'returns non-strings', function( ) {
      expect( _.titleize(5) ).to.equal(5);
    } );

    it( 'returns the empty string when provided with the empty string', function( ) {
      expect( _.titleize('') ).to.equal('');
    } );

    it( 'titleizes a word', function( ) {
      expect( _.titleize( 'banana' ) ).to.equal( 'Banana' );
    } );

    it( 'titleizes multiple words', function( ) {
      expect( _.titleize( 'banana potato fork' ) ).to.equal( 'Banana Potato Fork' );
    } );

    it( 'does not change the whitespace', function( ) {
      expect( _.titleize( '\tbanana\npotato  fork\r\n' ) ).to.equal( '\tBanana\nPotato  Fork\r\n' );
    } );

    it( 'does not alter words that begin with non-alphabetic characters', function( ) {
      expect( _.titleize( '123banana' ) ).to.equal( '123banana' );
    } );
  } );

  describe( 'resetInflections', function( )
  {
    it( 'resets the default inflections', function( )
    {
      _.plural( 'haxor', 'hax0rs!' );

      expect( _.pluralize( 'haxor' ) ).to.equal( 'hax0rs!' );

      _.resetInflections( );

      expect( _.pluralize( 'haxor' ) ).to.equal( 'haxors' );
    } );
  } );

  describe( 'default inflections', function( )
  {
    it( 'has pluralization rules', function( )
    {
      var words = [
        [ 'rose',      'roses'       ],
        [ 'axis',      'axes'        ],
        [ 'virus',     'viri'        ],
        [ 'alias',     'aliases'     ],
        [ 'bus',       'buses'       ],
        [ 'tomato',    'tomatoes'    ],
        [ 'datum',     'data'        ],
        [ 'analysis',  'analyses'    ],
        [ 'life',      'lives'       ],
        [ 'leaf',      'leaves'      ],
        [ 'loaf',      'loaves'      ],
        [ 'thief',     'thieves'     ],
        [ 'hive',      'hives'       ],
        [ 'soliloquy', 'soliloquies' ],
        [ 'wish',      'wishes'      ],
        [ 'vertex',    'vertices'    ],
        [ 'mouse',     'mice'        ],
        [ 'ox',        'oxen'        ],
        [ 'quiz',      'quizzes'     ]
      ];

      _( words ).each( function( word )
      {
        expect( _.pluralize( word[ 0 ] ) ).to.equal( word[ 1 ] );
      } );
    } );

    it( 'has singularization rules', function( )
    {
      var words = [
        [ 'roses',       'rose'      ],
        [ 'news',        'news'      ],
        [ 'data',        'datum'     ],
        [ 'analyses',    'analysis'  ],
        [ 'hives',       'hive'      ],
        [ 'soliloquies', 'soliloquy' ],
        [ 'series',      'series'    ],
        [ 'movies',      'movie'     ],
        [ 'wishes',      'wish'      ],
        [ 'mice',        'mouse'     ],
        [ 'buses',       'bus'       ],
        [ 'shoes',       'shoe'      ],
        [ 'crises',      'crisis'    ],
        [ 'viri',        'virus'     ],
        [ 'statuses',    'status'    ],
        [ 'oxen',        'ox'        ],
        [ 'vertices',    'vertex'    ],
        [ 'quizzes',     'quiz'      ],
        [ 'databases',   'database'  ]
      ];

      _( words ).each( function( word )
      {
        expect( _.singularize( word[ 0 ] ) ).to.equal( word[ 1 ] );
      } );
    } );

    it( 'has irregular rules', function( )
    {
      var words = [
        [ 'person', 'people'   ],
        [ 'man',    'men'      ],
        [ 'child',  'children' ],
        [ 'sex',    'sexes'    ],
        [ 'move',   'moves'    ],
        [ 'cow',    'kine'     ]
      ];

      _( words ).each( function( word )
      {
        expect( _.pluralize( word[ 0 ] ) ).to.equal( word[ 1 ] );

        expect( _.singularize( word[ 1 ] ) ).to.equal( word[ 0 ] );
      } );
    } );

    it( 'has uncountable rules', function( )
    {
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

      _( words ).each( function( word )
      {
        expect( _.pluralize( word ) ).to.equal( word );

        expect( _.singularize( word ) ).to.equal( word );
      } );
    } );
  } );

} );
