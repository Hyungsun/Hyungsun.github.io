# FASTCAMPUS JAVASCRIPT 첫걸음 캠프

## 1. 자바스크립트의 형태
- 참고형 : 값이 복사되지않아 주소를 알려주는 타입.
- 원시형 : 값이 복사되는 형태 (숫자, 문자, 참or거짓, NULL, UNDEFINDE)
- 객체형 : {} 안에 있는 이름과 값의 쌍을 무수히 가지는 형태, 대입문과 비슷하다.
<pre>ex : var o = { name : '...', age : '...'}

값이 참조되는 형태이기에 참조형 (그룹핑)의 느낌을 준다. 분류나 그룹으로 묶어 쓰는것이 용이한 형태.</pre>


## 2. DOT 표기법
>객체형에서 해당 변수를 가져올 때 '객체명.요소' 또는 '객체명[ID]'를 가져온다.
<pre>
ex : console.log(member.name);
     console.log(member[id]);
</pre>

**주석**
* // => 한줄 주석으로 코드의 한부분만을 주석처리한다.
* /* ~ */ => 멀티 주석으로 여러줄의 코드를 주석처리할때 시작점과 끝점에 입력한다.

## 3. 목록화 (배열)
> 하나의 변수에 여러 데이터를 보관, 유지할 수 있는 형태.

<pre>
ex : var todos = [1, 2, 'abc', 'ccc'];
배열은 순서대로 0번부터 시작하여

1 = 0번째
2 = 1번째
'abc' = 2번째
'ccc' = 3번째 배열 순서를 가지게 된다.

따라서, todos(2) = 'abc'가 된다.
</pre>

## 4. 연산자
> 이항 연산자와 단항연산자, 조건연산자인 단 하나 존재하는 삼항 연산자를 가지고 있다.

<pre>
  + (덧셈), - (뺄셈), * (곱셈), / (나눗셈), % (나눈 후 나머지 값)

  ex : 3 * 4 = 12,
       4 - 1 = 1,
       5 * 5 = 25,
       2 / 4 = 0.5,
       2 % 4 = 2
</pre>
---
* 대입 연산자 :

  대입 연산자 는 오른쪽 피연산자의 값을 왼쪽 피연산자에 대입한다. 기본적인 대입 연산자는 오른쪽의 피연산자 값을 왼쪽 피연산자 값에 대입하는 등호(=) 이다. x = y 는  y의 값을 x에 할당한다.

* 증감 연산자 :

  x++ / x-- 와 같이 연산자를 연속으로 입력하여 1씩 증가시킨다.
  TIP : 증가량을 늘리고 싶을 땐 'x += 3' 과 같이 입력하면 된다.

