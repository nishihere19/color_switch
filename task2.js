function obj1(){
        this.xpos=0;
        this.ypos=0;
        this.x_axis;
        this.y_axis;
        this.color;
        this.sped=2.4;
        this.w=120;
        this.h=20;
        this.toright=false;
        this.switched=false;
        
        this.next=0;
        
        this.init=function(color,x_ax,y_ax){
            
            this.x_axis=x_ax;
            this.y_axis=y_ax*-1;
            this.color=color;
            this.xpos=20;
            this.next=y_ax+120; 
        }
        this.draw=function(){
            
            if(this.toright==false){
                this.xpos-=this.sped;
                if(this.xpos<=0){
                    this.toright=true;
                }
            }else{
                this.xpos+=this.sped;
                if(this.xpos+120>=400){
                    this.toright=false;
                }
            }
            
            this.ypos=coords.y_axis(this.y_axis);
            game.draw.fillStyle=this.color;
            game.draw.fillRect(this.xpos,this.ypos,this.w,this.h);
            
            if(this.xpos<=me.xpos&&this.xpos+this.w>=me.xpos&&this.ypos<=me.ypos&&this.ypos+this.h>=me.ypos){
                  if(me.color!=this.color&&game.gameover==false){
                      game.gameover=true;
                      
                  }
            }
            if(this.xpos<=me.xpos+10&&this.xpos+this.w>=me.xpos+10&&this.ypos<=me.ypos+10&&this.ypos+this.h>=me.ypos+10){
                  if(me.color!=this.color&&game.gameover==false){
                      game.gameover=true;
                      
                  }
            }
   
            if(this.switched==false){
                game.draw.save();
                    game.draw.translate(me.xpos+7,coords.y_axis(this.y_axis-50)+7);
                    game.draw.fillStyle="red";
                    game.draw.fillRect(-7,-7,14,14);
                game.draw.restore();
                if(coords.y_axis(this.y_axis-50)+7>=me.ypos){
                   this.switched=true;
                    score++;
                    if(score>highscore){
                        highscore=score;
                        localStorage.setItem("hs",highscore);
                    }
                    me.color=colorz[Math.floor(Math.random()*colorz.length)];
                }
                
            } 
            
        }
        this.check=function(i){
            if(this.ypos-10>game.h){
                _obj.splice(i,1);
            }
        }
    }
    //lineobj
    function obj2(){
        this.xpos=0;
        this.ypos=0;
        this.x_axis;
        this.y_axis;
       
        this.w=3;
        this.h=2;
        this.rotsped=0.005;
        this.child_obj=[];
        this.len_of_color=0;
        this.width_slice=0;
        this.next=0;
        this.switched=false;
        
        this.init=function(color,x_ax,y_ax){
            
            this.x_axis=x_ax;
            this.y_axis=y_ax*-1;
            this.color=color;
            this.xpos=0;
            this.width_slice=game.w/5;
            var len_of_color=0;
            var xpos=game.w-this.width_slice;
            for(var i=0;i<6;i++){
                this.child_obj.push({color:colorz[this.len_of_color],xpos:xpos,w:this.width_slice,h:10});
                this.len_of_color++;
                if(this.len_of_color==3){
                    this.len_of_color=0;
                }
                xpos-=this.width_slice;
            }
            this.next=y_ax+140;
        }
        this.draw=function(){
            var e=0, ee=false;
            this.ypos=coords.y_axis(this.y_axis);
            for(var i=0;i<this.child_obj.length;i++){
                game.draw.fillStyle=this.child_obj[i].color;
                game.draw.fillRect(this.child_obj[i].xpos,this.ypos,this.child_obj[i].w,this.child_obj[i].h);
                this.child_obj[i].xpos+=2;
                if(this.child_obj[i].xpos<=me.xpos&&
                    this.child_obj[i].xpos+this.child_obj[i].w>=me.xpos&&
                    this.ypos<me.ypos&&
                    this.ypos+this.child_obj[i].h>=me.ypos
                  ){
                    if(me.color!=this.child_obj[i].color&&game.gameover==false){
                        game.gameover=true;
                      
                    }
                }
                if(this.child_obj[i].xpos<=me.xpos+me.w&&
                    this.child_obj[i].xpos+this.child_obj[i].w>=me.xpos+me.w&&
                    this.ypos<me.ypos+me.h&&
                    this.ypos+this.child_obj[i].h>=me.ypos+me.h
                  ){
                    if(me.color!=this.child_obj[i].color&&game.gameover==false){
                        game.gameover=true;
                       
                    }
                }
                if(this.child_obj[i].xpos>=game.w){
                    ee=true;
                    e=i;
                    this.len_of_color++;
                    if(this.len_of_color==3){
                        this.len_of_color=0;
                    }
                    this.child_obj.push({color:colorz[this.len_of_color],xpos:this.child_obj[this.child_obj.length-1].xpos-this.width_slice,w:this.width_slice,h:10});
                }
            }
            if(ee==true){
                this.child_obj.splice(e,1);
            }
            if(this.switched==false){
                game.draw.save();
                game.draw.translate(me.xpos+7,coords.y_axis(this.y_axis-65)+7);
                
                game.draw.fillStyle="red";
                game.draw.fillRect(-7,-7,14,14);
                game.draw.restore();
                if(coords.y_axis(this.y_axis-65)+7>=me.ypos){
                   this.switched=true;
                    score++;
                    if(score>highscore){
                        highscore=score;
                        localStorage.setItem("hs",highscore);
                    }
                    me.color=colorz[Math.floor(Math.random()*colorz.length)];
                }
                
                
            } 
        }
        this.check=function(i){
            if(this.ypos-30>game.h){
                _obj.splice(i,1);
            }
        }
    }
    //3 circle
    function obj3(){
        this.xpos=0;
        this.ypos=0;
        this.x_axis;
        this.y_axis;
        
        this.w=4;
        this.h=4;
        this.rotsped=0.01;
        this.next=0;
        this.switched=false;
        
        this.init=function(color,x_ax,y_ax){
           this.rot=0; 
            this.x_axis=x_ax;
            this.y_axis=y_ax*-1;
            this.color=color;
            this.xpos=200;
            this.next=y_ax+280;
            
        }
        this.draw=function(){
            var rad=360/150;
            var color=0;
            this.ypos=coords.y_axis(this.y_axis);
            for(var i=0;i<150;i++){
                if(i<50){
                    color="lightgreen";
                }else if(i>=50&&i<100){
                    color="orange";
                }
                else{
                    color="deepskyblue";
                }
                var xx=40*Math.cos((this.rot)*(Math.PI/180))+this.xpos;
                var yy=40*Math.sin((this.rot)*(Math.PI/180))+this.ypos;
                var rot=Math.atan2(yy-this.ypos,xx-this.xpos);
                var tx= (me.xpos+(me.w/2))-xx+1.5;
                var ty=(me.ypos+(me.h/2))-yy;
                var d=Math.sqrt(tx*tx+ty*ty);
                 if(d<=10){
                  if(me.color!=color&&game.gameover==false){
                      game.gameover=true;
                      
                  }
                }
                game.draw.save();
                    game.draw.translate(xx+this.w,yy);
                    game.draw.rotate(rot);
                    game.draw.fillStyle=color;
                    game.draw.fillRect(this.w*-1,0,this.w,this.h);
                game.draw.restore();
                var xx=40*Math.cos((40-this.rot)*(Math.PI/180))+this.xpos;
                var yy=40*Math.sin((40-this.rot)*(Math.PI/180))+this.ypos;
                var rot=Math.atan2(yy-this.ypos,xx-this.xpos);
                //second circle
                var tx= (me.xpos+(me.w/2))-xx+1.5;
                var ty=(me.ypos+(me.h/2))-(yy-80);
                var d=Math.sqrt(tx*tx+ty*ty);
                 if(d<=10){
                  if(me.color!=color&&game.gameover==false){
                      game.gameover=true;
                     ;
                  }
                }
                 game.draw.save();
                    game.draw.translate(xx+this.w,yy-80);
                    game.draw.rotate(rot);
                    game.draw.fillStyle=color;
                    game.draw.fillRect(this.w*-1,0,this.w,this.h);
                game.draw.restore();
                var xx=40*Math.cos((180-this.rot)*(Math.PI/180))+this.xpos;
                var yy=40*Math.sin((180-this.rot)*(Math.PI/180))+this.ypos;
                var rot=Math.atan2(yy-this.ypos,xx-this.xpos);
                
                var tx= (me.xpos+(me.w/2))-xx+1.5;
                var ty=(me.ypos+(me.h/2))-(yy-160);
                var d=Math.sqrt(tx*tx+ty*ty);
                 if(d<=10){
                  if(me.color!=color&&game.gameover==false){
                      game.gameover=true;
                      
                  }
                }
                 game.draw.save();
                    game.draw.translate(xx+this.w,yy-160);
                    game.draw.rotate(rot);
                    game.draw.fillStyle=color;
                    game.draw.fillRect(this.w*-1,0,this.w,this.h);
                game.draw.restore();
                this.rot+=rad+this.rotsped;
                
            }
             if(this.switched==false){
                game.draw.save();
                game.draw.translate(me.xpos+10,coords.y_axis(this.y_axis-80));
                
                game.draw.fillStyle="red";
                game.draw.fillRect(-7,-7,14,14);
                game.draw.restore();
                if(coords.y_axis(this.y_axis-80)>=me.ypos){
                   this.switched=true;
                    me.color=colorz[Math.floor(Math.random()*colorz.length)];
                    score++;
                    if(score>highscore){
                        highscore=score;
                        localStorage.setItem("hs",highscore);
                    }
                }
                
               
            } 
        }
        this.check=function(i){
            if(this.ypos-160>game.h){
                _obj.splice(i,1);
            }
        }
    }
    
    function obj4(){
        this.xpos=0;
        this.xpos2=0;
        this.ypos=0;
        this.xpos3=0;
        this.ypos3=0;
        this.ypos2=0;
        this.x_axis;
        this.y_axis;
        this.color;
        this.sped=4.0;
        this.w=30;
        this.h=100;
        this.toright=false;
        this.toright2=false;
        this.toright3=false;
        this.wait=5;
        this.wait2=20;
        this.wait3=15;
        this.color2="orange";
        this.color3="deepskyblue";
        this.next=0;
        this.switched=false;
        
        
        this.init=function(color,x_ax,y_ax){
            
            this.x_axis=x_ax;
            this.y_axis=y_ax*-1;
            this.color="lightgreen";
            this.xpos=0;
            this.next=y_ax+(110*2)+80;
            
        }
        this.draw=function(){
            
            if(this.toright==false){
                this.xpos-=this.sped;
                if(this.xpos<=0){
                    this.toright=true;
                    this.wait=5;
                }
            }else{
                if(this.wait>0&&this.xpos2<=0&&this.xpos3<=0){
                    this.wait-=0.2;
                }if(this.wait<=0){
                    this.xpos+=this.sped;
                    if(this.xpos+this.w>=400){
                        this.toright=false;
                    }  
                }
            }
            
            this.ypos=coords.y_axis(this.y_axis);
            game.draw.fillStyle=this.color;
            game.draw.fillRect(this.xpos,this.ypos,this.w,this.h); if(this.xpos<=me.xpos&&this.xpos+this.w>=me.xpos&&this.ypos<=me.ypos&&this.ypos+this.h>=me.ypos){
                  if(me.color!=this.color&&game.gameover==false){
                      game.gameover=true;
                     
                  }
            }
            if(this.xpos<=me.xpos+10&&this.xpos+this.w>=me.xpos+10&&this.ypos<=me.ypos+10&&this.ypos+this.h>=me.ypos+10){
                  if(me.color!=this.color&&game.gameover==false){
                      game.gameover=true;
                      
                  }
            }
            if( this.toright2==false){
                this.xpos2-=this.sped;
                if(this.xpos2<=0){
                    this.toright2=true;
                    this.wait2=25;
                }
            }else{
                if(this.wait2>0&&this.xpos3<=0){
                    this.wait2-=0.2;
                }if(this.wait2<=0){
                    this.xpos2+=this.sped;
                    if(this.xpos2+this.w>=400){
                        this.toright2=false;
                    }  
                }
            }
            
            this.ypos2=coords.y_axis(this.y_axis)-(110*1);
            game.draw.fillStyle=this.color2;
            game.draw.fillRect(this.xpos2,this.ypos2,this.w,this.h);
            if(this.xpos2<=me.xpos&&this.xpos2+this.w>=me.xpos&&
               this.ypos2<=me.ypos&&this.ypos2+this.h>=me.ypos
              ){
                  if(me.color!=this.color2&&game.gameover==false){
                      game.gameover=true;
                      
                  }
            }
            if(this.xpos2<=me.xpos+me.w&&this.xpos2+this.w>=me.xpos+me.w&&
               this.ypos2<=me.ypos+me.h&&this.ypos2+this.h>=me.ypos+me.h
              ){
                  if(me.color!=this.color2&&game.gameover==false){
                      game.gameover=true;
                      
                  }
            }
            if( this.toright3==false){
                this.xpos3-=this.sped;
                if(this.xpos3<=0){
                    this.toright3=true;
                    this.wait3=35;
                }
            }else{
                if(this.wait3>0){
                    this.wait3-=0.2;
                }else{
                    this.xpos3+=this.sped;
                    if(this.xpos3+this.w>=400){
                        this.toright3=false;
                    }  
                }
            }
            this.ypos3=coords.y_axis(this.y_axis)-(110*2);
            game.draw.fillStyle=this.color3;
            game.draw.fillRect(this.xpos3,this.ypos3,this.w,this.h);
            if(this.xpos3<=me.xpos&&this.xpos3+this.w>=me.xpos&&
               this.ypos3<=me.ypos&&this.ypos3+this.h>=me.ypos
              ){
                  if(me.color!=this.color3&&game.gameover==false){
                      game.gameover=true;
                     
                  }
            }
            if(this.xpos3<=me.xpos+me.w&&this.xpos3+this.w>=me.xpos+me.w&&
               this.ypos3<=me.ypos+me.h&&this.ypos3+this.h>=me.ypos+me.h
              ){
                  if(me.color!=this.color3&&game.gameover==false){
                      game.gameover=true;
                     
                  }
            }
            if(this.switched==false){
                game.draw.save();
                game.draw.translate(me.xpos+10,coords.y_axis(this.y_axis-60));
               
                game.draw.fillStyle="red";
                game.draw.fillRect(-7,-7,14,14);
                game.draw.restore();
                if(coords.y_axis(this.y_axis-60)>=me.ypos){
                    this.switched=true;
                    me.color=colorz[Math.floor(Math.random()*colorz.length)];
                    score++;
                    if(score>highscore){
                        highscore=score;
                        localStorage.setItem("hs",highscore);
                    }
                }
                
             
            }
        }
        this.check=function(i){
            if(this.ypos-10>game.h){
                
            }
        }
    }
 
    var game={draw:canvas.getContext('2d'),h:600,w:400,bg_color:"black",xpos:0,ypos:0,start:false,gameover:false};
    
    var me={xpos:200-7,ypos:550,h:14,w:14,color:""};
    
    var world={xpos:200,ypos:550};
    var score=0;
    var highscore=localStorage.getItem("hs");
    if (highscore==="undefined"||highscore==null||highscore==NaN){
        highscore=0;
        localStorage.setItem("hs",highscore);
    }
    highscore=parseInt(highscore);
    var coords={
        x_axis:function(x){
           
           
            return (x+world.xpos);
        },
        y_axis:function get_y(y){
            
            return (y+world.ypos);
            
        }
    }
    
    var _obj=[];
   
    var _switch=[];
    
    var colorz=['orange','deepskyblue','lightgreen'];
   
    me.color=colorz[Math.floor(Math.random()*colorz.length)];
    function switch_obj(){
        this.xpos;
        this.ypos;
        this.w;
        this.h;
        this.init=function(){
            
        }
    }

    var g=0;
   
    var forceup=0;
    function main_(){
        
        if(game.start==true){
        window.requestAnimationFrame(main_); 
        }
        game.draw.fillStyle=game.bg_color;
        game.draw.fillRect(game.xpos,game.ypos,game.w,game.h);
        
        if(game.gameover==false){
            me_();
            obj_();
        }
        else{
          game.draw.font="45px cursive";
        game.draw.fillStyle='hsl('+(Math.random()*360)+',90%,40%)';
        game.draw.fillText("GAME OVER",game.w/6,game.h/2);  
        }
        
       
        if(coords.y_axis(_obj[_obj.length-1].next*-1)>=0){
          create_obj_();
        }
        game.draw.font="15px cursive";
        game.draw.fillStyle="white";
        game.draw.fillText("Score: "+score,300,550);
        game.draw.fillText("Highscore: "+highscore,300,580);
    }
    //me function
    function me_(){
        
        game.draw.save();
            game.draw.translate(me.xpos+7,me.ypos+7);
            game.draw.fillStyle=me.color;
            game.draw.fillRect(-7,-7,me.w,me.h);
        game.draw.restore();
        
        if(me.ypos>400){
            me.ypos+=forceup-g;
        }
        else{
           
            if(forceup-g<0){
                world.ypos-=forceup-g;
            }else{
                 
               me.ypos+=forceup-g; 
            }
        }
       
        g-=0.19;
        if(me.ypos+me.w>=game.h&&game.gameover==false){
            //////me_is_dead_();
            game.gameover=true;
        }
    }
    
    function me_death_paticle_draw_(){
        for(var i=0;i<_me_death_particle.length;i++){
            _me_death_particle[i].draw();
            if(_me_death_particle[i].h<0){
                _me_death_particle.splice(i,1);
            }
        }  
    }
    //
    function obj_(){
        
        for(var i=0;i<_obj.length;i++){
            _obj[i].draw(i);
        }
        for(var i=0;i<_obj.length;i++){
            _obj[i].check(i);
        }
    }
    _obj.push(new obj1());
    _obj[_obj.length-1].init(colorz[Math.floor(Math.random()*colorz.length)],0,150);
    var create_obj=false;
    create_obj=true;
    function create_obj_(){
        if(create_obj==true){
            var rand=Math.floor(Math.random()*4);
            if(rand==0){
                _obj.push(new obj4());
                _obj[_obj.length-1].init(colorz[Math.floor(Math.random()*colorz.length)],0, _obj[_obj.length-2].next+90);
            }
            else if(rand==1){
                _obj.push(new obj3());
                _obj[_obj.length-1].init(colorz[Math.floor(Math.random()*colorz.length)],0, _obj[_obj.length-2].next+40);
            }
            else if(rand==2){
                _obj.push(new obj2());
                _obj[_obj.length-1].init(colorz[Math.floor(Math.random()*colorz.length)],0, _obj[_obj.length-2].next);
            }
            else if(rand==3){
                _obj.push(new obj1());
                _obj[_obj.length-1].init(colorz[Math.floor(Math.random()*colorz.length)],0, _obj[_obj.length-2].next+40);
            }
           else{
                _obj.push(new obj4());
                _obj[_obj.length-1].init(colorz[Math.floor(Math.random()*colorz.length)],0, _obj[_obj.length-2].next+80);
            }
        }
    }
    create_obj_();
    create_obj_();
var ch=0;
   
    bod.onkeypress=function(e){
        
        if(e.keyCode==32||e.keyCode==38){
            if(game.start==false){
                game.start=true; 
                main_();
                if(ch==0){
                    audio.play();
                    ch++;
                }
                
            }
            
            
           
            g=0;
            forceup=-3.5;
        }
        if(e.keyCode==39||e.keyCode==37){
                 me.color=colorz[Math.floor(Math.random()*colorz.length)];
            }
    }
    window.onload=()=>{
        main_();
    }