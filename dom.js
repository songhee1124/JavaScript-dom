window.addEventListener("load", function(){
   var btnPrint = this.document.querySelector("#btn-print");
    btnPrint.onclick=printResult;
      function printResult(){
        var x,y;
        x = prompt('x : ');
        y = prompt('y : ');

        x = parseInt(x);
        y = parseInt(y);
    
        console.log(x+y)
      
    }
});

// ================== 노드 선택 방법 ============================
//1.노드 선택방법 1번
// window.addEventListener("load", function () {
//   var section = this.document.getElementById("s1");
//   var input = section.getElementsByClassName("input")[0];
//   var button = section.getElementsByClassName("button")[0];

//   button.onclick = function () {
//     input.value = " 안녕하세요";
//   };
// });

//2. 노트 선택방법 2번
window.addEventListener("load", function () {
  var section = this.document.querySelector("#s1");
  var input = section.querySelector(".input");
  // var input = section.querySelector("input[type=text]");
  var button = section.querySelector(".button");

  button.onclick = function () {
    input.value = " 안녕하세요 셀럭터 사용함";
  };
});


// ============== s2 DOM 속성 다루기 :계산기 ==================

window.addEventListener("load", function () {
  var section = this.document.querySelector("#s2");
  var xInput = section.querySelector(".x-input");
  var yInput = section.querySelector(".y-input");
  var button = section.querySelector(".button");
  var resultSpan = section.querySelector("div>span>span");


  button.onclick = function () {
    // let x = xInput.value;
    // let y = yInput.value;

    // x = parseInt(x);
    // y = parseInt(y);

    let x = parseInt(xInput.value);
    let y = parseInt(yInput.value);

    console.log(x+y);

    // resultSpan.innerHTML="계산결과 :' +(x + y); //html로 인식하느냐
    // resultSpan.innerText="계산결과 :' +(x + y); //모든걸 다 텍스트로 인식하느냐
    // resultSpan.textContent ="계산결과 : " +(x+y);
    resultSpan.textContent = x + y;
    //span안에 텍스트와 결과값을 같이 해야할 경우 결과값만 span으로 감싸서 계산하면 좋음 
   };
});

// ==================== 이벤트 객체 향산된 계산기 ============================
// window.addEventListener("load", function () {
//   var section = this.document.querySelector("#s3");
//   var btnInputs = section.querySelectorAll(".num");
//   var textInput = section.querySelector("input[type=text]");

//   var btnClickHandler =function(e){
//     textInput.value += e.target.value;
//   }

//    for(var i = 0; i<btnInputs.length; i++){
//     btnInputs[i].onclick = btnClickHandler;
//    }
// });


// ================이벤트 버블링==============================================
// 이벤트 버블링을 통해 위에서 반복문을 사용해 구현하는것을 간단하게 실행가능
window.addEventListener("load", function () {
  var section = this.document.querySelector("#s3");
  // var btnInputs = section.querySelectorAll(".num");
  var textInput = section.querySelector("input[type=text]");
  var box =section.querySelector("div");
  var divInput =box.querySelector("input[value='/']");
// div라고 하면 그 안에 있는건 이벤트 버블링을 통해 실행됨, 하지만 버튼이 아닌 다른곳을 누르면 
// value 값이 없어서 undefined가 뜸 
  box.onclick =function(e){

    e.preventDefault

    console.log(e.target.nodeType);
    console.log(e.target.nodeName);
    console.log(e.target.nodeValue);
//이벤트가 발생할수 있는건 element밖에 없다  text는 안됨


// 두개다 같은 결과가 나옴 1번은 input일 경우만 2번은 중첩을 없앰??
    // if(e.target.nodeName == "INPUT")
    //  textInput.value += e.target.value;
    
    if(e.target.nodeName != "INPUT")
      return;
      textInput.value += e.target.value;
    //왜 더 좋은 코드인지 모르겟음

    console.log("버튼클릭");

  }

  // divInput.onclick=function(e){
  //   e.stopPropagation();
  //   console.log("나눗셈 연산");
  // }



});

