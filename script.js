let mode=document.querySelector('.mode');
let circle=document.querySelector('.circle');
let body=document.querySelector('.body');
let image1=document.querySelector('.image1');
let image2=document.querySelector('.image2');
let heading=document.querySelector('h1');
let nightmode=document.querySelector('.nightmode');
let daymode=document.querySelector('.daymode');
body.style.display='flex';
body.style.flexDirection='column';
body.style.alignItems='center';
body.style.flexWrap='wrap';
body.style.textAlign='center';

mode.style.border='2px solid black';
mode.style.backgroundColor='white';
mode.style.position='relative';
mode.style.width='130px';
mode.style.height='50px';
mode.style.display='flex';
mode.style.justifyContent='space-between';
mode.style.padding='10px';
mode.style.borderRadius='40px';

circle.style.position='absolute';
circle.style.top='3px';
circle.style.left='2%';
circle.style.borderRadius='50%';
circle.style.height='64px';
circle.style.width='64px';
circle.style.backgroundColor='black';

image1.style.width='45%';
image1.style.height='100%';
image2.style.width='45%';
image2.style.height='100%';

heading.style.fontWeight='bold';
heading.style.fontSize='80px';

nightmode.style.display='none';
daymode.style.display='block';
daymode.style.height='400px';
nightmode.style.height='400px';
let count=0;
mode.addEventListener('click',function(){
    count++;
if(count%2==0)
{
    circle.style.left='2%';
    body.style.backgroundColor='white';
    heading.style.color='black';
    nightmode.style.display='none';
    daymode.style.display='block';
}
else{
    circle.style.left='55%';
    body.style.backgroundColor='black';
    heading.style.color='white';
    nightmode.style.display='block';
    daymode.style.display='none';
}
});
