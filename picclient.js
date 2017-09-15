$(function(){		
	$("form.introform").submit(function(e) {
		e.preventDefault();
		if (/[a-zA-Z\d]+/.test($("input#nameform").val())){
			$("#intro").hide();
			$(".main").show();
			var name=$("input#nameform").val();
			initializegame(name);
		}
	});
	
	function initializegame(name){
		var name = name;
		var candraw=false;
		var chatlimit=50;
		var sound = new Audio("https://www.freesound.org/data/previews/267/267337_3112522-lq.mp3");
		function htmlEncode(value){
			return $('<div/>').text(value).html();
		}
		function addLine(line){
			$(".chatmessages").append(line);
			if ($(".chatmessages .chat-line").size()>chatlimit) {
				var count = $(".chatmessages .chat-line").size()-chatlimit;
				for (var i=0;i<count;i++){
					$(".chatmessages .chat-line")[0].remove();					
				}
			}
			$(".chatmessages").scrollTop($(".chatmessages")[0].scrollHeight)
		}
		function chatLine(user, message){
			addLine ('<div class="chat-line"><span style="color: #aa64ea;">'+htmlEncode(user)+'</span>:&nbsp;<span class="message">'+htmlEncode(message)+'</span></div>');
		}
		function userOffline(user){
			addLine ('<div class="chat-line"><span style="color: #666666;">'+htmlEncode(user)+' has disconnected.</span></div>');
		}
		function userOnline(user){
			addLine ('<div class="chat-line"><span style="color: #666666;">'+htmlEncode(user)+' has connected.</span></div>');
		}
		function yourTurn(word){
			candraw=true;
			addLine ('<div class="chat-line"><span style="color: #666666;">It is your turn to draw. Your word is: '+htmlEncode(word)+'.</span></div>');
		}
		function serverMessage(message){
			console.log("something");
			if (message=="There is now 15 seconds left."){
				var sound = new Audio("https://www.freesound.org/data/previews/267/267337_3112522-lq.mp3");
				sound.play();
			}
			else {
				console.log(message);
			}
			addLine ('<div class="chat-line"><span style="color: #666666;">'+htmlEncode(message)+'</span></div>');
		}

		socket = io.connect('http://www.dhuang8.com:8888');	
		socket.on('connect', function(){
			addLine('<div class="chat-line">CONNECTED</div>');
			var data = {};
			data.name=name;
			socket.emit("setname",data);
		});
		socket.on('disconnect', function(){
			addLine('<div class="chat-line">DISCONNECTED</div>');			
		});
		socket.on("message",function(data){
			chatLine(data.user,data.message);
		});
		socket.on("user online",function(data){
			userOnline(data.user);
		});
		socket.on("user offline",function(data){
			userOffline(data.user);
		});
		socket.on("your turn",function(data){
			yourTurn(data.word);
		});
		socket.on("clear",function(data){
			clearBoard();
		});
		socket.on("draw",function(data){
			drawLine(data.from,data.to,data.color,data.linewidth);
		});
		socket.on("draw history",function(data){
			for (var x = 0;x<data.length;x++)
			drawLine(data[x].from,data[x].to,data[x].color,data[x].linewidth);
		});
		socket.on("server message",function(data){
			serverMessage(data.message);
		});
		socket.on("disable draw",function(){
			candraw=false;
		});
		socket.on("get scoreboard",function(data){
			var sbhtml='Scoreboard <table class="score" style="width:100%">';
			for (var user in data){
				sbhtml+="<tr><td>"+htmlEncode(data[user].name)+"</td><td>"+htmlEncode(data[user].score)+"</td></tr>"
			}
			sbhtml+="</table>";
			$("#left-column").html(sbhtml);
		});
		$("textarea.sendmessage").keypress(function(event) {
			if (event.keyCode == 13){
				event.preventDefault();
				if ($("textarea.sendmessage").val()!="") {
					var data = {};
					data.message=$("textarea.sendmessage").val();
					socket.emit("message",data);
					$("textarea.sendmessage").val("");
					chatLine(name,data.message);
					return false;
				}
			}
		});
		
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext('2d');
		var color = "#111111";
		var linewidth=1;
	
		function getMousePos(canvas, evt) {
			var rect = canvas.getBoundingClientRect();
			console.log(evt);
		    return {
		      x: evt.clientX - rect.left,
		      y: evt.clientY - rect.top
		    };
		}
	
		var drawLine = function (from, to, col, linewidth) {
			context.beginPath();
			context.moveTo(from.x, from.y);
			context.lineWidth = linewidth;
			context.lineTo(to.x, to.y);
			context.strokeStyle = col;
			context.lineCap = 'round';
			context.stroke();
		}
		  
		function clearBoard(){
			canvas.width=canvas.width;
	//		context.clearRect(0, 0, canvas.width, canvas.height);
		}
		  
		function setColor(col){
			color=col;
		}
		
		var c = $("#myCanvas");
	
		var mousepos;
		var drawing = false;
	
		c.on("mousedown", function(e){
			e.preventDefault();
			if (candraw){
				drawing=true;
				mousepos = getMousePos(canvas, e);
				drawLine(mousepos,{x:mousepos.x,y:mousepos.y+.1},color, linewidth);
				socket.emit("draw",{from:mousepos,to:{x:mousepos.x,y:mousepos.y+.1},color:color,linewidth:linewidth})
		//	    console.log(e);
			}
		});
	
		c.on("touchstart", function(e){
			e.preventDefault();
			if (candraw){
				drawing=true;
				console.log(e);
				mousepos = getMousePos(canvas, e.originalEvent.changedTouches[0]);
				drawLine(mousepos,{x:mousepos.x,y:mousepos.y+.1},color, linewidth);
				socket.emit("draw",{from:mousepos,to:{x:mousepos.x,y:mousepos.y+.1},color:color,linewidth:linewidth})
		//		sendMessage({func:"draw",from:mousepos,to:{x:mousepos.x,y:mousepos.y+.1},color:color})
		//	    console.log(e);
			}
		});
	
		c.on("mousemove",function (e){
			e.preventDefault();
			if (candraw){
				if (drawing){
					var newmousepos = getMousePos(canvas, e);
					drawLine(mousepos,newmousepos,color, linewidth);
					socket.emit("draw",{from:mousepos,to:newmousepos,color:color,linewidth:linewidth})
			//		sendMessage({func:"draw",from:mousepos,to:newmousepos,color:color})
					mousepos=newmousepos;
				    //var message = 'Mouse position: ' + mousepos.x + ',' + mousepos.y;
				    //console.log(message);
				}
			}
		});
	
		c.on("touchmove",function (e){
			e.preventDefault();
			if (candraw){
				if (drawing){
				var newmousepos = getMousePos(canvas, e.originalEvent.changedTouches[0]);
				drawLine(mousepos,newmousepos,color, linewidth);
				socket.emit("draw",{from:mousepos,to:newmousepos,color:color,linewidth:linewidth})
		//		sendMessage({func:"draw",from:mousepos,to:newmousepos,color:color})
				mousepos=newmousepos;
			    //var message = 'Mouse position: ' + mousepos.x + ',' + mousepos.y;
			    //console.log(message);
				}
			}
		});
	
		c.on("mouseup mouseleave touchend",function (e){
			e.preventDefault();
			drawing=false;
		});
	
		c.on("touchend touchleave",function (e){
			e.preventDefault();
			drawing=false;
		});
	
		$("input#clear").click(clear);
		function clear(){
			if (candraw){
				clearBoard();
				socket.emit("clear");
			}
		}
		$("input#start").click(startGame);
		function startGame(){
			socket.emit("start game");
		}
		
		$("input.colorpicker").on("input",function(){
			setColor($(this).val());
		});
		$("input.linewidth").on("input",function(){
			$(".linewidthnumber").html($(this).val());
			linewidth=$(this).val();
		});
	}
});