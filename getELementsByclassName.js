/**
 * Created by liang on 2017/2/19.
 */
function getElementsbyclassName(parent,tagname,className)
{
    var arr=[];
//            var aEls=parent.getElementsByTagName('*');选取parent下的所有tagName
    var aEls=parent.getElementsByTagName(tagname);
    for(var i=0;i<aEls.length;i++)
    {/*
     if(aEls[i].className==className)
     {
     arr.push(aEls[i]);
     }*/
        var aclassName=aEls[i].className.split(' '); //把有两个class的元素分别存在数组里面
        for(var j=0;j<aclassName.length;j++)
        {
            if(aclassName[j]==className)
            {
                arr.push(aEls[i]);
                break;//防止手误在同一个元素上写了相同的class 会在循环一遍
            }
        }
    }
    return arr;
}