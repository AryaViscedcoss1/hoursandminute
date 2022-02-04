let input=document.getElementById("input");
let htm=document.getElementById("htm");
let hts=document.getElementById("hts");
let result=document.getElementById("result");
let calculate=document.getElementById("calculate");
calculate.addEventListener("click",function myfunction(){

  if (htm.checked == true)
{
    result.innerHTML=Number(input.value)*60 + " minutes";
}
else if (hts.checked == true)
{
  result.innerHTML=Number(input.value)*3600 + " Seconds";
};

});