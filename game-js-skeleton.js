/*
 *   The JS file manipulates HTML objects and is capable of making webpages interact with users.
 *
 *      JS has two different kinds of comments - multiline and single-line. This is a multiline comment.
 */

// This is a single-line comment.

/* We want to make sure our code runs after everything has loaded,
*         so we wrap our code in a function that will be called when the
*                 window loads using the following syntax:
*
*    window.onload = function() {our code goes here};
*/

window.onload = function() {
     /*
      *                 ======== SETUP ========
      *                Preliminary set-up section.
      */

	// grab canvas
	// TODO: FILL IN CODE FOR GRABBING CANVAS
	canvas.width = 500;
	canvas.height= 400;
	var ctx = canvas.getContext("2d");

    // image sources:
    // background - http://www.classyartwork.com/images/landscapes/pond_illustration_l3.jpg
    // crosshair - http://4vector.com/i/free-vector-crosshairs-clip-art_105823_Crosshairs_clip_art_hight.png
    // duck - http://www.clker.com/cliparts/e/a/4/b/13419561141016031803Shaking%20Duck.svg.hi.png

	// create background image.
	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function () {
		bgReady = true;
	};
    bgImage.src = "images/background.jpg";

	// Create crosshair image.
	var playerReady = false;
	var playerImage = new Image();
	// TODO: FILL IN PLAYER IMAGE ONLOAD FUNCTION
    playerImage.src = "images/crosshair.png";

   /*
    *
    *           ======== OBJECTS ========
    *  We store game state (ie. position) here in various objects.
    *
    */

    /* TODO:
     * Create a player object (i.e. var player) with
     * attributes: score = 0, x = 0, y = 0
     */

    var duck = {
		x: Math.floor(Math.random()*(canvas.width-30)),
		y: Math.floor(Math.random()*(canvas.height-30))
	};

	/*
     *  ======== FUNCTIONS ========
     *  Define helper functions here.
     *
     */

	var render = function () {
        /* TODO:
         * If the bg image is ready, draw the image
         * at coordinates (0,0).
         * If the player image is ready, draw the image
         * at (player.x, player.y) with (30, 30) width and
         * height values.
         * If the duck image is ready, draw the image with width and
         * height (60,60) at position (duck.x, duck.y)
         *
         * To help you, the function for drawing the image on the canvas are:
         * Position the image on the canvas call: ctx.drawImage(img,x,y);
         * Position the image on the canvas and specify width and height:
         * ctx.drawImage(img,x,y,width,height);
         *
         */

		// Score
        /* TODO:
         * Using JavaScript object properties, assign
         * ctx's fillStyle to "black".
         * ctx's font to "24px Helvetica"
         * ctx's textAlign to "left";
         */
		ctx.textBaseline = "top";
		ctx.fillText("Score: " + player.score, 32, 32);
	}

    /*
     *  ======== EVENT LISTENERS ========
     *    Bind listeners to events here.
     */

	canvas.addEventListener("mousemove", function(e) {
		if (e.x < (canvas.width + 25) && e.x > 0) {
			//TODO: uncomment the following line when you
            // have created your player object
            //player.x = e.x - 25;
		}
		if (e.y < (canvas.height + 25) && e.y > 0) {
			//TODO: uncomment the following line when you
            //have created your player object
            //player.y = e.y - 25;
		}
	}, false);

	canvas.addEventListener("click", function(e) {
		if (e.x > (duck.x) && e.x < (duck.x + 60) &&
			e.y > (duck.y) && e.y < (duck.y + 60)) {
			// HIT!
            // TODO: Increment the player's score and assign the
            // duck's location to a random location within the canvas
		}
	}, false);

    /*
     *   ======== MAIN ========
     * This is the main function of the game.
     */

	var main = function () {
		render();
	}

	//setInterval(main, 1);
}