// ========= 스타일 다루기 =====================================
window.addEventListener("load", function(){
  var section =this.document.querySelector("#s4");
  var styleInput = section.querySelector(".style-input");
  var widthInput =section.querySelector(".width-input");
  var radiusInput =section.querySelector(".radius-input");
  var colorInput =section.querySelector(".color-input");
  var output =section.querySelector(".output");

  var item =section.querySelector(".item");


  //onchange
  //onInput
  //onmousedown


  // styleInput.onclick=function(e){
  //   console.log("스타일 인풋 클릭했디")
  //   console.log(styleInput.value);
  // };

  // styleInput.onchange=function(e){
  //   console.log("스타일 인풋 클릭했다")
  //   console.log(styleInput.value);
  // };

  styleInput.oninput=function(e){
    console.log("스타일 인풋 클릭했다")
    console.log(styleInput.value);

      item.style.borderStyle= styleInput.value;
      output.innerText=item.style.cssText;
      //스타일이 갖고 잇는 css값들을 문자열로 뽑아내거나 문자열로 한번에 대입할때 쓸수 있는 속성 
      
  };

  // widthInput.onclick=function(e){
  //   console.log("클릭했디")
  //   console.log(widthInput.value);
  // };
  
  // widthInput.onchange=function(e){
  //   console.log("클릭했다")
  //   console.log(widthInput.value);
  // };
  // 드래그해서 변화가 일어난 최종상태에 이벤트 발생

  widthInput.oninput=function(e){
    console.log("클릭했다")
    console.log(widthInput.value);
    item.style.borderWidth= widthInput.value+"px";
    output.innerText=item.style.cssText;
  };
 //입력되는 과정 모든 곳에서 이벤트가 발생 

  radiusInput.oninput=function(e){
    item.style.borderRadius=radiusInput.value+"px";
    output.innerText=item.style.cssText;
  }
  colorInput.oninput=function(e){
    item.style.borderColor=colorInput.value;
    output.innerText=item.style.cssText;
  }


});

// ======================= s5 카드 회전시키기 =======================
window.addEventListener("load", function(){
  var section =this.document.querySelector("#s5");
  var btnPrev = section.querySelector(".btn-prev");
  var btnNext = section.querySelector(".btn-next");
  var lis = section.querySelectorAll("li");
  var offIndex = 0;
  var size = lis.length;
     


  btnPrev.onclick = function(e){
    e.preventDefault();
    console.log("test");
    offIndex--;

    lis[(0+offIndex)%size].className ="card-1th";
    lis[(1+offIndex)%size].className ="card-2th";
    lis[(2+offIndex)%size].className ="card-3th";
  }

  btnNext.onclick = function(e){
    e.preventDefault();
    console.log("test1");

    offIndex++;
     

    lis[(0+offIndex)%size].className ="card-1th";
    // lis[(0+offIndex)%size].style.left = "0px";
    // lis[(0+offIndex)%size].style.width ="100px";
    // lis[(0+offIndex)%size].style.height = "150px";


    lis[(1+offIndex)%size].className ="card-2th";
    // lis[(1+offIndex)%size].style.left = "calc(50% - 60px)";
    // lis[(1+offIndex)%size].style.width ="120px";
    // lis[(1+offIndex)%size].style.height = "180px";


    lis[(2+offIndex)%size].className ="card-3th";
    // lis[(2+offIndex)%size].style.left = "calc(100% - 100px)";
    // lis[(2+offIndex)%size].style.width ="100px";
    // lis[(2+offIndex)%size].style.height = "150px";
    
  }

});

// ============= s5-1 카드 회전 숙제 ==================
window.addEventListener("load", function(){
  var section =this.document.querySelector("#s5-1");
  var box = section.querySelector(".box");
  var lis = section.querySelectorAll("li");

  box.onclick =function(e){

    // e.preventDefault();
    console.log(e.target.nodeName);
    console.log(e.target.className);
    console.log(e.target);

    lis[0].className="card-1th";
    lis[1].className="card-2th";
    lis[2].className="card-3th";

//  if(!e.target.className ){
 
//     lis[1]="card-1th"; 
//     lis[0]="card-3th";

//  }

    // lis[1] = "card-2th";
    // lis[1] = e.target.className;
    // lis[1].className=e.target.className;

  }

});
// =============== s6 아코디언 만들기 ====================
window.addEventListener("load", function(){
  var section =this.document.querySelector("#s6");
  var box = section.querySelector(".box");
  var current = section.querySelector(".active");

  box.onclick =function(e){
    //변수에 넣는거
    var isHeader = e.target.nodeName =="H2" 
                    || e.target.classList.contains("accordion-content")

      if(!isHeader)
      return;


      if(current !=null)
        current.classList.remove("active");
      
      e.target.classList.add("active");
      current = e. target;

      //두개의 조건을 합친거
      // if((e.target.nodeName !="H2") && (!e.target.classList.contains("accordion-content")))
      // return;

      // if(e.target.nodeName !="H2")
      // return;

      // if(!e.target.classList.contains("accordion-content"))
      // return;      
      

      
      
      console.log("test");

        // className 는 만약에 html에 accordion-content외 다른 이름도 
        // 클래스 이름으로 들어가면 찾을수가 없음 그래서 classlist를 사용해서 
        // accordion-content이 포함된 태그를 찾는것
        // classList
        // 스페이스로 구분해서 목록을 관리 더하거나(add) 지우거나(remove) 할수 있음
        // contains를 하면 포함된걸 찾음 true/false로 표시됨 
  };
  });