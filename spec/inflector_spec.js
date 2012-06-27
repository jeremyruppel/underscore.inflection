describe( 'initial load', function( )
{
  it( 'should work already', function( )
  {
    expect( _.pluralize( 'word' )).toEqual( 'words' );
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
    it( 'should be defined', function( )
    {
      expect( _.gsub ).toBeDefined( );
    } );
    
    describe( 'with a regex', function( )
    {
      it( 'should replace one instance of the match', function( )
      {
        expect( _.gsub( 'word', /wo/, 'ne' ) ).toEqual( 'nerd' );
      } );
      
      it( 'should replace two instances of the match', function( )
      {
        expect( _.gsub( 'word word', /wo/, 'ne' ) ).toEqual( 'nerd nerd' );
      } );
      
      it( 'should return null if no match', function( )
      {
        expect( _.gsub( 'word', /zz/, 'ne' ) ).toBeNull( );
      } );
    } );
    
    describe( 'with a string', function( )
    {
      it( 'should replace one instance of the match', function( )
      {
        expect( _.gsub( 'word', 'wo', 'ne' ) ).toEqual( 'nerd' );
      } );
      
      it( 'should replace two instances of the match', function( )
      {
        expect( _.gsub( 'word word', 'wo', 'ne' ) ).toEqual( 'nerd nerd' );
      } );
      
      it( 'should return null if no match', function( )
      {
        expect( _.gsub( 'word', 'zz', 'ne' ) ).toBeNull( );
      } );
    } );
  } );
  
  describe( 'pluralize', function( )
  {
    it( 'should be defined', function( )
    {
      expect( _.pluralize ).toBeDefined( );
    } );
    
    it( 'should pluralize the given noun', function( )
    {
      expect( _.pluralize( 'post' ) ).toEqual( 'posts' );
    } );
    
    it( 'should return the same word if it cannot be pluralized', function( )
    {
      expect( _.pluralize( 'posts' ) ).toEqual( 'posts' );
    } );
    
    describe( 'with a number', function( )
    {
      it( 'should pluralize the word if not 1', function( )
      {
        expect( _.pluralize( 'post', 0 ) ).toEqual( 'posts' );
      } );
      
      it( 'should pluralize the word if non-1 float', function( )
      {
        expect( _.pluralize( 'post', 1.5 ) ).toEqual( 'posts' );
      } );
      
      it( 'should not pluralize the word if 1', function( )
      {
        expect( _.pluralize( 'post', 1 ) ).toEqual( 'post' );
      } );
      
      it( 'should singularize the word if 1', function( )
      {
        expect( _.pluralize( 'posts', 1 ) ).toEqual( 'post' );
      } );
      
      describe( 'and true', function( )
      {
        it( 'should include the word with the plural', function( )
        {
          expect( _.pluralize( 'post', 0, true ) ).toEqual( '0 posts' );
        } );
        
        it( 'should include the word with the singular', function( )
        {
          expect( _.pluralize( 'post', 1, true ) ).toEqual( '1 post' );
        } );
      } );
    } );
  } );
  
  describe( 'plural', function( )
  {
    it( 'should be defined', function( )
    {
      expect( _.plural ).toBeDefined( );
    } );
    
    it( 'should add a new pluralization rule by explict string', function( )
    {
      _.plural( 'axis', 'axes' );
      
      expect( _.pluralize( 'axis' ) ).toEqual( 'axes' );
    } );
    
    it( 'should add a new pluralization rule by regex', function( )
    {
      _.plural( /(ax)is$/i, '$1es' );
      
      expect( _.pluralize( 'axis' ) ).toEqual( 'axes' );
    } );
  } );
  
  describe( 'singularize', function( )
  {
    it( 'should be defined', function( )
    {
      expect( _.singularize ).toBeDefined( );
    } );
    
    it( 'should singularize the given noun', function( )
    {
      expect( _.singularize( 'posts' ) ).toEqual( 'post' );
    } );
    
    it( 'should return the same word if it cannot be singularized', function( )
    {
      expect( _.singularize( 'post' ) ).toEqual( 'post' );
    } );
  } );
  
  describe( 'singular', function( )
  {
    it( 'should be defined', function( )
    {
      expect( _.singular ).toBeDefined( );
    } );
    
    it( 'should add a new singularization rule by explicit string', function( )
    {
      _.singular( 'data', 'datum' );
      
      expect( _.singularize( 'data' ) ).toEqual( 'datum' );
    } );
    
    it( 'should add a new singularization rule by regex', function( )
    {
      _.singular( /(t)a$/i, '$1um' );
      
      expect( _.singularize( 'data' ) ).toEqual( 'datum' );
    } );
  } );
  
  describe( 'irregular', function( )
  {
    it( 'should be defined', function( )
    {
      expect( _.irregular ).toBeDefined( );
    } );
    
    it( 'should add a rule to pluralize the special case', function( )
    {
      _.irregular( 'haxor', 'hax0rs!' );
      
      expect( _.pluralize( 'haxor' ) ).toEqual( 'hax0rs!' );
    } );
    
    it( 'should add a rule to singularize the special case', function( )
    {
      _.irregular( 'hax0r!', 'haxors' );
      
      expect( _.singularize( 'haxors' ) ).toEqual( 'hax0r!' );
    } );
  } );
  
  describe( 'uncountable', function( )
  {
    it( 'should be defined', function( )
    {
      expect( _.uncountable ).toBeDefined( );
    } );
    
    it( 'should note the word as a special case in pluralization', function( )
    {
      _.uncountable( 'asdf' );
      
      expect( _.pluralize( 'asdf' ) ).toEqual( 'asdf' );
    } );
    
    it( 'should note the word as a special case in singularization', function( )
    {
      _.uncountable( 'asdf' );
      
      expect( _.singularize( 'asdf' ) ).toEqual( 'asdf' );
    } );
  } );
  
  describe( 'resetInflections', function( )
  {
    it( 'should be defined', function( )
    {
      expect( _.resetInflections ).toBeDefined( );
    } );
    
    it( 'should reset the default inflections', function( )
    {
      _.plural( 'haxor', 'hax0rs!' );
      
      expect( _.pluralize( 'haxor' ) ).toEqual( 'hax0rs!' );
      
      _.resetInflections( );
      
      expect( _.pluralize( 'haxor' ) ).toEqual( 'haxors' );
    } );
  } );
  
  describe( 'default inflections', function( )
  {
    it( 'should pluralize a whole bunch of default words out of the box', function( )
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
        expect( _.pluralize( word[ 0 ] ) ).toEqual( word[ 1 ] );
      } );
    } );
    
    it( 'should singularize a whole bunch of words out of the box', function( )
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
        expect( _.singularize( word[ 0 ] ) ).toEqual( word[ 1 ] );
      } );
    } );
    
    it( 'should come with a whole bunch of irregulars defined out of the box', function( )
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
        expect( _.pluralize( word[ 0 ] ) ).toEqual( word[ 1 ] );
        
        expect( _.singularize( word[ 1 ] ) ).toEqual( word[ 0 ] );
      } );
    } );
    
    it( 'should come with a whole bunch of uncountable words out of the box', function( )
    {
      var words = 'equipment information rice money species series fish sheep jeans'.split( /\s+/ );
      
      _( words ).each( function( word )
      {
        expect( _.pluralize( word ) ).toEqual( word );
        
        expect( _.singularize( word ) ).toEqual( word );
      } );
    } );
  } );
  
} );
