(function($) {

	// jQuery Plugins
	$('select').niceSelect();

	$('.payment-slick').slick({
		slidesToShow: 5,
		infinite: false,
		slidesToScroll: 1,
		mobileFirst: true,
		arrows: true,
		prevArrow: '<img class="slick-prev" src="img/tab-arrow-left.png">',
		nextArrow: '<img class="slick-next" src="img/tab-arrow-right.png">',
    responsive: [
			{
				breakpoint: 1040,
				settings: 'unslick'
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 545,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			}
    ]
	});

	$('.notifications-slick').slick({
		slidesToShow: 2,
		infinite: false,
		slidesToScroll: 1,
		mobileFirst: true,
		arrows: true,
		prevArrow: '<img class="slick-prev" src="img/tab-arrow-left.png">',
		nextArrow: '<img class="slick-next" src="img/tab-arrow-right.png">',
    responsive: [
			{
				breakpoint: 575,
				settings: 'unslick'
			}
    ]
	});

	/***** VARIABLES *****/

	const body = document.querySelector('body');

	// Mobile Navigation Variables
	const mobileNav = document.querySelector('.mobile-nav');
	const openMobileNav = document.querySelector('.open-mobile-nav');
	const closeMobileNav = document.querySelector('.close-btn');
	const overlay = document.querySelector('.overlay');

	// Mobile Search Variables
	const mobileSearch = document.querySelector('.mobile-search');
	const openMobileSearch = document.querySelector('.open-mobile-search');
	const closeMobileSearch = document.querySelector('.close-mobile-search');

	// Header Variables
	const header = document.getElementById('main-nav');
	const mobileHeader = document.getElementById('mobile-header');
	let sticky = header.offsetTop;
	let stickyMobile = mobileHeader.offsetTop;

	// Notification Variables
	const notifButton = document.querySelector('.notifications-button');
	const notifContent = document.querySelector('.notifications-content');
	const toolDropdowns = document.querySelectorAll('.user-tool-dropdown');

	const tabLinks = document.querySelectorAll('.listing-tab');
	const notifTabLinks = document.querySelectorAll('.notif-tab');
	let tabContents = "";
	let notifTabContents = "";

	// Alert notification at home page
	const closeAlert = document.getElementById('close-alert-container');

	// Tabs for View Payments page
	const tabMediaQuery = window.matchMedia("(max-width: 1040px)");
	if (tabMediaQuery.matches) {
		let tabParents = document.querySelectorAll('.tab-content');
		// tabContents = Array.from(tabParents);
		tabContents = tabParents;
		console.log(tabContents);
	} else {
		tabContents = document.querySelectorAll('.tab-content');
	}
	
	notifTabContents = document.querySelectorAll('.notif-tab-content');

	/***** FUNCTIONS *****/

	// Stickies the header when the user scrolls past it
	function activateStickyHeader() {

			if (window.pageYOffset > sticky) {
					body.classList.add('header-not-at-top');
			} else {
					body.classList.remove('header-not-at-top');
			}

			if (window.pageYOffset > stickyMobile) {
				body.classList.add('mobile-header-not-at-top');
			} else {
					body.classList.remove('mobile-header-not-at-top');
			}

	}

	/***** EVENT LISTENERS *****/

	// Scrolling through the page
	window.onscroll = function() {

			activateStickyHeader();

	};

	// Opens mobile navigation
	openMobileNav.addEventListener('click', function(e) {

			e.preventDefault();
			if (!mobileNav.classList.contains('slide-in-left')) {
					mobileNav.classList.add('slide-in-left');
					mobileNav.classList.remove('slide-in-right');
					overlay.classList.add('active');
					body.classList.add('no-scroll');
			}

	});

	// Closes mobile navigation
	closeMobileNav.addEventListener('click', function(e) {

			e.preventDefault();
			if (!mobileNav.classList.contains('slide-in-right')) {
					mobileNav.classList.add('slide-in-right');
					mobileNav.classList.remove('slide-in-left');
					overlay.classList.remove('active');
					body.classList.remove('no-scroll');
			}

	});

	// Opens mobile search form
	openMobileSearch.addEventListener('click', function(e) {

			e.preventDefault();
			if (!mobileSearch.classList.contains('slide-down')) {
					mobileSearch.classList.add('slide-down');
					mobileSearch.classList.remove('slide-up');
			}

	});

	// Closes mobile search form
	closeMobileSearch.addEventListener('click', function(e) {

			e.preventDefault();
			if (!mobileSearch.classList.contains('slide-up')) {
					mobileSearch.classList.add('slide-up');
					mobileSearch.classList.remove('slide-down');
			}

	});

	closeAlert.addEventListener('click', function(e) {

			e.preventDefault();
			console.log("Test");
	})

	notifButton.addEventListener('click', function(e) {

			e.preventDefault();

			if (notifContent.classList.contains('shown')) {
					notifContent.classList.add('hidden');
					notifContent.classList.remove('shown');
				
					for (let i = 0; i < toolDropdowns.length; ++i) {
						toolDropdowns[i].classList.remove('hidden');
					}

			} else {
					notifContent.classList.add('shown');
					notifContent.classList.remove('hidden');

					for (let i = 0; i < toolDropdowns.length; ++i) {
							toolDropdowns[i].classList.add('hidden');
					}

			}

	});

	if (tabLinks.length > 0) {

		for (let i = 0; i < tabLinks.length; ++i) {

			// Hide tab contents for loadout
			tabContents[i].classList.add('hidden');
	
			tabLinks[i].addEventListener('click', function(e) {
	
				e.preventDefault();
	
				// Remove active for all LI elements
				for (let j = 0; j < tabLinks.length; ++j) {
					tabLinks[j].parentElement.classList.remove('active');
					tabContents[j].classList.add('hidden');
				}
	
				// Add active to parent LI element of link
				let parentLi = this.parentElement;
				parentLi.classList.add('active');
	
				// Retrieve classname
				for (let j = 0; j < tabLinks.length; ++j) {
					if (tabLinks[j].parentElement.classList.contains('active')) {
						tabContents[j].classList.remove('hidden');
					}
				}
	
	
			});
		}
	
		// All Tab Content as default loaded
		tabContents[0].classList.remove('hidden');
	}

	if (notifTabLinks.length > 0) {

		for (let i = 0; i < notifTabLinks.length; ++i) {

			// Hide tab contents for loadout
			notifTabContents[i].classList.add('hidden');
	
			notifTabLinks[i].addEventListener('click', function(e) {
	
				e.preventDefault();
	
				// Remove active for all LI elements
				for (let j = 0; j < notifTabLinks.length; ++j) {
					notifTabLinks[j].parentElement.classList.remove('active');
					notifTabContents[j].classList.add('hidden');
				}
	
				// Add active to parent LI element of link
				let parentLi = this.parentElement;
				parentLi.classList.add('active');
	
				// Retrieve classname
				for (let j = 0; j < notifTabLinks.length; ++j) {
					if (notifTabLinks[j].parentElement.classList.contains('active')) {
						notifTabContents[j].classList.remove('hidden');
					}
				}
	
	
			});
		}
	
		
		notifTabContents[0].classList.remove('hidden');
	}

		// ######################################
		//            WAYPOINT CODES
		// ######################################
		
		// var waypoint = $('.waypoint').waypoint(function() {

		// 		var animationClass = $(this.element).attr('data-animation');
		// 		var animationDelay = $(this.element).attr('data-delay');

		// 		$(this.element).css('animation-delay', animationDelay);
		// 		$(this.element).addClass(animationClass);

		// }, {

		// 		offset: '75%'

		// });

})(jQuery);
