class Food{
constructor(){
this.body=foodStock;
this.body=lastFed;





}

display(){
fill(255,255,254);
textsize(15);
if(lastFed>=12){
text("Last Feed :"+lastFed%12 + "PM", 350,30);
}else if(lastFed==0){
text("Last Feed : 12 AM", 350,30);
}else{
text("Last Feed : " + lastFed + "Am", 350,30);
}








}
}