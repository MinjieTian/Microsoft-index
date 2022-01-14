window.onload = function (){
    const moreBtn = document.getElementById('moreBtn');
    moreBtn.onclick = function (){
        if(document.getElementById('innerUl').style.display == 'block'){
            document.getElementById('innerUl').style.display = 'none'
        }else if (document.getElementById('innerUl').style.display == 'none' && innerWidth<=918 && innerWidth >=890){
            document.getElementById('innerUl').style.display = 'block'
            document.getElementById('Xbox').style.display = 'none'
        }else{
            document.getElementById('innerUl').style.display = 'block'
            document.getElementById('Xbox').style.display = 'block'
        }

    }

    const searchBtn = document.getElementById('searchBtn');
    searchBtn.onclick = function () {

        if(document.getElementById('navDiv3').style.display != 'none'){
            document.getElementById('navDiv3').style.display = 'none';
            document.getElementById('navDiv2').style.display = 'none';
            document.getElementById('search-nav').style.opacity = '1';
        }
    }

    const cancel_Btn_lg = document.getElementById('cancel_Btn_lg');
    cancel_Btn_lg.onclick = function (){
        document.getElementById('navDiv3').style.display = 'inline-block';
        document.getElementById('navDiv2').style.display = 'inline-block';
        document.getElementById('search-nav').style.opacity = '0';
    }

    document.getElementsByClassName('dropdown-menu').item(0).style.width = ''+innerWidth+'px';

    const searchBtn1 = document.getElementById('searchBtn1');
    searchBtn1.onclick = function () {
        document.getElementById('search-nav2').style.opacity = '1';
        document.getElementById('navDiv4').style.display = 'none';
        document.getElementById('navDiv5').style.display = 'none';
        document.getElementById('navDiv6').style.display = 'none';
    }

    document.getElementById('lt860cancelBtn').onclick = function () {
        document.getElementById('search-nav2').style.opacity = '0';
        document.getElementById('navDiv4').style.display = 'inline-block';
        document.getElementById('navDiv5').style.display = 'inline-block';
        document.getElementById('navDiv6').style.display = 'inline-block';
    }


    document.getElementById('outerBtn2').onclick = function () {
        document.getElementsByClassName('slip').item(0).setAttribute('class','container-fluid slip slipMarginLeft1');
        document.getElementById('outerBtn2').style.display='none';
        document.getElementById('outerBtn1').style.display='block';

    }
    document.getElementById('outerBtn1').onclick = function () {
        document.getElementsByClassName('slip').item(0).setAttribute('class','container-fluid slip slipMarginLeft2');
        document.getElementById('outerBtn1').style.display='none';
        document.getElementById('outerBtn2').style.display='block';

    }

    window.onresize = function (){
        document.getElementsByClassName('fourPieces').item(0).style.width = document.getElementById('carouselExampleFade').offsetWidth +24 +  'px';
        document.getElementsByClassName('fourPieces').item(1).style.width = document.getElementById('carouselExampleFade').offsetWidth +24 +  'px';


        if(innerWidth >=1085){
            document.getElementById('outerBtn1').style.display='';
            document.getElementById('outerBtn2').style.display='';
            document.getElementsByClassName('slip').item(0).setAttribute('class','container-fluid slip');
        }

        if(innerWidth <=780){
            document.getElementById('outerBtn1').style.display='none';
            document.getElementById('outerBtn2').style.display='none';
        }

        if(innerWidth > 780){
            document.getElementById('outerBtn1').style.display='';
            document.getElementById('outerBtn2').style.display='';
        }

        if(innerWidth < 576){
            
        }


    }


    document.getElementsByClassName('fourPieces').item(0).style.width = document.getElementById('carouselExampleFade').offsetWidth +24 +  'px';
    document.getElementsByClassName('fourPieces').item(1).style.width = document.getElementById('carouselExampleFade').offsetWidth +24 +  'px';

}