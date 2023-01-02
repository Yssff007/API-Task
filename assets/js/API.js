var myHttp = new XMLHttpRequest();
myHttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3736a3e49c61452481df4912c0f0260a
`)
myHttp.send();
myHttp.addEventListener('readystatechange',function(){
  if(myHttp.readyState == 4){
    var myRes =JSON.parse(myHttp.response).articles;
    console.log(myRes);
    display(myRes);
  }
});

function display(myRes){
  var container = ``
  for(var i=0;i<myRes.length;i++){
    myRes[i].discription !== null ?
      container += `<div class="col-md-4">
        <div class="post bg-info p-1">
        <img class='w-100' src='${myRes[i].urlToImage}'/>
            <h1>${myRes[i].title.split(' ').splice(0,3).join(' ')}</h1>
            <p>${myRes[i].description.split(' ').splice(0,9).join(' ')}</p>
            <a class='btn btn-outline-danger w-100 my-1' href='${myRes[i].url}'>Show More</a>
            
        </div>
    </div>`:''
  }
  document.getElementById('showData').innerHTML = container
}