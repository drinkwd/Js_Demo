/**
 * Created by liang on 2017/2/16.
 */
function getpos(obj)
{
    pos={left:0,top:0}
    while(obj)
    {
        pos.left+=obj.offsetLeft;
        pos.top+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return pos;
}