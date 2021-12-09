<script language="javascript">
alert("Enter the string to Convert.")

function tolow()
{
var x,y;
x=document.frm.txt.value;
y=x.toLowerCase();
document.frm.txtout.value=y;
}
function toup()
{
var x,y;
x=document.frm.txt.value;
y=x.toUpperCase();
document.frm.txtout.value=y;
}
function tonum()
{
var x,y;
x=document.frm.txt.value;
y=isNaN(x);
document.frm.txtoutput.value=y;
}


</script>
