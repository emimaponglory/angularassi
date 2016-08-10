var app1=angular.module("app1",[]).filter('datafilter',function(){
      return function(inp,s,e){
        return inp.slice(s,e);

      }
  });

app1.controller('main',function($scope){

		$scope.crime=[
			  {"Year":"1985","Over":32871,"Under":61777},
  			{"Year":"1986","Over":27842,"Under":47493},
  			{"Year":"1987","Over":20654,"Under":37023},
  			{"Year":"1988","Over":19291,"Under":35872},
  			{"Year":"1989","Over":18849,"Under":27920},
  			{"Year":"1990","Over":20724,"Under":27182},
  			{"Year":"1991","Over":22118,"Under":25238},
  			{"Year":"1992","Over":24141,"Under":25396},
  			{"Year":"1993","Over":21502,"Under":24216},
  			{"Year":"1994","Over":21851,"Under":24632},
  			{"Year":"1995","Over":15668,"Under":28993},
  			{"Year":"1996","Over":15978,"Under":29526},
  			{"Year":"1997","Over":15615,"Under":27898},
  			{"Year":"1998","Over":14954,"Under":28841},
  			{"Year":"1999","Over":12651,"Under":24629},
  			{"Year":"2000","Over":35633,"Under":60474},
			  {"Year":"2001","Over":32871,"Under":61777},
  			{"Year":"2002","Over":27842,"Under":47493},
  			{"Year":"2003","Over":20654,"Under":37023},
  			{"Year":"2004","Over":19291,"Under":35872},
  			{"Year":"2005","Over":18849,"Under":27920},
  			{"Year":"2006","Over":20724,"Under":27182},
  			{"Year":"2007","Over":22118,"Under":25238},
  			{"Year":"2008","Over":24141,"Under":25396},
  			{"Year":"2009","Over":21502,"Under":24216},
  			{"Year":"2010","Over":21851,"Under":24632},
  			{"Year":"2011","Over":15668,"Under":28993},
  			{"Year":"2012","Over":15978,"Under":29526},
  			{"Year":"2013","Over":15615,"Under":27898},
  			{"Year":"2014","Over":14954,"Under":28841},
  			{"Year":"2015","Over":12651,"Under":24629},
  			{"Year":"2016","Over":3563,"Under":6047}
  		];

    $scope.selectedyear='';
		$scope.year=[];
		$scope.s=0;
    $scope.e=$scope.s+3;
    for(var i=0;i<$scope.crime.length;i++){
			$scope.year.push($scope.crime[i].Year);
		}
    $scope.temp=[];
    $scope.temp=$scope.crime;

    $scope.pick=function(value,filtervalue){
      $scope.temp=[];

      for( var i = 0; i < $scope.crime.length; i++ ) {

          if(filtervalue === "Over500") {
            if (value < $scope.crime[i].Over) {
              $scope.temp.push($scope.crime[i]);
            }
          }
          else if(filtervalue === "Under500") {
            if ( value < $scope.crime[i].Under) {
              $scope.temp.push($scope.crime[i]);
            }
          }
      }
    }

    $scope.pickd=function(year){
      $scope.temp=[];

      for( var i = 0; i < $scope.crime.length; i++ ) {
          if( $scope.crime[i].Year === year ) {
              $scope.temp.push($scope.crime[i]);
          }
      }
    }

    $scope.pagination=[];
    for(var i=0;i<($scope.year.length)/3;i++){
      $scope.pagination.push(i+1);
    }

    $scope.dis=false;
    $scope.select=function(no){
        $scope.s=(no-1)*3;
        $scope.e=($scope.s)+3;
        $scope.dis=false;
    }

   $scope.sortColumn = "year";
   $scope.reverseSort = false;

   $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ?
               !$scope.reverseSort : false;
               $scope.sortColumn = column;
   }

   $scope.edit=function(x){
     $scope.$broadcast("event",x);
   }

   $scope.remove = function(year){
    var index = -1;
    for( var i = 0; i < $scope.crime.length; i++ ) {
      if( $scope.crime[i].Year === year ) {
        index = i;
        break;
      }
    }
    if( index === -1 ) {
      alert( "wrong" );
    }
    $scope.crime.splice( index, 1 );
   };

  $scope.$on("event1",function(evt,x,y,z,arg){
    for( var i = 0; i < $scope.crime.length; i++ ) {
      if( $scope.crime[i].Year === x ) {
          $scope.crime[i].Over=y;
          $scope.crime[i].Under=z;
      }
    }
  });
});

app1.controller('update',function($scope){

  $scope.show=false;
  $scope.$on("event",function(evt,arg){
    $scope.show=true;
    $scope.selectedyear=arg.Year;
    $scope.Over=arg.Over;
    $scope.Under=arg.Under;
  });

  $scope.edited=function(x,y,z){
     $scope.$emit("event1",x,y,z);
   }
});
app1.directive('directive1',function(){
  return{
    templateUrl:'first.html'
  };
});
app1.directive('directive2',function(){
  return{
    templateUrl:'second.html'
  };
});
app1.directive('directive3',function(){
  return{
    templateUrl:'third.html'
  };
});
