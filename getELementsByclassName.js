/**
 * Created by liang on 2017/2/19.
 */
function getElementsbyclassName(parent,tagname,className)
{
    var arr=[];
//            var aEls=parent.getElementsByTagName('*');ѡȡparent�µ�����tagName
    var aEls=parent.getElementsByTagName(tagname);
    for(var i=0;i<aEls.length;i++)
    {/*
     if(aEls[i].className==className)
     {
     arr.push(aEls[i]);
     }*/
        var aclassName=aEls[i].className.split(' '); //��������class��Ԫ�طֱ������������
        for(var j=0;j<aclassName.length;j++)
        {
            if(aclassName[j]==className)
            {
                arr.push(aEls[i]);
                break;//��ֹ������ͬһ��Ԫ����д����ͬ��class ����ѭ��һ��
            }
        }
    }
    return arr;
}