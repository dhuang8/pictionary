var Game = function(){
	this.timer=0;
	this.leader;
	var list1 = {"data":["above","aim","air","airplane","Aladdin","Albert Einstein","Alice in Wonderland","alien","alive","alright","America","angle","angry","ankle","apple","around","astronaut","ATM","attractive","Australia","autumn","Back to the Future","backbone","baggage","Bambi","banister","bank","bar code","barber","Barbie","baseball","baseboards","bathroom","Batman","batteries","battery","bean","Beauty and the Beast","bed","bedroom","beer","bicycle","big","biscuit","blinds","blue","blue jeans","bomb","book","boots","bored","bowtie","box","boy","branch","break ","broom","bullet","bumper","butterfly","button","cake","calendar","camera","candle","candy","cane","Captain Hook","car","carrot","case","cash","catalog","caught","ceiling fan","cell phone","cell phone charger","center","Charlie Brown","chase","chicken","chimney","choclate","chocolate","church","Cinderella","circus","clog","coal","coat","colds","coma","comfy","commercial","computer","constellation","contact","corn","cowboy","crayons","crib","crisp","crowd","crutch","cry","cup","curtains","darkness","Darth Vader","dashboard","dead","deep","deoderant","desert","desk","diagonal","diamond","different","digital","dinner","directions","disc","disheveled","dizzy","docter","dog","dominoes","door","door knob","doorway","dot","download","dress shirt","dripping","drought","drug","Dumbo","dustpan","east","electrical outlet","electricity","end","eraser","exercise","extra","eyes","fabric","face","far","father","fear","feel","Finding Nemo","fire","fireside","fireworks","flower","flowers","food","food rations","Forest Gump","fracture","France","fresh","friend","frog","front porch","frost","fruit","fuel","garage door","garbage","hose","gas","gingerbread","girl","glitter","goggles","gold","golf","goodbye","grass","green","grow","gun","guy","hail","hair dryer","hairspray","half","hand lotion","hand soap","happy","Harry Potter","hat","headband","hear","hello","help","high","hockey","hole","holidays","hop","horse","hot","hot dog","hot water","husband","icon","Indiana Jones","inside","iron","ironing board","Isaac Newton","jacket","jail","James Bond","Japan","jazz","jeans","jewelry","jump","jungle","junk","key","kitchen","knife","ladder","lady","laser","lasses","laundry","lawnmower","leader","leaf","leash","left","leopard","lick","lie","life","light bulb","light switch","lightsaber","Lincoln","living room","lobster","logo","long","lotion","love","Luke Skywalker","lunch","lunchbox","macaroni","magazine","magnets","mailbox","mailman","makeup","mall","man","markers","Mary Poppins","mattress","mig","military","mime","mirror","moon","mother","movie","music","myth","nature","necktie","neighborhood","nervous","newsletter","newspaper","nine","noose","note","notebook","number","October","off","on","online","orange","outside","page","paint","palace","panda","pants","paperclip","park","password","peasant","peeping","pen","perfume","period","Peter Pan","pharmacist","photograph","piano","picture","picture frame","pillow","pinwheel","pirate","pizza sauce","plant","slam dunk","poison","power","praise","pregnant","presents","president","press","Princess Leia","printer paper","probably","professor","pumpkin","purse","pushups","quarterback","queen","quilt","raking","rate","record","red wagon","retail","rewind","right","ring","rock","rocking chair","roller blading","round","rubber","ruler","run","sad","salt and pepper","scale","scarecrow","scared","scarf","scarves","school","scissors","Scooby Doo","scream","screen ","September","shallow","shampoo","shirt","shoes","short","shower curtain","Shrek","sick","silverware","sink","situps","sixties","skate","skateboard","ski","skip","skirt","Sleeping Beauty","slips","small","smart","smile","soap","soccer","socks","soda","sofa","sometime","song","sound","soup","spare","speaker","speakers","spice rack","Spiderman","sponge","spooky","spray","spring","stairs","stamps","stapler","Star Wars","start","state","stationery","stem","stick","sticker","stone","stool","strap","submit","sun","Sunday","sung","Superman","swallow","sweater","sweet","swing","t-shirt","tablet","taco","teapot","television","tender","tennis shoes","Texas","The Beatles","The Grinch","the internet","The Lion King","The Little Mermaid","The Muppets","The Wizard of Oz","thief","think","third floor","thought","tied up","time","tissue","toast","toilet paper","tongue","tonight","toothbrush","top shelf","towel","town","Toy Story","trash can","treasure","trees","trip","tropical","tweet","ugly","umbrella","underneath","unit","usually","vegetarian","vegetable","vest","video camera","Waldo","walk","walker","wallet","walrus","warning","washing machine","waste","water","watering can","wax","webcam","website","wheel","whisk","whistle","Willy Wonka","wind","wing","Winnie the Pooh","witch","wobble","woman","world","worship","worst","wrapper","wrinkle","yellow","yesterday","yolk","you"]}
	var list2 = {"success":true,"words":["cloak","Dr. Seuss","pear","stoplight","bomb","in a pickle","fishing pole","french fries","salt and pepper","bathtub","purse","dance","Pinocchio","put it on the back burner","hurdle","America","Up","clog","golf","needle in a haystack","cheerleader","so hungry I could eat a horse","water under the bridge","like watching paint dry","car","take it with a grain of salt","nest","crust","password","Tangled","lightsaber","every cloud has a silver lining","The Princess Diaries","paw","bald","out of my hair","whisk","barking up the wrong tree","quicksand","shirt","exercise","siesta","ironic","The Wizard of Oz","cupcake","Shrek","gasoline","forest","Billy the Kid","ball is in your court","Harry Potter","mini blinds","battery","globe","in hot water","sponge","Charles Dickens","egg","Cheaper by the Dozen","neutron","garage","lamp","coat","plate","sidewalk","lawn mower","king","waist","fish or cut bait","crocodile tears","Hercules","icing on the cake","tiger","Spider Man","duck","pencil","Darth Vader","rise above the blues","dimple","pogo stick","maze","mouse","easel","glue stick","figment","cherry","tissue","square","peach","ship","salmon","comparing apples and oranges","eyes","have two left feet","Lady and the Tramp","Socrates","Clark Kent","pail","Mighty Joe Young","throw a wrench in the works","bunk bed","ears","snowball","The Fox and the Hound","Annie","everything but the kitchen sink","rainbow","girl","teacher's pet","post office","ice","shallow","aristocrat","pizza","Inigo Montoya","baguette","light at the end of the tunnel","ivy","mast","Honey, I Shrunk the Kids","expired","starfish","cross the bridge when we come to it","macho","motorcycle","bear","just a drop in the bucket","coach","laser","heel","Tron","popcorn","easy as falling off a log","stiff upper lip","wobble","welder","crisp","over the hill","dust bunny","all your eggs in one basket","dragon","password","raining cats and dogs","archaeologist","random","armada","Isaac Newton","drift","skate","dominoes","refrigerator","bib","circus","smile","lawnmower","goblin","jazz","nail","cloud","wooly mammoth","recharge your batteries","Thomas Jefferson","saw","blacksmith","fiddle","between a rock and a hard place","wind","ladder","champion","cup","houseboat","drums","chaos","bucket","yardstick","fabric","a bird in the hand is worth two in the bush","mailbox","James Earl Jones","baggage","Princess Leia","pomp","jacket","inchworm","zebra","pig","barn","snowman","snake","Babe Ruth","cast","Coldplay","backbone","hydrogen","shoe","handle","Amelia Earhart","cape","cell phone charger","roof","electrical outlet","rhinoceros","stomach","frog in your throat","bell","Robin Williams","wedding cake","soda","have a cow","dripping","eat like a bird","happy","lemon","pilot","front porch","pizza sauce","skeleton in the closet","Little Giants","logo","magazine","Ice Age","dorsal","lake","A Bug's Life","carry a tune","wall","pumpkin","sailboat","button","password","forehead","stove","chocolate chip cookie","daddy longlegs","Star Wars","pharmacist","hang ten","head","braid","clock","rug","think outside the box","ice fishing","eel","butterfly","Singin' in the Rain","sweater vest","cost an arm and a leg","at the bottom of the totem pole","video camera","desk","The Rescuers","the Wright brothers","legs","at the end of your rope","over the moon","Tarzan","Free Willy","pastry","kick the bucket","whale","get your feet wet","baby-sitter","fox","torch","crab","hail","map","opaque","RocketMan","belt","astronaut","mop","brand","chestnut","in one ear and out the other","hot tub","deep","caterpillar","eraser","potato","not my cup of tea","pro","zero","head over heels in love","bend over backwards","birds of a feather flock together","beehive","get cold feet","rocket","s'mores","firefighter","Michael Jackson","shower curtain","telephone","flamingo","bridge","headband","tusk","pride","plank","scissors","knock your socks off","cucumber","cookie","big fish in a small pond","bat","cardboard","dentist","basket","camera","sweep you off your feet","stockholder","handful","light","Neil Armstrong","chess","spring","rose","peanut","cut the rug","always a bridesmaid, never a bride","Big Bird","Holes","pants","CD","go the extra mile","mold","mascot","money","log","jungle","Mario","diagonal","from the bottom of my heart","Ben Franklin","stingray","Sonic the Hedgehog","The Sound of Music","bowl","sunglasses","giraffe","be all ears","rim","Pocahontas","baby","alarm clock","piece of cake","treasure","hug","leaf","Chick-fil-A","paperclip","nose","kneel","Robin Hood","Clifford the Big Red Dog","drum","kilogram","stamp","jar","puppy love","bedbug","dream","the cold shoulder","stump","koala","Aladdin","reinvent the wheel","avocado","squeaky wheel gets the grease","standing ovation","brick","pretzel","Thumbelina","best thing since sliced bread","chip on your shoulder","dog and pony show","mouth","carpet","the lion's share","Atlantis","full","pelican","James Bond","apple pie","mouse","Charlotte's Web","key","deer","world","monster","monkey","peasant","flotsam","germ","fit as a fiddle","in the same boat","flower","horse","swing","cry over spilt milk","salt","James Bond","swamp","spaceship","recycle","Indian in the Cupboard","Swiss Family Robinson","too many cooks in the kitchen","snowflake","con","download","open a can of worms","barber","The Princess Bride","flutter","fence-sitter","mime","juggle","rainwater","lyrics","outside","Romeo and Juliet","chime","trash can","paper","shelf","bracelet","sneeze","stout","on the same page","Rocky","one foot in the door","hand","Lance Armstrong","light switch","sea turtle","Chitty Chitty Bang Bang","gallop","Titanic","seashell","the Grinch","broccoli","inertia","harp","ball","cockroach","chameleon","blunt","fly off the handle","cartography","The Jungle Book","radish","turtle","trip","time machine","dashboard","song","silverware","knee","out of sight, out of mind","unicorn","pond","volcano","tank","punk","park","brain","cheek","shoulder","Cinderella","hippopotamus","branch","push the envelope","the cat's meow","Sherlock Holmes","bagel","curtains","peanut gallery","house","important","whisk","Batman","bring home the bacon","macaroni","implode","James and the Giant Peach","cobra","base","quilt","two peas in a pod","garden","Lucille Ball","tournament","dog leash","close, but no cigar","Kermit the Frog","baby","runt","blimp","publisher","smarty pants","glitter","heart","muffin","at the top of your lungs","Jaws","pencil","lollipop","give him a piece of my mind","rolly polly","shrink ray","lighthouse","Zorro","hit the books","burning bridges","overture","gold","spider","person","sunburn","back to square one","heard it through the grapevine","Winnie the Pooh","Charlie Brown","mushroom","John Williams","whistle","when it rains, it pours","ring","artist","boy","tadpole","door","panic","comfy","give my two cents","Sean Connery","puppet","roll out the red carpet","purse","pigpen","wheel","glove","lemon","Barack Obama","candle","sandbox","zipper","frog","wag","helicopter","you catch more flies with honey than with vinegar","hair dryer","Bill Cosby","mirror","Henry Ford","water buffalo","Pete's Dragon","page","out of this world","Internet","early bird gets the worm","tire","wake up on the wrong side of the bed","umbrella","iPad","ear","hut","a bolt out of the blue","Cap'n Crunch","face","Mr. Rogers","Monsters, Inc.","snag","spider web","Oscar the Grouch","vase","spoon","birthday cake","bright as a button","pen","hit the sack","Pablo Piccaso","chalk","hot dog","periwinkle","grass is always greener on the other side","cage","The Little Mermaid","bonnet","Pirates of the Caribbean","taxi","flagpole","bull in a china closet","crib","drawback","snail","tinting","tongue","corndog","Bill Gates","busy bee","feet","wallflower","frog","Alexander Graham Bell","rake","baseball","jig","hair","letter opener","spare","marshmallow","cello","soap","freshwater","Weird Al","ocean","High School Musical","translate","Luke Skywalker","mattress","hold your horses","bride","Albert Einstein","interference","Napoleon Dynamite","half","vegetarian","tennis","dryer sheets","positive","quarantine","lobster","brunette","the Beatles","hold your tongue","egg on your face","orange","cabin","good fences make good neighbors","toe","fur","address","crack","brainstorm","manatee","slump","wing","George of the Jungle","box","feeling under the weather","calendar","pajamas","candle","coal","bookend","sheep","bring the house down","nut","broom","rind","the bee's knees","Spider-Man","trademark","dragonfly","corn","ping pong","nature","spoon","electricity","apple","pocket","shampoo","Cinderella","pine tree","Milo and Otis","room","tiptoe","ditch","vision","finger","balloon","bury the hatchet","three-toed sloth","mooch","Andy Griffith","riddle","ruffle a few feathers","leak","let the cat out of the bag","stork","lace","Madagascar","shadow","Air Bud","John Hancock","beach","worm","tape","strawberry","hockey","Frankenstein","steal my thunder","Leonardo DiCaprio","Inception","skunk","Robin Hood","doormat","default","paint","star","nutmeg","carrot","infection","nightmare","keep your chin up","ceiling fan","reimbursement","rubber","popsicle","czar","onion","jar","watering can","banana peel","ski goggles","round","cowboy","vitamin","population","Davy Crockett","fog","keep your eye on the ball","blowfish","stapler","Harry Houdini","violin","porcupine","octopus","draw the shortest straw","biscuit","Pinocchio","coconut","scar","rib","out like a light","moon","sprinkler","while the cat's away, the mice will play","thief","school","Charles Darwin","speakers","railroad","bunny","hamburger","food","Vincent Van Gogh","Little Women","the way the cookie crumbles","tree","you","shoot the breeze","spill the beans","clam","knight","book","traffic jam","like shooting fish in a barrel","roller blading","stop cold turkey","TV","family","puzzle","campfire","ballpark figure","Harrison Ford","my way or the highway","shovel","teach an old dog new tricks","river","penguin","skateboard","everybody and their dog","poodle","sink","truck","set in stone","money doesn't grow on trees","knot","platypus","plow","bench","glasses","The Lord of the Rings","you're toast","Abraham Lincoln","ski","tutor","paint yourself into a corner","Mr. Smith Goes to Washington","telepathy","picture frame","yo-yo","acre","in a nutshell","chef","fork","one smart cookie","Waldo","on top of the world","pass the buck","too many irons in the fire","exponential","mountain","Cloudy with a Chance of Meatballs","airplane","pull someone's leg","hospital","Mozart","horse","mitten","newspaper","snag","loveseat","Beethoven","Finding Nemo","drain","sleep","grandpa","chip off the old block","birthday","toaster","fragment","watch","apple of my eye","The Chronicles of Narnia: The Lion, the Witch and the Wardrobe","chair","wallet","cast pearls before swine","pop the question","lion","fist","dropping like flies","wet blanket","hoof","King George","wood","husband","banana","philosopher","beaver","newsletter","eagle","get the ball rolling","fizz","out of the frying pan and into the fire","garbage","cruise","state","sweet tooth","ducks in a row","boat","wrench","ladybug","more than you can shake a stick at","t-shirt","teapot","bee","laundry basket","dock","caught with your hand in the cookie jar","dolphin","catalog","where there's smoke, there's fire","observatory","butterflies in your stomach","pineapple","migrate","lie","claw","couch potato","neck","don't rock the boat","flashlight","slide","boa constrictor","Michael Jordan","fireman pole","bite off more than you can chew","soul","smile","Scooby Doo","ligament","myth","milk","suitcase","Barbie","clown","ghost","spider web","point","Dumbo","Rapunzel","top hat","lizard","Santa Claus","elbow","applause","bathroom scale","Alice in Wonderland","table","baseboards","blueprint","snowflake","president","think","lock","oval","Dora the Explorer","bike","door","blue jeans","light bulb","down in the dumps","alligator","burst your bubble","Elmo","C. S. Lewis","shark","ant","burn the candle at both ends","Audrey Hepburn","oar","hip","hairbrush","bag","101 Dalmatians","a wolf in sheep's clothing","Home Alone","Pablo Picasso","in a jam","pirate","Elvis Presley","sheep dog","beach","lips","deep","doorknob","boot","socks","yolk","Zen","airport","storm","hit the road","The Santa Clause","Buzz Lightyear","banana split","attic","fang","cake","like a deer in the headlights","like taking candy from a baby","make a beeline for","Newsies","bigger fish to fry","mailman","match","pan","twang","cat","towel","Mickey Mouse","ring","bouncing off the walls","bruise","desk","cheeseburger","Mary Poppins","Jim Henson","city","bowtie","grab the bull by the horns","full of hot air","drought","Tony Hawk","doghouse","as the crow flies","hit the nail on the head","crayon","corner","better the devil you know","bed","professor","bus","in the lap of luxury","put your foot in your mouth","gate","cell phone","WALL-E","spool","printer","train","tail","eye","hook","grill","foil","lid","hill","jungle","Cars","batteries","sunflower","shrew","Lewis and Clark","Snow White and the Seven Dwarves","addendum","transpose","psychologist","dustpan","tent","bottle","commercial","orbit","dollar","straw that broke the camel's back","wax","Toy Story","swarm","chicken","compromise","season","bird","Back to the Future","cheese","take a leaf out of his book","money burns a hole in your pocket","toothbrush","ringleader","bubble","The Emperor's New Groove","spine","crow's nest","tulip","Neil Diamond","make a mountain out of a molehill","century","hat","throw the towel in","fraidey cat","inquisition","milk","wig","extension cord","catfish","why the long face?","a fifth wheel","computer","The Mighty Ducks","water","queen","dinosaur","ice cream cone","Gilligan","baker's dozen","eureka","mouth","cheetah","aircraft","darts","scared stiff","get your feathers in a bunch","blocks","Indiana Jones","Angels in the Outfield","bread","palace","blanket","basketball","surfboard","pizza","gift","Peter Pan","The Sandlot","teeth","offstage","music","Remember the Titans","The Brave Little Toaster","pie","computer","football","caviar","pick up the pace","Bambi","George Washington","swing","zoo","banister","raft","ants in your pants","lung","owl","Heinz 57","doll","The Lion King","smoke","have your cake and eat it too","Mulan","parody","dog","Teenage Mutant Ninja Turtles","moth","a fly on the wall","maid","swimming pool","wax","intern","Columbus","seesaw","protestant","bleach","skirt","grass","go out on a limb","beanstalk","a stone's throw away","loiterer","rocking chair","mine car","in the doghouse","retail","in over your head","green thumb","sushi","piano","table","chimney","Alice (in Wonderland)","Batman","lichen","at arm's length","lipstick","a little bird told me","your eyes are bigger than your stomach","robot","up a creek without a paddle","The Incredibles","Christopher Columbus","jewelry","Bill and Ted's Excellent Adventure","cricket","saddle","coin","stowaway","George of the Jungle","bobsled","bug","church","Shakespeare","landscape","gingerbread man","circle","jelly","Everglades","Ratatouille","Beauty and the Beast","coast","someone with a hollow leg","face","bargain","Thomas Edison","ticket","dress","hopscotch","clue","landfill","bone","net","Mary Poppins","half","stairs","window","washing machine","pen","flute","stick out like a sore thumb","dizzy","hula hoop","cow","Rocky","cat got your tongue","bicycle","The Sword in the Stone","photograph","wreath","mail","jellyfish","double","Willy Wonka and the Chocolate Factory","break a leg","grapes","rub salt in an open wound","tie the knot","scream","safe","carat","hold down the fort","put your foot down","bell pepper","Moby Dick","honk","dent","toast","lap","fireside","napkin","small potatoes","chain","darkness","upgrade","neighborhood","seahorse","trumpet","gumball","rain","lunchbox","chin","Plato","pinwheel","ironing board","The Land Before Time","back","kite","elephant","Captain Hook","hummingbird","not the only fish in the sea","Peter Pan","picnic","sun","when pigs fly","cliff","bite the dust","hippo","Anakin Skywalker","drip"]}
	this.wordlist = {};
	this.wordlist.data = list1.data.concat(list2.words);
	this.guessingtime=false;
	this.guessword="";
	this.winners=[];
	this.prevleaders=[];
	this.repeat=true;
	this.currepeat=false;
}
Game.prototype.nextTick = function (time){
	this.timer++;
	for (socket in io.sockets.connected) console.log(socket);
	//console.log(io.engine.clientsCount);
}
Game.prototype.endGame = function(){
	if (this.guessingtime){
		this.guessingtime=false;
		io.emit("server message",{message: "The game is over. The word was: "+this.guessword+"."});
		if (this.winners.length>0) this.leader.score++;
		this.leader.emit("disable draw");
		if (this.repeat) {
			var curgame=this;
			setTimeout(function(){
				if (!curgame.guessingtime){
					curgame.startGame();
				}
			},4000)
		}
	}
}
Game.prototype.startGame = function (){
	if (io.engine.clientsCount>1){
		this.resetBoard();
		this.timer++;
		var count=0;
		this.winners=[];
		var extraslots = this.prevleaders.length-io.engine.clientsCount+1;
		if (extraslots>0){
			for (var i=0;i<extraslots;i++) this.prevleaders.shift();
		}
		var possibleleaders = [];
		for (socket in io.sockets.connected) {
			possibleleaders.push(socket);
		}
		console.log(possibleleaders[0]);
		for (var i=0;i<this.prevleaders.length;i++){
			var indexofposleader=possibleleaders.indexOf(this.prevleaders[i]);
			if (indexofposleader>-1) possibleleaders.splice(indexofposleader,1)
		}
		var rand = Math.floor(Math.random()*possibleleaders.length);
		var socketid = possibleleaders[rand];
				this.leader = io.sockets.connected[socketid];
				this.prevleaders.push(socketid);
				console.log("leader is " + this.leader.name);
				var word = this.wordlist.data[Math.floor(Math.random()*this.wordlist.data.length)];
				this.leader.emit("your turn",{word: word})
				this.leader.broadcast.emit("server message",{message:"New game! " + this.leader.name+" is drawing."})
				this.guessingtime=true;
			this.guessword=word;
	}
	else io.emit("server message",{message: "Not enough people to start a game."});
}
Game.prototype.resetBoard = function(){
	history.list.length=0;
	io.emit("disable draw");
	io.emit("clear");
	history.list.length=0;
}
var game = new Game();
var history={};
history.list=[];
//setInterval(function(){ game.nextTick(1) }, 5000);
//var io = require('D:/Program Files (x86)/nodejs/node_modules/socket.io').listen(8887);
var io = require('socket.io').listen(8888);
function getScoreboard(){
	var scoreboard = [];
	for (socket in io.sockets.connected) {
		var curclient = io.sockets.connected[socket];
		scoreboard.push({name: curclient.name, score: curclient.score})
	}
	return scoreboard;
}
io.on('connection', function(socket) {
	console.log("connected: " + socket.id);
	socket.name=socket.id;
	socket.score=0;
	socket.on("setname", function(data){
		if (/[a-zA-Z\d]+/.test(data.name)){
			socket['name']=data.name;
			console.log("setname: " + data.name);
			socket.broadcast.emit("user online",{user: socket['name']});
			io.sockets.emit("get scoreboard",getScoreboard());
			if (game.guessingtime) socket.emit("draw history",history.list)
		}
	})
	socket.on("some event", function(data){
		console.log(socket.id + " triggered some event");
	})
	socket.on("message", function(data){
		if (game.guessingtime && data.message.toLowerCase().replace(/\s+/g, '')==game.guessword.toLowerCase().replace(/\s+/g, '') && game.leader!=null && socket.id!=game.leader.id){
			if (game.winners.indexOf(socket.id)>-1){
				socket.emit("server message",{message: "You already got the word."});				
			}
			else {
				socket.emit("server message",{message: "You guessed the word!"});
				socket.broadcast.emit("server message",{message: socket.name + " has guessed the word."});
				socket.score++;
				if (game.winners.length==0){
					socket.score++;
					io.emit("server message",{message: "There is now 15 seconds left."});
					setTimeout(function(){
						game.endGame();
					},15000)
				}
				io.sockets.emit("get scoreboard",getScoreboard());
				game.winners.push(socket.id);
			}
			return;
		}
		data.user = socket['name'];
		socket.broadcast.emit("message",data);
		console.log("Message from "+socket.id + ": " + data);
	})
	socket.on('disconnect', function() {
		console.log(socket.id + " disconnected");
		socket.broadcast.emit("user offline",{user: socket['name']});
		if (game.guessingtime && game.leader!=null && game.leader.id==this.id){
			game.endGame();
		}
		socket.broadcast.emit("get scoreboard",getScoreboard());
	})
	socket.on("start game",function(){
		game.resetBoard();
		game.startGame();
	})
	socket.on("draw",function(data){
		if (game.leader!=null && socket.id == game.leader.id){
			socket.broadcast.emit("draw",data);
		}
		history.list.push(data);
	})
	socket.on("clear",function(data){
		if (game.leader!=null && this.id == game.leader.id){
			history.list.length=0;
			socket.broadcast.emit("clear");
		}
	})
	socket.on("get scoreboard",function(){
		socket.emit("get scoreboard",getScoreboard());
	})
})