* 그 외의 연산자 참고 주소

  - [MDN web docs 표현과 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## 5. 형 변환
> 문자타입을 숫자로 또는, 숫자타입을 문자로 변형 할 때 사용 되는 형 변환으로 숫자만 뽑아내거나 숫자와 문자가 결합되어있는 요소를 변환할 때 사용된다.

 - [필린의 Tstory 자료의 형변환](http://fillin.tistory.com/86)


> 참고 : 자바스크립트 내에서 OO문(if, for, while 등)은 세미콜론(;)이 없지만 ~식에는 ;가 있어야한다.


## 6. 조건문
> 조건문의 종류는 if, else if, switch가 있으며 상황에 맞게 선택하여 조건문을 작성하면된다.
> 여담으로 조건은 간결하게 간소화 하는것이 좋다 => 확정버그가 생길 우려는 방지하기위함.
- 조건문의 연산자는 4. 연산자 part에서 알 수 있다.

<pre>
 - 축약비교
   ex : var 변수명 = 조건( age > 30 ) ? 참( "노인" ), 거짓( "노인이 아닙니다." ) 순으로 작성
</pre>

## 7. 반복문
> 조건에 맞추어 반복하는 식을 만들 때 사용하며 반복문에는 반드시 조건이 변하게 하여 끝을 낼 수 있게 해주어야 한다.

 - for 문 :
  어떠한 특정 조건이 거짓으로 판별될 때까지 반복한다.

  <pre>
    ex : for([초기문]; [조건문]; [증감문]);

    TEST : for (var i = 0; i < optionCount.lenght; i++ ){ }
  </pre>

  * 실행 순서
  1. 초기화 구문인 초기문이 존재한다면 초기문이 실행됩니다. 이 표현은 보통 1이나 반복문 카운터로 초기 설정이 됩니다. 그러나 복잡한 구문으로 표현 될 때도 있습니다. 또한 변수로 선언 되기도 합니다.
  2. 조건문은 조건을 검사합니다. 만약 조건문이 참이라면, 그 반복문은 실행됩니다. 만약 조건문이 거짓이라면, 그 for문은 종결됩니다. 만약 그 조건문이 생략된다면, 그 조건문은 참으로 추정됩니다.
  3. 문장이 실행됩니다. 많은 문장을 실행할 경우엔, { } 를 써서 문장들을 묶어 줍니다.
  4. 갱신 구문인 증감문이 존재한다면 실행되고 2번째 단계로 돌아갑니다.
---
 - do ... while 문 :

    조건이 거짓으로 판별날 때까지 계속 반복한다.
    <pre>
      ex : do 문장 while(조건);

      TEST : do { i += 1; console.log(i); } while (i < 5);
    </pre>
---
  - 그외의 조건 / 반복문

    - [if 문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)

    - [switch 문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch)

    - [for문 및 각종 문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration)

## 8. 함수
>함수는 JavaScript에서 기본적인 빌딩 블록 중의 하나입니다. 함수는 작업을 수행하거나 값을 계산하는 문장 집합 같은 자바스크립트 절차입니다. 함수를 사용하려면 함수를 호출하고자 하는 범위 내에서 함수를 정의해야만 합니다.

  * fucntion 으로 호출하며 이름을 가질 수 있다. 즉 function myFunc() { } 식으로 작성할 수 있다.

  <pre>
    ex : function countUp (a) {
          retrun a + 1 ;
        }

        countUp(2) = 3
  </pre>

>위 함수의 선언은 문장 구성을 통한 표현이지만, 함수 표현에 의해서 함수가 만들어 질 수도 있습니다. 이 같은 함수를 **익명**이라고 합니다. 이 말은 모든 함수가 이름을 가질 필요는 없다는 것을 뜻합니다.

  * 변수를 선언하여 그안에 함수를 입력함으로써 함수의 기능을 담고있는 변수가 생성된다.
  <pre>
    ex : var doubleNum = function(a) { return a * a };

    doubleNum(4) = 16;
  </pre>

  > 함수 내에서는 변수를 선언 할 수 있을 뿐만아니라 조건도 정의할 수 있다.
  - [참고사이트 - MDN 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98)

  <pre>
    함수의 4가지 형태
    1. 함수문
    2. 함수표현식
    3. 이름없는 함수
    이때, 단 한번 호출되어야 할 경우 이름없는 함수를 사용하며 괄호를 수식으로 변경하여 호출한다.
  </pre>

## 9. 객체
> 자바스크립트는 객체(object)기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 “모든 것”은 객체이다. 기본자료형(Primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다. 객체는 데이터와 그 데이터에 관련되는 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재이다. 달리 말해, 이름(키)과 값으로 구성된 데이터를 의미하는 프로퍼티(property)와 동작을 나타내는 메소드(method)를 포함하고 있는 독립적 주체이다. 객체는 데이터를 한 곳에 모으고 구조화하는데 유용하다. 객체 하나는 다른 객체를 포함할 수 있기 때문에 그래프나 트리와 같은 자료구조를 쉽게 표현할 수 있다.

  - [객체 설명](http://poiemaweb.com/js-object)
  - [객체 초기자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)
---

#### 1. 전역객체
> 함수 바깥에 존재하는 변수는 window라는 전역공간속에 존재한다. 즉, 최상위 객체에 종속되어 불려질수 있다. 이때 window가 사라질 경우 전역객체 또한 사라지는 특성을 가지고 있다.

<pre>
  TIP : var,let을 사용하여 선언한다. 생략된 window 전역객체로 인하여
  전역변수로 선언될 수 있으니 반드시 써주도록 한다.
</pre>

#### 2. 인수 [Argument]
> 함수 내에서 쓰이는 일시적인 이름이며 arguments 객체는 모든 함수 내에서 이용 가능한 지역 변수입니다. arguments 객체를 사용하여 함수 내에서 함수의 인수를 참조할 수 있습니다. 이 객체는 함수에 전달된 각 인수를 위한 항목(entry)을 포함합니다, 첫 번째 항목의 인덱스가 0에서 시작하는. 예를 들어, 함수에 인수 셋이 전달된 경우, 다음과 같이 참조할 수 있습니다.

<pre>
  1.arguments[0]
  2.arguments[1]
  3.arguments[2]
</pre>

> 또한 arguments는 직접 설정할수도 있다
<pre>
  arguments[1] = 'new value';
</pre>

- 참고 사이트

  [MDN arguments](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)

## 10. 변수의 유효범위 (스코프)
> 변수는 선언 시 유효한 범위내에서 선언이 가능하다. 이때, var나 let으로 선언하지않고 사용할 경우 전역스코프(window)에 종속되며 함수 내에서 사용한다 할지라도 var 혹은 let으로 불리지 않으면 전역스코프에 영향이 미치게된다. 아래 예제를 참고하자.

<pre>
  var scopePosition = "global"; // 전역변수 선언(window)
  function scopeWrap() {

    var scopePosition = "local"; // var 로인하여 지역변수로 선언

    console.log(scopePosition); //scopeWrap 내에 scopePosition을 불러옴으로 지역변수
  }

  scopeWrap();
  결과 = "local"
</pre>
>위의 결과는 처음 전역변수를 선언 후 함수 scopeWrap내에 존재하는 지역변수를 선언하였기에 전역변수의 값을 건들지 않고 호출 할 수 있게 된 것이다.
만일 var로 호출하지않았다면 scopePosition은 자신의 범위를 찾아 존재하지않을 경우 바깥으로 빠져나가 다시찾기 때문에 전역변수를 호출하게 되어 global이 되는 것이다.
따라서, 변수와 함수는 같은 메카니즘을 보유하는 샘이다.

<pre>
  TIP : let과 const의 차이점
  const의 경우 const로 선언할때의 값을 재할당할 경우 에러가 발생하기에
  변하지않는 값은 const로 담아둔다.

  * const 특징
  1. 상수는 대문자로 사용해준다. (ex : DISCOUNTRATE)
  2. 단어와 단어 사이는 '_'로 구분해준다.
  3. 상수일지라도 객체가 있다면 객체안에 값을 수정, 추가가 가능하다.

</pre>

## 11. 클로저
>현재 위치가 어디에 있던 가져올 수 있는 지역변수가 존재한다면 그 값을 기억/보관한다.
>(접근 제어의 용도)
>   따라서 함수가 사라져도 그 값을 계속 유지하여 마치 '스냅샷(캡처)'형식으로 값을 계속 지니고 있다.
> 이때 같은 값을 가지고 있는게 아니라면 그 값은 return한 값을 가진다.
>   ex : age++ = 21이라면 22 - 23 - 24 와같이 순차증가.


## 12. New 연산자 와 프로토타입
>  링크 참조
> http://www.nextree.co.kr/p7323/
<pre>
  TIP : this와의 차이점
  This로 생성된 객체는 단독적인 객체이지만 Prototype은 모든 객체에 공유된다.
  이때 prototype의 This는 맥락상의 해당 함수 이름이 된다.
</pre>

  - Class
  > 링크 참조
  > https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes


## 13. JSON
>자바스크립트의 형태를 취하는 객체이지만 형태는 text이다.

<pre>
  {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
  }

  - JSON 구문 규칙
  1. 데이터는 이름 / 값
  2. KEY name은 ""(더블포텐션)으로 막아준다.
  3. 데이터는 쉼표로 구분된다.
  4. 대괄호 배열을 유지한다.
</pre>

> JSON은 자바스크립트 객체 표기법으로 JSON의 용도는 웹 서버에서 데이터를 읽고 웹 페이지에 데이터를 표시하는 것

<pre>
ex :
  // JSON구문이 포함된 javascript 생성
  var text = '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

  obj = JSON.parse(text); // JSON 내장 함수를 사용 문자열을 객체로 변환

  document.getElementById("demo").innerHTML =
  obj.employees[1].firstName + " " + obj.employees[1].lastName;
</pre>

  - 참고사이트 **http://tcpschool.com/json/json_use_js**
  -
## 14. 배열
>자바스크립트에서 배열(array)은 이름과 인덱스로 참조되는 정렬된 값의 집합으로 정의됩니다.
배열을 구성하는 각각의 값을 배열 요소(element)라고 하며, 배열에서의 위치를 가리키는 숫자를 인덱스(index)라고 합니다.

- 자바스크립트에서 배열의 특징은 다음과 같습니다.

  1. 배열 요소의 타입이 고정되어 있지 않으므로, 같은 배열에 있는 배열 요소끼리의 타입이 서로 다를 수도 있습니다.
  2. 배열 요소의 인덱스가 연속적이지 않아도 되며, 따라서 특정 배열 요소가 비어 있을 수도 있습니다.
  3. 자바스크립트에서 배열은 Array 객체로 다뤄집니다.

<pre>
  ex :
  1. var arr = [배열요소1, 배열요소2,...];          // 배열 리터럴을 이용하는 방법
  2. var arr = Array(배열요소1, 배열요소2,...);     // Array 객체의 생성자를 이용하는 방법
  3. var arr = new Array(배열요소1, 배열요소2,...); // new 연산자를 이용한 Array 객체 생성 방법
</pre>

  - 참고 사이트 http://tcpschool.com/javascript/js_array_basic
---
#### 배열의 연산자

  - Type of 연산자
  >Typeof 연산자는 피연산자의 타입을 반환합니다. 즉 typeof 뒤에오는 값의 속성을 return하는데 예시를 들면 ,

  <pre>
    typeof "문자열"   // string
    typeof 10         // number
    typeof NaN        // number
    typeof false      // boolean
    typeof undefined  // undefined
    typeof new Date() // object
    typeof null       // object
  </pre>
  > 위와같은 방식으로 return하며 각  "Number", "String", "Boolean", "Object", "Function", "undefined" 라는 6가지의 형식을 반환합니다.

  - for each 연산자
  >인수를 함수로 받으며 받은 값을 각각의 객체로 분리시킨다.

  - filter
  >ilter()는 배열 내 각 요소에 대해 한 번 제공된 callback 함수를 호출해, callback이 true로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열을 생성합니다. callback은 할당된 값이 있는 배열의 인덱스에 대해서만 호출됩니다; 삭제됐거나 값이 할당된 적이 없는 인덱스에 대해서는 호출되지 않습니다. callback 테스트를 통과하지 못한 배열 요소는 그냥 건너뛰며 새로운 배열에 포함되지 않습니다.

  - map
  >map은 callback함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 리턴값(결과값)으로 새로운 배열을 만듭니다. callback함수는 (undefined도 포함해서) 배열 값이 들어있는 인덱스에 대해서만 호출됩니다. 즉, 값이 삭제되거나 아직 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않습니다. callback함수가 호출 될 때에는, 호출되는 대상 요소의 값, 그 요소의 인덱스 그리고, map 메소드가 사용된 배열 객체의 3개의 인수를 전달받습니다. thisArg 매개변수가 map에 전달될 때에는, callback함수의 this값으로 사용됩니다.  thisArg 매개변수가 없을 때에는 undefined 값이 전달되고, 이때경우에는 callback 함수의 this 값은  the usual rules for determining the this seen by a function에 따라 최종적으로 결정됩니다. map 은 호출된 배열의 값을 변형하지 않습니다 (단, callback 함수 호출에 의해서 변형될 수는 있습니다). map이 처리를 수행하는 대상 요소들의 범위는 최초로 callback함수가 호출되기 전에 정해집니다. map이 호출된 이후에 배열에 추가된 요소들은 callback로 호출되지 않습니다. map이 처리를 수행할 대상으로 정해진 기존 요소들의 값이 바뀌거나 삭제되는 경우에는, map에 의해 해당 요소에 대해  callback 호출하던 시점에서의 값이 전달됩니다.;  삭제된 요소들에 대해서는 map이 처리를 수행하지 않습니다(callback 함수가 호출되지 않습니다).

  - 참고 링크
  [Array.prototype.typeof, foreach, filter, map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## 15. 문자열
  > 링크 참조 http://tcpschool.com/javascript/js_standard_string

## 16. DOM
> DOM(DOM, Document Object Model) - 문서 객체 모델(DOM, Document Object Model)은 XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스입니다. 이 객체 모델은 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법을 제공합니다.

<pre>
  DOM의 계층구조
  Document -> 루트요소 (HTML) -> 요소 (head) -> 요소 (title) -> 텍스트
                            -> 요소 (body) -> 요소 (a) + 속성 (href)
                                          -> 요소 (p) -> 텍스트
</pre>

## 17. EVENT
> 이벤트(event)란 웹 브라우저가 알려주는 HTML 요소에 대한 사건의 발생을 의미합니다. 웹 페이지에 사용된 자바스크립트는 이렇게 발생한 이벤트에 반응하여 특정 동작을 수행할 수 있습니다. 따라서 클라이언트 측 자바스크립트를 비동기식 이벤트 중심(event-driven)의 프로그래밍 모델이라고 합니다.
<pre>
  1. 이벤트를 세밀하게 작성할수록 세밀하게 구동가능
  2. 프로그램의 실행 시점을 결정함.
  3. 순차적인 이벤트 전개
</pre>

  - 이벤트 버블링, 캡처링
  <pre>
  버블링 : 이벤트가 발생된 시점에서 바깥부모요소까지 이벤트가 발생
  캡처링 : 이벤트 말생시 부모요소에서 시작되어 해당요소까지 전달
  </pre>

  - react.js
<pre>전체부분의 변경이 아닌 전번 데이터를 비교하여 수정하는 방식의 JS</pre>

## 18. Ajax
>AJAX란 비동기 JavaScript와 XML을 말합니다. 간단히 말하면, 서버측 Scripts와 통신하기 위한 XMLHttpRequest객체를 사용하는 것을 말합니다. 서버측으로 다양한 형식(JSON, XML, HTML 및 일반 텍스트 형식 등)의 정보를 주고 받을 수 있습니다. AJAX의 강력한 특징은 페이지 전체를 리프레쉬 하지 않고서도 수행 되는 "비동기성"입니다. 이러한 비동기성을 통해 사용자의 Event가 있으면 전체 페이지가 아닌 일부분만을 업데이트 할 수 있게 해줍니다. 다시 말해 아래와 같이 두가지로 정리됩니다.
<pre>
  1. 페이지 일부분을 업데이트 하기 위한 정보를 서버에 요청할 수 있다.
  2. 서버로부터 받은 데이터로 작업을 한다

  TIP : XMLHttpRequest(); 는 반드시 New로 실행한다.
</pre>

  - 참고 사이트 https://developer.mozilla.org/ko/docs/AJAX/Getting_Started


## 19. 동기와 비동기
> 동기란 자신과 상대간에 서로 정보를 일치시킨다는 의미를 갖는다 이때의 일치시키려는 정보는 위상,주파수,시간,부호 등이 될 수 있다. 동기화는 송신측및 수신측 간의 데이터를 주고받는 시점을 정확하게 일치시키는 것을 말한다.

<pre>
동기 : 데이터 읽기 요청과 동시에 호출한 자리에서 대기하고 처리가 완료될 때까지 다른 함수를 호출할 수 없다.
비동기 : 요청만 보내고 읽은 데이터가 준비됐다는 신호를 받아서 하는 것이 비동기화이다. 함수 호출을 하면 바로 다음것을 수행하고 처리 완료 이벤트가 올때 처리를 해주는 식 </pre>

## 20. jQuery
> 제이쿼리를 이용하면 문서 객체 모델(DOM)과 이벤트에 관한 처리를 손쉽게 구현할 수 있습니다. 또한, Ajax 응용 프로그램 및 플러그인도 제이쿼리를 활용하여 빠르게 개발할 수 있습니다.

---
<pre>
  디버깅 방법 :
  Console.log / 크롬 확장프로그램 디버거 사용 / 클린코드
</pre>

## 20. 관심사 분리원칙
> 관심사를 분리하여 HTML과 서버, 데이터가 하는일을 분산시켜 하고하는 일만 하게 한다. 그렇게 되면 데이터가 변할 시 데이터만 수정하면 되기 때문에 작업을 반복해서 하지 않아도 된다. 
